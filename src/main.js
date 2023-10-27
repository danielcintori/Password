import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css'

const testPasswordInConsole = nanoid();
console.log(testPasswordInConsole); // test connection script in console

const passwordBtnElement = document.querySelector('button');
const displayPasswordElement = document.querySelector('h2');

passwordBtnElement.addEventListener('click', ()=>{
    const randomPassword = nanoid();
    displayPasswordElement.innerHTML = randomPassword;
});

displayPasswordElement.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Password copied!');
  });