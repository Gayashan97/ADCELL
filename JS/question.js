function Question(text, choices, answer,imgsrc) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.imgsrc = imgsrc;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
