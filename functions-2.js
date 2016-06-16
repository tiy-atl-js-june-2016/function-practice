// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

var max = function (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
// Math.max(x, y, z)

var maxOfThree = function (x, y, z) {
  var max = null;
  if (x > max) { max = x; }
  if (y > max) { max = y; }
  if (z > max) { max = z; }
  return max;
};

var alternateMaxThree = function (x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
};

var rodneyMaxThree = function (x, y, z) {
  var items = [x,y,z];
  var max = null;
  for(var index = 0; index < items.length; index++) {
    if (items[index] > max) { max = items[index]; }
  };
  return max;
};

var useTheDamnLanguageMaxThree = function (x, y, z) {
  return Math.max(x, y, z);
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var isVowel = function (char) {
  if (char == "a") {
    return true;
  } else if (char == "e") {
    return true;
  } else if (char == "i") {
    return true;
  } else if (char == "o") {
    return true;
  } else if (char == "u") {
    return true;
  } else {
    return false;
  }
};

var betterIsVowel = function (char) {
  // or is ||, and is &&, both are short circuiting
  // they stop as soon as they can
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    return true;
  } else {
    return false;
  }
};

var bestIsVowel = function (char) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
};

// var isVowel=function(c){return ["a","e","i","o","u"].includes(c);};


// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double
// every consonant and place an occurrence of "o" in between. For example, translate("this is fun")
// should return the string "tothohisos isos fofunon".
// ---------------------

var translate = function (phrase) {
  var result = "";
  for(var count = 0; count < phrase.length; count++) {
    var char = phrase[count];
    if (isVowel(char) || char === " ") {
      result += char;
    //  result = result + char;
    } else {
      result += (char + "o" + char);
    }
  };
  return result;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

var reverse = function (str) {
  var newString = "";
  for(var index = str.length - 1; index >= 0; index--) {
    newString += str[index];
  };
  return newString;
};
