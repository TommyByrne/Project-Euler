// Find the sum of all the multiples of 3 or 5 below 1000. //

var sum = 0;

for(var i = 0; i < 1000; i++){
  if (i % 3 === 0 || i % 5 === 0){
    sum +=i;
  }
}

console.log("The total sum of all multiples of 3 and 5 from 0 to 999 is " + sum + ".");