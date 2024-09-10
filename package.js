// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'alessandrofeitoza:aurora-user-interface', // https://atmospherejs.com/twbs/bootstrap
  summary: 'Based on the most popular front-end framework: Bootstrap.',
  version: '5.3.11',
  git: 'https://github.com/secultce/aurora-ui.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/accordion.css',
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js',
    'dist/css/card.css',
    'dist/css/color.css',
    'dist/css/custom.css',
    'dist/css/editor.css',
    'dist/css/faq.css',
    'dist/css/forms.css',
    'dist/js/form-stepper.js',
    'dist/css/layout.css',
    'dist/css/navigation.css',
    'dist/css/side-filters.css',
    'dist/js/side-filters.js',
    'dist/css/timeline.css',
  ], 'client')
})
