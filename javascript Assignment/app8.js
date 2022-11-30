//Q1:

var inputNumber = parseInt(prompt("Enter your ASCII code "));
if(inputNumber >= 65 && inputNumber<= 90 ){
    document.write("ASCII of "+String.fromCharCode(inputNumber)+" is "+inputNumber+"and it is capital letter");
}
else if(inputNumber >= 97 && inputNumber <= 122){
    document.write("ASCII of "+String.fromCharCode(inputNumber)+" is "+inputNumber+" and it is small letter");
}
else if(inputNumber >= 48 && inputNumber <= 57){
    document.write(inputNumber+" is number");
}

//Q2: 

var number1 = prompt("Enter first number ");
var number2 = prompt("Enter second number ");

if (number1 > number2){
    document.write(number1+" is Greater than "+number2);
}
else if (number1 <  number2){
    document.write(number1+" is Less than "+number2);
}
else if (number1 == number2){
    document.write(number1+" is Equal to "+number2);
}

//Q3: 

var numb1 = prompt("Enter number ");

if (numb1 > 0){
    document.write(numb1+" is Positive number");
}
else if (numb1 <  0){
    document.write(numb1+" is Negative number");
}
else if (numb1 == 0){
    document.write(numb1+" is Zero");
}

//Q4:

var vowel = prompt("Enter String ");

if((vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U") || (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u")){
    document.write(vowel+" is a Vowel Letter");
}
else{
    document.write(vowel+" is Consonent");
}

//Q5: 

var password = prompt("Enter your Password ");

if(password == "SMIT HYD"){
   alert("Correct!");
}
else if(password == ""){
    alert("Please enter your password");
}
else{
    alert("Incorrect password");
}

//Q6: 
var greeting;
 var hour = 13;
if (hour < 18) { 
    alert("Good day");
}
 else{
    alert("Good evening");
}
  
//Q7:
var time = prompt("Enter time ");
if(time>=0 && time<12){
    alert("Good Morning!");
}
else if(time>=12 && time<17){
    alert("Good afternoon!");
}
else if(time>=17 && time<21){
    alert("Good evening!");
}
else if(time>=21 && time<24){
    alert("Good night!");
}
