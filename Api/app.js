require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const genQrRouter = require('./router/GenQr');
const truemoneyRouter = require('./router/truemoney');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5001;
// const url = process.env.URL || 'http://localhost:3000';

// Set express to accept reverse proxy
app.set('trust proxy', true);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Use the genQrRouter for the /genQr path
app.use('/genQr', genQrRouter);

// Use the truemoneyRouter for the /truemoney path
// app.use('/truemoney', truemoneyRouter);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, host, () => {
  console.log(`Server is running on ${port}`);
});
