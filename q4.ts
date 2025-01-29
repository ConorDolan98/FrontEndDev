//Creating a function

//a
function countCharacters(value: string):number{
    return value.length;
}

console.log(countCharacters(" test 1 "));

//b
function countOnlyCharacters(value:string):number{
    return value.trim().length;
}

console.log(countOnlyCharacters(" test 1 "));

//c
function countCharsAndSpaces(theString:string, spaces:boolean):number{
    let num:number;
    if(spaces){
        num = theString.length;
    }
    else{
        num = theString.trim().length;
    }
    return num;
}

console.log(countCharsAndSpaces(" test 1 ", true));
console.log(countCharsAndSpaces(" test 1 ", false));