// generate Button Event Handler
const generateBtn = document.getElementById('generate-pin')
generateBtn.addEventListener('click', function () {
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);

    document.getElementById('show-pin').value = generateRandomNumber;
})
document.getElementById('submit').addEventListener('click', function () {
    const showPin = document.getElementById('show-pin').value;
    const numberView = document.getElementById('numView').value;
    if (showPin === numberView) {
        const submitOutput = document.getElementById('matched');
        submitOutput.style.display = 'block';
    }
    if (showPin != numberView) {
        const submitError = document.getElementById("doesn't match");
        submitError.style.display = 'block';

    }
})
