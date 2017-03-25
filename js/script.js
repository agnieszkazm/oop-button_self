

	$(document).ready(function() {

	function Button(text) {
		this.text = text || "Hello";

	}
	Button.prototype = {
		//create new button and keep it in the 'element'
		create: function() {
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);
			this.$element.click(function() {
				alert(self.text);
			});
			$('body').append(this.$element);
		}
	}

var btn1 = new Button("hello!");
btn1.create();
var btn2 = new Button("hello2!");
btn2.create();
	});