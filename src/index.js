// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];

  if (matrix === undefined) {
    return [];
  } else {
    for (
      let subArrayIndex = 0;
      subArrayIndex < matrix.length;
      subArrayIndex++
    ) {
      let isEven = subArrayIndex % 2 === 0;
      for (
        let indexInsideSubarray = 0;
        indexInsideSubarray < matrix[subArrayIndex].length;
        indexInsideSubarray++
      ) {
        let index;
        isEven
          ? (index = indexInsideSubarray)
          : (index = matrix[subArrayIndex].length - indexInsideSubarray - 1);
        result.push(matrix[subArrayIndex][index]);
      }
    }
    return result;
  }
};
