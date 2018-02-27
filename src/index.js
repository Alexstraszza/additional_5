module.exports = function check(str, bracketsConfig) {
    var bracketsAsString = [];
    for (var i = 0; i < bracketsConfig.length; i++) {
        bracketsAsString.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    };

    for (var p = 0; p < bracketsAsString.length * 2; p++) { //p=pair

        for (var i = 0; i < bracketsAsString.length; i++) {
            for (var y = 0; y < str.length; y++) {
                if (str.indexOf(bracketsAsString[i]) != -1) {
                    var deletePair = str.indexOf(bracketsAsString[i]);
                    str = str.substring(0, deletePair) + str.substring(deletePair + 2);
                    y--;                                                                
                };
            };
        };

    };

    if (str == 0) {
        return (true);
    }
    else {
        return (false);
    };
};
