const count = (str, chr)=>{
return str.toLowerCase().split("").filter((letter)=> letter == chr).length;
}
console.log(count("i live pizza", "i"));

const odd =(...arrgs)=>{
    return arrgs.map((item)=> item %2 == 0 ? ++item: --item);
}
console.log(odd(2,3,4,5,6));

const hackerspeak = (str)=>{
    return str.toLowerCase().split("").map((chr)=>{
        switch(chr){
    case "a":
        return "6";
    case "u":
        return "8";
    case "o":
        return "1";
    default:
    return chr;
        }
    }).join("");

};
console.log(hackerspeak("i like omo java"));

const same = (str)=>{
    let counter =0;
    for (i=0; i< str.length; i++){
        if (str[i] == " "){counter++;}
    }
    return counter;
};
console.log(same(" hi "));

const crazy = (str)=>{
    let newstr = str.toLowerCase();
    if (newstr == ("javascript")){
        return "itscrayz";
    }
    else {
        return "no";
    }
};
console.log(crazy("javascript"));




