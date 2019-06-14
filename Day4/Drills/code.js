

var app = new Vue ( {
	el: "#app",

	data: {
		greeting: "Day 4 Review",
		clicked: false,
		hovering: false,
		position: "left",
		piece_x: 0,
		piece_y: 0,
		goal_x: 0,
		goal_y: 0,
	},

	created: function ( ) {
		window.addEventListener( "keydown", this.keyEvents );

		this.goal_x = 15 * Math.floor(Math.random() * 20);
		this.goal_y = 15 * Math.floor(Math.random() * 20);
	},

	methods: {
		click: function ( ) {
			this.clicked = !this.clicked; // leave this even if you add the below stuff

			// to go along with if they don't want the hovering style to appear once you have clicked it, set hovering to false
			// this.hovering = !this.hovering; // or false if you don't care about having the hovering style when you unclick the div
		},
		mouseOver: function ( ) {
			this.hovering = true; // comment this out if you do the below stuff
			console.log( "over" );

			// if they don't want to show that you are hoving if you have clicked the div, then add an if statement here
			// if ( !this.clicked ) {
			// 	this.hovering = true;
			// }
		},
		mouseLeave: function ( ) {
			this.hovering = false;
			console.log( "leaving" );
		},
		keyEvents: function ( event ) {
			// console.log( event.which );
			if ( event.which == 37 ) {
				this.moveLeft( );
			} else if ( event.which == 38 ) {
				this.moveUp( );
			} else if ( event.which == 39 ) {
				this.moveRight( );
			} else if ( event.which == 40 ) {
				this.moveDown( );
			}
		},
		swapPosition: function ( ) { // don't need to do the onclick for this one, it's more about the global keyboard event, more to test v-bind initially
			if ( this.position == "left" ) {
				this.position = "right";
			} else {
				this.position = "left";
			}
		},
		moveLeft: function ( ) {
			this.position = "left";
			this.piece_x -= 15;
		},
		moveRight: function ( ) {
			this.position = "right";
			this.piece_x += 15;
		},
		moveUp: function ( ) {
			this.piece_y -= 15;
		},
		moveDown: function ( ) {
			this.piece_y += 15;
		},
	},

	computed: {
		clickedClass: function ( ) {
			var which_class = {
				purple: this.hovering,
				bold: this.clicked,
			};
			return which_class;
		},
		positionClass: function ( ) {
			var which_side = {
				"text-left": this.position == "left",
				"text-right": this.position == "right",
			};
			return which_side;
		},
		pieceStyle: function() {
			return {
				left: this.piece_x + "px",
				top: this.piece_y + "px",
			}
		},
		goalStyle: function() {
			return {
				left: this.goal_x + "px",
				top: this.goal_y + "px",
			}
		},
		victory: function() {
			if (this.piece_x == this.goal_x && this.piece_y == this.goal_y) {
				return true;
			} else {
				return false;
			}
		}
	}
} );
