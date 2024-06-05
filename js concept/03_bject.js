// singleton  object
// Object.create constructor mentod
// object literals




const Sym = Symbol("Key");

let JsUser ={
    name : "amit",
    rollno : 21,
    [Sym] : "Key1",
    age :12,
    emailId : "gmail.@gmail.com",
    IsLogin : false,
    lastLoginDays: ["monday","Tuesday"]

}

console.log(JsUser.emailId);
console.log(JsUser[Sym])

console.log(typeof JsUser[Sym]);

JsUser.emailId = "user.@gmail,cm";

console.log(JsUser.emailId)

// Object.freeze(JsUser);

JsUser.emailId="email12222@";
console.log(JsUser);


//  functions

JsUser.greeting = function(){
    console.log("Welcom my funtions");
}

JsUser.greeting2 = function(){
    console.log(`Hello I know your age ${this.age}`)
}
console.log(JsUser.greeting2());

console.log(JsUser.greeting());





