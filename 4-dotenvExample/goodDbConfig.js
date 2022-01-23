/**
 * this file shows how to better manage your sensitive information
 */
const dotenv = require('dotenv')
dotenv.config()
// export your database configuration, but use a fallback incase the .env variables don't exist
// example: envVariable ?? fallbackValue
module.exports = {
    host: process.env.DB_HOST ?? 'locahost', // assign the .env variable first, if the variable is not set then use the value after the `??`
    port: process.env.DB_PORT ?? 3360,
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? "",
    databaseName: process.env.DB_NAME ?? "mydb"
}