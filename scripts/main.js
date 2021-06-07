let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Shaco.jpg') {
      myImage.setAttribute ('src','images/Shaco2.jpg');
    } else {
      myImage.setAttribute ('src','images/Shaco.jpg');
    }

    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Clown ' + myName +' Pepega';
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent =  'Clown ' + myName +' Pepega';
  }

  myButton.onclick = function() {
    setUserName();
  }