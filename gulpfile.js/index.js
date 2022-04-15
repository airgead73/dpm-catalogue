const { series, watch } = require('gulp');
const { scss, clean } = require('./development');

function watchTasks() {
  watch('assets/scss/**/*.scss', { ignoreInitial: false, delay: 500 },
  series(
    clean,
    scss
  ));
}

exports.dev = watchTasks;