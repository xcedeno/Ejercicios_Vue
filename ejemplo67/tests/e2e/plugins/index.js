/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')
const { join } = require('path')
const knexFactory = require('knex')

module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))

  on('task', require('@cypress/code-coverage/task'))

  // tasks for resetting database during tests
  on('task', {
    cleanDatabase () {
      const filename = join(__dirname, '..', '..', 'server', '.tmp.db')
      const knex = knexFactory({
        client: 'sqlite3',
        connection: {
          filename
        },
        useNullAsDefault: true
      })
      // if we are trying to truncate a non-existing table
      // that is ok - the server API will create them
      /* const onError = err =>
        err.toString().includes('no such table') ? null : Promise.reject(err) */

      // truncates all tables which removes data left by previous tests
      return Promise.all([
        knex
          .truncate('Users')
          .catch(err =>
            err.toString().includes('no such table')
              ? undefined
              : Promise.reject(err)
          ),
        knex
          .truncate('Articles')
          .catch(err =>
            err.toString().includes('no such table')
              ? undefined
              : Promise.reject(err)
          ),
        knex
          .truncate('ArticleTags')
          .catch(err =>
            err.toString().includes('no such table')
              ? undefined
              : Promise.reject(err)
          ),
        knex
          .truncate('Comments')
          .catch(err =>
            err.toString().includes('no such table')
              ? undefined
              : Promise.reject(err)
          ),
        knex
          .truncate('Followers')
          .catch(err =>
            err.toString().includes('no such table')
              ? undefined
              : Promise.reject(err)
          ),
        knex
          .truncate('ArticleFavorites')
          .catch(err =>
            err.toString().includes('no such table')
              ? undefined
              : Promise.reject(err)
          )
      ])
    },
    registerNewUserIfNeeded () {}
  })

  return Object.assign({}, config, {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js'
  })
}

