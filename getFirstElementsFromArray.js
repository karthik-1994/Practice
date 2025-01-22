function getFirstElementsFromArray(array,count){
console.log(array,count);
var result=array.slice(0,count);
return result;
}

console.log(getFirstElementsFromArray([1,2,3,4],2));

console.log(getFirstElementsFromArray([98,74,56,23],2))