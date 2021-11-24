const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

const myMiddleware = (req, res, next) => {
    console.log('Hei middle');
    next();
}

app.use(myMiddleware);

app.get('/', (req, res, next) => {
    res.send('Test nodemon')
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
