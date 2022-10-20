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

  let answer = number1 + number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
  
}


function onSubBtnClicked()
{
  const num1 = document.getElementById("num1");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("num2");
  let number2 = Number(num2.value);

  let answer = number1 - number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
 
  
}
function onMulBtnClicked()
{
  const num1 = document.getElementById("num1");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("num2");
  let number2 = Number(num2.value);

  let answer = number1 * number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
 
  
}
function onDivBtnClicked()
{
  const num1 = document.getElementById("num1");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("num2");
  let number2 = Number(num2.value);

  let answer = number1 / number2;

  const ans = document.getElementById("answer");
  ans.value = answer;
 
  
}
