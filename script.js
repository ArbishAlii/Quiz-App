const questions = [
    {
        'que': 'Which of the following is a Markup Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
      'que':'Which HTML element is used to define the largest heading?',

'a': '<h1>',
'b': '<heading>',
'c':  '<h6>',
'd': '<head>',
'correct': 'a'
    },
    {
        'que': 'Which attribute is used to specify an alternate text for an image, if the image cannot be displayed?',
        'a': 'title',
        'b': 'src',
        'c': 'alert',
        'd': 'link',
        'correct': 'c'
    },
    {
        'que': 'How can you apply a class named "example" to an HTML element?',
        'a': '<div name="example">',
        'b': '<div class="example">',
        'c': '<div id="example">',
        'd': '<div style="example">',
        'correct': 'b'
    },
    {
        'que': 'Which CSS property is used to change the background color?',
        'a': 'bgcolor',
        'b': 'color',
        'c': 'background-color',
        'd': 'background',
        'correct': 'c'
    },
    {
        'que': 'How do you select an element with the id "header" in CSS?',
        'a': '#header',
        'b': '.header',
        'c': 'header',
        'd': '*header',
        'correct': 'a'
    },
    {
        'que': 'Which of the following is the correct syntax to create a function in JavaScript?',
        'a': 'function = myFunction()',
        'b': 'function myFunction()',
        'c': 'create function myFunction()',
        'd': ' function:myFunction()',
        'correct': 'b'
    },
    {
        'que': 'What is the correct way to write a JavaScript array?',
        'a': 'var colors = "red", "green", "blue"',
        'b': 'var colors = (1:"red", 2:"green", 3:"blue")',
        'c': 'var colors = ["red", "green", "blue"]',
        'd': 'var colors = {"red", "green", "blue"}',
        'correct': 'c'
    },
    {
        'que': ' Which of the following HTML elements is used to create a hyperlink?',
        'a': '<link>',
        'b': '<a>',
        'c': '<href>',
        'd': '<nav>',
        'correct': 'b'
    },
    {
        'que': 'How can you make a list that lists the items with bullets in HTML?',
        'a': '<ol>',
        'b': '<ul>',
        'c': '<li>',
        'd': '<dl>',
        'correct': 'b'
    }


]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const Quesbox = document.getElementById("Quesbox")
const optionInput = document.querySelectorAll('.option')
const loadQues = () => {
    if (index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]

    Quesbox.innerText = `${index + 1} ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQues();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
           answer = input.value;
           
        }
    }
    )
    return answer;
}
const reset = () => {
    optionInput.forEach(
        (input) => {
        input.checked = false;
}
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>Thank you for the Quiz.</h3>
    <h2>${right}/${total} are Correct!</h2>
    `
}
loadQues();