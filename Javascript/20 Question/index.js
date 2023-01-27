// In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'


 const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

 //- add 'Meat' in the beginning of your shopping cart if it has not been already added
 if (shoppingCart.indexOf("Meat") == -1) {
     shoppingCart.unshift("Meat");
 } else {
     console.log("Meat is already present.");
 }
 console.log('Meat is added',shoppingCart);

 //- add Sugar at the end of your shopping cart if it has not been already added
 if (shoppingCart.indexOf("Sugar") == -1) {
     shoppingCart.push("Sugar");
 } else {
     console.log('Sugar is already present');
 }
 console.log('Sugar is added',shoppingCart);
 
 //- remove 'Honey'
 shoppingCart.splice(4, 1);
 console.log('Honey is removed',shoppingCart);
 
 //- modify Tea to 'Green Tea'
 shoppingCart.splice(3, 1, "Green Tea");
 console.log('Green Tea is added',shoppingCart);
