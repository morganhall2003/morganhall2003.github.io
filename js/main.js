var answer = 0;
var score = 0;
var selectable = true;
var questionContainerElement;
var questionElement;
var smallprintElement;
var answersElement;
var playAgainElement;
var resultElement;

document.addEventListener("DOMContentLoaded", function() {
    questionElement = document.getElementById("question");
    questionContainerElement = document.getElementById("question-container");
    smallprintElement = document.getElementById("smallprint");
    answersElement = document.getElementById("answers");
    playAgainElement = document.getElementById("play-again");
    resultElement = document.getElementById("result-container");
    questionElement.style.animation = 'fade-in 1s both';
    smallprintElement.style.animation = 'fade-in 1s both';
    answersElement.style.animation = 'fade-in 1s 0.5s both';
    document.getElementById("score").style.animation = 'fade-in 1s both';
    newQuestion();
});

function newQuestion() {

    answer = Math.floor(Math.random() * 4);

    // Choose a category
    let category = Math.floor(Math.random() * questions.length);
    let info = questions[category]['info'];
    let data = questions[category]['data'];

    // Choose a property
    let record = data[Math.floor(Math.random() * data.length)];
    let propertyNames = Object.getOwnPropertyNames(record);
    let propertyName = "name";
    while (!info[propertyName].hasQuestion) {
        propertyName = propertyNames[Math.floor(Math.random() * propertyNames.length)];
        console.log(propertyName);
    }
    let property = record[propertyName];
    let question = info[propertyName];

    // Type number stuff
    let variance = 0;
    if (typeof property == "object") {
        variance = property.variance;
        if (property.hasOwnProperty("max")) {
            while (property.max < property.value + ((3 - answer) * variance)) {
                answer += 1;
            }
        }
        if (property.hasOwnProperty("min")) {
            while (property.min > property.value + (-answer * variance)) {
                answer -= 1;
            }
        }
        property = property.value;
    }

    // Decide if inverse
    let inverse = false;
    if ((info[propertyName].hasOwnProperty("inverseQuestion") && Math.random() < 0.3) || info[propertyName].hasOwnProperty("inverseOnly")) {
        inverse = true;
    }

    // Generate question / answers
    let answers = [];
    let possibleAnswers;
    //console.log(`Name: ${record.name}, Property: ${property}`);
    //alert(`Name: ${record.name}, Property: ${property}`);
    if (inverse) {
        questionElement.innerText = info[propertyName].inverseQuestion.replace("_", property);
        answers.push(record.name);
        possibleAnswers = getPropertyArray("name", category);
    } else {
        questionElement.innerText = info[propertyName].question.replace("_", record.name);
        answers.push(property);
        possibleAnswers = getPropertyArray(propertyName, category);
    }
    if (question.hasOwnProperty("smallprint")) {
        smallprintElement.innerText = `(${question.smallprint})`;
    } else {
        smallprintElement.innerText = "";
    }
    if (question.hasOwnProperty("type") && !inverse) {
        answers.pop();
        for (let i = 0; i < 4; i ++) {
            answers.push(property + ((i - answer) * variance));
            if (question.hasOwnProperty("prefix")) {
                if (question.prefix == "+") {
                    if (answers[i] >= 0) {
                        answers[i] = question.prefix + answers[i];
                    }
                } else {
                    answers[i] = question.prefix + answers[i];
                }
            }
            if (question.hasOwnProperty("suffix")) {
                answers[i] += question.suffix;
            }
        }
    } else {
        for (let i = 0; i < 3; i ++) {
            let val;
            let j = 0;
            while (val == null || answers.includes(val) || trim(getValue(data[j][propertyName])) == trim(property.toString())) {
                let rand = getRandomFromArray(possibleAnswers);
                val = rand.value;
                j = rand.index;
            }
            answers.push(val);
        }
        for (let i = 0; i < answer; i ++) {
            let temp = answers[i];
            answers[i] = answers[i + 1];
            answers[i + 1] = temp;
        }
    }
    for (let i = 0; i < 4; i ++) {
        answersElement.children[i].innerText = answers[i];
    }
}

function chooseAnswer(_answer) {
    if (selectable) {
        selectable = false;
        if (answer == _answer) {
            answersElement.children[_answer].style.animation = 'correct 1s both';
            score += 1;
            document.getElementById("score").innerText = score.toString();
            setTimeout(() => {
                questionElement.style.animation = 'fade-out 1s both';
                smallprintElement.style.animation = 'fade-out 1s both';
                answersElement.style.animation = 'fade-out 1s both';
                setTimeout(() => {
                    for (let i = 0; i < answersElement.children.length; i ++) {
                        answersElement.children[i].style = "";
                    }
                    newQuestion();
                    questionElement.style.animation = 'fade-in 1s both';
                    smallprintElement.style.animation = 'fade-in 1s both';
                    answersElement.style.animation = 'fade-in 1s 0.5s both';
                    setTimeout(() => {
                        selectable = true;
                    }, 1000);
                }, 1000);
            }, 1000);
        } else {
            answersElement.children[_answer].style.animation = 'incorrect 1s both';
            answersElement.children[answer].style.animation = 'correct 1s 0.5s both';
            setTimeout(() => {
                questionElement.style.animation = 'fade-out 1s both';
                smallprintElement.style.animation = 'fade-out 1s both';
                answersElement.style.animation = 'fade-out 1s both';
                setTimeout(() => {
                    playAgainElement.style.removeProperty("display");
                    resultElement.style.removeProperty("display");
                    questionContainerElement.style.display = "none";
                    smallprintElement.style.display = "none";
                    answersElement.style.display = "none";
                    playAgainElement.style.animation = 'fade-in 1s 0.5s both';
                    resultElement.style.animation = 'fade-in 1s both';
                    if (score < 10) {
                        resultElement.children[0].innerText = "Entity Displeased.";
                    } else if (score < 25) {
                        resultElement.children[0].innerText = "Brutal Killer.";
                    } else if (score < 50) {
                        resultElement.children[0].innerText = "Ruthless Killer.";
                    } else {
                        resultElement.children[0].innerText = "Merciless Killer.";
                    }
                }, 1000);
            }, 2000);
        }
    }
}

function restart() {
    score = 0;
    document.getElementById("score").innerText = score.toString();
    playAgainElement.style.animation = 'fade-out 1s both';
    resultElement.style.animation = 'fade-out 1s both';
    for (let i = 0; i < answersElement.children.length; i ++) {
        answersElement.children[i].style = "";
    }
    setTimeout(() => {
        newQuestion();
        selectable = true;
        playAgainElement.style.display = "none";
        resultElement.style.display = "none";
        questionContainerElement.style.removeProperty("display");
        smallprintElement.style.removeProperty("display");
        answersElement.style.removeProperty("display");
        questionElement.style.animation = 'fade-in 1s both';
        smallprintElement.style.animation = 'fade-in 1s both';
        answersElement.style.animation = 'fade-in 1s both';
    }, 750);
}

function formatProperty(_property) {
    _property = _property.replace("_", " ");
    if (_property.length < 4) {
        _property = _property.toUpperCase();
    }
    return _property;
}

function getPropertyArray(_property, _category) {
    let output = [];
    for (let i = 0; i < questions[_category].data.length; i ++) {
        output.push(questions[_category].data[i][_property]);
    }
    return output;
}

function getRandomFromArray(_array) {
    let index = Math.floor(Math.random() * _array.length);
    return {
        "value": _array[index],
        "index": index
    };
}

function getValue(_input) {
    _output = _input;
    if (typeof _input == "object") {
        _output = _input.value.toString();
    }
    return _output;
}

function trim(_input) {
    let _output = _input;
    if (typeof _input == "string") {
        _output = _input.trim();
    }
    return _output;
}