const http = require('http');
const app = require('./app');

const server = http.createServer(app);

//server sur le port 5000
server.listen(5000);