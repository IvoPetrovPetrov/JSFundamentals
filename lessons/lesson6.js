//Conditional statement

/*if(condition){
    //execute code here if condition is true
} else { executed when is false
    //some code here
}*/

//print diff message based on the time of the day
//If hour between 6 and 12, print 'Good Morning'
//If hour between 12 and 18, pring 'Good Afternoon'
//Otherwise: 'Good Evening'

var hour = 17
if(hour >= 6 && hour <12){
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon')
} else {
    console.log('Good Evening')
}

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}