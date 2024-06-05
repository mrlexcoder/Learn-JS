// const tinderuser = new Object();

const tinderuser ={};
tinderuser.id = "abc123";
tinderuser.name = "sammy";
tinderuser.rollnum = 22;

// console.log(tinderuser)

const regularUser = {
    email : "sum@gmailgoogle.com",
    fullName : "ALX ZOZ",
    RollNo: {
        fullRollno : {
            rollnum1 : 122,
        }
    }
}

console.log(regularUser.RollNo);

// console.log


const Obj1 = {1:"a",2: "B"};
const Obj2 = {3:"c", 4: "d"};

const Joint = Object.assign({},Obj1,Obj2);

console.log(Joint)

const OBJspead = {...Obj1,...Obj2};
console.log(OBJspead)



const USRs = [
    {
        id : 1,
        email : "email.com",
    },
    {
        id : 1,
        email : "email.com",
    },
    {
        id : 1,
        email : "email.com",
    }
]

console.log(USRs);
USRs[1].email;
console.log(USRs[1].email)


console.log(tinderuser);


console.log(Object.keys(
    tinderuser
))

console.log(Object.keys(tinderuser))
console.log``

// value entries



