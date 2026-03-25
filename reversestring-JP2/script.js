const textInput = document.getElementById("textInput");
const reverseButton = document.getElementById("reverseButton");
const result = document.getElementById("result");

function reverseString(text) {
    return text.split("").reverse().join("");
}

textInput.addEventListener("input", () => {
    const inputText = textInput.value;

    result.textContent = reverseString(inputText);

    if (inputText.length > 3) {
        reverseButton.style.display = "inline-block";
    } else {
        reverseButton.style.display = "none";
    }
});