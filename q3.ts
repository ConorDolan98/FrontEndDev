//Creating different datatypes


//boolean
let flag: boolean = true;
console.log("The value of flag is: " + flag);


//string
let fname: string = "Conor";
console.log("My name is "+ fname);


//arrays
let myArray: number[];
let theArray: Array<number> = [2,4,6];

for(let i=0; i<theArray.length; i ++){
    console.log("Element: " + theArray[i]+ " is in theArray.");
}

/*
theArray.forEach(function(element){
    console.log("Element: "+element)
})
*/

//Arrow array
theArray.forEach((element)=>{
    console.log("Element: "+element)
})

let unKnown:any = "asdfghj";
console.log("The value of unknown is: "+unKnown);


//number
let distance: number = 120;
console.log("Athlone is "+distance+" kms away");


//void
function warnUser():void{
    console.log("Warning");
}


//Enum
enum Animal{dog = 1, cat = 2, horse = 3};
console.log(Animal.cat);