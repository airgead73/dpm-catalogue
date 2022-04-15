const { series, watch } = require('gulp');
const scss = require('./scss');
const clean = require('./clean');

function watchTasks() {
  watch('assets/scss/**/*.scss', { ignoreInitial: false, delay: 500 },
  series(
    clean,
    scss
  ));
}

module.exports = watchTasks;