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

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

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
						_rnexui.Row,
						null,
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 12 },
							'col-12'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 12 },
							'col-12'
						)
					),
					_react2['default'].createElement(
						_rnexui.Row,
						null,
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 8 },
							'col-8'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 8 },
							'col-8'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 8 },
							'col-8'
						)
					),
					_react2['default'].createElement(
						_rnexui.Row,
						null,
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 6 },
							'col-6'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 6 },
							'col-6'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 6 },
							'col-6'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 6 },
							'col-6'
						)
					),
					_react2['default'].createElement(
						_rnexui.Row,
						{ gutter: 5 },
						_react2['default'].createElement(
							_rnexui.Col,
							{ className: 'gutter-row', span: 6 },
							_react2['default'].createElement(
								'div',
								{ className: 'gutter-box' },
								'col-6'
							)
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ className: 'gutter-row', span: 6 },
							_react2['default'].createElement(
								'div',
								{ className: 'gutter-box' },
								'col-6'
							)
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ className: 'gutter-row', span: 6 },
							_react2['default'].createElement(
								'div',
								{ className: 'gutter-box' },
								'col-6'
							)
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ className: 'gutter-row', span: 6 },
							_react2['default'].createElement(
								'div',
								{ className: 'gutter-box' },
								'col-6'
							)
						)
					),
					_react2['default'].createElement(
						_rnexui.Row,
						null,
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 8 },
							'col-8'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 8, offset: 8 },
							'col-8'
						)
					),
					_react2['default'].createElement(
						_rnexui.Row,
						null,
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 6, offset: 6 },
							'col-6 col-offset-6'
						),
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 6, offset: 6 },
							'col-6 col-offset-6'
						)
					),
					_react2['default'].createElement(
						_rnexui.Row,
						null,
						_react2['default'].createElement(
							_rnexui.Col,
							{ span: 12, offset: 6 },
							'col-12 col-offset-6'
						)
					)
				);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), demo);
});