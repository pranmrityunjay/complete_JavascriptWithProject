// const coding=["js","rugby","java","python","cpp"]

// coding.forEach((val)=>{
//     console.log(val)
// })

// function f(value){
//     console.log(value)
// }

// coding.forEach(f)


// coding.forEach((value,index,arr)=>{
//     console.log(value,index,arr)

// })


// const arr=[
//     {
//         languageName:"javascript",
//         languageFile:"js"
//     },
//     {
//         languageName:"python",
//         languageFile:"py"
//     },
//     {
//         languageName:"CSS",
//         languageFile:"css"
//     }


// ]


// // arr.forEach((value)=>{
// //     console.log(value.languageFile)
// // })

// // let x=arr.forEach((value)=>{
// //     console.log(value.languageFile)
// // })

// // console.log(x)


// const myNumber=[1,23,11,233,32,34,21,78,90]

// let X=myNumber.filter((ans)=> {
//     ans>30
// })

// console.log(X)


// let Y=myNumber.filter((ans)=> {
//     return ans>30
// })

// console.log(Y)


// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))

// let arr=[1,2,3,4,5,6,7,8]

// let x=arr.map((value)=>value+10).map((value)=>value*10).filter((value)=>value>30)
// console.log(x)

let num=[1,2,3]

let x=num.reduce(function(acc,item){
    return acc+item;
},0)

console.log(x)



let price=[
    {
        name:"pyhton",
        price:2000
    },
    {
        name:"java",
        price:100
    },
    {
    name:"js",
    price:400
    }
]

let total=price.reduce((acc,item)=>acc+item.price,0)
console.log(total)




