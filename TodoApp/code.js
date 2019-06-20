

var app = new Vue( {
    el: "#app",
    data: {
        todos: [
            {
                name: "Mow the lawn",
                completed: false,
                editing: false,
            },
            {
                name: "Clean the house",
                completed: true,
                editing: false,
            },
            {
                name: "Take dog on walk",
                completed: false,
                editing: false,
            }
        ],
        new_todo: "",
    },

    methods: {
        addTodo: function ( ) {
            var new_todo = { 
                name: this.new_todo,
                completed: false,
                editing: false,
            };
            this.todos.unshift( new_todo );
            this.new_todo = "";
        },
        deleteTodo: function ( index ) {
            this.todos.splice(index, 1);
        },
    }
} )