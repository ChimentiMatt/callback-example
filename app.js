
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


// Shows Solution. Function definition content is processed before function calls content. 
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
  setInterval(timeAlert, 2000)
});

function timeAlert() {
    alert('test Alert')
}