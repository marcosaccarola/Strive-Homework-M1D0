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
    var a = String(document.getElementById("ex5input").value);
    var b = a.slice(-1); // taking last letter
    var c = a.slice(0, -1); // taking string without last letter (starting point, positon to remove)
    var d = b.concat(c);
    document.getElementById("ex5result").innerHTML = d;
};
function ex5bis(){
    var a = String(document.getElementById("ex5result").value);
    var b = a.slice(-1); // taking last letter
    var c = a.slice(0, -1); // taking string without last letter (starting point, positon to remove)
    var d = b.concat(c);
    document.getElementById("ex5result").innerHTML = d;
}
// ...and a program to reverse a word using arrays.
function ex5alt(){
    var a = String(document.getElementById("textToReverse").value);
    var b = a.split("");
    var c = b.reverse();
    var d = c.join();
    document.getElementById("ex5alt").innerHTML = d;
};

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function ex6(){
    var a = Number(document.getElementById("ex6input").value);
    b = a%4===0?(a%100===0?(a%400?true:false):true):false;
    document.getElementById("ex6result").innerHTML = b;
}

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
a=new Date();
b=a.getDay();
c=b===0?true:false;


// for (var year = 2014; year <= 2050; year++)
//     {
//     var d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )
//     console.log("1st January is being a Sunday  "+year);
//     };

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
function ex8(){
    var a= Number(document.getElementById("ex8input").value);
    var b=Math.floor(Math.random()*10+1);
    var yes="Good Work";
    var not="Not matched";
    var c=a===b?yes:not;
    document.getElementById("ex8randomNumber").innerHTML = b;
    document.getElementById("ex8return").innerHTML = c;
    c===yes?document.getElementById("ex8return").classList.add("green"):document.getElementById("ex8return").classList.add("red");
};

// 9. Write a JavaScript program to calculate days left until next Christmas.
function ex9(){
    var aDay=1000*60*60*24
    var today=new Date();
    var christmasDay=new Date(today.getFullYear(), 11, 26);
    if (today.getMonth()===11&&today.getDay()>25) {christmasDay.setFullYear(christmasDay.getFullYear()+1)};
    var daysLeft=Math.round((christmasDay-today)/aDay);
    document.getElementById("ex9return").innerHTML=daysLeft+(" days left to Christmas!");
};

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function ex10multiply(){
    var a=Number(document.getElementById("1stNumber").value);
    var b=Number(document.getElementById("2ndNumber").value);
    var c=a*b;
    document.getElementById("ex10return").innerHTML="The result is: "+c;
};
function ex10divide(){
    var a=Number(document.getElementById("1stNumber").value);
    var b=Number(document.getElementById("2ndNumber").value);
    var c=a/b;
    document.getElementById("ex10return").innerHTML="The result is: "+c;
};

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function ex11toCelsius(){
    var a=Number(document.getElementById("ex11input").value);
    var b=Math.round((a-32)*(5/9));
    document.getElementById("ex11return").innerHTML=b;
};
function ex11toFahrenheit(){
    var a=Number(document.getElementById("ex11input").value);
    var b=Math.round(a*(9/5)+32);
    document.getElementById("ex11return").innerHTML=b;
};

// 12. Write a JavaScript program to get the website URL (loading page).
function ex12(){
    document.getElementById("ex12return").innerHTML=window.location.href;
};

// 13. Write a JavaScript exercise to create a variable using a user-defined name.
function ex13(){
    var var_name = String(document.getElementById("ex13inputValue").value);
    var n = String(document.getElementById("ex13inputName").value);
    this[var_name] = n;
    document.getElementById("ex13return").innerHTML="var "+n+" = "+var_name+";";
};

// 14. Write a JavaScript exercise to get the extension of a filename.
function ex14(){
    var a=String(document.getElementById("ex14input").value);
    var b=a.split(".");
    var c=b[1];
    document.getElementById("ex14result").innerHTML=c;
};

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function ex15(){
    var a=Number(document.getElementById("ex15input").value);
    console.log(a);
    var b=a<=13?13-a:(a-13)*2;
    console.log(b);
    document.getElementById("ex15return").innerHTML=b;
};

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 
function ex16(){
    var a=Number(document.getElementById("ex16input1").value);
    var b=Number(document.getElementById("ex16input2").value);
    var c=a===b?3*(a+b):a+b;
    document.getElementById("ex16return").innerHTML=c;
};

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function ex17(){

};