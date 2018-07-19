/*
work with file system on computer
common use for the file system module:
    read files
    create files
    update files
    delete files
    rename files
 */


// first import the module fs
const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
    fs.readFile('./demo.html', function (err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
// now go to localhost:8080 and see the html file on web page !!


// create new file. This method is also for updating existing file
// The fs.writeFile() method replaces the specified file and content:
fs.appendFile('newFile.txt', 'Hello content! (from fs)', function (err) {
    if (err) {
        throw err;
    }
    console.log('Saved !')
});


/*
 open file, method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
  */
fs.open('newFile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log("Open file and saved it!")
});

// replace the content if it exist, if not, a new file with new content will be created
fs.writeFile('newFile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('writeFile method, saved!')
});


// to delete a file
fs.unlink('newFile3.txt', function (err) {
    if (err) {
        throw err;
    }
    console.log('File deleted!')

});



// to rename files
fs.rename('newFile2.txt', 'newFile20.txt', function (err) {
    if (err){
        throw err;
    }
    console.log("File Renamed!")
});

