define(['../dist/rnexui'], function (_rnexui) {
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

  var plainOptions = ['Apple', 'Pear', 'Orange'];
  var options = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear', disabled: true }, { label: 'Orange', value: 'Orange' }];
  var optionsWithDisabled = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange', disabled: false }];

  var App3 = function (_React$Component) {
    _inherits(App3, _React$Component);

    function App3() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App3);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App3.__proto__ || Object.getPrototypeOf(App3)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        value1: 'Apple',
        value2: 'Apple',
        value3: 'Apple'
      }, _this.onChange1 = function (e) {
        console.log('radio1 checked', e);
        _this.setState({
          value1: e
        });
      }, _this.onChange2 = function (e) {
        console.log('radio2 checked', e);
        _this.setState({
          value2: e
        });
      }, _this.onChange3 = function (e) {
        console.log('radio3 checked', e);
        _this.setState({
          value3: e
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App3, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(_rnexui.RadioGroup, { options: plainOptions, onChange: this.onChange1, value: this.state.value1 }),
          React.createElement(_rnexui.RadioGroup, { options: options, onChange: this.onChange2, value: this.state.value2 }),
          React.createElement(_rnexui.RadioGroup, { disabled: true, style: { display: 'block', marginTop: 5 }, options: optionsWithDisabled, onChange: this.onChange3, value: this.state.value3 })
        );
      }
    }]);

    return App3;
  }(React.Component);

  var App2 = function (_React$Component2) {
    _inherits(App2, _React$Component2);

    function App2() {
      var _ref2;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, App2);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = App2.__proto__ || Object.getPrototypeOf(App2)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
        value: 1
      }, _this2.onChange = function (value) {
        console.log('radio checked', value);
        _this2.setState({
          value: value
        });
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(App2, [{
      key: 'render',
      value: function render() {
        var radioStyle = {
          display: 'block',
          height: '26px',
          lineHeight: '26px'
        };
        return React.createElement(
          _rnexui.RadioGroup,
          { onChange: this.onChange, value: this.state.value },
          React.createElement(
            _rnexui.Radio,
            { style: radioStyle, value: 1 },
            'Option A'
          ),
          React.createElement(
            _rnexui.Radio,
            { style: radioStyle, value: 2 },
            'Option B'
          ),
          React.createElement(
            _rnexui.Radio,
            { style: radioStyle, value: 3 },
            'Option C'
          ),
          React.createElement(
            _rnexui.Radio,
            { style: radioStyle, value: 4 },
            'More...',
            this.state.value === 4 ? React.createElement(_rnexui.Input, { style: { width: 100, marginLeft: 10 }, block: false }) : null
          )
        );
      }
    }]);

    return App2;
  }(React.Component);

  var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App() {
      var _ref3;

      var _temp3, _this3, _ret3;

      _classCallCheck(this, App);

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
        value: 1
      }, _this3.onChange = function (value) {
        console.log('radio checked', value);
        _this3.setState({
          value: value
        });
      }, _temp3), _possibleConstructorReturn(_this3, _ret3);
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {

        var options = [{
          label: React.createElement(
            'span',
            null,
            React.createElement(
              'strong',
              null,
              'A'
            ),
            this.state.value === 'A' ? React.createElement(
              _rnexui.Button,
              null,
              'test'
            ) : null
          ),
          value: 'A'
        }, 'B', 'C', 'D'];

        //return <RadioGroup options={options} onChange={this.onChange} value={this.state.value} />;

        return React.createElement(
          _rnexui.RadioGroup,
          { onChange: this.onChange, value: this.state.value },
          React.createElement(
            _rnexui.Radio,
            { value: 1 },
            'A'
          ),
          React.createElement(
            _rnexui.Radio,
            { value: 2 },
            'B'
          ),
          React.createElement(
            _rnexui.Radio,
            { value: 3 },
            'C'
          ),
          React.createElement(
            _rnexui.Radio,
            { value: 4 },
            'D'
          )
        );
      }
    }]);

    return App;
  }(React.Component);

  ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(App, null),
    React.createElement('hr', null),
    React.createElement(App2, null),
    React.createElement('hr', null),
    React.createElement(App3, null)
  ), demo);
});