

var app = new Vue( {
    el: "#app",
    data: {
        todos: [
            {
                name: "Mow the lawn",
                completed: false,
            },
            {
                name: "Clean the house",
                completed: true,
            },
            {
                name: "Take dog on walk",
                completed: false,
            }
        ],
        new_todo: "",
        editing: false,
    },
    methods: {
        addTodo: function ( ) {
            var new_todo = { 
                name: this.new_todo,
                completed: false,
            };
            this.todos.unshift( new_todo );
            this.new_todo = "";
        },
        deleteTodo: function ( index ) {
            this.todos.splice(index, 1);
        },
        editTodo: function ( todo ) {
            this.editing = true;
            this.new_todo = todo.name;
            this.deleteTodo( todo );
        },
        saveTodo: function ( ) {
            this.addTodo( );
            this.editing = false;
        }
    }
} )