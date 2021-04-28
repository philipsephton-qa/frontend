'use strict';
// Objects - Key/Value pair
// Container of relevant information

let myObject = {}; // shorthand version
let carsLongWay = new Object(); // longhand version, they have the exact same meaning

let savsCar = {
    "name": "Mercury",
    "make": "Mercedes",
    "model": "c220d",
    "year": 2019,
    "colour": "Grey"
}
let kevinsCar = {
    "name": "Shelia",
    "make": "VW",
    "model": "Golf",
    "year": 2012,
    "colour": "Grey"
}
console.log(kevinsCar["colour"]);
console.log(kevinsCar.colour); // These two statements are exactly the same

// adding a property to kevins car
kevinsCar.engineSize = 3.5;
console.log(kevinsCar);

// enhanced for loop to show all the keys followed by the value
for(let attributes in kevinsCar){
    console.log(`Keys: ${attributes}`);
    console.log(`Value: ${kevinsCar[attributes]}`);
}

let garage = [savsCar, kevinsCar, {"name":"Auds", "make":"Audi", "model":"S5", "year":2015, "colour": "Red"}]
console.log(garage);

//Enhanced For loop for make 
for(let car of garage){
    console.log(car["make"]);
}

//Enhanced for loop for all objects in the garage array
for(let i of garage){ // of for arrays, we can use in but it will only look at the index number
    for (let car in i){ // in is for the object, looking in an object
        console.log(`Key: ${car} Value: ${i[car]}`);
    }
}

// JSON JavaScript Object Notation
let myJSONObject = {
    "tesco": [
        {"productName": "7up", "price": 0.99, "quantity":5000},
        {"productName": "flowers", "price": 10.99, "quantity":50},
        {"productName": "pepper", "price": 0.99, "quantity":500}
    ],
    "carpark": [
        {"make":"VW", "name":"Sheila","model":"Golf","year":2012,"colour":"Grey"}
    ]
}

myJSONObject.carpark[1] = { //these two additions are the same
    "make":"Audi",
    "name":"Sheila",
    "model":"A3",
    "year":2010,
    "colour":"Red"
};

myJSONObject.carpark.push({
    "make":"Audi",
    "name":"Sheila",
    "model":"A3",
    "year":2010,
    "colour":"Red"
});

console.log(myJSONObject);
let convertToString = JSON.stringify(myJSONObject); // this converts myJSONObject into a string
console.log(convertToString);

let userData = `{"name":"Sav"}`;
let convertToObject = JSON.parse(userData); // this converts to an object