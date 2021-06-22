function random(sf, ea) {
    return (Math.random() * (ea - sf) + sf);
};

function round(n){
    return(Math.round(n));
};

function noOfItemInArray(item, array) {
    var result;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == item) {
            result = i;
        }
    }
    return (result);
};

function or(...functionsOrTextEtc) {
    var result = round(random(0, arguments.length - 1));
    return (arguments[result]);
};
