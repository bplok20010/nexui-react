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

  var plainOptions = ['Apple', 'Pear', 'Orange'];
  var defaultCheckedList = ['Apple', 'Orange'];

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
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false
      }, _this.onChange = function (checkedList) {
        _this.setState({
          checkedList: checkedList,
          indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
          checkAll: checkedList.length === plainOptions.length
        });
      }, _this.onCheckAllChange = function (e) {
        _this.setState({
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { style: { borderBottom: '1px solid #E9E9E9' } },
            _react2['default'].createElement(
              _rnexui.Checkbox,
              {
                indeterminate: this.state.indeterminate,
                onChange: this.onCheckAllChange,
                checked: this.state.checkAll
              },
              'Check all'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(_rnexui.CheckboxGroup, { options: plainOptions, value: this.state.checkedList, onChange: this.onChange })
        );
      }
    }]);

    return App;
  }(_react2['default'].Component);

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  var options = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }];
  var optionsWithDisabled = [{ label: 'Apple', value: 'Apple' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange', disabled: false }];

  ReactDOM.render(_react2['default'].createElement(
    'div',
    null,
    _react2['default'].createElement(_rnexui.CheckboxGroup, { options: plainOptions, defaultValue: ['Apple'], onChange: onChange }),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(_rnexui.CheckboxGroup, { options: options, defaultValue: ['Pear'], onChange: onChange }),
    _react2['default'].createElement('br', null),
    _react2['default'].createElement(_rnexui.CheckboxGroup, { options: optionsWithDisabled, disabled: true, defaultValue: ['Apple'], onChange: onChange }),
    _react2['default'].createElement('hr', null),
    _react2['default'].createElement(App, null),
    _react2['default'].createElement(
      'select',
      { style: { opacity: 0 } },
      _react2['default'].createElement(
        'option',
        null,
        'a'
      ),
      _react2['default'].createElement(
        'option',
        null,
        'b'
      )
    )
  ), demo);
});