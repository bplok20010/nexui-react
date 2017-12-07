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

	var Test = function (_React$Component) {
		_inherits(Test, _React$Component);

		function Test() {
			_classCallCheck(this, Test);

			return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
		}

		_createClass(Test, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					null,
					'label:',
					this.props.text
				);
			}
		}]);

		return Test;
	}(_react2['default'].Component);

	var App = function (_React$Component2) {
		_inherits(App, _React$Component2);

		function App(props) {
			_classCallCheck(this, App);

			var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this2.togglChange = function (e) {
				_this2.setState({
					destroy: false,
					idx: _this2.state.idx + 1,
					visible: !_this2.state.visible
				});
			};

			_this2.onClose = function () {
				console.log('onClose');
				_this2.setState({
					visible: false
				});
			};

			_this2.close = function () {
				_this2.setState({
					visible: false
				});
			};

			_this2.popup = null;

			_this2.showPopup = function () {
				if (_this2.popup) {
					_this2.popup.toggle();
					return;
				}
				_this2.popup = _rnexui.Popup.create({
					parentComponent: _this2,
					destroyOnHide: false,
					of: (0, _reactDom.findDOMNode)(_this2.refs.cp),
					my: 'left top',
					at: 'left bottom',
					content: function content() {
						return _react2['default'].createElement(
							'div',
							{ style: { padding: 10, border: '1px solid green', background: '#FFF' } },
							'test....',
							_this2.state.idx
						);
					}
				});

				//setTimeout(this.popup.close, 1000)
			};

			_this2.state = {
				idx: 1,
				visible: false,
				destroy: false
			};
			return _this2;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this3 = this;

				setInterval(function () {
					_this3.setState({
						idx: ++_this3.state.idx
					});
				}, 100);
				//this.updatePopupPosition();
			}
		}, {
			key: 'updatePopupPosition',
			value: function updatePopupPosition() {
				if (this.state.visible) {
					this.refs.popup.updatePosition((0, _reactDom.findDOMNode)(this.refs.button));
				}
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				//this.updatePopupPosition();	
			}
		}, {
			key: 'getButtonEl',
			value: function getButtonEl() {
				return (0, _reactDom.findDOMNode)(this.refs.button);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this4 = this;

				var _state = this.state,
				    visible = _state.visible,
				    idx = _state.idx,
				    destroy = _state.destroy;


				var tProps = {};

				if (idx % 2) tProps.text = idx;

				return _react2['default'].createElement(
					'div',
					{ style: { padding: '400px 10px' } },
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: this.togglChange, ref: 'button' },
						'\u663E\u793A',
						idx
					),
					_react2['default'].createElement('br', null),
					'当前显示状态: ' + (visible ? 'show' : 'hide'),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement(
						_rnexui.Popup,
						{ ref: 'popup', mask: false, destroyOnHide: false, visible: this.state.visible,
							of: function of() {
								return (0, _reactDom.findDOMNode)(_this4.refs.button);
							},
							popupMaskAnimate: {
								appear: function appear(el) {
									$(el).hide().stop(true, true).fadeIn(4000);
								},
								leave: function leave(el, done) {
									console.log(1123);
									$(el).stop(true, true).fadeOut(4000, done);
								}
							},
							popupAnimate: {
								appear: function appear(el) {
									$(el).hide().stop(true, true).fadeIn(4000);
								},
								leave: function leave(el, done) {
									$(el).stop(true, true).fadeOut(4000, done);
								}
							},
							className: 'demo-popup',
							my: 'left bottom',
							at: 'left top'
						},
						'test....',
						this.state.idx,
						_react2['default'].createElement('br', null),
						'test....',
						_react2['default'].createElement('br', null),
						'test....',
						_react2['default'].createElement('br', null),
						_react2['default'].createElement(
							'span',
							{ className: 'icon-close', onClick: this.close },
							'X'
						)
					),
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: function onClick() {
								return _this4.setState({ destroy: true, visible: false });
							} },
						'\u9500\u6BC1',
						idx
					),
					_react2['default'].createElement(
						_rnexui.Button,
						{ ref: 'cp' },
						'22222'
					),
					_react2['default'].createElement(
						_rnexui.Popup,
						{ ref: 'popup2', mask: false, destroyOnHide: true, visible: this.state.visible,
							of: function of() {
								return (0, _reactDom.findDOMNode)(_this4.refs.cp);
							},
							className: 'demo-popup',
							at: 'right bottom',
							my: 'left center'
						},
						'test....',
						this.state.idx,
						_react2['default'].createElement('br', null),
						'test....',
						_react2['default'].createElement('br', null),
						'test....',
						_react2['default'].createElement('br', null),
						_react2['default'].createElement(
							'span',
							{ className: 'icon-close', onClick: this.close },
							'X'
						)
					),
					_react2['default'].createElement(Test, tProps)
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), demo);
});