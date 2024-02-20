let marvelHeros=["IronMan","Thor","Captain America"]
let dcHeros=["batman","superman","wonder Woman"]
// console.log(marvelHeros);

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

// let newHeros=marvelHeros.concat(dcHeros);
// console.log(marvelHeros);
// console.log(newHeros);

let bothheros=[...marvelHeros,...dcHeros]
console.log(bothheros);

console.log(Array.isArray("mrityunjay"))
console.log(Array.isArray([]))

console.log(Array.from("mrityunjay"))
console.log(Array.from({mrityunjay:100}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))


