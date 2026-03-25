const textInput = document.getElementById("textInput");
const reverseButton = document.getElementById("reverseButton");
const result = document.getElementById("result");

function reverseString(text) {
    return text.split("").reverse().join("");
}

reverseButton.addEventListener("click", () => {
    const inputText = textInput.value;
    result.textContent = reverseString(inputText);
});