var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');

  if (mySrc === 'images/whale.jpg') {
    myImage.setAttribute('src', 'images/coming-soon.jpg');
  }
  else {
    myImage.setAttribute('src', 'images/whale.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
}

else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
