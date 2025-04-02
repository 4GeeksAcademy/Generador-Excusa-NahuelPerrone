import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function ()
{
  let createExcuse = () => 
    {
       let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
       let action = ['ate', 'peed', 'crushed', 'broke'];
       let what = ['my homework', 'my phone', 'the car'];
       let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

       let who2 = who [Math.floor(Math.random()*(who.length))];
       let action2 = action[Math.floor(Math.random()*(action.length))];
       let what2 = what [Math.floor(Math.random()*(what.length))];
       let when2 = when [Math.floor(Math.random()*(when.length))];

       let createExcuse = `${who2} ${action2} ${what2} ${when2}`;
       return createExcuse

  }

document.getElementById("excuse").innerHTML = createExcuse()
}

