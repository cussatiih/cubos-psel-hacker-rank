obj = {
    "primeiraLetra": process.argv[2],
    "segundaLetra": process.argv[3],
    "palavras": process.argv.slice(4)
}

qtdPalavras = 0;

for(let palavra of obj.palavras){
    if(palavra[0] === obj.primeiraLetra && palavra[1] === obj.segundaLetra){
        console.log(palavra);
        qtdPalavras++;
    }
}

if(qtdPalavras === 0){
    console.log("NENHUMA");
}