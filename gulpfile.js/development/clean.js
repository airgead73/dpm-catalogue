const del = require('del');

function clean() {
  return del(['app/public/main.css', 'app/public/main.css.map'])
}

module.exports = clean;