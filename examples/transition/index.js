define(['../../dist/rnexui', 'react', 'react-dom'], function (_rnexui, _react, _reactDom) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

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

	var idx = 1;

	function Demo() {
		return _react2['default'].createElement(
			'div',
			null,
			idx++
		);
	}

	var Fade = function (_React$Component) {
		_inherits(Fade, _React$Component);

		function Fade() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Fade);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref, [this].concat(args))), _this), _this.timeout = 500, _this.onEnter = function (node) {
				$(node).hide().fadeIn(_this.timeout);
			}, _this.onEntering = function (node) {}, _this.onEntered = function (node) {}, _this.onExit = function (node) {
				$(node).fadeOut(_this.timeout);
			}, _this.onExiting = function (node) {}, _this.onExited = function (node) {}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Fade, [{
			key: 'render',
			value: function render() {
				var props = this.props;
				return _react2['default'].createElement(
					_rnexui.Transition,
					{
						onEnter: this.onEnter,
						onEntering: this.onEntering,
						onEntered: this.onEntered,
						onExit: this.onExit,
						onExiting: this.onExiting,
						onExited: this.onExited,
						timeout: this.timeout,
						'in': props['in'],
						appear: true
					},
					_react2['default'].createElement(Demo, null)
				);
			}
		}]);

		return Fade;
	}(_react2['default'].Component);

	var App = function (_React$Component2) {
		_inherits(App, _React$Component2);

		function App() {
			var _ref2;

			var _temp2, _this2, _ret2;

			_classCallCheck(this, App);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this2), _this2.show = true, _temp2), _possibleConstructorReturn(_this2, _ret2);
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				var _this3 = this;

				var show = this.show;
				this.show = !show;
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						'button',
						{ onClick: function onClick() {
								return _this3.forceUpdate();
							} },
						'\u5207\u6362'
					),
					_react2['default'].createElement(Fade, { 'in': show })
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	_reactDom2['default'].render(_react2['default'].createElement(App, null), demo);
});