/* rite a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/
function MostFrequentArrayItem(arr){
    
    var mostFrequency=0;
    var frequestWord="";
    var frequency=arr.reduce((acc,curr)=>{
        acc[curr]=acc[curr]?acc[curr]+1:1;
        return acc;
    },{})

    console.log(frequency)
    for (let key in frequency){
        if(frequency[key]>mostFrequency){
            mostFrequency=frequency[key];
            frequestWord=key;
        }
        
    }
    console.log(mostFrequency,frequestWord);


}
console.log(MostFrequentArrayItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));