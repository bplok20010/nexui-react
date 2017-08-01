define(['../../dist/rnexui'], function (_rnexui) {
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

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this.handleChange = function (value) {
				//this.setState({
				//	value	
				//})	

				console.log('changed ', value);
			};

			_this.state = {
				value: 2
			};
			return _this;
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				console.log(this.state.value);
				return React.createElement(_rnexui.ListBox, {
					width: 250,
					height: 150,
					multiple: true,
					defaultValue: this.state.value,
					onChange: this.handleChange,
					items: data
				});
			}
		}]);

		return App;
	}(React.Component);

	var data = [
		//{value: 1, text: '选项一'},
		//{value: 2, text: '选项二'},
		//{value: 3, text: '选项三'}
	];

	for (var i = 0; i < 100; i++) {
		data.push({
			value: i,
			text: '选项' + (i + 1)
		});
	}

	ReactDOM.render(React.createElement(App, { mulitselect: true }), demo);
});