const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

//db connection
dbConnection();

//cors
app.use(cors());


//request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*const myMiddleware = (req, res, next) => {
    console.log('middle');
    next();
}
*/
//app.use(myMiddleware);

app.get('/', (req, res, next) => {
    res.send('Test nodemon')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

//error handle middleware
app.use(function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send({
        status:500,
        message: err.message,
        body:{}
    });
});
