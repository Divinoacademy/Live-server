//Installed module
const express = require('express');
const chokidar = require('chokidar');
const Path = require('path');
const cors = require('cors');
const app = express();
const Port = 8000;


//Cors Option for activating cors
const corsOption = {
    origin: "*" 
};

app.use(cors(corsOption));

app.use( express.static('Public'))

/*
app.get('/', (req, res) => {
    res.send('Hello world, goto http://localhost:8000/static/((your file name here))')
    //res.sendFile(Path.join(__dirname, '/public/html/index.html'));
})
*/

const server = app.listen(Port, () => console.log(`Server listening from ${Port} @ http://localhost:${Port}/Public/(filename)`));


chokidar.watch('Public').on('all', (event, path) => {
  console.log(`${event} ${path}`);
  server.close(() => {
    console.log('Server stopped. Restarting...');
    server.listen(Port);
  });
});
