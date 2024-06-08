// console.log("A");
// console.log("0");
// console.log("u");
// console.log("w");
// console.log("e");


// function sayMyname(){
//     console.log("A");
// console.log("0");
// console.log("u");
// console.log("w");
// console.log("e");

// }
// sayMyname();

// function addtwoNUm(num1,num2){
//     num1 + num2;
//     console.log(num1+num2);
// }
// addtwoNUm(3,2)

function addNum12(num1,num2){
    let resukt = num1+num2;

    return resukt;
}

const result12 = addNum12(3,2);

console.log(result12);



function Logidn(username="HX"){
    if (username===undefined){
        console.log("Please enter username")
        return
    }
    return `${username} just logdin in`
}


console.log(Logidn());


// rest operator
function calclatecartrce(...num121){
    return num121
}

console.log(calclatecartrce(7,89));


const usr1211= {
username :"xos",
price :88
}

function userList(Anyobject){
    console.log(`ALX am not ${Anyobject.username}, pass ${Anyobject.price}`)
}

userList(usr1211);

userList({


    username:"alx",
    price:9000
})

