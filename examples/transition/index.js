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

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	function _objectWithoutProperties(obj, keys) {
		var target = {};

		for (var i in obj) {
			if (keys.indexOf(i) >= 0) continue;
			if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
			target[i] = obj[i];
		}

		return target;
	}

	var Fade2 = function Fade2(_ref) {
		var children = _ref.children,
		    props = _objectWithoutProperties(_ref, ['children']);

		return _react2['default'].createElement(
			_rnexui.CSSTransition,
			_extends({}, props, {
				timeout: 1000,
				unmountOnExit: true,
				classNames: 'fade'
			}),
			children
		);
	};

	var FadeInAndOut = function (_React$Component) {
		_inherits(FadeInAndOut, _React$Component);

		function FadeInAndOut() {
			var _ref2;

			_classCallCheck(this, FadeInAndOut);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = _possibleConstructorReturn(this, (_ref2 = FadeInAndOut.__proto__ || Object.getPrototypeOf(FadeInAndOut)).call.apply(_ref2, [this].concat(args)));

			_this.state = { show: false };

			setInterval(function () {
				_this.setState({ show: !_this.state.show });
			}, 1500);
			return _this;
		}

		_createClass(FadeInAndOut, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					Fade2,
					{ 'in': this.state.show },
					_react2['default'].createElement(
						'div',
						{ className: 'greeting' },
						'Hello world',
						_react2['default'].createElement(Demo, null)
					)
				);
			}
		}]);

		return FadeInAndOut;
	}(_react2['default'].Component);

	var idx = 1;

	function Demo() {
		console.log('Demo');
		return _react2['default'].createElement(
			'div',
			null,
			idx++
		);
	}

	var Fade = function (_React$Component2) {
		_inherits(Fade, _React$Component2);

		function Fade() {
			var _ref3;

			var _temp, _this2, _ret;

			_classCallCheck(this, Fade);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref3 = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref3, [this].concat(args))), _this2), _this2.timeout = 500, _this2.onEnter = function (node) {
				$(node).hide().fadeIn(_this2.timeout);
			}, _this2.onEntering = function (node) {}, _this2.onEntered = function (node) {}, _this2.onExit = function (node) {
				$(node).fadeOut(_this2.timeout);
			}, _this2.onExiting = function (node) {}, _this2.onExited = function (node) {
				if (_this2.props.onExited) _this2.props.onExited(node);
			}, _temp), _possibleConstructorReturn(_this2, _ret);
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
						appear: props.appear
					},
					_react2['default'].createElement(Demo, null)
				);
			}
		}]);

		return Fade;
	}(_react2['default'].Component);

	var list = ['a_4', 't_2'];

	var T = function (_React$Component3) {
		_inherits(T, _React$Component3);

		function T() {
			_classCallCheck(this, T);

			return _possibleConstructorReturn(this, (T.__proto__ || Object.getPrototypeOf(T)).apply(this, arguments));
		}

		_createClass(T, [{
			key: 'render',
			value: function render() {
				return 'T';
			}
		}]);

		return T;
	}(_react2['default'].Component);

	var App = function (_React$Component4) {
		_inherits(App, _React$Component4);

		function App() {
			var _ref4;

			var _temp2, _this4, _ret2;

			_classCallCheck(this, App);

			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_ref4 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref4, [this].concat(args))), _this4), _this4.show = true, _this4.addItem = function () {
				var key = Math.random().toString(16).substr(3, 8);
				list.push(key);
				_this4.forceUpdate();
			}, _this4.delItem = function () {
				var rad = Math.random() * 10000;
				var len = list.length;

				list.splice(rad % len, 1);

				_this4.forceUpdate();
			}, _temp2), _possibleConstructorReturn(_this4, _ret2);
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				//setInterval(()=> (this.forceUpdate()), 1000);

			}
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;

				var show = this.show;
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						'button',
						{ onClick: function onClick() {
								return _this5.show = !_this5.show, _this5.forceUpdate();
							} },
						'\u5207\u6362'
					),
					_react2['default'].createElement(Fade, { 'in': show, appear: true }),
					_react2['default'].createElement(
						'h2',
						null,
						'TransitionGroup'
					),
					_react2['default'].createElement(
						'div',
						null,
						_react2['default'].createElement(
							'button',
							{ onClick: this.addItem },
							'\u65B0\u589E'
						),
						_react2['default'].createElement(
							'button',
							{ onClick: this.delItem },
							'\u968F\u673A\u5220\u9664'
						),
						_react2['default'].createElement(
							_rnexui.TransitionGroup,
							{ component: _react2['default'].Fragment },
							list.map(function (key) {
								return _react2['default'].createElement(Fade, { key: key });
							})
						),
						_react2['default'].createElement(T, null)
					),
					_react2['default'].createElement(FadeInAndOut, null)
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	_reactDom2['default'].render(_react2['default'].createElement(App, null), demo);
});