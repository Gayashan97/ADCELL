function populate() {
    if(quiz.isEnded()) {
        showScores();
        stopTimer();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show images
        document.getElementById("imgSource").src = quiz.getQuestionIndex().imgsrc;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<div id='result'>";
    gameOverHTML += "<h2 id='ans'> Correct answers : " + count + "/10" + "</h2>";
    gameOverHTML += "<h2 id='score'> Your score : " + quiz.score*2 + "/20" + "</h2>";
    gameOverHTML += "<h2 id='time'> Quiz completion time : " + min + " minutes "+ sec + " seconds" + "</h2>";
    gameOverHTML += "</div>";
    gameOverHTML += "<a href='quiz.html'><button id='retry'>Retry</button></a>"

    if((quiz.score*2)>=10){
        document.getElementById("myDiv").style.backgroundColor = "#B2FF97";
    }else{
        document.getElementById("myDiv").style.backgroundColor = "#FF9797";
    }
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
};

// create questions
var questions = [
    new Question("This picture shows an object in space that has an icy core with a tail of gas and dust that extends millions of miles. What is this?", ["A star","A comet","An asteroid","A moon"], "A comet","../Images/Q1.png"),
    new Question("Who invented the periodic table?", ["Ernest Rutherford","James Neutron","Dmitri Mendeleev","Albert Einstein"], "Dmitri Mendeleev","../Images/Q2.png"),
    new Question("Which is the most abundant gas in the earth's atmosphere?", ["Nitrogen","Oxygen","Carbon Dioxide","Hydrogen"], "Nitrogen", "../Images/Q3.png"),
    new Question("What is the study of insects called?", ["Oncology","Entomology","Theology","Petrology"], "Entomology", "../Images/Q4.png"),
    new Question("Which is NOT necessary for combustion to occur?", ["Oxygen","Fuel","A heat source","All 3 are necessary"], "All 3 are necessary", "../Images/Q5.png"),
    new Question("Which of these elements is needed to make nuclear energy and nuclear weapons?", ["Sodium chloride","Uranium","Nitrogen","Carbon dioxide"], "Uranium", "../Images/Q6.png"),
    new Question("Iodine is used to test what substance in potatoes?", ["Sugar","Starch","Glucose","Proteins"], "Starch", "../Images/Q7.png"),
    new Question("Which element takes the form of a liquid at normal room temperature?", ["Mercury","Helium","Nitrogen","Oxygen"], "Mercury", "../Images/Q8.png"),
    new Question("The display on a computer is calibrated on an RGB scale. What do the letters R, G, and B stand for?", ["Regular grain blankscreen","Reading glaze, backlit","Red, green, blue","Ranging glass buffer"], "Red, green, blue", "../Images/Q9.png"),
    new Question("What scientific phenomenon explains where the colors of the rainbow come from?", ["Reflection","Radiation","Induction","Refraction"], "Refraction", "../Images/Q10.png")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




