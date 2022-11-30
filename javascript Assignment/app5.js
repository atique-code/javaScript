//Q1: Write a program that take two numbers & add them in a new variable. Show the result in your browser
var num1 = parseInt(prompt("Enter first number "));
var num2 = parseInt(prompt("Enter second number "));
var sum = num1 + num2;

document.write("Sum of "+num1+ " and " +num2+ " is "+sum);

//Q2: Repeat task1 for subtraction, multiplication, division & modulus. 

var input1 = parseInt(prompt("Enter first number "));
var input2 = parseInt(prompt("Enter second number "));
var sign = prompt("which operation you want to perform ");

if(sign == "*"){
    sign = input1 * input2;
    document.write("Multiplication of "+input1+ " and "+input2+ " is "+sign);
}
else if(sign == "/"){
    sign = input1 / input2;
    document.write("Division of "+input1+ " and "+input2+ " is "+sign);
}
else if(sign == "%"){
    sign = input1 % input2;
    document.write("Modulus of "+input1+ " and "+input2+ " is "+sign);
}
else if (sign == "-"){
    sign = input1 - input2;
    document.write("Subtraction  of "+input1+ " and "+input2+ " is "+sign);
}

//Q3: Do the following using JS Mathematic Expressions 
// a. Declare a variable
var value;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
document.write("Value after variable declaration is "+value);

// c. Initialize the variable with some number;
var value = 5;

// d. Show the value of variable in your browser like “Initial value: 5”
document.write("<br>Initial value: "+value);

// e. Increment the variable
value++;

// f. Show the value of variable in your browser like “Value after increment is: 6”. 
document.write("<br>Value after increment is: "+value);

//  Add 7 to the variable
var addition = value + 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”. 
document.write("<br>Value after addition is: "+addition);

// i. Decrement the variable
addition--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”. 

document.write("<br>Value after decrement is: "+addition);

// k. Show the remainder after dividing the variable’s value by 3. 
 var reminder = addition%3;

 // l. Output : “The remainder is : 0”. 

 document.write("<br>The reminder is "+reminder);

 // Q4:  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
//  var tickets = parseInt(prompt("How many tickets you wants sir? "));
//  document.write("<br>Total cost to buy "+tickets+ " to a movie is "+(tickets*6000));

 // Q5: Write a script to display multiplication table of any number in your browser. E.g 
 var table = parseInt(prompt("Enter any table "));
 document.write("<br>"+table+" X 1 = "+table);
 document.write("<br>"+table+" X 2 = "+(table*2));
 document.write("<br>"+table+" X 3 = "+(table*3));
 document.write("<br>"+table+" X 4 = "+(table*4));
 document.write("<br>"+table+" X 5 = "+(table*5));
 document.write("<br>"+table+" X 6 = "+(table*6));
 document.write("<br>"+table+" X 7 = "+(table*7));
 document.write("<br>"+table+" X 8 = "+(table*8));
 document.write("<br>"+table+" X 9 = "+(table*9));
 document.write("<br>"+table+" X 10 = "+(table*10));

 // Q6:  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here
 // a.  Store a Celsius temperature into a variable
 // b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
 // c. Now store a Fahrenheit temperature into a variable. 
 // d. Convert it to Celsius & output “NNoF is NNoC”. 

 var celcius = parseInt(prompt("Enter a number in celcius "));
 var Fahrenheit = parseInt(prompt("Enter a number in fahrenheit "));

 var celciusConvert = ((Fahrenheit - 32)*(5/9));
 var fahrenDegree = ((celcius*(9/5)) + 32);

 document.write("<br>" +celcius+ "F is "+ celciusConvert);
 document.write("<br>" +Fahrenheit+"C is "+fahrenDegree);

 // Q7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
 // a. Price of item 1 
 // b. Price of item 2 
 // c. Ordered quantity of item 1 
 // d. Ordered Quantity of item 2 
 // e. Shipping charges 

 var item1 = parseInt(prompt("Enter the price of item 1:  "));
 var item2 = parseInt(prompt("Enter the price of item 2:  "));
 var quantityOfItem1 = parseInt(prompt("Enter the Quantity of item 1:  "));
 var quantityOfItem2 = parseInt(prompt("Enter the Quantity of item 2:  "));
var shippingCharges = 100;

 var cost = ((item1*quantityOfItem1) + (item2*quantityOfItem2) + shippingCharges);
 document.write("<br>Price of item 1 is "+item1)
 document.write("<br>Quantity of item 1 "+quantityOfItem1)
 document.write("<br>Price of item 2 is "+item2)
 document.write("<br>Quantity of item 2 "+quantityOfItem2)
 document.write("<br>Shipping charges is 100");
 document.write("<br>Total cost of ypur order is "+cost);

 // Q8: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
 var totalMarks = parseInt(prompt("Enter total marks "));
 var obtainMarks = parseInt(prompt("Enter obtained marks "));
 var percentage =  (obtainMarks/totalMarks)*100;
 
 document.write("<br>total marks "+totalMarks);
 document.write("<br>Obtained marks "+obtainMarks);
 document.write("<br>Percentage: "+percentage+"%");

 // Q9:  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
 var moneyInDollar = parseInt(prompt("Enter money in dollar "));
 var saudiRiyal = parseInt(prompt("Enter money in Saudi riyal "));
 var pakistaniRupees = (moneyInDollar * 104.80) + (saudiRiyal * 28);

 document.write("<br>Total Currency in PKR : "+pakistaniRupees);

 // Q10: Write a program to initialize a variable with some number and do arithmetic in following sequence: 
 // a. Add 5 
 // b. Multiply by 10 
 // c. Divide the result by 2 
 // Perform all calculations in a single expression 

 var num = 25;
 document.write("<br>( "+num+ " + 5 * 10 / 2) = "+(num + 5 * 10 / 2));

 // Q11: The Age Calculator: Forgot how old someone is? Calculate it! 
 // a. Store the current year in a variable
 // b. Store their birth year in a variable. 
 // c. Calculate their 2 possible ages based on the stored values. 
 var currentYear = parseInt(prompt("Enter your Current Year "));
 var birthYear = parseInt(prompt("Enter your Birth Year "));
var posibleAge = currentYear - birthYear;

document.write("<br>Your Current year is "+currentYear);
document.write("<br>Your Birth year is "+birthYear);
document.write("<br>Your age is "+posibleAge);

//Q12:  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

var radiusOfCircle = parseInt(prompt("Enter radius of circle "));
var PI = 3.142;

document.write("<br>Radius of Circle is "+radiusOfCircle);
document.write("<br> The Circumference is "+(2 * PI * radiusOfCircle));
document.write("<br>The area is "+(PI * radiusOfCircle * radiusOfCircle));

//Q13:  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable
// c. Store a maximum age into a variable
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life

var snack = prompt("Enter your favorite snack ");
var age = parseInt(prompt("Enter your Current Age "));
var maximumAge = parseInt(prompt("Enter your Maximum Age "));
var amountPerDAy = parseInt(prompt("How much you can eat your favorite snack per day "));
var total = (amountPerDAy * 365 * (maximumAge - age));

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>FAvorite Snack "+snack);
document.write("<br>Current Age "+age);
document.write("<br>Estimate Maximum Age "+maximumAge);
document.write("<br>Amount of Snack per Day ");
document.write("<br>you will need "+total+" chocolate chip to last you until the rip old age of "+maximumAge);