// generate Button Event Handler
const generateBtn = document.getElementById("generate-pin")
generateBtn.addEventListener("click", function () {
  const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("show-pin").value = generateRandomNumber;

  optimize(); //new function for better look
});

// Submit Button Event Handler
document.getElementById("submit").addEventListener("click", function () {
  const showPin = document.getElementById("show-pin").value;
  const numberView = document.getElementById("numView").value;

  if (showPin == numberView && showPin != 0) {
    const submitOutput = document.getElementById("matched");
    submitOutput.style.display = "block";
    document.getElementById("numView").value = "";
    document.getElementById("show-pin").value = "";
    // when pin is matched then 3 try left removed...
    const errorCounter = document.getElementById("errorCounter");
    errorCounter.style.display = "none";
    // when pin is matched then error message will remove...
    const removeErrorMessage = document.getElementById("error");
    removeErrorMessage.style.display = 'none';
  }

  if (showPin != numberView || showPin == 0) {
    const submitError = document.getElementById("error");
    submitError.style.display = "block";
    document.getElementById("numView").value = "";
    chanceCounter();  //new function for 3 try left
  }
});

function chanceCounter() {
  const chance = document.getElementById('count');
  const count = parseInt(chance.innerText);
  const newChance = count - 1;
  chance.innerText = newChance;

  if (chance.innerText == 0) {
    var removeSubmit = document.getElementById('submit');
    removeSubmit.style.display = "none";
    const errorCounter = document.getElementById("errorCounter");
    errorCounter.style.display = "none";
    const specialMessage = document.getElementById('extra-message');
    specialMessage.style.display = "block";
  }
}

function optimize() {
  const removeSuccess = document.getElementById("matched");
  removeSuccess.style.display = "none";

  // for remove error message
  const removeError = document.getElementById("error");
  removeError.style.display = "none";

  // for show error Counter
  const showTry = document.getElementById("errorCounter");
  showTry.style.display = "block";
};