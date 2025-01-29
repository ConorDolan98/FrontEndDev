//Creating different datatypes
//boolean
var flag = true;
console.log("The value of flag is: " + flag);
//string
var fname = "Conor";
console.log("My name is " + fname);
//arrays
var myArray;
var theArray = [2, 4, 6];
for (var i = 0; i < theArray.length; i++) {
    console.log("Element: " + theArray[i] + " is in theArray.");
}
/*
theArray.forEach(function(element){
    console.log("Element: "+element)
})
*/
//Arrow array
theArray.forEach(function (element) {
    console.log("Element: " + element);
});
var unKnown = "asdfghj";
console.log("The value of unknown is: " + unKnown);
//number
var distance = 120;
console.log("Athlone is " + distance + " kms away");
//void
function warnUser() {
    console.log("Warning");
}
//Enum
var Animal;
(function (Animal) {
    Animal[Animal["dog"] = 1] = "dog";
    Animal[Animal["cat"] = 2] = "cat";
    Animal[Animal["horse"] = 3] = "horse";
})(Animal || (Animal = {}));
;
console.log(Animal.cat);
