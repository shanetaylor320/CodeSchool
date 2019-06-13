


var app = new Vue ( {
    el: "#app",

    data: {
        greeting: "Welcome for Day 2!",
        seen: true,
        number_1: Math.floor( Math.random( ) * 10 ),
        number_2: Math.floor( Math.random( ) * 10 ),
        message: "Hello there!",
        topics: [
            "v-if",
            "v-else-if",
            "v-else",
            "computed",
            "v-for",
            "v-bind",
        ],
        students: [
            {
                name: "Bob",
                age: 20,
            },
            {
                name: "Carl",
                age: 25,
            },
            {
                name: "Samantha",
                age: 30,
            },
            {
                name: "Timmy",
                age: 27,
            }
        ],
        late: true,
        important: true,
    },

    methods: {
        doTask: function ( ) {
            this.late = false;
            this.important = false;
        }
    },

    computed: {
        answer: function ( ) {
            return this.number_1 + this.number_2;
        },
        reversedMessage: function ( ) {
            return this.message.split( "" ).reverse( ).join( "" );
        }
    }

} ) 