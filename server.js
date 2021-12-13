const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000;
app.use(cors());

if( process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, () => {
    console.log('server is running on port:' + PORT);
});