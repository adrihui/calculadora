const {sumar,restar,multiplicar,dividir} = require('./data/calculadora')

switch (process.arg[2]) {
    case "sumar":
        sumar(process.argv[3],process.argv[4])
    break;
    case "restar":
        restar(process.argv[3],process.argv[4])
        break;
    default:
        break;
}