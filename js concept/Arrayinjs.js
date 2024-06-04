const myArray = [1,2,3,4,5,6,7];

const mySecArray =["alx",1,"zox",2,3,4,"Buz"];

const Stdname = ["QWE","MAX","sugga"]

const myArraynew = new Array(1,2,3,4);

console.log(myArray[3]);


//  what is shllow copy heap refrence do not change and deep copy sort  change

// Array Method

myArray.push(8);

myArray.pop()    // remove last value from array

myArray.unshift(90);          // add starting shiftif to starting time most all value sift
myArray.shift();  // remove
console.log(myArray)


console.log(myArray.includes(3));
console.log(myArray.indexOf(4));

const newArradd = myArray.join();
console.log(newArradd)


//  slice or splice

console.log(" A ",myArray);



const myna1 = myArray.slice(1,3);


console.log(" AB", myArray);
console.log(myna1);

//  splice


const Array2spl = myArray.splice(1,3);
console.log(" ABc", myArray);


console.log(Array2spl);


//  array second lecture


let marvels = ["alx","zox", "Heo" ];
let max = [1,2,3,4];

// marvels.concat(max);
// marvels.push(max);





// console.log(marvels)

let joxaRR = marvels.concat(max)
console.log(joxaRR)


//  spread operator 


const All_new = [...marvels, ...max];
console.log(All_new)


// ************
const  allunder= [1,2,3,4,5,6,[23.33],[3,3,3] ,[22,221,[11,11]]];

const real_anitherArr = allunder.flat(Infinity);

console.log(real_anitherArr)


console.log(Array.isArray("AMXMRG"))
console.log(Array.from(" "));
// console.log(Array.from((name: "AMXMRG")))

let s1 = 1;
let s2 = 2;

console.log(Array.of(s1,s2))
























































