


var app = new Vue ( {
    el: "#app",

    data: {
        greeting: "Hello World!",
        page: 'computed',
        number_1: 0,
        number_2: 0,
        number_3: 0,
        persons: [
            { name: "Samantha" },
            { name: "Ricky" },
            { name: "Larry" },
            { name: "Phil" },
        ],
        image: "rainforest",
        image_opacity: 1,
        bed_size: "",
        ameneties: [ ],
    },

    created: function ( ) {
        this.number_1 = Math.floor( Math.random( ) * 5 );
    },  

    methods: {
        becomeBob: function ( index ) {
            this.persons[ index ].name = "Bob";
        }
    },

    computed: {
        ten: function ( ) {
            return this.number_1 + this.number_2 + this.number_3 == 10;
        },
        no_bobs: function ( ) {
            var bobs = this.persons.filter( function ( person ) {
                return person.name == "Bob";
            } );
            return bobs.length == 0;
        },
        some_bobs: function ( ) {
            var some_bobs = this.persons.some( function( person ) {
                return person.name == "Bob";
            } );
            return some_bobs;
        },
        all_bobs: function ( ) {
            var all_bobs = this.persons.every( function( person ) {
                return person.name == "Bob";
            } );
            return all_bobs;
        },
        computedImage: function ( ) {
            var source = "images/" + this.image + ".jpg";
            return source;
        },
        computedCost: function ( ) {
            var total = 100;
            if ( this.bed_size == "" ) {
                return "Please select a bed";
            } else {
                if ( this.bed_size == "King" ) {
                    total += 30;
                } else if ( this.bed_size == "Queen" ) {
                    total += 20;
                } else {
                    total += 10;
                }
                if ( this.ameneties.includes( "Bath" ) ) {
                    total += 10;
                }
                if ( this.ameneties.includes( "2 Bathrooms" ) ) {
                    total += 30;
                }
                if ( this.ameneties.includes( "Porch" ) ) {
                    total += 20;
                }
                if ( this.ameneties.includes( "Gym Access" ) ) {
                    total += 15;
                }
                return "$" + total;
            }
        }
    }

} ) 