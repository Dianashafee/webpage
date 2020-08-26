var today = new Date();
console.log('today is ', today);
var age = new Number();
console.log('age is ', age);
var greeting;// 
console.log('greeting', greeting);

var age = prompt('HOW OLD ARE YOU?');
if (age > 18) {
  greeting = 'WELCOME TO OUR WEBSITE, HOEPE YOU SPEND A GOOD TIME! ';
} else if (age < 18) {
  greeting = 'welcome!!, i hope that your enjoy your time, and get someone in charge to shop with you :)';
}

document.write('<h3>' + greeting + '</h3>');

var name = prompt('what is your name?');
var feeling = prompt('are you excited to shop with us? ' + name);

function showorder(userName) {
  //input 
  var userInput = prompt('Do you to do hijab shopping or regular shopping? ' + userName);
  
  while (userInput !== "hijab shopping" && userInput !== "regular shopping") {
     userInput = prompt('Do you want to do hijab shopping or regular shopping? ' + userName);
  }
  // var ; "";
  var Numberofimg = prompt("how many dresses you want to buy");
  for (var count = 0; count < Numberofimg; count++) {
    
    
    //process 
    if (userInput == "hijab shopping") {
      document.write('<img src="https://64.media.tumblr.com/06a95c8df592c2b5df26e7068f44be02/tumblr_p8gnmru8T21v7bwzjo4_500.jpg" alt="img2">')
  }  else if (userInput == "regular shopping"){
    document.write('<img src="./white.jpg" alt="img3">');
  } else {
    var error = alert('choose right next time');
  }
}

return userInput; 
}

showorder(name);