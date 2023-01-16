const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()  

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true    
}, console.log('Mongo Ok!'))




app.use(cors()); //chamar antes de definir as rotas!!!!!!!



app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server online...'));