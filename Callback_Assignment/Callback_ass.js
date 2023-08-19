

// Ques 1 =>  Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

// start

const orginalArr = [ 1,2,3,4,5,6]

// function doubleArr ( arr , callback){
// const changeArr = arr.map((num) =>{
//     return callback(num);
// })
// return changeArr
// }


// function callback(num){
//     return num*2
// }

// let result = doubleArr( orginalArr , callback )
// console.log(result);




// Ques2 => 
// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.


// start

// function manipulateString (inputString , callback){
//     const stringtoUpperCase = inputString.toUpperCase()
//     return callback(stringtoUpperCase)
// }


// function callback(stringtoUpperCase){
//     console.log(`The Manipulated String is : ${stringtoUpperCase}`);
// }

// console.log(manipulateString('raju sharma' , callback));





// Ques3 => Write a function that takes in an array of integers and a callback function, and returns a new array where each
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.
// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."
// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.


// start


let person = { 
    firstName : 'Raju',
    lastName : 'Sharma', 
    age : 20

}

// This is a function joint the fullname and lastname  and calculate the age of the day .

// function ageInDays ( orginalObject , callback){

//     const  firstName  = `${orginalObject.firstName} ${orginalObject.lastName} `;
//     const ageInDays = orginalObject.age * 365

//      return callback(firstName ,ageInDays)

// }

// function callback (firstName , ageInDays){
//     console.log(`The full name of the person is : ${firstName}  and the ageInDays of the person is ${ageInDays}`);
// }

// let result = ageInDays(person , callback)
// console.log(result);






// Ques4 => Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.


// start
let books = [
    {

    tittle: 'the dog love',
    author: 'Marsutake' ,
    publishYear:1965
} ,

{

    tittle: 'the lover to die ',
    author: 'jhon catt' ,
    publishYear:1785
} ,
{

    tittle: ' the dead home',
    author: 'Arther' ,
    publishYear:2000
} ,
{

    tittle: 'the moral of the king',
    author: 'prince' ,
    publishYear:1855
} ,

]


// function bookTitle ( books , callback ){
//     const  extrectTitle = books.map( ( books) => books.tittle )
//       return callback(extrectTitle)
// }


// function callback(extrectTitle){
//     extrectTitle.sort()
//     console.log(extrectTitle.join(' , '));   // In this way the output is a type of string otherwise it is pack inside the Array
//     // console.log(extrectTitle);
    
// }
// console.log(bookTitle( books , callback));






// Ques5 => You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".




function message (inputName ){

    return new Promise((resolve, reject) => {
        const greeting  = ` Hello, ${inputName} How are You hope you are good `
        resolve(greeting)
    })
}
// message('Rajusharma').then((fullmessage ) => console.log(fullmessage))





// Ques6 =>Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.


// async function fetchData(){
//     const response = await
//     fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await response.json()
//     console.log(data);
// }

// fetchData()



//Ques7. Multiple requests.
// Create an asynchronous function that retrieves data from two different API endpoints: "https://
// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
// a to-do task, while the second API provides post details. The function should combine the results from both APIs
// and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
// responses from the respective APIs.

async function getcombineData(){
    const [data1 , data2 ] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => response.json())
    ])

    const combinedData = {
         todo: data1,
         post: data2,
    }
    return combinedData;
}

getcombineData().then((data) => console.log(data))