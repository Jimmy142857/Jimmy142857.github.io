let myImage = document.querySelector('img')
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

const setUserName = () => {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } 
    else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
} 

myButton.onclick = () => {
  setUserName();
}

myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/folkscare.png') {
    myImage.setAttribute('src', 'images/palsy-3.jpg');
  } else {
    myImage.setAttribute('src', 'images/folkscare.png');
  }
}
