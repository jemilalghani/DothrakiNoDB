const express=require('express');
const bodyParser=require('body-parser');
const controller = require('./transController');

const app=express();

app.use(bodyParser.json());

app.get('/api/translations', controller.getTranslation);
app.post('/api/pictures', controller.createUrl);
app.put('/api/translations/:id', controller.updateTranslation);
app.delete('/api/translations/:id', controller.deleteTranslation);
app.get('api/pictures', controller.getURL);

const port = 3003;
app.listen(port,()=>{
    console.log(`Hello @Port ${port}`)
})