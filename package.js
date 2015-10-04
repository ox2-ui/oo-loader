Package.describe({
  name: 'ox2:loader',
  summary: 'TESTING_DO_NOT_USE Loaders and spinners',
  version: '1.1.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3','mquandalle:jade@0.4.1'
    ]);
  api.addFiles('lib/oo-loader.jade', C);
  api.addFiles('lib/oo-loader.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:loader');
  api.addFiles('tests/oo-loader-tests.js');
});
