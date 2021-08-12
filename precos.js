precos = process.argv.slice(2);
total = 0;
maiorQueDuzentos = false;

for(let preco of precos){
    total += parseInt(preco);
    if(preco > 200){
        maiorQueDuzentos = true;
    }
}

if(total >= 1000){
    if(maiorQueDuzentos){
        console.log("PREMIUM");
    }else{
        console.log("VIP");
    }    
}else{
    console.log("NORMAL")
}