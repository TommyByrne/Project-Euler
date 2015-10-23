// What is the largest prime factor of the number 600851475143?
// Prime number can only be divided evenly only by 1 or itself.

/* First need to find prime numbers  below the number
 * Then need to find largest number
 *
 */

var num = 600851475143;
var i = 0;

while ( i < num) {
  if( num % i === 0) {
    num = num / i;
  }
  i++;
}

console.log("The largest prime factor is " + num + ".");
