const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPhyton = [7, 3.5, 8, 9.5]

function mediadaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
        aatual + acum, 0)
    return somaDasNotas / notasDaSala.length
}

console.log('Media da sala de JavaScript $ {mediasala (salaJS)}')
console.log('Media da sala de Java $ {mediasala (salaJava)}')
console.log('Media da sala de Phyton $ {mediasala (salaPhyton)}')