"use strict";

window.onload = init;

function init() 
{
   const addBtn = document.getElementById("addBtn");
   addBtn.onclick = onAddBtnClicked;

   const subBtn = document.getElementById("subBtn");
   subBtn.onclick = onSubBtnClicked;

   const mulBtn = document.getElementById("mulBtn");
   mulBtn.onclick = onMulBtnClicked;

   const divBtn = document.getElementById("divBtn");
   divBtn.onclick = onDivBtnClicked;
}

function onAddBtnClicked()
{
  const num1 = document.getElementById("num1");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("num2");
  let number2 = Number(num2.value);
  const messagePara = document.getElementById("messagePara");


  if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }
  let answer = number1 + number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
  messagePara.innerHTML = "";
}


function onSubBtnClicked()
{
  const num1 = document.getElementById("num1");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("num2");
  let number2 = Number(num2.value);
  const messagePara = document.getElementById("messagePara");


  if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }

  let answer = number1 - number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
  messagePara.innerHTML = "";
  
}
function onMulBtnClicked()
{
  const num1 = document.getElementById("num1");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("num2");
  let number2 = Number(num2.value);
  const messagePara = document.getElementById("messagePara");


  if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }

  let answer = number1 * number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
  messagePara.innerHTML = "";
  
}
function onDivBtnClicked()
{
  const num1 = document.getElementById("num1");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("num2");
  let number2 = Number(num2.value);
  const messagePara = document.getElementById("messagePara");

  if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }

  let answer = number1 / number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
  messagePara.innerHTML = "";
  
}
