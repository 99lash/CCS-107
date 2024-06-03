

const quizData = [
  //Question 1
  {
    question: "Which language runs in a web browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  //Question 2
  {
    question: "What does 'CSS' stand for?",
    choices: ["Counter Strike: Source", "Cascading Style Sheets", "Corrective Style Syntax", "Computer Style Sections"],
    correct: 1
  },
  //Question 3
  {
    question: "What is the purpose of the 'alt' attribute in an img tag?",
    choices: ["To provide an alternative text", "To change the image source", "To make the image load faster", "To style the image"],
    correct: 0
  },
  //Question 4
  {
    question: "What is the method to add an element at the end of an array?",
    choices: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  //Question 5
  {
    question: "Which object is used to store and manipulate text usually in multiples of 16-bit units?",
    choices: ["String", "Character", "StringBuilder", "TextBlock"],
    correct: 0
  },
  //Question 6
  {
    question: "What does HTML stand for?",
    choices: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Markdown Language", "Hyper Text Marking Language"],
    correct: 1
  },
  //Question 7
  {
    question: "What year was JavaScript created?",
    choices: ["1995", "1994", "1993", "1996"],
    correct: 0
  },
  //Question 8
  {
    question: "Which tool can you use to ensure code quality?",
    choices: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correct: 3
  },
  //Question 9
  {
    question: "What is 'this' keyword in JavaScript?",
    choices: ["Refers to the current object", "Refers to the previous object", "Refers to the global object", "Refers to the new object being created"],
    correct: 0
  },
  //Question 10
  {
    question: "How do you declare a JavaScript variable?",
    choices: ["var name", "variable name", "v name", "int name"],
    correct: 0
  },
  //Question 11
  {
    question: "Which statement creates a new object?",
    choices: ["var obj = new Object()", "var obj = Object()", "var obj = new Object[]", "var obj = new Array()"],
    correct: 0
  },
  //Question 12
  {
    question: "How to write an IF statement in JavaScript?",
    choices: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
    correct: 2
  },
  //Question 13
  {
    question: "How does a WHILE loop start?",
    choices: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10", "while (i++ < 10)"],
    correct: 1
  },
  //Question 14
  {
    question: "How can you add a comment in a JavaScript?",
    choices: ["*This is a comment", "//This is a comment", "'This is a comment", "(This is a comment)"],
    correct: 1
  },
  //Question 15
  {
    question: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1 = 'red', 2 = 'green', 3 = 'blue')"],
    correct: 2
  },
  //Question 16
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onmouseclick", "onclick", "onchange", "onmouseover"],
    correct: 1
  },
  //Question 17
  {
    question: "How do you find the number with the highest value of x and y?",
    choices: ["Math.ceil(x, y)", "Math.max(x, y)", "Math.high(x, y)", "Math.top(x, y)"],
    correct: 1
  },
  //Question 18
  {
    question: "What method is used to round a number to the nearest integer?",
    choices: ["Math.round()", "Math.rnd()", "Math.nearest()", "Math.fix()"],
    correct: 0
  },
  //Question 19
  {
    question: "What does JSON stand for?",
    choices: ["JavaScript Object Notation", "Java Standard Output Network", "JavaScript Output Naming", "Java Source Open Network"],
    correct: 0
  },
  //Question 20
  {
    question: "What is a correct syntax to output 'Hello World' in JavaScript?",
    choices: ["print('Hello World')", "console.log('Hello World')", "echo 'Hello World'", "response.write('Hello World')"],
    correct: 1
  },
  //Question 21
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    choices: ["script", "style", "css", "link"],
    correct: 1
  },
  //Question 22
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    choices: ["title", "src", "alt", "longdesc"],
    correct: 2
  },
  //Question 23
  {
    question: "How do you create a function in JavaScript?",
    choices: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
    correct: 0
  },
  //Question 24
  {
    question: "Which of the following function of Array object adds and/or removes elements from an array?",
    choices: ["toSource()", "sort()", "splice()", "unshift()"],
    correct: 2
  },
  //Question 25
  {
    question: "How do you declare a JavaScript variable?",
    choices: ["v carName;", "var carName;", "variable carName;", "vec carName;"],
    correct: 1
  },
  //Question 26
  {
    question: "What will 'console.log( typeof [] );' output in the console?",
    choices: ["object", "array", "null", "undefined"],
    correct: 0
  },
  //Question 27
  {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["=", "==", ":", "!="],
    correct: 0
  },
  //Question 28

  {
    question: "Which method is used to remove the last element from an array and return that element?",
    choices: ["last()", "pop()", "push()", "end()"],
    correct: 1
  },
  //Question 29
  {
    question: "Which statement creates a new object using the 'Person' constructor?",
    choices: ["var person = new Person();", "var person = create Person();", "var person = construct Person();", "var person = new create(Person);"],
    correct: 0
  },
  //Question 30
  {
    question: "What is 'this' keyword in JavaScript?",
    choices: ["Refers to the current object", "Refers to the previous object", "Refers to the variable that is local to a function", "Refers to the global variable"],
    correct: 0
  }
];