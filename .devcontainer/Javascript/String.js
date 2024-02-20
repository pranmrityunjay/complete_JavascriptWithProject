let name1="mrityunjay-Kumar-ok";
let name2=50;
console.log(name1+name2);

console.log(`my name is ${name1} and my count is ${name2}`);

let stringObject=new String("hello World");
console.log(stringObject);
console.log(typeof(stringObject));

mySubstring=name1.substring(0,13);
console.log(mySubstring);

mySlice=name1.slice(-10,10);
console.log(mySlice);

//trim operation for removing space

let myName="        Mrityunjay   Kumar   ";
console.log(myName.trim());

//replace

let myReplace="mrityunjay%*@^gmail.com";
console.log(myReplace.replace("%*@^","@"));
console.log(name1.split('-'));


