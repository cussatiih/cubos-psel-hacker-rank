numero = process.argv[2];

if(numero <= 20){
    console.log("VOCE CONSEGUE, MANINHO");
}else{
    for(let i = 21; i <= numero; i++){
        console.log(i);
    }
}