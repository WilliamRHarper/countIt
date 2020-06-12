// Given a sentence, paragraph or novel, count the letters in the string. Ignore whitespace and anything not [a-z][A-Z], i.e. punctuations and numbers.

// Count It Example
// Given: A string - like "Hello World"

// Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1
// Use this challenge input: "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."
// let input = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
let input = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
input = input.toLowerCase().replace(/[\.\s]/g, '');
const countIt = (word) =>{
word = word.toLowerCase().trim();
let letterCount = {};
//creat a count variable and set it to 0
let count = 0;
let maxChar = "";
word.split("").forEach(letter => {
  
  if (letterCount[letter]){
    letterCount[letter]++;
  }else{
    letterCount[letter] = 1;
  }
})
let infoArray = Object.entries(letterCount);
let resultArray = [];
for (let i = 0; i < infoArray.length; i++){
  infoArray[i][0] = infoArray[i][0] + ':';
  resultArray.push(infoArray[i]);
}
let finalArray = [];
for (let j = 0; j < resultArray.length; j++){
 finalArray.push(resultArray[j].join(""));

}
let resultString = finalArray.join(" ");
return resultString;
}