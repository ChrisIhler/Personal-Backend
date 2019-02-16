const path = require('path')

module.exports = {

  development: {
    client: 'postgresql',
    /////////////////////////////// UPDATE THE CUSTOME CONNECTION: PATH FOR KNEX ihelp_dev///// 
    connection: {
      host : process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  test: {
    client: 'postgresql',
    /////////////////////////////// UPDATE THE CUSTOME CONNECTION: PATH FOR KNEX ihelp_dev///// 
    connection: 'postgresql://localhost/ihelp_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
};
