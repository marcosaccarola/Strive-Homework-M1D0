// JavaScript basic [150 exercises with solution]
// source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
function ex1(){
        var d = new Date();
        function todayIs(){
            var weekday = Array(7);
            weekday[0] = "Sunday"
            weekday[1] = "Monday"
            weekday[2] = "Tuesday"
            weekday[3] = "Wednesday"
            weekday[4] = "Thursday"
            weekday[5] = "Friday"
            weekday[6] = "Saturday"
            var n = weekday[d.getDay()];
            document.getElementById("ex1Day").innerHTML = "Today is : " + n + "."
        }
        function whatTime() {    
            var h = d.getHours();
            var ampm = h >= 12 ? " PM" : " AM";
            h = h % 12;
            h = h ? h : 12; // the hour '0' should be '12'
            var m = d.getMinutes();
            m = m < 10 ? "0"+m : m;
            var s = d.getSeconds();
            s = s < 10 ? "0"+s : s;
            document.getElementById("ex1Time").innerHTML = "Current time is : " + h + ampm + " : " + m + " : " + s
        }
    todayIs();
    whatTime();
}

// 2. Write a JavaScript program to print the contents of the current window.
function ex2(){
    window.print()
};

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function ex3(){
    var d = new Date();
    var day = d.getDate();
    day = day < 10 ? "0"+day : day;
    var month = d.getMonth()+1;
    month = month < 10 ? "0"+month : month;
    var year = d.getFullYear();
    document.getElementById("ex3").innerHTML = day + "/" + month + "/" + year;
};

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
function ex4(){
    var s1 = Number(document.getElementById("s1").value);
    var s2 = Number(document.getElementById("s2").value);
    var s3 = Number(document.getElementById("s3").value);  
    var hp = (s1+s2+s3)/2;
    var a = hp*(hp-s1)*(hp-s2)*(hp-s3); //Heron's formula
    var area = Math.sqrt(a);
    document.getElementById("ex4square").innerHTML = area;
};


// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function ex5(){
var a = String(getElementById("ex5input").value);
var b = a.slice(-1); // slicing last letter
var c = a.slice(0, -1); // removing last letter (starting point, positon to remove)
var d = b.concat(c);
document.getElementById("ex5result").innerHTML = d;
};

// ...and a program to reverse a word using arrays.
function ex5bis(){
    var a = String(document.getElementById("textToReverse").value);
    var b = a.split("");
    var c = b.reverse();
    var d = c.join();
    document.getElementById("ex5bis").innerHTML = d;
};