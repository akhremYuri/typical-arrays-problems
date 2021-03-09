
exports.min = function min (array) {
  let minVal = 0;
  if (array && array.length > 0) {
    minVal = array[0];
    for (let i = 0; i < array.length; i++){
      if (minVal > array[i])
        minVal = array[i];
    }
  }
  return minVal;
}

exports.max = function max (array) {
  let maxVal = 0;
  if (array && array.length > 0) {
    maxVal = array[0];
    for(let i = 0; i < array.length; i++){
      if (maxVal < array[i])
        maxVal = array[i];
    }
  }
  return maxVal;
}

exports.avg = function avg (array) {
  let avgVal = 0;
  if (array && array.length > 0) {
    for(let i = 0; i < array.length; i++)
      avgVal += array[i];
    avgVal = avgVal/array.length;
  }
  return avgVal;
}
