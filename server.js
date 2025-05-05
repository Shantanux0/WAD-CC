// Create HTTP server using Node JS




// Import the built-in http module
const http = require('http');

// Define the server port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello from Node.js HTTP server!');
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



//TO Run The code 
//node server.js

