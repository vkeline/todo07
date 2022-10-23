const Conta = require ("../service/Conta.js")

class OperacoesControllers {
    static router(app){
        app.get("/somar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Conta.somar(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
        app.get("/subtrair",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Conta.subtrair(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
        app.get("/multiplicar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Conta.multiplicar(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
        app.get("/dividir",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = Conta.dividir(...numeros)
            res.send(`<h1>${response}</h1>`)
        })
    }
}

module.exports = OperacoesControllers