//Creating a function
//a) count of the number of characters in that string
function countCharacters(value) {
    return value.length;
}
console.log(countCharacters(" test 1 "));
//b) a count of the number of characters in that string, excluding spaces
function countOnlyCharacters(value) {
    return value.trim().length;
}
console.log(countOnlyCharacters(" test 1 "));
//c) Combine both function created in 1 and 2
function countCharsAndSpaces(theString, spaces) {
    var num;
    if (spaces) {
        num = theString.length;
    }
    else {
        num = theString.trim().length;
    }
    return num;
}
console.log(countCharsAndSpaces(" test 1 ", true));
console.log(countCharsAndSpaces(" test 1 ", false));
