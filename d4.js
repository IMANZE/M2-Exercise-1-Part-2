/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */
/* 
1. Number: this has to do with any number that is between -(2^53 - 1) and +(2^53 -1). There are three special 
values in JavaScript that are considered numbers but don’t behave like normal numbers;
a. Infinity: Any number divided by zero except zero itself.
b.-Infinity: Any negative number divided by zero except itself.
c. Not a Number (NaN):  As the name implies, good examples are 0/0, infinity * 0, square root of -1, "Hello"/0 e.tc

2. String: This is used to represent  data in text. e.g "Hello", "2" 

3. Boolean:  This represent logical entity and can have values : true and false. It is used to decide which part of a code
should the executed.

4.Undefined and Null: Undefined and Null are sometimes mistaken to be the same but they are different. Undefined is
for a value that doesn't exist yet. The variable  has nver been assigned any value. Everytime we declare a new variable, it's 
content is undefined while Null represent an empty value, the variable contains nothing.

5. BigInt: has to deal with very large number without limit unlike the number type that has limit.

6.Symbol: Symbol is a primitive data type of JavaScript and as the name implies, It’s a very peculiar data type. Once you create a symbol, its 
value is kept private and for internal use. After creation, all that remains is the symbol reference.
*/

/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */
/* Objects are variables too but objects can contain many values. Object is a collection of 'key-value' properties i.e every key has a value and the value is separated from key by using a colon  e.g
const studentData = {"name" : "Olu",  "age" : 23};  1.e "name" is key and "Olu" is value.

*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */


/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/

/* WRITE YOUR ANSWER HERE */


/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */


/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/

/* WRITE YOUR ANSWER HERE */




/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
