// Write a javascript program which takes the input of filename as string and
// prints the extension of the file in the console

 let filename=prompt('Enter a file name');

 let extension=filename.split('.').pop();
  if(filename.includes('.')){
    console.log('Your File extension is',extension);
  }else
    console.log('Enter valid filename with extension i.e filename.extension eg. "a.js"' );

  

 
 

 
