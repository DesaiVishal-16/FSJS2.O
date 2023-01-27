//Write a program which tells the number of days in a month, now consider leap year.

let getleapdays= function(month,year){
    return new Date(year,month,0).getDate();
}
    console.log(getleapdays(2,2020));



    

