const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5511999999998', '5511999999997'],
    endereço: [{
        rua: 'Rua Marechal Pinto',
        numero: '1234',
        complemento: 'apto 49',
    } ]
}


estudante.endereço.push({
    rua: 'Rua Sargento',
    numero: '11',
    complemento: '',
});

console.log(estudante.endereço);

const listaEndereçosComComplemento = estudante.endereço.filter((endereço) => endereço.complemento)

console.log(listaEndereçosComComplemento);
