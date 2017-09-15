define(['react', 'react-dom'], function (_react, _reactDom) {
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

	var TreeNode = function (_React$Component) {
		_inherits(TreeNode, _React$Component);

		function TreeNode() {
			var _ref;

			_classCallCheck(this, TreeNode);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var _this = _possibleConstructorReturn(this, (_ref = TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call.apply(_ref, [this].concat(args)));

			_this.handleClick = function (e) {
				var expand = !_this.state.expand;

				var child = (0, _reactDom.findDOMNode)(_this.refs.child);

				$(child).stop(true, true);

				if (expand) {
					_this.setState({
						expand: expand,
						animate: true
					});
				} else if (_this.refs.child) {
					$(child).slideUp(500, function () {
						_this.setState({
							expand: expand
						});
					});
				}
			};

			_this.state = {
				expand: false,
				animate: false
			};
			return _this;
		}

		_createClass(TreeNode, [{
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				var _this2 = this;

				var _state = this.state,
				    expand = _state.expand,
				    animate = _state.animate;

				var child = (0, _reactDom.findDOMNode)(this.refs.child);

				$(child).slideDown(500, function () {
					_this2.state.animate = false;
				});
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log((0, _reactDom.findDOMNode)(this.refs.my), '789');
			}
		}, {
			key: 'render',
			value: function render() {
				var _state2 = this.state,
				    expand = _state2.expand,
				    animate = _state2.animate;


				var style = {
					display: animate ? 'none' : ''
				};

				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						'div',
						{ onClick: this.handleClick, ref: 'my' },
						'\u6D4B\u8BD5...'
					),
					expand ? _react2['default'].createElement(TreeNodeChild, { ref: 'child', style: style }) : null
				);
			}
		}]);

		return TreeNode;
	}(_react2['default'].Component);

	var TreeNodeChild = function (_React$Component2) {
		_inherits(TreeNodeChild, _React$Component2);

		function TreeNodeChild() {
			var _ref2;

			var _temp, _this3, _ret;

			_classCallCheck(this, TreeNodeChild);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref2 = TreeNodeChild.__proto__ || Object.getPrototypeOf(TreeNodeChild)).call.apply(_ref2, [this].concat(args))), _this3), _this3.handleClick = function (e) {}, _temp), _possibleConstructorReturn(_this3, _ret);
		}

		_createClass(TreeNodeChild, [{
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					this.props,
					_react2['default'].createElement(
						'div',
						null,
						'111111111111111111111'
					),
					_react2['default'].createElement(
						'div',
						null,
						'111111111111111111111'
					),
					_react2['default'].createElement(
						'div',
						null,
						'111111111111111111111'
					),
					_react2['default'].createElement(
						'div',
						null,
						'111111111111111111111'
					)
				);
			}
		}]);

		return TreeNodeChild;
	}(_react2['default'].Component);

	var App = function (_React$Component3) {
		_inherits(App, _React$Component3);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log((0, _reactDom.findDOMNode)(this));
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(TreeNode, null);
			}
		}]);

		return App;
	}(_react2['default'].Component);

	_reactDom2['default'].render(_react2['default'].createElement(App, null), demo);
});