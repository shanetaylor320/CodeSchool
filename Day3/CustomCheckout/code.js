


var app = new Vue ( {
    el: "#app",

    data: {
        greeting: "Checkout: Skateboard",
        deck_type: "pine",
        wheel_color: "white",
        design: "option1",
        other_options: [ ],
    },

    computed: {
        computedDeckImage: function ( ) {
            return "images/" + this.deck_type + ".jpg";
        },
        computedWheelImage: function ( ) {
            return "images/" + this.wheel_color + ".jpg";
        },
        computedDesignImage: function ( ) {
            return "images/" + this.design + ".jpg";
        },
        computedCost: function ( ) {
            total = 30;
            if ( this.deck_type == "pine" ) total += 20;
            if ( this.deck_type == "oak" ) total += 30;
            if ( this.deck_type == "tree" ) total += 12;
            if ( this.wheel_color == "white" ) total += 3;
            if ( this.wheel_color == "green" ) total += 7;
            if ( this.wheel_color == "red" ) total += 5;
            if ( this.design == "option1" ) total += 10;
            if ( this.design == "option2" ) total += 20;
            if ( this.design == "option3" ) total += 30;
            if ( this.design == "option4" ) total += 40;
            if ( this.other_options.includes( "smooth_riding" ) ) total += 10;
            if ( this.other_options.includes( "traction_control" ) ) total += 8;
            if ( this.other_options.includes( "stickers" ) ) total += 3;
            if ( this.other_options.includes( "insurance" ) ) total += 20;
            return total;
        },
        computedTax: function ( ) {
            return this.computedCost * .04;
        },
        computedTotalCost: function ( ) {
            return this.computedCost + this.computedTax;
        }
    }

} ) 