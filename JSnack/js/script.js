// jsnack 3
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

var myArray = [2, 5, 10, 25, 3, 30, 12];

var secondArray = subArray(myArray, 1, 5);
console.log(secondArray);

function subArray(array, a, b){
  var newArray = [];
  for(var i = a; i <= b; i++){
    newArray.push(array[i]);
  }
  return newArray;
}
