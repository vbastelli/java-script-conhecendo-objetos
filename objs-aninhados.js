const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999998', '5511999999997'],
}

estudante.endereço = {
    rua: 'Rua Marechal Pinto',
    numero: '1234',
    complemento: 'apto 49',
}

console.log(estudante.endereço.rua);