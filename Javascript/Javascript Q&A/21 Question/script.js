//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.


let countries=['Ethiopia','India','China'];

if (countries.includes('Ethiopia')){
	console.log('ETHIOPIA');
}else{
    countries.unshift('Ethiopia');
    console.log(countries);
}

