var today = new Date();
console.log('today is ',today);
var age = new Number();
console.log('age is ',age);
var greeting;// 
console.log('greeting' ,greeting);
 
var age = prompt('HOW OLD ARE YOU?');
if (age > 18) {
    greeting = 'WELCOME TO OUR WEBSITE, HOEPE YOU SPEND A GOOD TIME! ';
  } else if (age < 18) {
    greeting = 'welcome!!, i hope that your enjoy your time, and get someone in charge to shop with you :)';
  } 
  
document.write('<h3>'+greeting+'</h3>');

var name = prompt('what is your name?');
var feeling = prompt('are you excited to shop with us?');