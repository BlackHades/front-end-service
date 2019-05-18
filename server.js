//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8090;
const app = express();

const multer = require('multer');
const cors = require('cors');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({
    storage
});

app.use(cors());
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file)
        res.json({
            imageUrl: `images/uploads/${req.file.filename}`
        });
    else
        res.status("409").json("No Files to Upload.");
});

console.log('api runnging on port: ' + port);


app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);