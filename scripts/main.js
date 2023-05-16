/** 切换图片以及切换用户 */
let myImage = document.querySelector('img')
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

const setUserName = () => {
    let myName = prompt('请输入你的名字。');
    if(myName) {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    } 
} 

myButton.onclick = (e) => {
  e.stopPropagation();          //  stopPropagation() 是事件对象的一个方法，可以用来阻止事件的冒泡传递
  setUserName();
}

myImage.onclick = (e) => {
  e.stopPropagation();
  let mySrc = myImage.getAttribute('src');
  if(mySrc === '../media/images/folkscare.png') {
    myImage.setAttribute('src', '../media/images/palsy-3.jpg');
  } else {
    myImage.setAttribute('src', '../media/images/folkscare.png');
  }
}


/** 添加动态列表 */
const list = document.createElement('ul');
const info = document.createElement('p');
const title = document.createElement('h2');
const html = document.querySelector('html');

title.textContent = 'Dynamic List Sample'
info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(title)
document.body.appendChild(info);
document.body.appendChild(list);

// html.onclick = function() {
//   const listItem = document.createElement("li")
//   const listContent = prompt('What content do you want the list item to have?');
//   if(listContent){
//     listItem.textContent = listContent;
//     list.appendChild(listItem);
//   }
  
//   listItem.onclick = function(e) {
//     e.stopPropagation();
//     const listContent = prompt('Enter new content for your list item');
//     if(listContent){
//       this.textContent = listContent;
//     }
//   }
// }