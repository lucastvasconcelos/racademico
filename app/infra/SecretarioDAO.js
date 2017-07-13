class SecretarioDAO {
    constructor(_connection) {
        this._connection = _connection
    }

    procurar_secretario(requisicao, callback) {
        let query = "select * from secretario where id_secretario=" + requisicao.matricula
        console.log(query)
        this._connection.query(query, callback)
    }

    matricular(requisicao, callback) {
        this._connection.query("insert into aluno set ?", requisicao, callback)
    }

    matricularCurso(requisicao, callback) {
        let query = "insert into curso values (1,1,1,1,2,1,1,1,1)"
        this._connection.query(query,callback)
    }
}

module.exports = (app) => {
    return SecretarioDAO
}