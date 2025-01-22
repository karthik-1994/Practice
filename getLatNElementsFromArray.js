//JavaScript function that returns the first element or the first 'n' elements of an array based on the passed parameter. Here's how you can implement it:
function getLastNElementsFromArray(array,count=1){
    return array.slice(-count);
    
}

console.log(getLastNElementsFromArray([7, 9, 0, -2]));        // Output: [-2]
console.log(getLastNElementsFromArray([7, 9, 0, -2], 3));     // Output: [9, 0, -2]
console.log(getLastNElementsFromArray([7, 9, 0, -2], 6));     // Output: [7, 9, 0, -2] (array length is smaller than 6, so it returns all elements)
