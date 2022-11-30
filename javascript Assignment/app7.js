//Q1: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var city = prompt("Enter any city ");

if(city == "karachi"){
    document.write("Welcome to city of Lights");
}
else {
    document.write("Welcome to "+city);
}

//Q2  Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am

var gender = prompt("Enter your gender ");

if(gender == "male"){
    document.write("<br>Good Morning sir");
}
else if (gender == "female"){
    document.write("<br>Good Morning Ma'am"); 
}

//Q3:  Write a program to take input color of road traffic signal from the user & show the message according to this table
var signal_Color = prompt("Enter traffic color ");
if(signal_Color == "red"){
    document.write("<br>Must Stop");
}
else if(signal_Color == "Yellow"){
    document.write("<br>Ready to move");
}
else if(signal_Color == "Green"){
    document.write("<br>Move Now");
}

// Q4:  Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 

var fuel = prompt("Enter fuel in litres ");
 
if (fuel < 0.25){
    document.write("<br> Please refill the fuel in your car ");
}
else{
    document.write("<br> your car is ready to go sir!");
}

//Q5: Run this script, & check whether alert message would be displayed or not. Record the outputs
// question (a)//
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); // outpt will be displayed //
 }

// question (b)//
 var b = 82; 
 if (b++ === 83){
     alert("given condition for variable b is true"); // output will not display due to post increment //
 } 

 // question (c)//
 var c = 12;
  if (c++ === 13){ 
    alert("condition 1 is true"); 
 } 
 if (c === 13){
     alert("condition 2 is true"); // condition 2 will dislay //
 }

 if (++c < 14){
     alert("condition 3 is true"); // condition 3 will also display//
}

if(c === 14){ 
    alert("condition 4 is true"); // condition 4 will also display//
}

// question (d)//
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals");  //  the cost equal  will display//
} 

//question (d)//
if (true){
     alert("True"); // true will display//
}
if (false){ 
    alert("False"); //false will also display//
} 
 
// question (f)//
if("car" < "cat"){ 
    alert("car is smaller than cat"); // condition is false //
}


//Q6  Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table

var subject1_Marks = prompt("Enter your first subject marks ");
var subject2_Marks = prompt("Enter your second subject marks ");
var subject3_Marks = prompt("Enter your third subject marks ");
var obtainedMarks = subject1_Marks + subject2_Marks + subject3_Marks ;
var percentage = (obtainedMarks / 100) * 100;
if (percentage >= "80"){
    document.write("<br> Total Marks 300");
    document.write("<br> Marks Obtained: "+obtainedMarks);
    document.write("<br> Percentage: "+percentage);
    document.write("<br> Grade A-One");
    document.write("<br>Remarks:  Excellent");
}
else if (percentage >= "70"){
    document.write("<br> Total Marks 300");
    document.write("<br> Marks Obtained: "+obtainedMarks);
    document.write("<br> Percentage: "+percentage);
    document.write("<br> Grade A");
    document.write("<br>Remarks:  Good");
}
else if (percentage >= "60"){
    document.write("<br> Total Marks 300");
    document.write("<br> Marks Obtained: "+obtainedMarks);
    document.write("<br> Percentage: "+percentage);
    document.write("<br> Grade B");
    document.write("<br>Remarks:  You need to improve");
}
else if (percentage < "60"){
    document.write("<br> Total Marks 300");
    document.write("<br> Marks Obtained: "+obtainedMarks);
    document.write("<br> Percentage: "+percentage);
    document.write("<br> Fail");
    document.write("<br> Remarks: Sorry");
}

//Q7: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

var secretNumber = prompt("Enter any Random Number from 1-10: ");
var guessNumber = secretNumber + 1;
if(guessNumber = secretNumber){
    document.write("<br> Bingo! Correct Answer");
}
else{
    document.write("<br>You are very close ")
}

//Q8:  Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 
var givenNumber = prompt("Enter any number ");
if(givenNumber / 3 == 0){
    document.write("<br>"+givenNumber+" is divisible by 3");
}
else{
    document.write("<br> this number is not divisible by 3");
}

//Q9 Write a program that checks whether the given input is an even number or an odd number
var input = prompt("Enter any number to check whether the number is odd or even ");
if(input%2 == 0){
    document.write("<br>"+input+" is even number");
}
else{
    document.write("<br>"+input+" is odd number");
}

//Q10 Write a program that takes temperature as input and shows a message based on following criteria
//a)  T > 40 then “It is too hot outside.” 
// b)  T > 30 then “The Weather today is Normal.” 
//c)  T > 20 then “Today’s Weather is cool.” 
//d)  T > 10 then “OMG! Today’s weather is so Cool.” 

var temperature = prompt("Enter temperature ");
if(temperature > "40"){
    document.write("t is too hot outside.");
}
else if(temperature > "30"){
    document.write("he Weather today is Normal..");
} 
else if(temperature > "20"){
    document.write("Today’s Weather is cool.");
}
else if(temperature > "10"){
    document.write("OMG! Today’s weather is so Cool.");
}

//Q11 Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input
var inputNumber1 = parseInt(prompt("Enter first number "));
var inputNumber2 = parseInt(prompt("Enter second number "));
var operator = prompt("Enter any operator ");

if(operator == "+"){
    var sum = inputNumber1 + inputNumber2;
    document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+sum);
}
else if(operator = "-"){
    var subtraction = inputNumber1 - inputNumber2;
    document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+subtraction);
}
else if(operator = "/"){
    var division = inputNumber1 / inputNumber2;
    document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+division);
}
else if(operator = "*"){
    var multiplication = inputNumber1 * inputNumber2;
    document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+multiplication);
}
else if(operator = "%"){
    var modulus = inputNumber1 % inputNumber2;
    document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+mudulus);
}