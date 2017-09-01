define([], function () {
	'use strict';

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
		var desc = {};
		Object['ke' + 'ys'](descriptor).forEach(function (key) {
			desc[key] = descriptor[key];
		});
		desc.enumerable = !!desc.enumerable;
		desc.configurable = !!desc.configurable;

		if ('value' in desc || desc.initializer) {
			desc.writable = true;
		}

		desc = decorators.slice().reverse().reduce(function (desc, decorator) {
			return decorator(target, property, desc) || desc;
		}, desc);

		if (context && desc.initializer !== void 0) {
			desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
			desc.initializer = undefined;
		}

		if (desc.initializer === void 0) {
			Object['define' + 'Property'](target, property, desc);
			desc = null;
		}

		return desc;
	}

	var _dec, _dec2, _class, _desc, _value, _class2;

	function Mixin() {
		return function () {};
	}

	function test() {}
	function test2() {}

	var App = (_dec = xtype('test'), _dec2 = Mixin(true), _dec(_class = _dec2(_class = (_class2 = function () {
		function App() {
			_classCallCheck(this, App);

			console.log('...');
		}

		_createClass(App, [{
			key: 'say',
			value: function say() {
				console.log('say');
			}
		}]);

		return App;
	}(), (_applyDecoratedDescriptor(_class2.prototype, 'say', [test, test2], Object.getOwnPropertyDescriptor(_class2.prototype, 'say'), _class2.prototype)), _class2)) || _class) || _class);
});