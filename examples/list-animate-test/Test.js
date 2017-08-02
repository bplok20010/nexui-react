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

			_this.headerCreate = function (el) {
				var self = _this;
				$(el).on('click', function () {
					$(self.refs.body).stop(true).slideToggle();
				});
			};

			_this.appear = function (node) {
				$(node).fadeIn();
			};

			_this.leave = function (node, cb) {
				$(node).fadeOut(cb);
			};

			_this.state = {
				visible: true
			};
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				$(this.refs.body).stop(true).slideToggle();
				setTimeout(function () {
					_this2.setState({
						visible: false
					});
				}, 3000);
			}
		}, {
			key: 'render',
			value: function render() {
				var visible = this.state.visible;
				return visible ? _react2['default'].createElement(
					_rnexui.Portal,
					{ animate: {
							appear: this.appear,
							leave: this.leave
						} },
					_react2['default'].createElement(
						'div',
						{ ref: 'panel', style: {
								width: 500,
								display: 'none'
							} },
						_react2['default'].createElement(
							'div',
							{ className: 'header', ref: this.headerCreate, style: {
									height: 40,
									border: '1px solid #ccc',
									lineHeight: '40px'
								} },
							'\u6807\u9898'
						),
						_react2['default'].createElement(
							'div',
							{ className: 'body', ref: 'body', style: {
									display: 'none',
									border: '1px solid #ccc'
								} },
							_react2['default'].createElement(
								'div',
								null,
								'test...'
							),
							_react2['default'].createElement(
								'div',
								null,
								'test...'
							),
							_react2['default'].createElement(
								'div',
								null,
								'test...'
							),
							_react2['default'].createElement(
								'div',
								null,
								'test...'
							),
							_react2['default'].createElement(
								'div',
								null,
								'test...'
							),
							_react2['default'].createElement(
								'div',
								null,
								'test...'
							),
							_react2['default'].createElement(
								'div',
								null,
								'test...'
							)
						)
					)
				) : null;
			}
		}]);

		return App;
	}(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), demo);
});