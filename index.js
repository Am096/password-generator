let rangeSlider = document.getElementById("rangeSlider");
let coloredSlider = document.getElementById("colored-slider");
let passwordOne = document.getElementById("generated-password-one");
let passwordTwo = document.getElementById("generated-password-two");
let passwordThree = document.getElementById("generated-password-three");
let passwordFour = document.getElementById("generated-password-four");
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = '!@#$%^&*()_+-=[]{}|;:",./<>?';
const allCombined = lowerCaseLetters + upperCaseLetters + numbers + symbols;
let allCombinedarr = allCombined.split("");


console.log(rangeSlider.value);

rangeSlider.addEventListener("input", function () {
  coloredSlider.textContent = rangeSlider.value;
});

function generatePasswords() {
  let password = "";
  let passwordArr = [];
  for(let j=0; j<4;j++){
    let password = ""
    for (let i = 0; i < rangeSlider.value; i++) {
        let randomDigit = Math.floor(Math.random() * allCombined.length);
        password += allCombinedarr[randomDigit];
      }
    passwordArr.push(password);
  } 
  passwordOne.textContent = passwordArr[0];
  passwordTwo.textContent = passwordArr[1];
  passwordThree.textContent = passwordArr[2];
  passwordFour.textContent = passwordArr[3];
}

function copyToClipboard(elementID) {
  let copyText = document.getElementById(elementID);
  let msgEl = document.getElementById("msg");

  if (!copyText.hasChildNodes()) {
    console.warn('Element is empty. Nothing to copy.');
    msgEl.textContent = "";
    return;
  }

  let tempTextarea = document.createElement('textarea');
  tempTextarea.value = copyText.innerText;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); 
  try {
    document.execCommand('copy');
    msgEl.textContent = "PASSWORD COPIED TO CLIPBOARD!";
    setTimeout(function(){
      msgEl.textContent = "";
    },1000)
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(tempTextarea);
}
