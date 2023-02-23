
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const resultMatrix = [];
  if(!matrix){
    return [];
  }
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
      resultMatrix.push(matrix[i].sort(function(a, b){
        return a - b;
      }))
    } else {
      resultMatrix.push(matrix[i].sort(function(a, b){
        return b - a;
      }))
    }
 }
 return resultMatrix.flat();
}
