const del = require('del');

function clean() {
  return del([
    'app/public/main.css', 
    'app/public/main.css.map',
    'app/public/main.min.css',
    'app/public/main.min.css.map'
  ])
}

module.exports = clean;