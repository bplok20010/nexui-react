define(['../dist/rnexui', 'react'], function (_rnexui, _react) {
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
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        checked: true,
        disabled: false
      }, _this.toggleChecked = function () {
        _this.setState({ checked: !_this.state.checked });
      }, _this.toggleDisable = function () {
        _this.setState({ disabled: !_this.state.disabled });
      }, _this.onChange = function (e) {
        console.log('checked = ', e.target.checked);
        _this.setState({
          checked: e.target.checked
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        var label = (this.state.checked ? 'Checked' : 'Unchecked') + '-' + (this.state.disabled ? 'Disabled' : 'Enabled');
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'p',
            { style: { marginBottom: '20px' } },
            _react2['default'].createElement(
              _rnexui.Checkbox,
              {
                checked: this.state.checked,
                disabled: this.state.disabled,
                onChange: this.onChange
              },
              label
            )
          ),
          _react2['default'].createElement(
            'p',
            null,
            _react2['default'].createElement(
              _rnexui.Button,
              {
                type: 'primary',
                size: 'small',
                onClick: this.toggleChecked
              },
              !this.state.checked ? 'Check' : 'Uncheck'
            ),
            _react2['default'].createElement(
              _rnexui.Button,
              {
                style: { marginLeft: '10px' },
                type: 'primary',
                size: 'small',
                onClick: this.toggleDisable
              },
              !this.state.disabled ? 'Disable' : 'Enable'
            )
          )
        );
      }
    }]);

    return App;
  }(_react2['default'].Component);

  ReactDOM.render(_react2['default'].createElement(App, null), demo);
});