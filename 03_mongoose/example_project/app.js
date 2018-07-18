// import modules
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
// import our module (with a little bit difference from above)
let Book = require('./Book.model');

// now create our app object from express module
let app = express();

// for working with json, we use json parser
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// create a db object and connect it to mongo db
let db = 'mongodb://localhost:27017/node';
mongoose.connect(db, {useNewUrlParser: true});

// to ensure the connection is established
let connection = mongoose.connection;

connection.on('connected', function () {
    console.log('connected to db');
});

connection.on('disconnected', function () {
    console.log('disconnected from db');
});

connection.on('error', function (error) {
    console.log('db connection error ', error);
});

process.on('SIGINT', function () {
    connection.close(function () {
        console.log('db connection closed due to process termination');
        process.exit(0);
    })
});

let port = 8080;

/*
to sure our app are work properly we use this two ways
firs structure for present a msg on web page
and
second for show on console
to ensure that we are connected on proper port
 */
app.get('/', function (req, res) {
    res.send('msg from webpage: app listening on port ' + port);
});

app.listen(port, function () {
    console.log('msg from console: app listening on port ' + port);
});


// now time to use our data base to read something from database
app.get('/books', function (req, res) {
    console.log('getting all books');
    Book.find({}).exec(function (err, books) {
        if (err) {
            res.send('error has occurred');
        } else {
            console.log(books);
            res.json(books);
        }
    })
});

// create another get point with a number (id)
app.get('/books/:id', function (req, res) {
    console.log('getting one book');
    Book.findOne({
        _id: req.params.id
    }).exec(function (err, book) {
        if (err) {
            res.send('error occurred')
        } else {
            console.log(book);
            res.json(book);
        }
    })
});

// how to post a book to our db?
// there are two ways to post, this is the first one:
app.post('/book', function (req, res) {
    // this is a best way to use our schema to define a new item within mongo
    let newBook = new Book;

    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save(function (err, book) {
        if (err) {
            console.log('error saving book');
            res.send('error saving book');
        } else {
            console.log(book);
            res.send(book)
        }
    })
});
// now the second one:
app.post('/book2', function (req, res) {
    // create is a mongo built-in function for create a new doc
    Book.create(req.body, function (err, book) {
        if (err) {
            res.send('error saving book')
        } else {
            console.log(book);
            res.send(book);
        }

    })
});

// update a doc with find and update which is a built-in method in mongoose
app.put('/book/:id', function (req, res) {
    Book.findOneAndUpdate({_id: req.params.id},
        {$set: {title: req.body.title}},
        {upsert: true}, // upsert means if this doc isn't exist, so create it!, and default value of upsert is fasle
        function (err, newBook) {
            if (err) {
                console.log('error occurred');
            } else {
                console.log(newBook);
                // all methods must have send (to post on postman and etc.)
                res.send(newBook);
            }
        })
});

// for delete a doc
app.delete('/book/:id', function (req, res) {
    Book.findOneAndRemove({
            _id: req.params.id
        }, function (err, book) {
            if (err) {
                console.log('error deleting');
                res.send('error deleting')
            } else {
                console.log(book);
                res.send(book)
            }
        }
    )
});


/* to see the documentations about this methods:
for example for findOneAndRemove:
http://mongoosejs.docs/api.html#model_Model.finOneAndRemove/
*/
