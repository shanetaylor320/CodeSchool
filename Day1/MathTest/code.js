


var app = new Vue ( {
    el: "#app",

    data: {
        greeting: "Math Test",
        problem_number: 1,
        number_1: Math.floor( Math.random( ) * 11 ),
        number_2: Math.floor( Math.random( ) * 11 ),
        answer: "??",
        guess: "",
        response: "",
        number_correct: 0,
        number_wrong: 0,
    },

    methods: {
        checkAnswer: function ( ) {
            this.answer = this.number_1 + this.number_2;
            if ( Number( this.guess ) == this.number_1 + this.number_2 ) {
                this.response = "Correct!";
                this.number_correct++;
            } else {
                this.response = "Wrong..";
                this.number_wrong++;
            }
        },
        nextQuestion: function ( ) {
            this.number_1 = Math.floor( Math.random( ) * 11 );
            this.number_2 = Math.floor( Math.random( ) * 11 );
            this.guess = "";
            this.answer = "??";
            this.response = "";
            this.problem_number++;
        }
    }

} ) 