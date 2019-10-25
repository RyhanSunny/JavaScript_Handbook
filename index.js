// //alert("open the console bro");
// console.log("Welcome to the muh effin Console");

//Object x = {/properties are key: value pairs/}
let person = {
    name: prompt("Whats yer name eh?"),
    age: prompt("how ol' are you eh?")
}

// dot notation
person.name = "johnyboi";
alert("ok i call you " + person.name + " eh");

//bracket notation
person['age'] = 900;
alert("an you are now "+person['age']+ " years ol' eh");

// ARRAYS x = [a, "b", 0, {k}]
let array = ['Red', 900, person.name]
alert(array + array.length);

// Array is dynamic
//Array is a 'typeof' Object (has dot notation)

////////////////////

// FUNCTIONS function x( /parameter/ ){ /operation/ }
// performing a task 
function greet(name){
    alert("Hello "+ name);
}

greet(prompt("what is your name?"));

// the difference between a 'parameter' and an 'argument':
/* a PARAMETER is a variable at the time of function declaration
where an ARGUMENT is the actual VALUE supplied for that parameter*/

function id(name, id){ // name and id are params
    alert("hello "+ name + " your id is "+ id);
}

id("john", "202020"); // john and 202020 are arguments

///////////////////

// functions that performs a task don't need to return anything
// functions that 'calculate' something (maybe a value) needs to return the result

// calculating a value
function square(number){
    let result = number*number;
    return result;
}
alert(square(7)); 

