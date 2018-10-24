function countLetters(word) {
  var lets = {};
  var count = 0;
  var letters = []
  //word into array
  letters = word.split("");
  //count repeating letters
  for (var i = 0; i < letters.length; i++) {
    for (var x = 0; x < letters.length; x++) {
      if (letters[i] === letters[x]) {
        count += 1;
      }
    lets[letters[i]] = count;
    }
    count = 0;
  }
  //add letter and count to object

  //return
  return lets;
}

console.log(countLetters('lighthouse'));

console.log(countLetters('lighthouse labs'));

console.log(countLetters('downtown vancouver'));