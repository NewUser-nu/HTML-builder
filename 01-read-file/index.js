const fs = require('fs');
const trail = require('path');
const { stdout } = process;

const pathToFile = trail.join(__dirname, 'text.txt');

const newReadStream = fs.createReadStream(pathToFile);
newReadStream.on('data', chunk => stdout.write(chunk));