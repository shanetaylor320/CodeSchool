

var app = new Vue ( {
	el: "#app",

	data: {
		greeting: "Day 3 Drills",
		dice_rolls: [
			0,
			0,
			0,
			0,
		],
		numbers: [
			0,
			0,
			0,
			0,
			0,
		],
		colors: [
			{
				display_name: "standard red",
				color_value: "#ff0000"
			},
			{
				display_name: "custom light blue",
				color_value: "#abcdef"
			},
			{
				display_name: "opaque light purple",
				color_value: "rgba( 150, 20, 255, 0.5 )"
			},
		],
		current_color: "#000000",
		emotion: "happy",
		names: [
			"Daniel",
			"Nathaniel",
			"Robert"
		],
		names_that_rhyme: [
			"Daniel",
			"Nathaniel"
		],
		pigs_fly: "Well, do they?",
		options: [
			"Of course!",
			"Only in my dreams...",
		],
		repeat: 5,
	},

	created: function ( ) {
		this.rollDice( );
		this.generateNumbers( );
	},

	methods: {
		rollDice: function ( ) {
			var rolls = [ ]
			for ( var i = 0; i < 4; i++ ) {
				var roll = Math.floor( Math.random( ) * 6 ) + 1;
				rolls.push( roll );
			}
			this.dice_rolls = rolls;
		},
		generateNumbers: function ( ) {
			var numbers = [ ];
			for ( var i = 0; i < 5; i++ ) {
				var number = Math.floor( Math.random( ) * 11 );
				numbers.push( number );
			}
			this.numbers = numbers;
		},
		changeEmotion: function ( ) {
			if ( this.emotion == "happy" ) {
				this.emotion = "sad";
			} else if ( this.emotion == "sad" ) {
				this.emotion = "happy";
			}
		}
	},

	computed: {
		rolledScore: function ( ) {
			var min = 6;
			this.dice_rolls.forEach( function ( roll ) {
				if ( roll < min ) {
					min = roll;
				}
			} );
			
			var total = this.dice_rolls.reduce( function ( total, roll ) {
				return total + roll;
			} );

			return total - min;
		},
		computedSum: function ( ) {
			var total = this.numbers.reduce( function ( total, number ) {
				return total + number;
			} );
			return total;
		},
		computedAverage: function ( ) {
			return this.computedSum / this.numbers.length;
		},
		computedMin: function ( ) {
			var min = this.numbers[ 0 ];
			this.numbers.forEach( function ( number ) {
				if ( number < min ) {
					min = number;
				}
			} );
			return min;
		},
		computedMax: function ( ) {
			var max = this.numbers[ 0 ];
			this.numbers.forEach( function ( number ) {
				if ( number > max ) {
					max = number;
				}
			} );
			return max;
		},
		computedColor: function ( ) {
			var style = {
				color: this.current_color
			}
			return style;
		},
		computedEmotion: function ( ) {
			var source = `images/${ this.emotion }.png`;
			return source;
		}
	}
} );
