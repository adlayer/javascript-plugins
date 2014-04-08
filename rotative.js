(function(global){
	var adlayer = global.adlayer || {};
	adlayer.plugins = adlayer.plugins || {};
	var rotative = {
		widget: 'spaces',
		events: {},
		cache: {},
		init: function(spaces, timeout, cache){
			var timeout  = timeout * 1000;
			rotative.events.placement = function(space){
				if(spaces.indexOf(space.element.id) !== -1){
					var interval = setInterval(function(){
						rotative.cache[space.id] = rotative.cache[space.id] || [];
						rotative.cache[space.id].push(space.element.innerHTML);

						if(space.ads.length > 0) {
							space.renderSpace(space);
						} else {
							clearInterval(interval);
							var index = 0;
							var cacheInterval = setInterval(function(){
								space.element.innerHTML = '';
								space.element.innerHTML = rotative.cache[space.id][index];
								if(index < rotative.cache[space.id]['length']){
									index++;
								} else {
									index = 0;
								}
							}, timeout);
						}
					},timeout);
				}
			}	
		}
	}
	adlayer.plugins.rotative = rotative;
})(window);

var spaces = ['5c659223469fc3bc283d555afb0b68e9', '5c659223469fc3bc283d555afb0b7fbc', '7be958944e5281d397971968070ae93e'];
adlayer.plugins.rotative.init(spaces, 20, true);