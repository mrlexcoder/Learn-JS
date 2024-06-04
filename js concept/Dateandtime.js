// let myDate = new Date()

// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


// // let myCreateddate = new Date(2023,0,23);
// let myCreateddate = new Date(2023,0,23,5,5);


// console.log(myCreateddate.toDateString());
// console.log(myCreateddate.toLocaleTimeString());


// let mytimeStamp = Date.now();

// // console.log(myCreateddate.getTime())
// console.log(mytimeStamp)
// console.log(Math.floor(Date.now/1000))

// +++++++++++++++++++++++++
let newDate = new Date();

console.log(newDate.getHours());


newDate.toLocaleDateString('default', {
    weekday: "long",
    hour:"2-digit",
})

console.log(newDate)