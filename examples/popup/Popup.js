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

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App(props) {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this.togglChange = function (e) {
				_this.setState({
					destroy: false,
					visible: !_this.state.visible
				});
			};

			_this.onClose = function () {
				console.log('onClose');
				_this.setState({
					visible: false
				});
			};

			_this.close = function () {
				_this.setState({
					visible: false
				});
			};

			_this.popup = null;

			_this.showPopup = function () {
				if (_this.popup) {
					_this.popup.toggle();
					return;
				}
				_this.popup = _rnexui.Popup.create({
					parentComponent: _this,
					destroyOnHide: false,
					of: (0, _reactDom.findDOMNode)(_this.refs.cp),
					my: 'left top',
					at: 'left bottom',
					content: function content() {
						return _react2['default'].createElement(
							'div',
							{ style: { padding: 10, border: '1px solid green', background: '#FFF' } },
							'test....',
							_this.state.idx
						);
					}
				});

				//setTimeout(this.popup.close, 1000)
			};

			_this.state = {
				idx: 1,
				visible: true,
				destroy: false
			};
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				/*setInterval(()=>{
    	this.setState({
    		idx : ++this.state.idx
    	});
    },1000);*/
				this.updatePopupPosition();
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
				this.updatePopupPosition();
			}
		}, {
			key: 'getButtonEl',
			value: function getButtonEl() {
				return (0, _reactDom.findDOMNode)(this.refs.button);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var _state = this.state,
				    visible = _state.visible,
				    idx = _state.idx,
				    destroy = _state.destroy;

				return _react2['default'].createElement(
					'div',
					{ style: { padding: '400px 10px' } },
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: this.togglChange, ref: 'button' },
						'\u663E\u793A',
						idx,
						_react2['default'].createElement(
							_rnexui.Popup,
							{ ref: 'popup', mask: false, destroyOnHide: false, visible: this.state.visible,
								of: null,
								maskAnimate: {
									appear: function appear(el) {
										$(el).hide().stop(true, true).fadeIn(500);
									},
									leave: function leave(el, done) {
										$(el).stop(true, true).fadeOut(500, done);
									}
								},
								popupAnimate: {
									appear: function appear(el) {
										$(el).hide().stop(true, true).fadeIn(500);
									},
									leave: function leave(el, done) {
										$(el).stop(true, true).fadeOut(500, done);
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
						)
					),
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: function onClick() {
								return _this2.setState({ destroy: true, visible: false });
							} },
						'\u9500\u6BC1',
						idx
					),
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: this.showPopup, ref: 'cp' },
						'\u89E6\u53D1\u662F\u5F39\u7A97'
					),
					_react2['default'].createElement(
						_rnexui.Popup,
						{ my: 'center', visible: this.state.visible, fixed: true, at: 'center', using: function using(a, b) {
								return console.log(a, b);
							} },
						'popupa....'
					),
					_react2['default'].createElement(
						_rnexui.Popup,
						null,
						_react2['default'].createElement(
							'p',
							null,
							'Hello Popup'
						)
					)
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), demo);
});