const Arraytyes = ["ALX","ZZ","mks"];

let myObh = {
  name: "alx",
  age: 22,
  CLass : "null",
}
console.log(myObh);
console.log(Arraytyes);

let a = false;


const MyFuntion = function(){
  console.log("SSK");
  console.log(typeof MyFuntion);
}

MyFuntion();

const mySecfuntion = function(){
  
  console.log(typeof MyFuntion);
  console.log(myObh);
}
mySecfuntion();

// alx Heap and sort 

// datatyoe two types first primitive tyoe and another one non permitive type 
// non permitive type array object and functions
// premitive datatyoe are array objects 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory heap memory and stact memory
// stack memory  (primitive), Heap (non primitive)

//  stack make copy
// heap make refrence the memory.

let Heymrlex = "No 1 coder";

let anither = Heymrlex;


anither = "another value"; 

console.log(Heymrlex);
console.log(anither);


let usrOne = {
  email: "email.0@gmail.com",
  upi: "ZOZ.UPi",
}

let usrTwo = usrOne;

usrTwo.email= "emailalx.com";

console.log(usrTwo);
console.log(usrOne);
// heap sort practice

let frstsrt = "alxamt";

let srsrt = frstsrt;

srsrt = "bxxx";

console.log(frstsrt);
console.log(srsrt);

let objhea ={
  email:"zx@gmail",
  Upi :"alxUPI"
}


let secontheap= objhea;
secontheap.email="alx.gmail.main";

console.log(objhea);
console.log(secontheap);


// coonceniate sentex

const name11 = "alx";
const rollNo1 = 22;

console.log(name11+rollNo1);

console.log(`My name is ${name11}`);

// learn strings
 const gameName = new String('Mrlex-coder');
console.log(gameName[5]);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('e','d'))

const newSTring = gameName.substring(0,4);
console.log(newSTring)


const mynewvar = "alxdoxz";
const anpotherStringss = mynewvar.slice(-2,1);

console.log(anpotherStringss);

const newStringone = "  alx  hitesh oz";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://himachalgovt.com/hitest%200chaudhary";

url.replace('%200', '-');

console.log(url.replace('%200', '-'));

// check nder url
console.log(url.includes('com'));



//  const slit method array 
const splitONHA = "zox - uu 2"
console.log(splitONHA.split(" "));












































