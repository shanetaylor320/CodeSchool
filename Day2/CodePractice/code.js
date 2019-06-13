

var app = new Vue ( {
	el: "#app",

	data: {
		greeting: "Day 2 Drills",
		names: [
			"Alex",
			"August",
			"Charlie",
			"Dakota",
			"Jaime",
			"Logan",
			"Morgan",
			"Riley",
			"Ryan",
			"Taylor",
		],
		new_name: "",
		shopping_list: [
			{
				name: "Milk",
				price: "5.99"
			},
			{
				name: "Toilet paper",
				price: "1.99"
			},
			{
				name: "Shampoo",
				price: "2.99"
			},
			{
				name: "Q-Tips",
				price: "4.99"
			},
			{
				name: "Eggs",
				price: "6.99"
			},
			{
				name: "Cereal",
				price: "10.99"
			}
		],
		ameneties: {
			bed_selected: "",
			bath: "",
			shower: "",
			twoBathroom: "",
		},
		night_stay: 0,
		colors: [
			"red",
			"orange",
			"yellow",
			"green",
			"blue",
			"purple",
			"black",
		],
		page_color: "black",
		font_size: 20,
	},

	methods: {
		addName: function ( ) {
			this.names.push( this.new_name );
			this.new_name = "";
		},
		deleteName: function ( index ) {
			this.names.splice( index, 1 );
		},
		makeFree: function ( index ) {
			this.shopping_list[ index ].price = "FREE!";
		},
		pickBed: function ( bed_type ) {
			if ( bed_type == "king" ) {
				this.ameneties.bed_selected = "king";
				this.queen = false;
				this.double = false;
			} else if ( bed_type == "queen" ) {
				this.ameneties.bed_selected = "queen";
				this.king = false;
				this.double = false;
			} else {
				this.ameneties.bed_selected = "double";
				this.king = false;
				this.queen = false;
			}
		},
		changeColor: function ( color ) {
			this.page_color = color;
		}
	},

	computed: {
		computedStyle: function ( ) {
			return {
				color: this.page_color,
				'font-size': this.font_size + "px",
			}
		}
	}
} );
