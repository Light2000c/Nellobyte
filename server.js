const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/<nellobyte>'));
app.get('/*', function(req,res) {res.send(path.join(__dirnamr+'/dist/<anellobyte>/index.html'));});

app.listen(process.env.PORT || 8080);