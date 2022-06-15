// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// will go into the value of charset after user prompt
let confirmLength = "";


// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  let confirmLength = (prompt("Choose between 8-128 characters."));

// continues to loop until user selects correct char amount
  while (confirmLength <= 7 || confirmLength > 128) {
    alert("Password must be between 8-128 characters");
    let confirmLength = (prompt("How many characters do you want your password to have?"));
  }

 
  // get parameters from user  
  let confirmSpecialChar = confirm("Click OK if you want special characters");
  let confirmNumericChar = confirm("Click OK if you want numeric characters");
  let confirmAlphaLower = confirm("Click OK if you want lowercase characters");
  let confirmAlphaUpper = confirm("Click OK if you want uppercase characters");
  // may need to loop if answer is outside the parameters or possible screen refresh
  // still printing 'undefined' to the output; possible message there
  

  let passwordCharacters = []



  if (confirmSpecialChar) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumericChar) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmAlphaLower) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmAlphaUpper) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  console.log(passwordCharacters)


  // want this to be a case statement if possible or else if


  // Empty string filled based on for loop selecting random chars from the array
  let randomPassword = "";

  for (let i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;

}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);