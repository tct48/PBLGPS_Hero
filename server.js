const express = require("express");
const app = express();

app.use(express.static('./dist/PBLGPSHERO/'));

app.get('/*', function(req, res){
    res.sendFile('index.html', {root : 'dist/PBLGPSHERO/'});
})

app.listen(process.env.PORT || 8080);

module.exports = app;