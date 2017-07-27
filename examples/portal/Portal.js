define(['../../dist/rnexui', 'react'], function (_rnexui, _react) {
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

	var idx = 1;

	var Dialog = function (_React$Component) {
		_inherits(Dialog, _React$Component);

		function Dialog(props) {
			_classCallCheck(this, Dialog);

			var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

			_this.closeDialog = function (e) {
				_this.setState({
					visible: !_this.state.visible
				});
			};

			_this.state = {
				visible: true
			};
			return _this;
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

	var App = function (_React$Component2) {
		_inherits(App, _React$Component2);

		function App(props) {
			_classCallCheck(this, App);

			var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

			_this2.togglChange = function (e) {
				_this2.setState({
					visible: true
				});
			};

			_this2.state = {
				visible: true
			};
			return _this2;
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				var visible = this.state.visible;

				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						_rnexui.Button,
						{ onClick: this.togglChange },
						'\u663E\u793A'
					),
					visible ? _react2['default'].createElement(Dialog, { visible: this.state.visible }) : null
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), demo);
});