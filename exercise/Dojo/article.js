function $(selector) {
	var elem = document.querySelector(selector);
	var o = {
		show: function() {
			elem.style.display = 'block';
		},
		hide: function() {
			elem.style.display = 'none';
		},
		getStyle: function(prop) {
			var style = document.defaultView.getComputedStyle(elem);
			return style[prop];
		},
		toggle: function() {
			// if (this.getStyle('height') == '')
			var val = this.getStyle('display');
			if (val === 'none') {
				this.show();

			} else {
				this.hide();
			}
		},
		bind: function(event, func) {
			elem.addEventListener(event, func);
		},
		slideDown: function() {
			var height = parseInt(this.getStyle('height'));
			elem.style.overflow = 'auto';
			elem.style.height = '0px';
/*			for (var i = 0; i < height; i++) {
				var foo = function() {
					var h = i;
					setTimeout(function() {
						elem.style.height = h + 'px';
					}, 10 * h);
				};
				foo();
			};
*/
			var i = 0;
			var goDown = setInterval(function() {
				i++;
				elem.style.height = i + 'px';
				if (i === height) {
					clearInterval(goDown);
				}
			}, 5);


		}
	}
	return o;
}

$('a').bind('click', function() {
	$('#new_article').toggle();
});

$('#articles').slideDown();


// console.log($('#new_article').getStyle('color'));