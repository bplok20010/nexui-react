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
					visible: !_this.state.visible
				});
			};

			_this.doClose = function () {
				console.log('doClose');
				_this.setState({
					visible: false
				});
			};

			_this.close = function () {
				_this.refs.popup.doClose();
			};

			_this.state = {
				visible: false
			};
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				setTimeout(function () {
					//this.refs.popup.closePopup();	
				}, 2000);
			}
		}, {
			key: 'getButtonEl',
			value: function getButtonEl() {
				return (0, _reactDom.findDOMNode)(this.refs.button);
			}
		}, {
			key: 'render',
			value: function render() {
				var visible = this.state.visible;

				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: this.togglChange, ref: 'button', className: 'btn' },
						'\u663E\u793A'
					),
					visible ? _react2['default'].createElement(
						_rnexui.Popup,
						{ ref: 'popup', visible: this.state.visible, onClose: this.doClose, className: 'demo-popup', of: '.btn', my: 'left top', at: 'left bottom' },
						'test....',
						_react2['default'].createElement('br', null),
						'test....',
						_react2['default'].createElement('br', null),
						'test....',
						_react2['default'].createElement(
							'span',
							{ className: 'icon-close', onClick: this.close },
							'X'
						)
					) : null
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), demo);
});