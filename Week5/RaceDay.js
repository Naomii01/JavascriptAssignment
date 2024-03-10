let raceNumber = Math.floor(Math.random() * 1000);
//runner whether they are late or early
let earlyRegistration = true; 
console.log(`Race number: ${raceNumber}`);
console.log(`Early registration: ${earlyRegistration}`);
// setting runner's age 
const runnerage = 16;
// if statements and it's conditions
if (runnerage >= 18 && earlyRegistration ===true){
  raceNumber += 1000;
console.log(`Your race time is 9:30 am. Your race number is: ${raceNumber}`);
} else if (runnerage >= 18 && earlyRegistration === false) {
  console.log(` Late adults run at 11:00 am: ${raceNumber}`);
}
else if ( runnerage <= 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}
else if ( runnerage = 18 && earlyRegistration ===true){
  console.log('Should see the registration desk');
}
else if ( runnerage = 18 && earlyRegistration ===false){
  console.log( 'Should also see the registration desk');
}



