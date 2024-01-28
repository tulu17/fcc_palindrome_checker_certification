document.getElementById('check-btn').addEventListener('click', checkPalindrome);

// check if the input is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// handle the click event
function checkPalindrome() {
    const inputText = document.getElementById('text-input').value;

    // empty input check
    if (!inputText.trim()) {
        alert('Please input a value');
        return;
    }

    // display result 
    const resultElement = document.getElementById('result');
    if (isPalindrome(inputText)) {
        resultElement.textContent = `${inputText} is a palindrome`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome`;
    }
}

// enter button event
document.getElementById('text-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        checkPalindrome(); 
    }
});
