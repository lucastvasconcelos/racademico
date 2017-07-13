class SecretarioDAO{
    constructor(_connection){
        this._connection = _connection
    }

    procurar_secretario(requisicao,callback){
        let query = "select * from secretario where id_secretario="+requisicao.matricula
        console.log(query)
        this._connection.query(query,callback)
    }
}

module.exports = (app) => {
    return SecretarioDAO
}