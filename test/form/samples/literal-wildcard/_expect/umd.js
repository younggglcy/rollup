(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('external')) :
	typeof define === 'function' && define.amd ? define(['external'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.external));
})(this, (function (external) { 'use strict';

	console.log(external["*"]);
	console.log(external["**"]);

}));
