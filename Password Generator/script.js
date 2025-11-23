const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generate");

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const length = parseInt(lengthSlider.value);
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*";
  const words = ["Welcome", "Admin", "Secure", "Power", "Aqzswx", "Strong", "Alpha", "Bravo"];

  const mode = Math.floor(Math.random() * 3);
  let password = "";

  if (mode === 0) {
    // Memorable style
    password = words[Math.floor(Math.random() * words.length)] + symbols[Math.floor(Math.random() * symbols.length)] + Math.floor(10 + Math.random() * 90);
  } else if (mode === 1) {
    // Patterned style
    password =
      upper[Math.floor(Math.random() * upper.length)] +
      lower[Math.floor(Math.random() * lower.length)] +
      lower[Math.floor(Math.random() * lower.length)] +
      symbols[Math.floor(Math.random() * symbols.length)] +
      Math.floor(10 + Math.random() * 90);
  } else {
    // Fully random style
    const chars = upper + lower + numbers + symbols;
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }

  passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied!");
  }
});
