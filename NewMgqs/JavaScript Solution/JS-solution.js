function solve(str){
    if (str.length < 10) {
            return "Invalid string length";
    }
    var pivot = Math.floor(str.length / 2);
    var str1 = str.substring(0, pivot).split("");
    var str2 = str.substring(pivot).split("");

    for (var i = 0; i < str1.length; i++){
        if (i % 2 !==0) {
            temp = str1[i]
            str1[i] = str2[i - 1];
            str2[i -1] - temp;
        }
    }
        return str2.join("") + str1.join("");
    }

    console.log(solve("AfricanJournal"));
