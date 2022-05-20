const listaDeAlunos = ['João', 'Juliana', 'Ana', 'Caio', ]
const mediasDosAlunos = [10, 7, 9, 6]


let listaDeNotasEAlunos = [listaDeAlunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0] + 'sua média é ' +
            listaDeNotasEAlunos[1][indice]
    } else {
        return 'Aluno não cadastrado'
    }
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("Juliana"))
console.log(exibeNomeNota("Leandro"))


//funções precisam de parâmetro
//o include recebe uma awarray e faz uma busca por tipo de dados
//include -> booleano
// indexOf -> retorna o indice = pq ana é o item da array3
//variaveis guarda valores