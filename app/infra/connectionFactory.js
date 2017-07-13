const mysql = require("mysql")
criarConexaoDB = () => {
    if (!process.env.NODE_ENV){
        return mysql.createConnection({
            host:"localhost",
            user:'root',
            password:'',
            database:'RAcademico'
        })
    }
}

module.exports = () => {
    return criarConexaoDB
}