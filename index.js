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
