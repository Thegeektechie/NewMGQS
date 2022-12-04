function solve(str){
    if (str.length < 10) {
            return "Invalid string length";
    }
    var pivot = Math.floor(str.length / 2);
    var str1 = str.substring(0, pivot).split("");
    var str2 = str.substring(pivot).split("");
        
    }