document.getElementById('resultado').style.display="none";

/*************************************************************************/
const btnsuma = document.getElementById('suma')
const btnresta = document.getElementById('resta')
const btnmulti = document.getElementById('multiplicacion')
const btndivicion = document.getElementById('divicion')
const divresultado = document.getElementById('resultado')

/************************************************************************/
btnsuma.addEventListener('click', () => handlerOperation('+'))
btnresta.addEventListener('click', () => handlerOperation('-'))
btnmulti.addEventListener('click', () => handlerOperation('*'))
btndivicion.addEventListener('click', () => handlerOperation('/'))

/************************************************************************/

const handlerInputToOperation = (text) => {
    const n1 = prompt(text)
    const number = parseFloat(n1)
    return n1 && number ? number : handlerInputToOperation(text)
}

/*************************************************************************/
const divicion = () => {
    const { n1, n2 } = getNumbers()
    return { n1, n2, mod: n1 % n2, result: n1 / n2, type: { name: 'division', operation: 'entre' } }
}

const multiplicacion = () => {
    const { n1, n2 } = getNumbers()
    return { n1, n2, result: n1 * n2, type: { name: 'multiplicación', operation: 'por'} }
}

const suma = () => {
    const { n1, n2 } = getNumbers()
    return { n1, n2, result: n1 + n2, type: { name: 'suma', operation: 'mas'} }
}

const resta = () => {
    const { n1, n2 } = getNumbers()
    return { n1, n2, result: n1 - n2, type: { name: 'resta', operation: 'menos'} }
}

const getNumbers = () => {
    const n1 = handlerInputToOperation('Ingresa el primer número')
    const n2 = handlerInputToOperation('Ingresa el segundo número')

    return { n1, n2 }
}
/******************************************************************************** */

const handlerOperation = (type) => {
    let data = {}
    
    switch (type) {
        case '+':
            data = suma()
        break
        case '-':
            data = resta()
        break
        case '*':
            data = multiplicacion()
        break
        default:
            data = divicion()
        break
    }
    divresultado.innerHTML = `
    <i>La ${data.type.name} de ${data.n1} ${data.type.operation} ${data.n2} es: ${data.result}</i>
    ${(data.mod != undefined) ? `<p style="margin: 0; margin-top: 2rem;">El sobrante es: ${data.mod}</p>` : ''}
    `
}

function mostrarDiv() {
    document.getElementById('resultado').style.display='block';
}