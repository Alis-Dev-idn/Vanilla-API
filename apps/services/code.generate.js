function generate(lenght) {
    var add = 1, max = 12 - add;

    if ( lenght > max ) {
        return generate(max) + generate(lenght - max);
    }

    max        = Math.pow(10, lenght+add);
    var min    = max/10; // Math.pow(10, n) basically
    var number = Math.floor( Math.random() * (max - min + 1) ) + min;

    return ("" + number).substring(add);
}

module.exports = {generate}