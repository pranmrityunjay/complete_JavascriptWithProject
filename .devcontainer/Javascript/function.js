// function addTwoNumber(fisrt,second){
//     console.log("both Number added",second)
//     return fisrt+second

// }

// let ans=addTwoNumber(-20,-3)
// console.log(ans)

// function add(a){
//     if(a==undefined)
//     return "nope"
//     return a;

// }

// console.log(add())

// function isLoggedIn(username){
//     if(username!=undefined)
//     return `${username} have loged in`
// }

// console.log(isLoggedIn("pranmrityunjay"))

// function isLoggedIn(username="jay"){
//     if(username!=undefined)
//     return `${username} have loged in`
// }

// console.log(isLoggedIn())

//




//passing object

const myObj={
    name:"mrityunjay",
    mis:111,
    email:"mrityunjay@gmail.com"
}

function passingAnObject(A){
    console.log(A.name)
    console.log(A.email)
}


passingAnObject(myObj)

// function passingAnObject(A){
//     console.log(A.name)
//     console.log(A.email)
// }


// passingAnObject({name:"mrityunjay",email:"jay@gmail.com"})


function passingAnArray(arr){
    console.log(arr[0],arr[2])
}

passingAnArray([0,2,3,4,4])
