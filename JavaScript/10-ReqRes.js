`use strict`;

let div = document.querySelector("#people");
const NAME = document.querySelector(`#name`)
const JOB = document.querySelector(`#job`);
const ALERT = document.querySelector(`#alert`);

axios.get("https://reqres.in/api/users")
.then((response)=> {
    console.log(response.data.data);
    for(let data of response.data.data){ // Loops though the array
        printToScreen(data); // calls the function printToScreen with data as the input
    }
})
.catch((err)=> {
    console.error(err);
});

const printToScreen = (information) =>{
    const p = document.createElement("p"); // Creates a paragraph tag
    const text = document.createTextNode(`First Name: ${information.first_name}, Last Name: ${information.last_name}, Email ${information.email}`); // Text: creates a string
    p.appendChild(text); // Appends text to a paragraph
    div.appendChild(p); // Appends the paragraph to the div previously selected
}

const createUser = () => {
    const JOB_VALUE = NAME.value;
    const JOB_VALUE = JOB.value;
    let object = { // Create the object
        name : NAME_VALUE,
        job : JOB_VALUE
    }
    axios.post("https://reqres.in/api/users", object)
    .then( (resp) => {
        console.log(resp)
        ALERT.setAttribute("class", "alert, alert-success");
        ALERT.innerHTML = "User has been created";
        setTimeout( () => {
            ALERT.removeAttribute("class");
            ALERT.innerHTML = ""
        },3000);
    })
    .catch((err) => console.error(err));
}

const PARAMS = new URLSearchParams(window.location.search);
for( const val of PARAMS){
    console.log(val);
}
const id = PARAMS.get("id");
alert(`The value in the search bar is: ${id}`);