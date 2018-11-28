function charPos(x) {
    var pos= {};
    for (var i in x) {
        var ind = [];
        for (var j in x) {
            if (x[i] == x[j]) {
                ind.push(j)
            }
        }
        if (x[i] != ' ') {
            pos[x[i]] = ind;
        }
    }
    console.log(pos)
}

charPos('lighthouse in the house')