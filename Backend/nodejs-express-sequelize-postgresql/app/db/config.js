module.exports = {
    "development": {
      "dialect": "sqlite",
      "storage": "data.db",
      "logging" : false
    },
    "test": {
      "dialect": "sqlite",
      "storage": ":memory:",
      "logging" : false
    },
    "production": {
      "username": process.env.DB_USERNAME || '',
      "password": process.env.DB_PASSWORD || '',
      "database": process.env.DB_NAME || "recipes",
      "host": process.env.DB_HOST || "127.0.0.1",
      "dialect": "mysql"
    }
  }