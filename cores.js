let cor1 = process.argv[2];
let cor2 = process.argv[3];
let resultado = "\n";

if(cor1 === "azul"){
    if(cor2 === "amarelo"){
        resultado = "verde";
    }else if(cor2 === "vermelho"){
        resultado = "roxo";
    }else{
        resultado = "azul";
    }
}else if(cor1 === "amarelo"){
    if(cor2 === "vermelho"){
        resultado = "laranja";
    }else if(cor2 === "azul"){
        resultado = "verde";
    }else{
        resultado = "amarelo";
    }
}else if(cor1 === "vermelho"){
    if(cor2 === "azul"){
        resultado = "roxo";
    }else if(cor2 === "amarelo"){
        resultado = "laranja";
    }else{
        resultado = "vermelho"
    }
}

console.log(resultado);