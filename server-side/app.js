const http = require('http'); // Importing the http module of Node.js for network access
const fs = require('fs'); // Importing the fs (file server) module of Node.js for file access
const { reset } = require('nodemon');
const port = 3000; // Assigning port number 3000 to the variable 'port'

const server = http.createServer((req, res) => {
	// Assigning both the module.method to the server variable.  Creating the server
	res.writeHead(200, { 'Content-Type': 'text/html' });
	fs.readFile('index.html', function (error, data) {
		if (error) {
			res.writeHead(404); //
			res.write('Error: File Not Found');
		} else {
			res.write(data);
		}
		res.end(); // Ending the response
	});
});

server.listen(port, function (error) {
	if (error) {
		console.log('Something went wrong', error);
	} else {
		console.log('Server is listening on port ' + port);
	}
});
