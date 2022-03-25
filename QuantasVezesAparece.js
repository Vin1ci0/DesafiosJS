//Neste desafio é dado um parâmetro como frase e outro como letra.
//Teremos uma função que descobre quantas vezes a letra aparece na frase.

function vezesLetraAparece(letra, frase) {
    var resultado = 0

    for (let indexLetra = 0; indexLetra < frase.length; indexLetra++) {
        if (frase[indexLetra] === letra) {
            resultado++
        }        
    }
    return resultado
}

console.log(vezesLetraAparece('o', 'o senhor dos aneis'))