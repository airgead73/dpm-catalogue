const handleError = (err, req, res, next) => {
  let statusCode = err.status || res.statusCode || 500;
  if(err.name === 'CastError') {
    err.message = 'Item cannot be found.'
    statusCode = 404
  }

  const errorObject = {
    success: false,
    message: err.message,
    status: statusCode,
    name: err.name,
    response: err.response || null,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  }

  if(err.response === 'html') {
    return res
      .status(statusCode)
      .render('pages/error', {
        success: false,
        status: statusCode,
        message: err.message,
        main: 'main--error',
        auth_nav: false
      })
  } else {
    return res
      .status(statusCode)
      .json(errorObject);
  }

  
}

module.exports = handleError;