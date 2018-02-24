define(['../../dist/rnexui', 'react', 'react-dom'], function (_rnexui, _react, _reactDom) {
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

  var StepsExample = function (_React$Component) {
    _inherits(StepsExample, _React$Component);

    function StepsExample() {
      _classCallCheck(this, StepsExample);

      return _possibleConstructorReturn(this, (StepsExample.__proto__ || Object.getPrototypeOf(StepsExample)).apply(this, arguments));
    }

    _createClass(StepsExample, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          _rnexui.Steps,
          { current: 2, type: 'breadcrumb' },
          _react2['default'].createElement(_rnexui.Steps.Step, { title: '\u767B\u5F55\u6709\u8D5E\u8D26\u53F7' }),
          _react2['default'].createElement(_rnexui.Steps.Step, { title: '\u9009\u62E9\u95E8\u5E97' }),
          _react2['default'].createElement(_rnexui.Steps.Step, { title: '\u7ED1\u5B9A\u95E8\u5E97' }),
          _react2['default'].createElement(_rnexui.Steps.Step, { title: '\u5B8C\u6210' })
        );
      }
    }]);

    return StepsExample;
  }(_react2['default'].Component);

  _reactDom2['default'].render(_react2['default'].createElement(StepsExample, null), demo);
});