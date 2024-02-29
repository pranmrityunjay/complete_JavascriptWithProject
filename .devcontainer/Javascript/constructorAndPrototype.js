// function demo(){
//     console.log(this)
// }

// demo();

// let newObject={
//     "name":"mrityunjay",
//     "age":20,
//     "fun":function(){
//         console.log(this)

//     }
// }

// newObject.fun();//give object

'use strict';

// function demo(){
//     console.log(this)
// }

// demo();

// let newObject={
//     "name":"mrityunjay",
//     "age":20,
//     "fun":function(){
//         console.log(this)

//     }
// }

// newObject.fun();



// binding the function to object -> not will be in window/global 

// function demo(){
//          console.log(this)
//      }
    
     

// let newObject={
//     "name":"mrityunjay",
//     "age":20,
//     "fun":function(){
//         console.log(this)

//     }
// }

// demo.call(newObject);

function multiplyByfive(num){
    return num*5;
}


// multiplyByfive.power=2;
// console.log(multiplyByfive(5));

// console.log(multiplyByfive.power)
// console.log(multiplyByfive.prototype)


// function createFunction(userName,age,height){
//     this.userName=userName;
//     this.age=age;
//     this.height=height;

// }

// createFunction.prototype.increment=function(){
//     this.score++;
// }

// let test1=createFunction("jay",21,160);

// console.log(test1);


// let newObject={
//     name:"Mrityunjay",
//     city:"Bihar",
//     getInfo:function(){
//         console.log(`${this.name}  from city ${this.city}`);
//     }
// }

// let myObject={
//     name:"jay"
// }

// myObject.__proto__=newObject;

// console.log(myObject.name)
// console.log(myObject.city)

// myObject.getInfo()


Function.prototype.mybind=function(){
    console.log("heloo")
}

function xyz(){
    

}

xyz.mybind();//run in console











