// The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//- Sort the array 

const sortAges=ages.sort();
console.log(sortAges);

//find the min and max age

console.log(`Min age in array is ${Math.min(...sortAges)}`);

console.log(`Max age in array is ${Math.max(...sortAges)}`);


//- Find the median age(one middle item or two middle items divided by two)

let median=Math.floor(sortAges.length/2);
console.log(`Median age is ${sortAges[median]}`);



// - Find the average age(all items divided by number of items)

   let averageAge=sortAges.reduce((a,b)=> a+b,0)/sortAges.length
   console.log('Average age is',averageAge);


// - Find the range of the ages(max minus min)

console.log(`The range of the Ages is ${Math.max(...sortAges)-Math.min(...sortAges)}`);


// - Compare the value of (min - average) and (max - average), use abs() method

console.log(`Comparison is ${Math.abs(Math.min(...sortAges)-averageAge)===Math.abs(Math.max(...sortAges)-averageAge)}`);







