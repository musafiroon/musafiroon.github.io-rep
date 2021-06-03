var random = function(sf, ea) {
	return (Math.random() * (ea - sf) + sf);
};

function itemItemInArray(item, array) {
	var result = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == item) {
			result = i;
		}
	}
	return (result);
}
