const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send('ATC calçados')
});

app.listen(3000, ()=>{
    console.log('ligadoparcero');
});
