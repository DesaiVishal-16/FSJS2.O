// Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let readable=new Date();
let month=readable.getMonth()+1;

if(month<10){
month="0"+month;
}
let hours=readable.getHours();
if(hours<10){
    hours="0"+month;
}
let min=readable.getMinutes();
if(min<10){
    min="0"+min;
}

console.log(`YYYY-MM-DD HH:mm = ${readable.getFullYear()}-${month}-${readable.getDate()}  ${hours}:${min}`);
console.log(`DD-MM-YYYY HH:mm = ${readable.getDate()}-${month}-${readable.getFullYear()}  ${hours}:${min}`);
console.log(`DD/MM/YYYY HH:mm = ${readable.getDate()}/${month}/${readable.getFullYear()}  ${hours}:${min}`);



