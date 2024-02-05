

'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const choice = Number(prompt
            (`${this.question} \n ${this.options}`));


        typeof choice === "number" &&
            choice < this.answers.length &&
            this.answers[choice]++;

        console.log(`Poll results are ${this.answers}`);
    },

};


document.querySelector("#po").addEventListener("click", poll.registerNewAnswer.bind(poll));





