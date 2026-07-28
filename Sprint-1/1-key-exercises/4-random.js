const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


// math.floor will make the number as a whole and remove any decimals or round the number to the nearest whole number.
// math.random returns a random number in (0,1] excluding the 1
// (maximum - minimum +1) provide a range or generated random number where would more likely to be 100 in this case
// num is a random whole number [0,100]
console.log(num);