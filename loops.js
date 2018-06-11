function forLoop(array){
  for (var i = 0; i < 25; i++)
 {
   
    if (i === 1){
      array.push('I am 1 strange loop.')
    }
    else{
      array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }
  }return array
}

function whileLoop(number){
  
  while (number > 0){
    console.log(number)
    number--;
  }
  return('done')
}

function doWhileLoop(array){
 
  do {
  array.shift()
  return Math.random() >= 0.5
 
  } while (array.length > 0 && maybeTrue());
  
}