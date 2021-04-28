`use strict`;
let strictA = true;
let strictB = 1;
console.log(strictA == strictB);//True
console.log(strictA === strictB);//False
console.log(strictA != strictB);//False
console.log(strictA !== strictB);//True

let age = 19;
console.log(18 < age < 65);
if(age < 18){
    console.log("Age is less than 18");
} else if(age < 65){
    console.log("Age is between 18 and 65");
} else{
    console.log("Age is over 65");
}

let checker = (age <= 50) ? "50 or Below":"Over 50";
console.log(checker);