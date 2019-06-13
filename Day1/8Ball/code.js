


var app = new Vue ( {
    el: "#app",

    data: {
        answer: 8,
        question: "",
        disabled: true,
        feedback: "Waiting for a question...",
    },

    methods: {
        checkQuestion: function ( ) {
            if ( this.question == "" ) {
                this.feedback = "Waiting for a question....";
                this.disabled = true;
            } else if ( this.question[ this.question.length - 1 ] != "?" ) {
                this.feedback = "Questions usually end with a '?'";
                this.disabled = true;
            } else {
                this.feedback = "I'm ready to give an answer!";
                this.disabled = false;
            }
        },
        askQuestion: function ( ) {
            //
            // FETCH
            //
            // fetch( "https://magic-eight-ball-16.herokuapp.com/" ).then( function ( response ) {
            //     response.json( ).then( function ( magic_answer ) {
            //         app.answer = magic_answer.message;
            //     } );
            // } );

            //
            // Random from list
            //
            var possible_answers = [ "yes", "no", "maybe", "perhaps someday", "definitely not" ];
            var random_index = Math.floor( Math.random( ) * possible_answers.length );
            var random_answer = possible_answers[ random_index ];
            this.answer = random_answer;

            //
            // Reset
            //
            this.question = "";
            this.disabled = true;
            this.feedback = "Waiting for a question...";
        }
    },

} ) 