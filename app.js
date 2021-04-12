const express = require('express');
var index_router = require('./routes/test');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send("Heloo");
})

app.use(express.json());
app.use('/test', index_router);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app;