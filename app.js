// THE FOLLOWING CODE MANIPULATES A TEXT BOX AND PROVIDES VARIOUS TEXT ANALYSIS FUNCTIONS.

// GETS ELEMENTS FROM THE DOM
const myTextBox = document.getElementById("my-text-box");
const result = document.getElementById("result");
const reverseString = document.querySelector(".reverse");
const palindrome = document.querySelector(".palindrome");
const charracterCount = document.querySelector(".chracter-count");
const wordsCount = document.querySelector(".word-count");

// CHECKS IF THE TEXT BOX IS EMPTY
const isEmpty = () => {
  return myTextBox.value.trim().length === 0;
};

// UPDATES THE RESULT DISPLAY
const updateResult = (message) => {
  result.innerHTML = message;
};

// REVERSES THE INPUT TEXT
const reverseStr = () => {
  if (isEmpty()) {
    updateResult("Please Enter Some Text.");
  } else {
    const reversedText = myTextBox.value.split("").reverse().join("");
    updateResult(`The reversed text is: <span>${reversedText}</span>`);
  }
};

// CHECKS IF THE INPUT TEXT IS A PALINDROME
const isPalindrome = () => {
  if (isEmpty()) {
    updateResult("Please Enter Some Text.");
  } else {
    const cleanedText = myTextBox.value
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");
    if (cleanedText === reversedText) {
      updateResult(`It is <span>A Palindrome</span>`);
    } else {
      updateResult(`It is <span>Not A Palindrome</span>`);
    }
  }
};

// COUNTS THE CHARACTERS IN THE INPUT TEXT
const charCount = () => {
  if (isEmpty()) {
    updateResult("Please Enter Some Text.");
  } else {
    const textLength = myTextBox.value.length;
    updateResult(`The character count is : <span>${textLength}</span>`);
  }
};

// COUNTS THE WORDS IN THE INPUT TEXT
const wordCount = () => {
  if (isEmpty()) {
    updateResult("Please Enter Some Text.");
  } else {
    const wordArray = myTextBox.value
      .trim()
      .split(/\s+/)
      .filter((item) => item);
    const wordCount = wordArray.length;
    updateResult(`The word count is: <span>${wordCount}</span>`);
  }
};

// EVENT LISTENERS FOR BUTTONS TO TRIGGER TEXT ANALYSIS FUNCTIONS
reverseString.addEventListener("click", reverseStr);
palindrome.addEventListener("click", isPalindrome);
charracterCount.addEventListener("click", charCount);
wordsCount.addEventListener("click", wordCount);

// SEARCHES FOR A SPECIFIC WORD WITHIN THE INPUT TEXT
const search = () => {
  const searchText = document.getElementById("search-text").value;
  if (isEmpty() || searchText.trim().length === 0) {
    updateResult("Please, Write Some Word to be Search.");
  } else {
    const textToSearch = myTextBox.value;
    if (textToSearch.includes(searchText)) {
      updateResult(`The text contains <span>'${searchText}'</span>`);
    } else {
      updateResult(`The text does NOT contain <span>'${searchText}'</span>`);
    }
  }
};
