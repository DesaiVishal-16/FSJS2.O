// Write a program which tells the number of days in a month.

// let days=new Date()
// console.log(days.getMonth());
// console.log(days.getDate());
// console.log(days.getDay());



let month="MARCH";
month=month.toLowerCase();
if(month=="february"){
    console.log(`${month} has 28 days`);
}else if(month === "january" ||
         month === "march" ||
         month === "may" ||
         month == "july" ||
         month === "august" ||
         month == "october" ||
         month == "december"){
         console.log(`${month} has 31 days`);

}else if(month === "april" || month === "june" || month === "september" || month === "november"){
             console.log(`${month} has 30 days`);
}else{

    console.log(`${month} not valid month`);
}