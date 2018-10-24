function charpos(word) {
  var lets = {};
  var letters = [];
  var position = [];

  letters = word.split(" ").join("").split("");

  for (var i = 0; i < letters.length; i++) {
    for (var x = 0; x < letters.length; x++) {
      if (letters[i] === letters[x]) {
        position.push((letters.length) - (letters.slice(x).length))
      }
    lets[letters[i]] = position;

    }
    position = [];
  }
  return lets;
}

console.log(charpos('lighthouse'));

console.log(charpos('lighthouse labs'));

console.log(charpos('downtown vancouver'));