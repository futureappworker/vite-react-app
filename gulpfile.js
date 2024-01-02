import gulp from 'gulp';
import 'dotenv/config';

import i18nScanner from './tasks/i18nScanner/index.js';

gulp.task('i18n-scanner', (cb) => {
  i18nScanner(() => {
    cb();
  });
});

gulp.task('watch', (cb) => {
  gulp.watch('src/**/translation/**.json', gulp.series('i18n-scanner'));
  cb();
});

gulp.task('default', gulp.series('i18n-scanner', 'watch'));
