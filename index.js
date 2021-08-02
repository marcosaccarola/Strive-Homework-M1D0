// JavaScript basic [150 exercises with solution]
// source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
function ex1() {
    var d = new Date();
    function todayIs() {
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
        m = m < 10 ? "0" + m : m;
        var s = d.getSeconds();
        s = s < 10 ? "0" + s : s;
        document.getElementById("ex1Time").innerHTML = "Current time is : " + h + ampm + " : " + m + " : " + s
    }
    todayIs();
    whatTime();
}

// 2. Write a JavaScript program to print the contents of the current window.
function ex2() {
    window.print()
};

// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function ex3() {
    var d = new Date();
    var day = d.getDate();
    day = day < 10 ? "0" + day : day;
    var month = d.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var year = d.getFullYear();
    document.getElementById("ex3").innerHTML = day + "/" + month + "/" + year;
};

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
function ex4() {
    var s1 = Number(document.getElementById("s1").value);
    var s2 = Number(document.getElementById("s2").value);
    var s3 = Number(document.getElementById("s3").value);
    var hp = (s1 + s2 + s3) / 2;
    var a = hp * (hp - s1) * (hp - s2) * (hp - s3); //Heron's formula
    var area = Math.sqrt(a);
    document.getElementById("ex4square").innerHTML = area;
};


// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
function ex5() {
    var a = String(document.getElementById("ex5input").value);
    var b = a.slice(-1); // taking last letter
    var c = a.slice(0, -1); // taking string without last letter (starting point, positon to remove)
    var d = b.concat(c);
    document.getElementById("ex5result").innerHTML = d;
};
function ex5bis() {
    var a = String(document.getElementById("ex5result").value);
    var b = a.slice(-1); // taking last letter
    var c = a.slice(0, -1); // taking string without last letter (starting point, positon to remove)
    var d = b.concat(c);
    document.getElementById("ex5result").innerHTML = d;
}
// ...and a program to reverse a word using arrays.
function ex5alt() {
    var a = String(document.getElementById("textToReverse").value);
    var b = a.split("");
    var c = b.reverse();
    var d = c.join();
    document.getElementById("ex5alt").innerHTML = d;
};

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function ex6() {
    var a = Number(document.getElementById("ex6input").value);
    b = a % 4 === 0 ? (a % 100 === 0 ? (a % 400 ? true : false) : true) : false;
    document.getElementById("ex6result").innerHTML = b;
}

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
a = new Date();
b = a.getDay();
c = b === 0 ? true : false;


// for (var year = 2014; year <= 2050; year++)
//     {
//     var d = new Date(year, 0, 1);
//     if ( d.getDay() === 0 )
//     console.log("1st January is being a Sunday  "+year);
//     };

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 
function ex8() {
    var a = Number(document.getElementById("ex8input").value);
    var b = Math.floor(Math.random() * 10 + 1);
    var yes = "Good Work";
    var not = "Not matched";
    var c = a === b ? yes : not;
    document.getElementById("ex8randomNumber").innerHTML = b;
    document.getElementById("ex8return").innerHTML = c;
    c === yes ? document.getElementById("ex8return").classList.add("green") : document.getElementById("ex8return").classList.add("red");
};

// 9. Write a JavaScript program to calculate days left until next Christmas.
function ex9() {
    var aDay = 1000 * 60 * 60 * 24
    var today = new Date();
    var christmasDay = new Date(today.getFullYear(), 11, 26);
    if (today.getMonth() === 11 && today.getDay() > 25) { christmasDay.setFullYear(christmasDay.getFullYear() + 1) };
    var daysLeft = Math.round((christmasDay - today) / aDay);
    document.getElementById("ex9return").innerHTML = daysLeft + (" days left to Christmas!");
};

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function ex10multiply() {
    var a = Number(document.getElementById("1stNumber").value);
    var b = Number(document.getElementById("2ndNumber").value);
    var c = a * b;
    document.getElementById("ex10return").innerHTML = "The result is: " + c;
};
function ex10divide() {
    var a = Number(document.getElementById("1stNumber").value);
    var b = Number(document.getElementById("2ndNumber").value);
    var c = a / b;
    document.getElementById("ex10return").innerHTML = "The result is: " + c;
};

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function ex11toCelsius() {
    var a = Number(document.getElementById("ex11input").value);
    var b = Math.round((a - 32) * (5 / 9));
    document.getElementById("ex11return").innerHTML = b;
};
function ex11toFahrenheit() {
    var a = Number(document.getElementById("ex11input").value);
    var b = Math.round(a * (9 / 5) + 32);
    document.getElementById("ex11return").innerHTML = b;
};

// 12. Write a JavaScript program to get the website URL (loading page).
function ex12() {
    document.getElementById("ex12return").innerHTML = window.location.href;
};

// 13. Write a JavaScript exercise to create a variable using a user-defined name.
function ex13() {
    var var_name = String(document.getElementById("ex13inputValue").value);
    var n = String(document.getElementById("ex13inputName").value);
    this[var_name] = n;
    document.getElementById("ex13return").innerHTML = "var " + n + " = " + var_name + ";";
};

// 14. Write a JavaScript exercise to get the extension of a filename.
function ex14() {
    var a = String(document.getElementById("ex14input").value);
    var b = a.split(".");
    var c = b[1];
    document.getElementById("ex14result").innerHTML = c;
};

// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function ex15() {
    var a = Number(document.getElementById("ex15input").value);
    console.log(a);
    var b = a <= 13 ? 13 - a : (a - 13) * 2;
    console.log(b);
    document.getElementById("ex15return").innerHTML = b;
};

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 
function ex16() {
    var a = Number(document.getElementById("ex16input1").value);
    var b = Number(document.getElementById("ex16input2").value);
    var c = a === b ? 3 * (a + b) : a + b;
    document.getElementById("ex16return").innerHTML = c;
};

// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function ex17() {
    var a = Number(document.getElementById("ex17input").value);
    var b = Math.abs(a - 19);
    var c = b > 19 ? 3 * b : 1 * b;
    document.getElementById("ex17return").innerHTML = c;
};

// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function ex18() {
    var a = Number(document.getElementById("ex18input1").value);
    var b = Number(document.getElementById("ex18input2").value);
    var c = a === 50 || b === 50 || a + b === 50 ? true : false;
    document.getElementById("ex18return").innerHTML = c;
};

// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function ex19() {
    var a = Number(document.getElementById("ex19input").value);
    var b = a >= 20 && a <= 100 || a === 400 ? true : false;
    document.getElementById("ex19return").innerHTML = b;
};

// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
function ex20() {
    var a = Number(document.getElementById("ex20input1").value);
    var b = Number(document.getElementById("ex20input2").value);
    var c = (a < 0 && b > 0) || (a > 0 && b < 0) ? true : false;
    document.getElementById("ex20return").innerHTML = c;
};

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
function ex21() {
    var a = String(document.getElementById("ex21input").value);
    var b = a.slice(0, 2);
    var c = b === "Py" ? c = a : c = "Py" + a;
    document.getElementById("ex21return").innerHTML = c
};

// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function ex22() {
    var a = String(document.getElementById("ex22input1").value);
    var b = Number(document.getElementById("ex22input2").value);
    var c = a.substring(b - 1, b);
    var d = a.replace(c, "");
    document.getElementById("ex22return").innerHTML = d;
};

// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
function ex23() {
    var a = String(document.getElementById("ex23input").value);
    console.log(a);
    var b=a.charAt(a.length-1)+a.substring(1,a.length-1)+a.charAt(0);
    console.log(b);
    document.getElementById("ex23return").innerHTML = b;
};

// 24. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
function ex24(){
    var a=String(document.getElementById("ex24input").value);
    var b=a.charAt(0);
    document.getElementById("ex24result").innerHTML=b+a+b;
};

// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
function ex25(){
    var a=Number(document.getElementById("ex25input").value);
    var b=a%3===0||a%7===0?true:false;
    document.getElementById("ex25result").innerHTML=b;
};

// 26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
function ex26(){
    var a=String(document.getElementById("ex26input").value);
    var b=a.substr(-3,3);
    document.getElementById("ex26return").innerHTML=b+a+b;
};

// 27. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function ex27(){
    var a=String(document.getElementById("ex27input").value);
    var b=a.substr(0,4);
    var c=b==="Java"?true:false;
    document.getElementById("ex27return").innerHTML=c;
};

// 28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function ex28(){
    var a=Number(document.getElementById("ex28input1").value);
    var b=Number(document.getElementById("ex28input2").value);
    var c=((a>=50&&99>=a)&&(b>=50&&99>=b))?true:false;
    document.getElementById("ex28return").innerHTML=c;
};

// 29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
function ex29(){
    var a=Number(document.getElementById("ex29input1").value);
    var b=Number(document.getElementById("ex29input2").value);
    var c=Number(document.getElementById("ex29input3").value);
    var d=((c>=50&&99>=c)||(b>=50&&99>=b)||(a>=50&&99>=a))?true:false;
    document.getElementById("ex29return").innerHTML=d;
};

// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
function ex30(){
    var a=String(document.getElementById("ex30input").value);
    var b=a.substr(4,10);
    var c=b==="Script"?a.substring(0,4):a;
    document.getElementById("ex30return").innerHTML=c;
};

// 31. Write a JavaScript program to find the largest of three given integers.
function ex31(){
    var a=Number(document.getElementById("ex31input1").value);
    var b=Number(document.getElementById("ex31input2").value);
    var c=Number(document.getElementById("ex31input3").value);
    var d=Math.max(a,b,c);
    document.getElementById("ex31result").innerHTML=d;
};

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function ex32(){
    var a=Number(document.getElementById("ex32input1").value);
    var b=Number(document.getElementById("ex32input2").value);
    var c=Math.abs(a-100);
    var d=Math.abs(b-100);
    var e=c>d?b:a;
    document.getElementById("ex32return").innerHTML=e;
};

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function ex33(){
    var a=Number(document.getElementById("ex33input1").value);
    var b=Number(document.getElementById("ex33input2").value);
    var c=((40<=a&&a<=60)||(70<=a&&a<=100))&&((40<=b&&b<=60)||(70<=b&&b<=100))?true:false;
    document.getElementById("ex33result").innerHTML=c;
};

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function ex34(){
    var a=Number(document.getElementById("ex34input1").value);
    var b=Number(document.getElementById("ex34input2").value);
    var c=((40<=a&&a<=60)&&(40<=b&&b<=60))?true:false;
    var d=c==true?Math.max(a,b):"Almost one of two numbers is not included in the given range."
    document.getElementById("ex34result").innerHTML=d;
};

// 35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
function ex35(){
    var a=String(document.getElementById("ex35input1").value);
    var b=String(document.getElementById("ex35input2").value);
    var c=a.charAt(2-1);
    var d=a.charAt(3-1);
    var e=a.charAt(4-1);
    var f=b==c||b==d||b==e?true:false;
    document.getElementById("ex35result").innerHTML=f;
};

// 35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
function ex35b(){
    var a=String(document.getElementById("ex35input1").value);
    var b=String(document.getElementById("ex35input2").value);
    var c=false;
    for(let i=0; i<a.length; i++){
        if ((a.charAt(i)==b)&&(i>0&&4>i)){
            c=true;
            break;
        }
    }
    document.getElementById("ex35result").innerHTML=c;
};

// 36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.
function ex36(){
    var a=Number(document.getElementById("ex36input1").value);
    var as=a.toString();
    var b=Number(document.getElementById("ex36input2").value);
    var bs=b.toString();
    var c=Number(document.getElementById("ex36input3").value);
    var cs=c.toString();
    var d=as.charAt(as.length-1)===bs.charAt(bs.length-1)&&as.charAt(as.length-1)===cs.charAt(cs.length-1)?true:false;
    document.getElementById("ex36result").innerHTML=d;
};

// 37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
function ex37(){
    var a=String(document.getElementById("ex37input").value);
    if (a.length<4){
        b=a.toUpperCase();
        }else{
            b=a.substr(0,3);
            b=b.toLowerCase();
        }
    document.getElementById("ex37result").innerHTML=b;
};

// 38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.
function ex38(){
    var a=Number(document.getElementById("ex38input1").value);
    var b=Number(document.getElementById("ex38input2").value);
    var c=Number(document.getElementById("ex38input3").value);
    100>=a,b,c>=89?d=true:d=false;
    document.getElementById("ex38markGrade").innerHTML=d;
    var e=Number(document.getElementById("ex38input4").value);
    e>=90?f=true:f=false;
    document.getElementById("ex38finalExamGrade").innerHTML=f;
};

// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function ex39(){
    var a=Number(document.getElementById("ex39input1").value);
    var b=Number(document.getElementById("ex39input2").value);
    var c=(50<=a+b)&&(a+b<=80)?65:80;
    document.getElementById("ex39return").innerHTML=c;
};

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8
function ex40(){
    var a=Number(document.getElementById("ex40in1").value);
    var b=Number(document.getElementById("ex40in2").value);
    var c=(a===8)||(b===8)||(a-b===8)||(b-a===8)||(a+b===8)?true:false;
    document.getElementById("ex40return").innerHTML=c;
};

// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
function ex41(){
    var a=Number(document.getElementById("ex41in1").value);
    var b=Number(document.getElementById("ex41in2").value);
    var c=Number(document.getElementById("ex41in3").value);
    if((a===b)&&(b===c)){
        d=30;
    }else if((a===b)||(b===c)||(a===c)){
        d=40;
    }else{
        d=20;
    }
    document.getElementById("ex41return").innerHTML=d;
};

// 42. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
function ex42(){
    
};

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function ex43(){
    var a=Number(document.getElementById("ex43in1").value);
    var b=Number(document.getElementById("ex43in2").value);
    var c=Number(document.getElementById("ex43in3").value);
    var rAll, r1, r2, r3;
    rAll=r1=r2=r3="";
    if (a%10===b%10,b%10===c%10){
        rAll="the three numbers have the same rightmost digit";
    }else{
        a%10===b%10?r1="first and second have the same rightmost digit":r1="";
        b%10===c%10?r1="second and third have the same rightmost digit":r2="";
        a%10===c%10?r1="first and third have the same rightmost digit":r3="";
    };
    var d=rAll+r1+r2+r3;
    document.getElementById("ex43out").innerHTML=d;

};

// 44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.
function ex44(){
    var a=Number(document.getElementById("ex44in1").value);
    var b=Number(document.getElementById("ex44in2").value);
    var c=Number(document.getElementById("ex44in3").value);
    var d=(a>=20&&(a>b||a>c))||(b>=20&&(b>a||b>c))||(c>=20&&(c>b||c>a))?true:false;
    document.getElementById("ex44out").innerHTML=d;
};

// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
function ex45(){
    var a=Number(document.getElementById("ex45in1").value);
    var b=Number(document.getElementById("ex45in2").value);
    var c=a===15||b===15||a+b===15||Math.abs(a-b)===15?true:false;
    document.getElementById("ex45out").innerHTML=c;
};

// 46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.
function ex46(){
    var a=Number(document.getElementById("ex46in1").value);
    var b=Number(document.getElementById("ex46in2").value);
    var c=(a%7===0||a%11===0)&&(b%7!==0&&b%11!==0)||(b%7===0||b%11===0)&&(a%7!==0&&a%11!==0)?true:false;
    document.getElementById("ex46out").innerHTML=c;
};

// 47. Write a JavaScript program to check whether a given number is presents in the range 40..10000. For example 40 presents in 40 and 4000.
function ex47(){
    var a=Number(document.getElementById("ex47in").value);
    var b=40<=a&&a<=10000?true:false;
    document.getElementById("ex47out").innerHTML=b;
};

// 48. Write a JavaScript program to reverse a given string.
function ex48(){
    var a=String(document.getElementById("ex48in").value);
    var b=a.split("");
    var c=b.reverse();
    var d=c.toString();
    var e=d.replaceAll(",","");
    document.getElementById("ex48out").innerHTML=e;
};

// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function ex49(){
    var a=String(document.getElementById("ex49in").value);
    var b=a.split("");
    // var c="abcdefghijklmnopqrstuvwxyz";
    // var d=b.split("");
    // Caesar cipher:
    for(var i=0;i<b.length;i++){
        switch(b[i]){
            case " ":
                break;
            case "z": b[i]="a";
            break;
            case "Z": b[i]="A";
            break;
            default:
                b[i]=b.fromCharCode(1+b[i].charAt(0));
        };
    document.getElementById("ex49out").innerHTML=b;
    };
};

// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.
function ex50(){
    var a=String(document.getElementById("ex50in").value);
    var b=a.split(" ");
    for(i=0;i<b.length;i++){
        b[i]=b[i][0].toUpperCase()+b[i].substr(1);
    };
    c=b.join(" ");
    document.getElementById("ex50out").innerHTML=c;
};