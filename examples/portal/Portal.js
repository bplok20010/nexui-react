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

	var RefT1 = function (_React$Component) {
		_inherits(RefT1, _React$Component);

		function RefT1() {
			_classCallCheck(this, RefT1);

			return _possibleConstructorReturn(this, (RefT1.__proto__ || Object.getPrototypeOf(RefT1)).apply(this, arguments));
		}

		_createClass(RefT1, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.props.cb();
				console.log('-2');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ ref: function ref() {
							return console.log('-5');
						} },
					'RefT2'
				);
			}
		}]);

		return RefT1;
	}(_react2['default'].Component);

	var RefT2 = function (_React$Component2) {
		_inherits(RefT2, _React$Component2);

		function RefT2() {
			_classCallCheck(this, RefT2);

			return _possibleConstructorReturn(this, (RefT2.__proto__ || Object.getPrototypeOf(RefT2)).apply(this, arguments));
		}

		_createClass(RefT2, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('-1');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ ref: function ref() {
							return console.log('-3');
						} },
					_react2['default'].createElement(RefT1, { cb: function cb() {
							return console.log('-4');
						} })
				);
			}
		}]);

		return RefT2;
	}(_react2['default'].Component);

	var NullComponent = function (_React$Component3) {
		_inherits(NullComponent, _React$Component3);

		function NullComponent() {
			_classCallCheck(this, NullComponent);

			return _possibleConstructorReturn(this, (NullComponent.__proto__ || Object.getPrototypeOf(NullComponent)).apply(this, arguments));
		}

		_createClass(NullComponent, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('x2');
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ ref: function ref(e) {
							return console.log('x1');
						} },
					'TestComponent'
				);
			}
		}]);

		return NullComponent;
	}(_react2['default'].Component);

	var Dialog = function (_React$Component4) {
		_inherits(Dialog, _React$Component4);

		function Dialog(props) {
			_classCallCheck(this, Dialog);

			var _this4 = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

			_this4.closeDialog = function (e) {
				_this4.setState({
					visible: !_this4.state.visible
				});
			};

			_this4.state = {
				visible: true
			};
			return _this4;
		}

		_createClass(Dialog, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				this.setState({
					visible: nextProps.visible
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var visible = this.state.visible;


				return visible ? _react2['default'].createElement(
					_rnexui.Portal,
					null,
					_react2['default'].createElement(
						'div',
						{ className: 'popup' },
						'Body...',
						idx++,
						_react2['default'].createElement(
							'span',
							{ className: 'icon icon-close', onClick: this.closeDialog },
							'X'
						)
					)
				) : null;
			}
		}]);

		return Dialog;
	}(_react2['default'].Component);

	var App = function (_React$Component5) {
		_inherits(App, _React$Component5);

		function App(props) {
			_classCallCheck(this, App);

			var _this5 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this5.togglChange = function (e) {
				var idx = ++_this5.state.idx;
				_this5.setState({
					visible: true,
					idx: idx
				});
			};

			_this5.state = {
				visible: true,
				idx: 1
			};
			return _this5;
		}

		_createClass(App, [{
			key: 'portalTest',
			value: function portalTest() {
				var idx = this.state.idx % 2;

				if (_reactDom.createPortal) {
					return (0, _reactDom.createPortal)(_react2['default'].createElement(
						'div',
						null,
						'createPortal'
					), document.getElementById('d' + idx));
				}

				return null;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {

				var Test = function Test() {
					console.log('abc');
					return _react2['default'].createElement(
						'span',
						null,
						'abcd'
					);
				};

				_reactDom2['default'].render(_react2['default'].createElement(Test, null), cy);

				console.log('done');
			}
		}, {
			key: 'portalContainer',
			value: function portalContainer() {
				var idx = this.state.idx % 2;

				return _react2['default'].createElement(
					_rnexui.Portal,
					{
						container: document.getElementById('d' + idx),
						animate: {
							appear: function appear(node) {
								console.log(node);
								$(node).css('opacity', 0).animate({
									opacity: 1
								}, 1000);
							},
							leave: function leave(node, cb) {
								$(node).css('opacity', 1).animate({
									opacity: 0
								}, 1000, cb);
							}
						}
					},
					_react2['default'].createElement(
						'div',
						null,
						'portalContainer'
					)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				var visible = this.state.visible;

				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(NullComponent, null),
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: this.togglChange },
						'\u663E\u793A'
					),
					visible ? _react2['default'].createElement(Dialog, { visible: this.state.visible }) : null,
					this.portalContainer(),
					_react2['default'].createElement('div', { id: 'cy' }),
					_react2['default'].createElement(RefT2, null)
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	console.log(1);
	_reactDom2['default'].render(_react2['default'].createElement(App, null), demo, function () {
		console.log(2);
	});
	console.log(3);
});