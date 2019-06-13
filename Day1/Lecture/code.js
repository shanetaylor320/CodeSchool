


var app = new Vue ( {
    el: "#app",

    data: {
        greeting: "Hello World!",
        name: "Joe",
        job: "Developer",
        new_name: "",
    },

    methods: {
        greet: function ( ) {
            return "Hello " + this.name + "!";
        },
        changeName: function ( ) {
            this.name = this.new_name;
            this.new_name = "";
        }
    }

} ) 

// Hello World!
// name and job
// personalized greeting
// directives v-
// two-way binding vs. one-way binding
// v-model
// v-on:click
// MAYBE
// v-on:keyup.enter