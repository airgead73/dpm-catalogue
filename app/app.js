/**
 * external imports
 */
 const express = require('express');
 //const { auth } = require('express-openid-connect');
 const path = require('path');
 const cors = require('cors');
 const cookieParser = require('cookie-parser');
 const helmet = require('helmet');
 const hpp = require('hpp');
 const mongoSanitize = require('express-mongo-sanitize');
 const session = require('express-session');
 const xss = require('xss-clean');
/**
 * internal imports
 */

/**
 * app activation
 */
const app = express();

/**
 * security
 */
 app.use(helmet({ crossOriginEmbedderPolicy: false }));
 //app.use(helmet.contentSecurityPolicy(helmetPolicies));
 app.use(xss());
 app.use(hpp());
 app.use(cors());
 app.use(mongoSanitize());
 //app.use(limiter);

/**
 * middleware
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
//app.use(session(sessionConfig));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * locals
 */

/**
 * routes
 */
app.get('/', (req, res, next) => {
  res.send('app is running')
})

/**
 * error handling
 */

/**
 * export app
 */
module.exports = app;