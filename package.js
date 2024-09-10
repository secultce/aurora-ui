// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'alessandrofeitoza:aurora-user-interface', // https://atmospherejs.com/twbs/bootstrap
  summary: 'Based on the most popular front-end framework: Bootstrap.',
  version: '5.3.10',
  git: 'https://github.com/secultce/aurora-ui.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js',
    'dist/css/custom.css'
  ], 'client')
})
