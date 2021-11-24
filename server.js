const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

const myMiddleware = (req, res, next) => {
    console.log('middle');
    next();
}

//app.use(myMiddleware);

app.get('/', myMiddleware, (req, res, next) => {
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
