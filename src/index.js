exports.min = function min(array) {
    if (array === undefined || array[0] === undefined) {
        return 0;
    }

    let min = Math.min(...array);
    return min;
};

exports.max = function max(array) {
    if (array === undefined || array[0] === undefined) {
        return 0;
    }

    let max = Math.max(...array);
    return max;
};

exports.avg = function avg(array) {
    if (array === undefined || array[0] === undefined) {
        return 0;
    }

    let sum = 0;
    array.forEach((item) => {
        sum += item;
    });

    return sum / array.length;
};
