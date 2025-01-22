/*(
Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

function JoinArrayElements(input){
return input.join(" ");
}

console.log(JoinArrayElements(["Red", "Green", "White", "Black"]));