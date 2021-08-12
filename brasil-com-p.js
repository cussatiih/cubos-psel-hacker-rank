obj = {
    "primeiraLetra": process.argv[2],
    "segundaLetra": process.argv[3],
    "palavras": process.argv.slice(4)
}

console.log(obj.primeiraLetra);
console.log(obj.segundaLetra);
console.log(obj.palavras);