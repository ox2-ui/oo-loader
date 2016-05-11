Package.describe({
  name: 'ox2:loader',
  summary: 'DO NOT USE',
  version: '1.3.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'templating',
    'less'
    ]);
  // 3rd party
  api.use([
    'mquandalle:jade@0.4.9'
    ]);
  api.addFiles('lib/oo-loader.jade', C);
  api.addFiles('lib/oo-loader.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:loader');
  api.addFiles('tests/oo-loader-tests.js');
});
