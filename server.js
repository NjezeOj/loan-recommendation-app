const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());

if( process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.use(routes);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log('server is running on port:' + PORT);
});