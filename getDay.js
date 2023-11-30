class Day{
    getDayName(dayNumber){
        switch (dayNumber) {
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            case 7:
                return "Sunday";
            default:
                 return "Invalid day number";
                
        }
    }
}   

const dayOfWeek = new Day();
console.log(dayOfWeek.getDayName(3));
console.log(dayOfWeek.getDayName(8));