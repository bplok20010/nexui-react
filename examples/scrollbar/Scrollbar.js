define(['../../dist/rnexui', 'react', 'react-dom'], function (_rnexui, _react, _reactDom) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

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

	var List = function (_React$Component) {
		_inherits(List, _React$Component);

		function List() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, List);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.list = [''], _this.idx = 1, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(List, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				setInterval(function () {
					var len = _this2.list.length;

					if (len < 100) {
						_this2.list.push(_this2.list[len - 1] + '.' + _this2.idx++);
					} else {
						_this2.list = [''];
					}

					_this2.setState({}, function () {
						_this2.context.ScrollView.refreshScrollBar();
						_this2.context.ScrollView.scrollEnd('y');
					});
				}, 300);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					null,
					'start...',
					this.list.map(function (v, i) {
						return _react2['default'].createElement(
							'div',
							{ style: { padding: '2px 5px' } },
							v
						);
					}),
					'end...'
				);
			}
		}]);

		return List;
	}(_react2['default'].Component);

	List.contextTypes = {
		ScrollView: _react2['default'].PropTypes.object
	};

	var App = function (_React$Component2) {
		_inherits(App, _React$Component2);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						'div',
						{ style: {
								width: 200,
								height: 200
							} },
						_react2['default'].createElement(
							_rnexui.ScrollView,
							{ enablePreventDefaultOnEnd: false, overflowX: 'auto', onVScrollStart: function onVScrollStart() {
									return console.log('//////////////');
								}, wheelDir: 'y', autoSetScrollBarPadding: true, style: { border: '1px solid #f2f2f2' } },
							_react2['default'].createElement(List, null)
						)
					),
					_react2['default'].createElement(
						'div',
						{ style: {
								width: 200,
								height: 200
							} },
						_react2['default'].createElement(
							_rnexui.ScrollView,
							{ ref: function ref(o) {
									return window.sview = o;
								}, wheelDir: 'x', overflowY: 'hidden', onHScrollStart: function onHScrollStart() {
									return console.log('//////////////');
								}, onHScrollEnd: function onHScrollEnd() {
									return console.log('//////////////');
								}, style: { border: '1px solid #f2f2f2', padding: 10 } },
							_react2['default'].createElement(
								'div',
								null,
								'start...',
								_react2['default'].createElement(
									'div',
									null,
									'123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									null,
									'123456789'
								),
								_react2['default'].createElement(
									'div',
									{ id: 'sv' },
									'123456789'
								),
								'end...'
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ style: {
								width: 200,
								height: 200
							} },
						_react2['default'].createElement(
							_rnexui.ScrollView,
							{ wheelDir: 'y', component: 'textarea', onHScrollStart: function onHScrollStart() {
									return console.log('//////////////');
								}, onHScrollEnd: function onHScrollEnd() {
									return console.log('//////////////');
								}, style: { border: '1px solid #f2f2f2' } },
							'start... end... start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...start...end...start... end...start... end...start... end...start... end...start... end...'
						)
					)
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), demo);
});