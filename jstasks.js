// Task no 1 Alerts

alert("how are you")

alert("2" + "5")
//.................................

// Task no 2 Variables for strings

let naMe = prompt("Enter your name")
let messaGe = alert("Hello ! " + naMe)
//.......................................

//Task no 3 Variables for Numbers

let no1 = Number(prompt("plz enter num1"))
let no2 = Number(prompt("plz enter num2"))
let sum = no1 + no2
alert(sum)
//..........................................

//Task no 4 Variable name legal and illegal

alert(" variable name contain letters, numbers, doller signs, and underscores (camel cases) Let num = 2, Let fruit = apple, Let message = (hello in string) , Let name = (name in string)")
document.write("illegal variable name contain, varialbe name cannot be a java script keywords, like( let match&score = , let alert = pak etc ) ")
//...............................

// Task no 5 Math expressions Familear operator

let nmbr1 = Number(prompt("Enter first number"))
let operation = prompt( "Enter the operator " + "* , / , - , +")
let nmbr2 = Number(prompt("Enter second number"))
let reesult;
switch(operation) {
    case '+':
        reesult = nmbr1 + nmbr2;
        break;
    case '*':
        reesult = nmbr1 * nmbr2;
        break;
    case '/':
        reesult = nmbr1 / nmbr2;
        break;
    case '-':
        reesult = nmbr1 - nmbr2;
        break;
}

alert("The result is " + reesult)

//............................................

//Task no 6 Math expressions unfamilear operator

let firstnum = 9
let secondnum = 2
alert("Reminder is :" + " " + firstnum % secondnum)

//,,,,

let num = 2

alert("initial value is : " + num)
alert("After increment :" + ++num)
alert("After decrement :" + --num)

alert(num++ + num * num-- - num / ++num)
//................................................

//TAsk no 7 Maath expressions eliminating ambiguity

let expressions = (9 + 3) - 2 * 5 / 2
alert(expressions)
alert((4 + 3) - 2 * 2 / 4)
//...................................

//Task no 8 Cancatenating text strings

alert("Hello" + " " + "World" + " " + "!")

let message = "It's me Muhammad Umar !"
alert(message)
//...................................

//Task no 9 Prompts

let namee = prompt("Your Name :")
let Age = Number(prompt("Your Age :"))
alert("Your name is" + " " + namee + ", " + "You are " + Age + " " + "year old.")
//......................................

//Task no 10 if statements

let numb = Number(prompt("Enter any Number"))
if(numb > 0){
    alert("This is a positive number")
}
else if( numb < 0){
    alert("This is a negative number")
}
else{
    alert("You click zero number")
}
//........................................

//Task no 11 Compoarison operator

let fnumb = Number(prompt("Enter first number"))
let op = prompt("Enter operator" + "< , > , ===")
let snumb = Number(prompt("Enter second number"))
if(fnumb > snumb){
    alert("First number is greator than second number")
} 
else if (fnumb < snumb){
    alert("First number is less than second number")
}
else if(fnumb === snumb){
    alert("Both numbers are equal")
}
//............................................

//Task no 12 if-else and else-if statement

let markss = Number(prompt("Ente you marks"))
if(markss >= 85){
    alert("Grade : A1")
}
else if(markss >= 75){
    alert("Grade : A")
}
else if(markss >= 65){
    alert("Grade : B")
}
else if(markss >= 55){
    alert("Grade : C")
}
else if(markss >= 45){
    alert("Grade : D")
}
else{
    alert("Failed ! ")
}
//...............................................

//Task no 13 Testing set of conditions

let age = Number(prompt("Enter your age"))
let std = prompt("Are you a student")
if(age < 18 && std == "yes"){
    alert("You are a minor student")
}
else if(age < 18 && std == "no"){
    alert("You are a minor, but not a student")
}
else if (age >= 18 && std == "yes"){
    alert("You are an adult student")
}
else if(age >= 18 && std == "no"){
    alert("You are an adult, but not a student")
}
//...............................................

//Task no 14 if statement nested

let username = prompt("Your name")
let pass = prompt("Your password")
if(username == "umar"){
    if(pass == 12345){
        alert("Welcome!")
    }
    else{
        alert("incorrect password")
    }
}
else{
    alert("Try again")
}
//................................................

//Task no 15 Arrays

let fruits = ["mango"," banana"," apple"," guvava"," peach"]
for (let i = 0; i < fruits.length; i++){
    alert(fruits[i])
}
//...............................................

//Task no 16 Array adding and removing elements

let fruit = ["orange", "pineapple ", "grapes"]
fruit.unshift("melon")
fruit.push("peach")
fruit.shift()
fruit.pop()
console.log(fruit)
//..............................................

//Task no 17 Arrays removing inserting and extracting

let fruitss = ["orange"," apple", "grapes", "melon", "banana"]
fruitss.splice(2, 1);
fruitss.splice(2 , 0 ,"pinapple")
let fruitssPortion = fruitss.splice(2, 3)
console.log(fruitss)
console.log(fruitssPortion)
//...............................................

//Task no 18 for loops

for(let i = 1 ; i <= 10 ; i++){
    console.log(i)
}
//---------------------------------------------------JS Part 1 End----------------------------------------------

//...................................................JS Part 2.................................................

//Task no 1 Basic Calculator

let num1 = Number(prompt("Enter first number"))
let operator = prompt("Enter operator" + "+,-,*,/")
let num2 = Number(prompt("Enter second number"))
let result;
switch(operator){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;        
}
alert("The result is : " + result)
//...........................................

//Task no 2 Greeting message

let name = prompt("Your name ?")
let color = prompt("Your favorite color ?")
alert("Hello" + " " + name + ", " + "I see your favorite color is" + " " + color + "!")
//.............................................

//Task no 3 Odd or Even number

let number = Number(prompt("Ente any number"))
if(number % 2 == 0){
    alert(number + " is an even number")
}
else{
    alert(number + " is an odd number")
}
//...........................................

//Task no 4 Favourite fruits array

let fruitt = ["mango", "banana", "grapes", "melon", "apple"]
fruitt.unshift("pinapple")
fruitt.push("guvava")
fruitt.shift()
fruitt.pop()
console.log(fruitt)
//..........................................

//Task no 5 Quizz

let correct_answers = 0
let question1 = Number(prompt("What is the answer of 2 + 2 ?"))
if(question1 == "4"){
    alert("corect answer")
    alert(correct_answers += 1)   
}
else{
    alert("wrong answer")
}
let question2 = prompt("What is the capital of Pakistan ?")
if(question2 == "islamabad"){
    alert("correct answer")
    alert(correct_answers += 1)
}
else{
    alert("wrong answer")
}
let question3 = prompt("Which planet is known as red planet ?")
if(question3 == "mars"){
    alert("correct answer")
    alert(correct_answers += 1) 
}
else{
    alert("wrong answer")
}
alert("You got " + correct_answers + "out of 3!")
//...............................................

//Task no 5 Grade Calculator

let marks = Number(prompt("Ente you marks"))
if(marks >= 85){
    alert("Grade : A1")
}
else if(marks >= 75){
    alert("Grade : A")
}
else if(marks >= 65){
    alert("Grade : B")
}
else if(marks >= 55){
    alert("Grade : C")
}
else if(marks >= 45){
    alert("Grade : D")
}
else{
    alert("Failed ! ")
}
//...........................................

//Task no 7 Countdown usings loops

for(let index = 10; index >=1; index--){
    console.log(index)
}
alert("Countdown Complete!")
//...........................................

//Task no 8 Array manipulation

let array = ["1", "2" , "3", "4", "5", "6", "7", "8", "9", "10"]
array.shift()
array.pop()
array.unshift("10")
array.push("1")
array.splice(2, 4)

alert("Final Array " + array)

//---------------------------------------The End!------------------------------------------------------------