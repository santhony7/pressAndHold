/*
 * jQuery pressAndHold Plugin 1.0.0
 * https://github.com/
 *
 * Copyright 2013, Tony Smith
 * https://www.naptown.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function($, window, document, undefined) {

	var pressAndHold = "pressAndHold",
		defaults = {
			holdTime: 700,
			progressIndicatorRemoveDelay: 300,
			progressIndicatorColor: "#ff0000",
			progressIndicatorOpacity: 0.6

		};

	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pressAndHold;
		this.init();
	}

	Plugin.prototype = {
		init: function() {
			var _this = this,
			timer,
			decaCounter,
			progressIndicatorHTML;


			$(this.element).css({
				display: 'block',
				overflow: 'hidden',
				position: 'relative'
			});

			progressIndicatorHTML = '<div class="holdButtonProgress" style="height: 100%; width: 100%; position: absolute; top: 0; left: -100%; background-color:' + this.settings.progressIndicatorColor + '; opacity:' + this.settings.progressIndicatorOpacity + ';"></div>';

			$(this.element).prepend(progressIndicatorHTML);

			$(this.element).mousedown(function(e) {
				if(e.button != 2){
					$(_this.element).trigger('start.pressAndHold');
					decaCounter = 0;
					timer = setInterval(function() {
						decaCounter += 10;
						$(_this.element).find(".holdButtonProgress").css("left", ((decaCounter / _this.settings.holdTime) * 100 - 100) + "%");
						if (decaCounter == _this.settings.holdTime) {
							_this.exitTimer(timer);
							$(_this.element).trigger('complete.pressAndHold');
						}
					}, 10);

					$(_this.element).on('mouseup.pressAndHold mouseleave.pressAndHold', function(event) {
						_this.exitTimer(timer);
					});

				}
			});
		},
		exitTimer: function(timer) {
			var _this = this;
			clearTimeout(timer);
			$(this.element).off('mouseup.pressAndHold mouseleave.pressAndHold');
			setTimeout(function() {
				$(".holdButtonProgress").css("left", "-100%");
				$(_this.element).trigger('end.pressAndHold');
			}, this.settings.progressIndicatorRemoveDelay);
		}
	};

	$.fn[pressAndHold] = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pressAndHold)) {
				$.data(this, "plugin_" + pressAndHold, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);