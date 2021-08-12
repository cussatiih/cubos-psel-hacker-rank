let sizeUs = "\n";
tamanhoBr = process.argv[2];

switch(tamanhoBr){
    case "PP":
        sizeUs = "XS";
        break;
    case "P":
        sizeUs = "S";
        break;
    case "M":
        sizeUs = "M";
        break;
    case "G":
        sizeUs = "L";
        break;
    case "GG":
        sizeUs = "XL";
        break;
}

console.log(sizeUs);