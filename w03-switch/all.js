const color = 'yellow';

// switch whether color is red or blue or neigher
switch(color){
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is  not red or blue')
}



let day;

//switch newDate().getDay() and console Today's day

switch(new Date().getDay()){
    case 0:
        day = 'Sunday'
        break
    case 1:
        day = 'Monday'
        break
    case 2:
        day = 'Thuesday'
        break
    case 3:
        day = 'Thirthday'
        break 
    case 4:
        day = 'Forthday'
        break 
    case 5:
        day = 'Friday'
        break 
    case 6:
        day = 'Saturday'
        break       
}
console.log(`Today is ${day}`);