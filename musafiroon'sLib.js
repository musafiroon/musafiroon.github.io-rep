function random(sf, ea) {
    return (Math.random() * (ea - sf) + sf);
};

function round(n){
    return(Math.round(n));
};

function noOfItemInArray(item, array) {
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == item) {
            result = i;
        }
    }
    return (result);
};
