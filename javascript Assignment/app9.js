// //Q1:

var studentsName = [];
var i =0;
while(i==0){
    var input = prompt("Enter Students Names: ");
    studentsName.push(input);
    i = prompt("Do want to input Students Name Again? Enter 0 otherWise 1 :");
}
console.log(studentsName);

//Q2:

var studentData = new Array();

// //Q3:

var arr = ["SMIT", "JAvascript", "Nodejs", "Express", "Mongodb"];

// //Q4:

var numb = [2,4,6,8,10];

// //Q5:

var boolArray = [true, false];

// //Q6:

var mixedArray = ["Ali", "Ahemd", 71295, true, false];

// //Q7:
var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
document.write("<h1>Qualification</h1>");
for(var i =0; i<Qualification.length; i++){
    document.write("<br>"+Qualification[i]);
}

// //Q8:
var students = ["Michael", "John", "Tony"];
var score = [];
for(var i=0; i<students.length; i++){
    var data = prompt("Enter your marks ");
    score.push(data);
    var percentage = (data/500)*100;
    document.write("<br>Score of"+students[i]+" is "+data+ " percentage is "+percentage+"%");
}

// //Q9: 
var color = ["Red", "Green", "Blue", "Purple"];
// //a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser
 var ask = prompt("Enter new color: ");
 var store = color.unshift(ask);
document.write("<br>"+color);

// //b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser
var add_last = prompt("Enter color in last: ");
store = color.push(add_last);
document.write("<br>"+color);

// //c. Add two more color to the beginning of the array. Display the updated array in your browser
for(var i=0; i<2; i++){
    var addMore = prompt("Enter two More colors at the begining: ");
    color.unshift(addMore);
}
document.write("<br>"+color);

// //d. Delete the first color in the array. Display the updated array in your browser.
color.shift();
document.write("<br>"+color);

// //e. Delete the last color in the array. Display the updated array in your browser
color.pop();
document.write("<br>"+color);

// //f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser
var position = parseInt(prompt("At what index you want to Add color: "));
var add = prompt("enter color: ");
color.slice(position,1,add);
document.write("<br>"+color);

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser
var index = parseInt(prompt("At what index you want to delete color: "));
var howMany = parseInt(prompt("Enter how many element you want to delete "));
color.splice(index,howMany);
document.write("<br>"+color);

//Q10:
var arr = [320, 230, 480, 120];
document.write("score of students "+arr);
document.write("<br>Ascending order "+arr.sort());

//Q11:
var city = ["karachi", "Lahore", "Islamabad", "Quetta", "peshawer"];
var selected = ["Islamabad", "Quetta", "peshawer"];
document.write("<br> <h1>cities list:</h1>\n "+city);
document.write("<br> <h1>Selected city:</h1>\n"+selected);

//Q12:

var arr2 = ["This", " is ", "my", "cat"];
var result = arr2.join("");
document.write("<br> <h1>Array:</h1>\n"+arr2);
document.write("<br> <h1>String:</h1>\n"+result);

//Q13: FIFO
var device = [];
var i =0;
while(i==0){
    var inp = prompt("Enter values: ");
    var data = device.unshift(inp);
    var out = device.pop(data);
    document.write("<h1> out </h1> \n"+out);
    i = prompt("Enter 1 for terminate: ");
}

//Q14: LIFO
// var device = [];
// var i =0;
// while(i==0){
//     var inp = prompt("Enter values: ");
//     var data = device.unshift(inp);
//     var out = device.pop();
//     document.write("<h1> out </h1> \n"+out);
//     i = prompt("Enter 1 for terminate: ");
// }

//q15
var mobiles = ["Apple", "Samsung", "Motorola" , "Nokia", "Sony", "Haier"];
document.write("<br><select>");
for(var i =0; i<mobiles.length; i++){
    document.write("<option>"+mobiles[i]+ "</option>");
}
document.write("<br></select>");

