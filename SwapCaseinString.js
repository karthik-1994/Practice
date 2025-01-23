/*Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. */

function SwapCaseInString(input){
    var result="";
    input.split("").forEach(element => {
        if(element==element.toUpperCase()){
            result=result+element.toLowerCase();
        }else{
            result=result+element.toUpperCase();
        }
        
    });

return result;
}

console.log(SwapCaseInString("The Quick Brown Fox"));
console.log(SwapCaseInString("This is Karthik Rachamadugu"));