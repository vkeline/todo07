const Conta = require ("../service/Conta.js")

describe ('Testando as operações matemáticas na calculadora', ()=> {test("Qual o valor da operação soma?", ()=>{
    expect(Conta.somar(35,35)).toBe(70)
})

test("Qual o valor da operação subtração?", ()=>{
    expect(Conta.subtrair(20,5)).toBe(15)
})

test("Qual o valor da operação multiplicação?", ()=>{
    expect(Conta.multiplicar(10,10)).toBe(100)
})

test("Qual o valor da operação divisão?", ()=>{
    expect(Conta.dividir(20,10)).toBe(2)
})}
)