// generate Button Event Handler
const generateBtn = document.getElementById('generate-pin')
generateBtn.addEventListener('click', function () {
    const generateRandomNumber = Math.floor(1000 + Math.random() * 9000);

    document.getElementById('show-pin').value = generateRandomNumber;
})
function insert(num) {
    document.getElementById('numView').value = document.getElementById('numView').value + num;
}

function deleteBtn() {
    let inputValue = document.getElementById('dlt').value;
    document.getElementById('dlt').value = inputValue.substring(0, inputValue.length - 1);
}
function clearBtn() {
    document.getElementById('clr').value = "";
}