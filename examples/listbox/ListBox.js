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
				_this.setState({
					value: value
				});

				console.log('changed ', value);
			};

			_this.filterMsg = '';

			_this.search = function (e) {
				_this.filterMsg = e.target.value;
				_this.forceUpdate();
			};

			_this.state = {
				value: 2
			};
			return _this;
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				console.log(this.state.value);
				return React.createElement(
					'div',
					null,
					React.createElement(_rnexui.Input, { placeholder: '\u641C\u7D20...', onChange: this.search }),
					React.createElement(_rnexui.ListBox, {
						style: {
							width: 250,
							padding: 10,
							height: 200,
							minHeight: 26,
							maxHeight: 250
						},

						value: this.state.value,
						onChange: this.handleChange,
						items: data,
						filter: function filter(item, i) {
							return item.text.indexOf(_this2.filterMsg) >= 0;
						}
					})
				);
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