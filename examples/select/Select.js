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

	var Option = _rnexui.Select.Option,
	    OptGroup = _rnexui.Select.OptGroup;

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

			_this.state = {
				value: 2
			};
			return _this;
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				console.log(this.state.value);
				return React.createElement(
					'div',
					null,
					React.createElement(_rnexui.Select, {
						dropdownCls: 'dropdowntest',
						style: { width: 150 },
						defaultValue: 2,
						onChange: this.handleChange,
						options: data
					}),
					'--------------',
					this.state.value == 0 ? '??' : React.createElement(
						_rnexui.Select,
						{ onChange: function onChange(v) {
								return console.log(v);
							}, defaultValue: this.state.value, dropdownDestroyOnHide: false },
						React.createElement(
							Option,
							{ value: '1' },
							'\u6D4B\u8BD51'
						),
						React.createElement(
							Option,
							{ value: '2' },
							'\u6D4B\u8BD52'
						),
						React.createElement(
							Option,
							{ value: '3' },
							'\u6D4B\u8BD53'
						),
						React.createElement(
							Option,
							{ value: '4' },
							'\u6D4B\u8BD54'
						),
						React.createElement(
							Option,
							{ value: '5' },
							'\u6D4B\u8BD55'
						),
						React.createElement(
							OptGroup,
							{ text: '\u5206\u7EC41' },
							React.createElement(
								Option,
								{ value: '6' },
								'\u6D4B\u8BD5\u6D4B\u8BD5\u6D4B\u8BD56'
							),
							React.createElement(
								Option,
								{ value: '7' },
								'\u6D4B\u8BD57'
							)
						)
					),
					React.createElement('hr', null),
					React.createElement(
						'div',
						{ tabIndex: 1, onKeyDown: function onKeyDown(e) {
								return console.log(e.keyCode);
							} },
						React.createElement('input', null),
						'123'
					)
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

	ReactDOM.render(React.createElement(App, null), demo);
});