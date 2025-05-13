System.register(['external'], (function () {
	'use strict';
	var _, _$1;
	return {
		setters: [function (module) {
			_ = module["*"];
			_$1 = module["**"];
		}],
		execute: (function () {

			console.log(_);
			console.log(_$1);

		})
	};
}));
