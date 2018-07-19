// in the 01_simplest_webServer we didn't used any file, so in this section we read a html file and show it on the web page
const http = require('http');
const fs = require('fs'); // for read file

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) =>{
   if (err){
       throw err;
   }
   // else
   const server = http.createServer((req, res)=> {
       res.statusCode = 200;
       res.setHeader('Content-type', 'text/html');   // be aware of put text/html for translate html to the text in web page
       res.write(html);
       res.end();
   });

   server.listen(port, hostname, () => {
       console.log("Server started on port "+ port);
   });

});