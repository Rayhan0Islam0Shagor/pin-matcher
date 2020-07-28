// generate Button Event Handler
const generateBtn = document.getElementById('generate-pin')
generateBtn.addEventListener('click', function () {
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);

    document.getElementById('show-pin').value = generateRandomNumber;
})

// Submit Button Event Handler
document.getElementById('submit').addEventListener('click', function () {
    const showPin = document.getElementById('show-pin').value;
    const numberView = document.getElementById('numView').value;
    const warning = document.getElementById('errorCount').value;

    if (showPin == numberView && showPin != 0) {
        const submitOutput = document.getElementById('matched');
        submitOutput.style.display = 'block';
        document.getElementById('numView').value = "";
        document.getElementById('show-pin').value = "";
        // for remove the 3 try left 
        const errorCount = document.getElementById('errorCount');
        errorCount.style.display = 'none';
    }

    if (showPin != numberView || showPin == 0) {
        const submitError = document.getElementById("error");
        submitError.style.display = 'block';
        document.getElementById('numView').value = "";
        document.getElementById('show-pin').value = "";
    }
})

document.getElementById('generate-pin').addEventListener('click', function () {
    const removeSuccess = document.getElementById('matched');
    const removeError = document.getElementById('error');
    const showTry = document.getElementById('errorCount');

    removeSuccess.style.display = 'none';
    removeError.style.display = 'none';
    showTry.style.display = 'block';
})
