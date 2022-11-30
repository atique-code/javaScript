// Q1:  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

//Declaration//
var a = 10;
 document.write("<h1>Result</h1>");
 document.write("<br> The value of a is "+a);
 document.write("<br>The value of ++a is "+ ++a);
 document.write("<br>Now the value of a is "+a);
 document.write("<br>The value of a++ is "+ a++);
 document.write("<br>Now the value of a is "+a );
 document.write("<br>The value of --a is "+ --a);
 document.write("<br>Now the value of a is "+a);
 document.write("<br>The value of a-- is "+ a--);
 document.write("<br>Now the value of a is "+a);

 //Q2: What will be the output in variables a, b & result after execution of the following script: 
 var a=2, b=1;
 var result = --a - --b + ++b + b--; 
            //1   - 0  + 1  + 1 //
document.write("<br> a is "+a);
document.write("<br> b is "+b);
document.write("<br> Result is "+result);

//Q3:  Write a program that takes input a name from user & greet the user
var myName = prompt("Enter your Name ");
document.write("<br>Hello! "+myName+" Hope you are fine.");

//Q4: Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default
var inputNumber = parseInt(prompt("Enter any number "));

if(inputNumber == ""){
    document.write("<br>5 X 1 = 5");
    document.write("<br>5 X 2 = 10");
    document.write("<br>5 X 3 = 15");
    document.write("<br>5 X 4 = 20");
    document.write("<br>5 X 5 = 25");
    document.write("<br>5 X 6 = 30");
    document.write("<br>5 X 7 = 35");
    document.write("<br>5 X 8 = 40");
    document.write("<br>5 X 9 = 45");
    document.write("<br>5 X 10 = 50");
}
else{
    document.write("<br>"+inputNumber+" X 1 = "+inputNumber);
    document.write("<br>"+inputNumber+" X 2 = "+(inputNumber*2));
    document.write("<br>"+inputNumber+" X 3 = "+(inputNumber*3));
    document.write("<br>"+inputNumber+" X 4 = "+(inputNumber*4));
    document.write("<br>"+inputNumber+" X 5 = "+(inputNumber*5));
    document.write("<br>"+inputNumber+" X 6 = "+(inputNumber*6));
    document.write("<br>"+inputNumber+" X 7 = "+(inputNumber*7));
    document.write("<br>"+inputNumber+" X 8 = "+(inputNumber*8));
    document.write("<br>"+inputNumber+" X 9 = "+(inputNumber*9));
    document.write("<br>"+inputNumber+" X 10 = "+(inputNumber*10));
}

//Q5:  Take 
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user and store them in variables
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 

var subject1 = prompt("Enter first Subject  ");
var subject2 = prompt("Enter second Subject  ");
var subject3 = prompt("Enter Third Subject  ");
var obtainedMarks = parseInt(prompt("Enter your First subject Marks "));
var obtainedMarks2 = parseInt(prompt("Enter your second subject Marks "));
var obtainedMarks3 = parseInt(prompt("Enter your Third subject Marks "));
var sum = obtainedMarks + obtainedMarks2 + obtainedMarks3;

document.write("<table>");
document.write("<th>Subjects</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>")
//first row of table//
document.write("<tr>")
document.write("<td>"+subject1+"</td>");
document.write("<td>100</td>")
document.write("<td>"+obtainedMarks+"</td>");
document.write("<td>"+((obtainedMarks/100)*100)+"%</td>");
document.write("</tr>")
//second row of table//
document.write("<tr>")
document.write("<td>"+subject2+"</td>");
document.write("<td>100</td>")
document.write("<td>"+obtainedMarks2+"</td>");
document.write("<td>"+((obtainedMarks2/100)*100)+"%</td>");
document.write("</tr>")
//third row of table//
document.write("<tr>")
document.write("<td>"+subject3+"</td>");
document.write("<td>100</td>")
document.write("<td>"+obtainedMarks3+"</td>");
document.write("<td>"+((obtainedMarks3/100)*100)+"%</td>");
document.write("</tr>")
//conclusion row //
document.write("<tr>")
document.write("<td></td>");
document.write("<td>300</td>")
document.write("<td>"+sum+"</td>");
document.write("<td>"+((sum/300)*100)+"%</td>");
document.write("</tr>")
document.write("</table>");