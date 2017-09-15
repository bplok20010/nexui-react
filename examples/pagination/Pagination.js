define(['../../dist/rnexui'], function (_rnexui) {
	'use strict';

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
			var _ref;

			_classCallCheck(this, App);

			for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
				a[_key] = arguments[_key];
			}

			var _this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(a)));

			_this.onPageChange = function (current) {
				console.log(current);

				_this.setState({
					current: current
				});
			};

			_this.state = {
				current: 1
			};
			return _this;
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				var current = this.state.current;

				return React.createElement(_rnexui.Pagination, { total: 175, current: current, maxPagesShow: 5, onChange: this.onPageChange });
			}
		}]);

		return App;
	}(React.Component);

	ReactDOM.render(React.createElement(App, null), demo);
});