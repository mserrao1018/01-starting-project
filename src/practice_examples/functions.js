function sayBarca(player){
    console.log(`Hello ${player}`);
}
sayBarca('Lamine'); //print Hello Lamine

function add(x,y){
    return x + y;
}

console.log(add(2, 3));
console.log(add("Visca ", "Barca"));

//Functions as paramaters

function sayHi(myFunc){
    console.log('Hi!');
    myFunc;
}

function bye(){
    console.log("Bye");
}

sayHi(bye);
sayHi(function(){ //anonymous function cant be used again
    console.log("lololol");
})

//Functions as expression
let age = function(x, y){
    return x + y;
}
age(19, 1);

//Arrow functions
let addArrow = (x, y) =>{
    return x + y;
}
let addArrowShort = (x,y)=>x+y; //lambda, automatically returns

addArrow(1, 2);