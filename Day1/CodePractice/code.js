


var app = new Vue ( {
    el: "#app",

    data: {
        time_of_day: "Morning",
        name: "Shane",
        year: "Senior",
        number: 0,
        word: "",
    },

    methods: {
        generateRandomNumber: function ( ) {
            this.number = Math.floor( Math.random( ) * 100 ) + 1;
        },
        increment: function ( value ) {
            this.number += value;
        },
        decrement: function ( value ) {
            this.number -= value;
        },
        reverse: function ( ) {
            this.word = this.word.split( "" ).reverse( ).join( "" );
        },
        changeTime: function ( ) {
            if ( this.time_of_day == "Morning" ) {
                this.time_of_day = "Afternoon";
            } else if ( this.time_of_day == "Afternoon" ) {
                this.time_of_day = "Evening";
            } else if ( this.time_of_day == "Evening" ) {
                this.time_of_day = "Night";
            } else {
                this.time_of_day = "Morning";
            }
        }
    }

} ) 

// Greeting for time of day (Together)
// Created by and year (Alone)
// Button to show random number (Together)
// Button to increment and button to decrement number (Alone)
// Button +-5 double click (Together)
// Title for v-model section (Together)
// Reverse v-model (Alone)
// Reverse buttton method (Together)
// Change time of day button (Alone)