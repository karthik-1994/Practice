function InsertDashesBetweenEvens(input){
    console.log(input);
        // Convert the input to a string to process each character
        let result = '';
        
        // Iterate through each character in the input
        for (let i = 0; i < input.length; i++) {
            // If the character is even, add a dash before it (except for the first character)
            if (i > 0 && parseInt(input[i]) % 2 === 0 && parseInt(input[i-1]) % 2 === 0) {
                result += '-';
            }
            
            // Add the current digit to the result
            result += input[i];
        }
        
        console.log(result);
        return result;

}
console.log(InsertDashesBetweenEvens(25468));