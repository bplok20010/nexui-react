define(['../../dist/rnexui'], function (_rnexui) {
	'use strict';

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
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
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, App);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
				disabled: true
			}, _this.toggle = function () {
				_this.setState({
					disabled: !_this.state.disabled
				});
			}, _this.popupVisible = true, _this.placement = 'LeftCenter', _this.handleChange = function (e) {
				_this.placement = e.target.value;
				_this.forceUpdate();
			}, _this.onPopupVisibleChange = function (v) {
				_this.popupVisible = v;

				//this.forceUpdate();
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(App, [{
			key: 'renderInnter',
			value: function renderInnter() {
				var _this2 = this;

				return React.createElement(
					_rnexui.Trigger,
					{ delay: 100, action: 'click', getPopupContainer: function getPopupContainer() {
							return _this2.popupCt;
						}, popup: function popup(trigger) {
							//const node = ReactDOM.findDONNode(trigger);
							return React.createElement(
								'div',
								{ style: { padding: 10, border: '1px solid red', background: '#fff' } },
								'hello inner trigger'
							);
						}
					},
					React.createElement(
						'a',
						{ href: '###' },
						'go'
					)
				);
			}
		}, {
			key: 'renderOthers',
			value: function renderOthers() {
				var _this3 = this;

				return React.createElement(
					'div',
					null,
					React.createElement(
						_rnexui.Trigger,
						_defineProperty({ delay: 100, action: 'hover', popup: function popup(inst) {

								return React.createElement(
									'div',
									{ style: { padding: 10, border: '1px solid red', background: '#fff' } },
									React.createElement('div', { ref: function ref(el) {
											return _this3.popupCt = el;
										} }),
									_this3.renderInnter(inst),
									'popup hover...'
								);
							} }, 'action', 'hover'),
						React.createElement(
							_rnexui.Button,
							{ type: 'primary', onClick: this.toggle },
							'Hover'
						)
					),
					React.createElement(
						_rnexui.Trigger,
						{ popup: React.createElement(
								'div',
								{ style: { padding: 10, border: '1px solid red', background: '#fff' } },
								'popup focus...'
							), action: 'focus' },
						React.createElement(
							_rnexui.Button,
							{ type: 'primary', onClick: this.toggle },
							'Focus'
						)
					),
					React.createElement(
						_rnexui.Trigger,
						{
							popup: React.createElement(
								'div',
								{ style: { padding: 10, border: '1px solid red', background: '#fff' } },
								'popup contextMenu...'
							),
							action: 'contextMenu'
						},
						React.createElement(
							_rnexui.Button,
							{ type: 'primary', onClick: this.toggle },
							'contextMenu'
						)
					)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'select',
						{ value: this.pacement, onChange: this.handleChange },
						React.createElement(
							'option',
							{ value: 'Center' },
							'Center'
						),
						React.createElement(
							'option',
							{ value: 'LeftCenter' },
							'LeftCenter'
						),
						React.createElement(
							'option',
							{ value: 'BottomCenter' },
							'BottomCenter'
						),
						React.createElement(
							'option',
							{ value: 'RightCenter' },
							'RightCenter'
						),
						React.createElement(
							'option',
							{ value: 'TopCenter' },
							'TopCenter'
						),
						React.createElement(
							'option',
							{ value: 'TopLeft' },
							'TopLeft'
						),
						React.createElement(
							'option',
							{ value: 'TopRight' },
							'TopRight'
						),
						React.createElement(
							'option',
							{ value: 'BottomRight' },
							'BottomRight'
						),
						React.createElement(
							'option',
							{ value: 'BottomLeft' },
							'BottomLeft'
						),
						React.createElement(
							'option',
							{ value: 'RightTop' },
							'RightTop'
						),
						React.createElement(
							'option',
							{ value: 'RightBottom' },
							'RightBottom'
						),
						React.createElement(
							'option',
							{ value: 'LeftTop' },
							'LeftTop'
						),
						React.createElement(
							'option',
							{ value: 'LeftBottom' },
							'LeftBottom'
						)
					),
					React.createElement('hr', null),
					React.createElement('hr', null),
					React.createElement('hr', null),
					React.createElement('hr', null),
					React.createElement('hr', null),
					React.createElement('hr', null),
					React.createElement('hr', null),
					React.createElement(
						_rnexui.Trigger,
						{
							popup: React.createElement(
								'div',
								{ style: { padding: 10, border: '1px solid red', background: '#fff' } },
								'placement: ',
								this.placement,
								'...'
							),
							popupOffset: [10, 10],
							popupAnimate: {
								appear: function appear(node) {
									$(node).hide().fadeIn();
								},
								leave: function leave(node, cb) {
									$(node).fadeOut(cb);
								}
							},
							popupStyle: { border: '2px solid green' },
							onPopupVisibleChange: this.onPopupVisibleChange,
							popupVisible: true,
							placement: this.placement
						},
						React.createElement(
							_rnexui.Button,
							{ type: 'primary', onClick: this.toggle },
							'Click'
						)
					),
					React.createElement('hr', null),
					this.renderOthers()
				);
			}
		}]);

		return App;
	}(React.Component);

	ReactDOM.render(React.createElement(App, null), demo);
});