const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const dotenv = require('dotenv');
const ejs = require('ejs');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const indexRouter = require('./routes/index');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use(indexRouter);

app.listen(port, () => {
  console.log('Application running %s environment on port %d', process.env.NODE_ENV, port);
});