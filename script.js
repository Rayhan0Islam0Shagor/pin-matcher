// generate Button Event Handler
const generateBtn = document.getElementById('generate-pin')
generateBtn.addEventListener('click', function () {
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);

    document.getElementById('show-pin').value = generateRandomNumber;
})
// Submit Section
document.getElementById('submit').addEventListener('click', function () {
    const showPin = document.getElementById('show-pin').value;
    const numberView = document.getElementById('numView').value;
    if (showPin == numberView) {
        const submitOutput = document.getElementById('matched');
        submitOutput.style.display = 'block';
        document.getElementById('numView').value = "";
        document.getElementById('show-pin').value = "";
    }
    if (showPin != numberView) {
        const submitError = document.getElementById("error");
        submitError.style.display = 'block';
        document.getElementById('numView').value = "";
    }
})
