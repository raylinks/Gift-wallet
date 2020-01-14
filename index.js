// import 'dotenv/config';
// import  { add} from './src/add';
// console.log(add(1,2));



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const  pg = require('pg');

const { sequelize } = require('./src/models/index');
const config =require('./src/config/config')
 //require('./passport');
const app = express();
//middleware
const morgan = require('morgan');
app.use(morgan('combined'));
//app.use(pg());
app.use(bodyParser.json());
app.use(cors());

app.get('status', (req,res)=>{
    res.send({
        message:'hello africa'
    });
    
});


//require('./routes')(app)



    const userRoutes  = require('./src/routes/User');
    const taskRoutes  = require('./src/routes/Task');


    // Routes which should handle requests
    app.use('/user', userRoutes);
    app.use('/task', taskRoutes);





    app.use(function (req, res, next) {
        const error = new Error('error Found');
        error.status = 404;
        next(error);
     });


sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(` Server started at ${config.port}`)

    });