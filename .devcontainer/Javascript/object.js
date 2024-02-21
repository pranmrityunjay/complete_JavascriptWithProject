// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
//}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const myObj=new Object(); //singelton object
// console.log(myObj)

// const myObj={}//non singleton object
// console.log(myObj)

// const myObj={}
// myObj.name="mrityunjay"
// myObj.id=123
// myObj.email="jay@gmail.com"

// console.log(myObj)

// const myObj={
//     name1:"mrityunjay kumar",
//     myObj1:{
//         name12:"1mrityunjay kumar",
//         myObj2:{
//             name123:"123Mrityunjaykumar"

//         }
//     }
// }

// console.log(myObj.myObj1.myObj2)

// const marvelHero={
//     name:"captain america",
//     id:123,
//     power:2002.0
// }

// const dcHero={
//     name:"batman",
//     color:"black",
//     Height:"6.6"
// }

// const marvelAndDcHeros={marvelHero,dcHero}
// console.log(marvelAndDcHeros)


// const marvelAndDcHeros=Object.assign({},marvelHero,dcHero)//{}  it is target and other are source
// console.log(marvelAndDcHeros)   

// const hello={...marvelHero,...dcHero}
// console.log(hello)

// const arr=[
//     one ={
//         name:"mrityunjay kumar",
//         id:123,
//     },

//     two={
//         name2:"jay",
//         pass:123,
//     }
// ]

// console.log(arr[1].pass)





