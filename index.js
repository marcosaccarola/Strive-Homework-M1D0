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
}


