
// Reference Material 

//https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced



// Shows async issue as logs will be out of order ----------------------------------
// function first(){
//     // Simulate a code delay
//     setTimeout( function(){
//       console.log(1);
//     }, 500 );
//   }
//   function second(){
//     console.log(2);
//   }
//   first();
//   second();
// ----------------------------------------------------------------------------------




 
// Shows Solution. ------------------------------------------------------------------

// Function definition content (or in this case the "subject") is processed before function calls content. 
// ...as our last parameter in the doHomework() function we can pass in callback. The callback function is then defined in the second argument of our call to doHomework().

// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }
// doHomework('math', function() {
//   alert('Finished my homework');
// });


// Shows Another, maybe easier solution --------------------------------------------
// But callback functions don’t always have to be defined in our function call. They can be defined elsewhere in our code like this:


// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }
// function alertFinished(){
//   alert('Finished my homework');
// }
// doHomework('math', alertFinished);







// Practice solution --------------------------------------------
function eatFood(subject, callback){
  console.log(`You are eating ${subject}`)
  callback();
}

function finshEatingLog(){
  console.log("You finished eating")
}

eatFood('Pizza', finshEatingLog)