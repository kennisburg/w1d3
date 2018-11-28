function countLetters(x) {
    var count = {};
    var num = 0;
    for (var i of x) {
        for (var j of x) {
            if (i == j) {
                num++;
            }
        }
        if (i != ' ') {
            count[i] = num;
        }
        num = 0;
    }
    console.log(count);
}

countLetters("abcdefgabc")
countLetters('lighthouse in the house')