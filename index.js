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

// Tell me more
// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// print all the user input adding the greeting part and more text turning that input into a readable text.
// If one of his activities was dance or party add "you are cool" to your outputted text.
// Examples :
// userData("Zain", 22, "Kurfürstendamm", "dance", "party");
// userData("Olga", 40, "potsdamer platz", "party");
// userData("Nancy", 33, "viktoria luise platz", "swimming");
const tellmemore = (username,age,add,...activities)=>{
    let result = `your name is ${username} your age is ${age} you live in ${add} 
    you make fun with ${activities.join(",")}`;

    if (activities == ("dance") || activities == ("party") ){
        result +=  "you are nice";
    } 
    return result;
};
console.log(tellmemore("Zain", 22, "Kurfürstendamm", "party"));


