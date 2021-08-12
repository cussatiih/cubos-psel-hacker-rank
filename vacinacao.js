obj = {
    "idade": process.argv[2],
    "temComorbidade": false,
    "jaTomouVacina": false
};

obj.temComorbidade = process.argv[3];
obj.jaTomouVacina = process.argv[4];

if(obj.jaTomouVacina){
    console.log("JA TOMOU VACINA");
}else if(obj.idade >= 60){
    console.log("APTA POR IDADE");
}else if(obj.temComorbidade){
    console.log("APTA POR COMORBIDADE");
}else{
    console.log("INAPTA");
}