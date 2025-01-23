/*  Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

function DisplayCurrentDayandTime(){
    const now=new Date();
    const daysofweek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday",]
    const day=daysofweek[now.getDay()]
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds()
    const result={
        "Today is ":daysofweek[now.getDay()],
        " Current time is": `${hours}:${minutes}:${seconds}`,

    }
  
    return result;
}

console.log(DisplayCurrentDayandTime());