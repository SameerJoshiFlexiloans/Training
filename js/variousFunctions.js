console.log("Demonstrating various functions of javascript");
function mathFunctions(){

    var number = 9;

    var floatNumber=2.7;

    console.log("Number is "+number);

    console.log("Square of number "+Math.pow(number,2));

    console.log("Cube of number : "+Math.pow(number,3));

    console.log("Square root of number "+Math.sqrt(number));

    console.log("Maximum number between 12 20 30 is "+Math.max(10,20,30));

    console.log("Minimum number between 12 20 30 is "+Math.min(10,20,30));

    console.log("Random number generated is "+Math.random());

    console.log("Round up value of 2.7 is "+Math.round(floatNumber));

    console.log("Ceiling value of 2.7 is "+Math.ceil(floatNumber));

    console.log("Floor value of 2.7 is "+Math.floor(floatNumber));

    console.log("Absolute addition of numbers -3 -7 is "+Math.abs(-3 + -7));
}

function arrayFunctions(){
    var numbers=[1,2,3,4,5,6,7,8];
    console.log("Original array: "+numbers);

    console.log("Square of all numbers in array uaing 'map' is "+numbers.map(number => Math.pow(number,2)));

    console.log("All even numbers in the array using 'filter' is "+numbers.filter(number => number%2==0));

    console.log("All odd numbers in the array using filter are "+numbers.filter(number => number%2));

    console.log("Adding(Pushing) numbers to the array ");
    numbers.push(9,10);
    console.log("Numbers array after push of 9 "+numbers);

    console.log("Removing(pop) element from the array");
    numbers.pop();
    console.log("numbers array after pop "+numbers);

    console.log("Reversed array using 'reverse' method is "+numbers.reverse());

    console.log("Index of 7 in array is "+numbers.indexOf(7));

    var anotherArray = [9,5,7,2,4,1,0];
    console.log("Unsorted array "+anotherArray+" Sorted array "+anotherArray.sort());

    console.log("Deleting some elements from the array: Original array: "+anotherArray);
    anotherArray.splice(3,2);
    console.log("Array after splice operation: "+anotherArray);

    var values=[[1,2,3],[4,5,6],[7,8,9]];
    console.log("Iterating through 3d array using forEach");
    values.forEach(value => console.log(value));

    console.log("Converting array to string using join method with seperator '-' : "+numbers.join("-"));

    console.log("Check if 7 is inside array or not "+numbers.includes(7));

    console.log("Check if 10 is in the array or not "+numbers.includes(10));
    console.log("Original array is "+numbers);
}

let fullname="Sameer Santosh Joshi";
const id=123;
var college="Don Bosco Institute of Technology";


function stringFunctions(){
    console.log("Length of string is "+fullname.length);

    var id=456;
    console.log(id);

    console.log("Index of 'Bosco' in college "+college.indexOf("Bosco"));

    let string1="One";
    let string2="OneTwo";
    console.log("First string: "+string1+" Second string "+string2);
    console.log("concatenated string is "+string1.concat(string2));

    console.log("Original string "+fullname);
    console.log("Check if string ends with 'Joshi' "+fullname.endsWith("Joshi"));

    console.log("Finding character at index 3 in full name "+fullname.charAt(3))

    console.log("Finding last index of given character in given string "+fullname.lastIndexOf('e'));

    console.log("Matching two different strings using match() "+string2.match(string1));

    console.log("Converting full name to uppercase "+fullname.toUpperCase());
    console.log("Converting string to lowercase "+college.toLowerCase());

    console.log("Creating substring from college : "+college.substr(4,7));

    console.log(string1.padEnd(9,"."));
    console.log(string1.padStart(9,'.'));

    console.log("Spliting string into each words "+college.split(" ",5));

    console.log("Check if college starts with 'Don' "+college.startsWith("Don"));

    console.log("Original name "+fullname);
    console.log("Name after replacing Sameer with Tanmay : "+fullname.replace("Sameer","Tanmay"));

    var string3="   This is string. This is thirdd string   ";
    console.log("Before trim operation "+string3);
    console.log("After trim operation "+string3.trim());

    console.log("Creating substring using two indexes "+college.substring(3,8));
    
}

stringFunctions();