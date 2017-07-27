(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(factory((global.rnexui = global.rnexui || {}),global.React));
}(this, (function (exports,React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
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





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
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
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var ObjProto = Object.prototype;

var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;

var nativeIsArray = Array.isArray;
var nativeKeys = Object.keys;

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;





var isArray = nativeIsArray ? nativeIsArray : function (value) {
    return toString.call(value) === '[object Array]';
};



























function isArrayLike(obj) {
    var length = obj == null ? void 0 : obj.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

var isObject = toString.call(null) === '[object Object]' ? function (value) {
    // check ownerDocument here as well to exclude DOM nodes
    return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
} : function (value) {
    return toString.call(value) === '[object Object]';
};





function has(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
}

function keys(obj) {
    if (!isObject(obj)) return [];

    if (nativeKeys) return nativeKeys(obj);

    var keys = [];

    for (var key in obj) {
        if (has(obj, key)) keys.push(key);
    }return keys;
}











function each(obj, iterator, context) {
    if (obj == null) return obj;

    var i,
        length,
        hasContext = context === void 0 ? false : true;

    if (isArrayLike(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(hasContext ? context : obj[i], obj[i], i, obj) === false) break;
        }
    } else {
        var _keys = keys(obj);

        for (i = 0, length = _keys.length; i < length; i++) {
            if (iterator.call(hasContext ? context : obj[_keys[i]], obj[_keys[i]], _keys[i], obj) === false) break;
        }
    }

    return obj;
}





















function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (isArray(arg)) {
            classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
            for (var key in arg) {
                if (hasOwnProperty.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}

var _util = {};
// Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
each(['Arguments', 'Function', 'Date', 'RegExp', 'Error'], function (name) {
    _util['is' + name] = function (obj) {
        return toString.call(obj) === '[object ' + name + ']';
    };
});

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
if (!_util.isArguments(arguments)) {
    _util.isArguments = function (obj) {
        return has(obj, 'callee');
    };
}

// Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
// IE 11 (#1621), and in Safari 8 (#1929).
if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
    _util.isFunction = function (obj) {
        return typeof obj == 'function' || false;
    };
}

var Button = function (_PureComponent) {
	inherits(Button, _PureComponent);

	function Button() {
		classCallCheck(this, Button);
		return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	}

	createClass(Button, [{
		key: 'handleClick',


		// 处理点击事件
		value: function handleClick(event) {
			if (this.props.disabled || this.props.loading) return;

			if (this.props.onClick) {
				this.props.onClick(event);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames,
			    _this2 = this,
			    _classNames2;

			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    htmlType = _props.htmlType,
			    disabled = _props.disabled,
			    iconCls = _props.iconCls,
			    type = _props.type,
			    size = _props.size,
			    block = _props.block;


			var nodeProps = {};
			if (disabled) {
				nodeProps['disabled'] = true;
			}

			var Icon = iconCls ? React__default.createElement('span', { className: classNames((_classNames = {}, defineProperty(_classNames, prefixCls + '-icon', true), defineProperty(_classNames, iconCls, true), _classNames)) }) : null;

			return React__default.createElement(
				'button',
				_extends({ type: htmlType, onClick: function onClick(e) {
						return _this2.handleClick(e);
					} }, nodeProps, { className: classNames((_classNames2 = {}, defineProperty(_classNames2, '' + prefixCls, true), defineProperty(_classNames2, prefixCls + '-' + type, type), defineProperty(_classNames2, prefixCls + '-block', block), defineProperty(_classNames2, prefixCls + '-inline', !block), defineProperty(_classNames2, prefixCls + '-sm', size === 'small'), defineProperty(_classNames2, prefixCls + '-lg', size === 'large'), defineProperty(_classNames2, prefixCls + '-disabled', disabled), _classNames2)) }),
				Icon,
				this.props.children ? React__default.createElement(
					'span',
					{ className: 'nex-btn-text' },
					this.props.children
				) : null
			);
		}
	}]);
	return Button;
}(React.PureComponent);

Button.propTypes = {
	type: React.PropTypes.string,
	size: React.PropTypes.string,
	htmlType: React.PropTypes.oneOf(['button', 'submit', 'reset']),
	className: React.PropTypes.string,
	block: React.PropTypes.bool,
	disabled: React.PropTypes.bool,
	loading: React.PropTypes.bool,
	outline: React.PropTypes.bool,
	bordered: React.PropTypes.bool,
	iconCls: React.PropTypes.string,
	prefixCls: React.PropTypes.string,
	onClick: React.PropTypes.func
};
Button.defaultProps = {
	type: '',
	size: '',
	htmlType: 'button',
	className: '',
	iconCls: '',
	disabled: false,
	block: false,
	prefixCls: 'nex-btn'
};

var ButtonGroup = function ButtonGroup(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === undefined ? 'nex-btn-group' : _props$prefixCls,
      _props$size = props.size,
      size = _props$size === undefined ? '' : _props$size,
      className = props.className,
      others = objectWithoutProperties(props, ['prefixCls', 'size', 'className']);

  // large => lg
  // small => sm

  var sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
    default:
      break;
  }

  var classes = classNames(prefixCls, defineProperty({}, prefixCls + '-' + sizeCls, sizeCls), className);

  return React__default.createElement('div', _extends({}, others, { className: classes }));
};

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.4.0' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function _ctx(fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

var _isObject = function _isObject(it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function _anObject(it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

var document$1 = _global.document;
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
  f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      IS_WRAP = type & $export.W,
      exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {}),
      expProto = exports[PROTOTYPE],
      target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE],
      key,
      own,
      out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library` 
var _export = $export;

var hasOwnProperty$1 = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty$1.call(it, key);
};

var toString$1 = {}.toString;

var _cof = function _cof(it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings

var _toIobject = function _toIobject(it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var min = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toIndex = function _toIndex(index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes

var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this),
        length = _toLength(O.length),
        index = _toIndex(fromIndex, length),
        value;
    // Array#includes uses SameValueZero equality algorithm
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
      // Array#toIndex ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function _shared(key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');
var _sharedKey = function _sharedKey(key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = _toIobject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) _has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)

var _toObject = function _toObject(it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {},
      B = {},
      S = Symbol(),
      K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = _toObject(target),
      aLen = arguments.length,
      index = 1,
      getSymbols = _objectGops.f,
      isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]),
        keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S),
        length = keys.length,
        j = 0,
        key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$2 = _core.Object.assign;

var assign = createCommonjsModule(function (module) {
  module.exports = { "default": assign$2, __esModule: true };
});

var _extends$1 = createCommonjsModule(function (module, exports) {
  "use strict";

  exports.__esModule = true;

  var _assign2 = _interopRequireDefault(assign);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
  }

  exports['default'] = _assign2['default'] || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
});

var _extends$2 = unwrapExports(_extends$1);

function omit(obj, fields) {
  var shallowCopy = _extends$2({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

var TextArea = function (_PureComponent) {
	inherits(TextArea, _PureComponent);

	function TextArea() {
		var _ref;

		var _temp, _this, _ret;

		classCallCheck(this, TextArea);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.textAreaRef = null, _this.handleKeyDown = function (e) {
			var _this$props = _this.props,
			    onPressEnter = _this$props.onPressEnter,
			    onKeyDown = _this$props.onKeyDown;

			if (e.keyCode === 13 && onPressEnter) {
				onPressEnter(e);
			}
			if (onKeyDown) {
				onKeyDown(e);
			}
		}, _this.saveTextAreaRef = function (textArea) {
			_this.textAreaRef = textArea;
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	createClass(TextArea, [{
		key: 'focus',
		value: function focus() {
			this.textAreaRef.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.textAreaRef.blur();
		}
	}, {
		key: 'getTextAreaClassName',
		value: function getTextAreaClassName() {
			var _classNames;

			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    disabled = _props.disabled,
			    autosize = _props.autosize;

			return classNames(prefixCls, (_classNames = {}, defineProperty(_classNames, prefixCls + '-disabled', disabled), defineProperty(_classNames, prefixCls + '-autosize', autosize), _classNames));
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			var otherProps = omit(props, ['prefixCls', 'block', 'addonBeforeCls', 'addonAfterCls', 'onPressEnter', 'autosize', 'width', 'height']);

			var classname = classNames(props.prefixCls + '-wrapper', defineProperty({}, props.prefixCls + '-wrapper-inline', !props.block));

			var style = {};
			if ('width' in props) {
				style.width = props.width;
			}
			if ('height' in props) {
				otherProps.style = otherProps.style || {};
				otherProps.style.height = props.height;
			}

			if ('value' in otherProps) {
				otherProps.value = otherProps.value || '';
				delete otherProps.defaultValue;
			}
			return React__default.createElement(
				'div',
				{ className: classname, style: style },
				React__default.createElement('textarea', _extends({}, otherProps, {
					className: classNames(this.getTextAreaClassName(), props.className),
					onKeyDown: this.handleKeyDown,
					ref: this.saveTextAreaRef
				}))
			);
		}
	}]);
	return TextArea;
}(React.PureComponent);

TextArea.defaultProps = {
	prefixCls: 'nex-input'
};

function fixControlledValue(value) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

var Input = function (_PureComponent) {
	inherits(Input, _PureComponent);

	function Input() {
		var _ref;

		var _temp, _this, _ret;

		classCallCheck(this, Input);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeyDown = function (e) {
			var _this$props = _this.props,
			    onPressEnter = _this$props.onPressEnter,
			    onKeyDown = _this$props.onKeyDown;

			if (e.keyCode === 13 && onPressEnter) {
				onPressEnter(e);
			}
			if (onKeyDown) {
				onKeyDown(e);
			}
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	createClass(Input, [{
		key: 'focus',
		value: function focus() {
			this.refs.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.refs.input.blur();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.autoFocus) {
				this.focus();
			}
		}
	}, {
		key: 'getInputClassName',
		value: function getInputClassName() {
			var _classNames;

			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    size = _props.size,
			    disabled = _props.disabled;

			return classNames(prefixCls, (_classNames = {}, defineProperty(_classNames, prefixCls + '-sm', size === 'small'), defineProperty(_classNames, prefixCls + '-lg', size === 'large'), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
		}
	}, {
		key: 'renderInput',
		value: function renderInput() {
			var props = this.props;
			var _props2 = this.props,
			    value = _props2.value,
			    className = _props2.className,
			    _props2$style = _props2.style,
			    style = _props2$style === undefined ? {} : _props2$style;
			// Fix https://fb.me/react-unknown-prop

			var otherProps = omit(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonBeforeCls', 'addonBeforeStyle', 'addonAfter', 'addonAfterCls', 'addonAfterStyle', 'autoFocus', 'style', 'size', 'block', 'width']);

			if ('width' in props) {
				style.width = props.width;
			}
			if (props.type === 'hidden') {
				style.display = 'none';
			}

			if ('value' in props) {
				otherProps.value = fixControlledValue(value);
				// Input elements must be either controlled or uncontrolled,
				// specify either the value prop, or the defaultValue prop, but not both.
				delete otherProps.defaultValue;
			}

			var classname = classNames(props.prefixCls + '-wrapper', defineProperty({}, props.prefixCls + '-wrapper-inline', !props.block));

			var addonBeforeCls = props.prefixCls + '-addon ' + props.prefixCls + '-addon-before';
			var addonBefore = props.addonBefore ? React__default.createElement(
				'span',
				{ className: addonBeforeCls },
				props.addonBefore
			) : null;

			var addonAfterCls = props.prefixCls + '-addon ' + props.prefixCls + '-addon-after';
			var addonAfter = props.addonAfter ? React__default.createElement(
				'span',
				{ className: addonAfterCls },
				props.addonAfter
			) : null;

			return React__default.createElement(
				'div',
				{ className: classname, style: style },
				addonBefore,
				React__default.createElement(
					'span',
					{ className: props.prefixCls + '-inner' },
					React__default.createElement('input', _extends({
						ref: 'input'
					}, otherProps, {
						className: classNames(this.getInputClassName(), className),
						onKeyDown: this.handleKeyDown
					}))
				),
				addonAfter
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.type === 'textarea') {
				return React__default.createElement(TextArea, _extends({}, this.props, { ref: 'input' }));
			}
			return this.renderInput();
		}
	}]);
	return Input;
}(React.PureComponent);

Input.defaultProps = {
	disabled: false,
	autoComplete: 'off',
	addonBeforeCls: '',
	addonAfterCls: '',
	type: 'text',
	block: false,
	prefixCls: 'nex-input'
};

var InputGroup = function InputGroup(props) {
	var _classNames;

	var _props$prefixCls = props.prefixCls,
	    prefixCls = _props$prefixCls === undefined ? 'nex-input-group' : _props$prefixCls,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;

	var cls = classNames(prefixCls, (_classNames = {}, defineProperty(_classNames, prefixCls + '-lg', props.size === 'large'), defineProperty(_classNames, prefixCls + '-sm', props.size === 'small'), _classNames), className);
	return React__default.createElement(
		'div',
		{ className: cls, style: props.style },
		props.children
	);
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var index = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var index$1 = createCommonjsModule(function (module) {
	/*!
   Copyright (c) 2016 Jed Watson.
   Licensed under the MIT License (MIT), see
   http://jedwatson.github.io/classnames
 */
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if ('object' !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (typeof undefined === 'function' && _typeof(undefined.amd) === 'object' && undefined.amd) {
			// register as 'classnames', consistent with npm package name
			undefined('classnames', [], function () {
				return classNames;
			});
		} else {
			window.classNames = classNames;
		}
	})();
});

var Checkbox = function (_PureComponent) {
	inherits(Checkbox, _PureComponent);

	function Checkbox(props) {
		classCallCheck(this, Checkbox);

		var _this = possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

		_initialiseProps.call(_this);

		var checked = 'checked' in props ? props.checked : props.defaultChecked;

		_this.state = {
			checked: checked
		};
		return _this;
	}

	createClass(Checkbox, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ('checked' in nextProps) {
				this.setState({
					checked: nextProps.checked
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    className = _props.className,
			    style = _props.style,
			    name = _props.name,
			    type = _props.type,
			    disabled = _props.disabled,
			    readOnly = _props.readOnly,
			    tabIndex = _props.tabIndex,
			    onClick = _props.onClick,
			    onFocus = _props.onFocus,
			    onBlur = _props.onBlur,
			    indeterminate = _props.indeterminate,
			    others = objectWithoutProperties(_props, ['prefixCls', 'className', 'style', 'name', 'type', 'disabled', 'readOnly', 'tabIndex', 'onClick', 'onFocus', 'onBlur', 'indeterminate']);


			var globalProps = Object.keys(others).reduce(function (prev, key) {
				if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
					prev[key] = others[key];
				}
				return prev;
			}, {});

			var checked = this.state.checked;

			var classString = index$1(prefixCls, className, (_classNames = {}, defineProperty(_classNames, prefixCls + '-checked', checked), defineProperty(_classNames, prefixCls + '-indeterminate', indeterminate), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

			return React__default.createElement(
				'span',
				{ className: classString, style: style },
				React__default.createElement('input', _extends({
					name: name,
					type: type,
					readOnly: readOnly,
					disabled: disabled,
					tabIndex: tabIndex,
					className: prefixCls + '-input',
					checked: !!checked,
					onClick: onClick,
					onFocus: onFocus,
					onBlur: onBlur,
					onChange: this.handleChange
				}, globalProps)),
				React__default.createElement('span', { className: prefixCls + '-inner' })
			);
		}
	}]);
	return Checkbox;
}(React.PureComponent);

Checkbox.propTypes = {
	prefixCls: index.string,
	className: index.string,
	style: index.object,
	name: index.string,
	type: index.string,
	defaultChecked: index.oneOfType([index.number, index.bool]),
	checked: index.oneOfType([index.number, index.bool]),
	disabled: index.bool,
	onFocus: index.func,
	onBlur: index.func,
	onChange: index.func,
	onClick: index.func,
	tabIndex: index.string,
	readOnly: index.bool
};
Checkbox.defaultProps = {
	prefixCls: 'nex-checkbox',
	className: '',
	style: {},
	type: 'checkbox',
	defaultChecked: false,
	onFocus: function onFocus() {},
	onBlur: function onBlur() {},
	onChange: function onChange() {}
};

var _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.handleChange = function (e) {
		var props = _this2.props;

		if (props.disabled) {
			return;
		}
		if (!('checked' in props)) {
			_this2.setState({
				checked: e.target.checked
			});
		}
		props.onChange({
			target: _extends({}, props, {
				checked: e.target.checked
			}),
			stopPropagation: function stopPropagation() {
				e.stopPropagation();
			},
			preventDefault: function preventDefault() {
				e.preventDefault();
			}
		});
	};
};

var index$2 = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
        return !!ret;
    }

    if (objA === objB) {
        return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || !objA || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for (var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if (!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
        }
    }

    return true;
};

var Checkbox$2 = function (_Component) {
	inherits(Checkbox$$1, _Component);

	function Checkbox$$1() {
		classCallCheck(this, Checkbox$$1);
		return possibleConstructorReturn(this, (Checkbox$$1.__proto__ || Object.getPrototypeOf(Checkbox$$1)).apply(this, arguments));
	}

	createClass(Checkbox$$1, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
			return !index$2(this.props, nextProps) || !index$2(this.state, nextState) || !index$2(this.context.checkboxGroup, nextContext.checkboxGroup);
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var props = this.props,
			    context = this.context;
			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    className = _props.className,
			    children = _props.children,
			    style = _props.style,
			    onMouseEnter = _props.onMouseEnter,
			    onMouseLeave = _props.onMouseLeave,
			    others = objectWithoutProperties(_props, ['prefixCls', 'className', 'children', 'style', 'onMouseEnter', 'onMouseLeave']);
			var checkboxGroup = context.checkboxGroup;

			if (checkboxGroup) {
				others.onChange = function () {
					return checkboxGroup.toggleOption({ label: children, value: props.value });
				};
				others.checked = checkboxGroup.value.indexOf(props.value) !== -1;
				others.disabled = 'disabled' in props ? props.disabled : checkboxGroup.disabled;
			}

			var classString = index$1((_classNames = {}, defineProperty(_classNames, prefixCls + '-wrapper', true), defineProperty(_classNames, className, !!className), _classNames));

			return React__default.createElement(
				'label',
				{
					className: classString,
					style: style,
					onMouseEnter: onMouseEnter,
					onMouseLeave: onMouseLeave
				},
				React__default.createElement(Checkbox, _extends({}, others, {
					prefixCls: prefixCls
				})),
				children !== undefined ? React__default.createElement(
					'span',
					{ className: prefixCls + '-label' },
					children
				) : null
			);
		}
	}]);
	return Checkbox$$1;
}(React.Component);

Checkbox$2.propTypes = {
	className: index.string,
	style: index.object,
	prefixCls: index.string
};
Checkbox$2.defaultProps = {
	prefixCls: 'nex-checkbox',
	className: '',
	style: {}
};
Checkbox$2.contextTypes = {
	checkboxGroup: index.any
};

var CheckboxGroup = function (_React$Component) {
	inherits(CheckboxGroup, _React$Component);

	function CheckboxGroup(props) {
		classCallCheck(this, CheckboxGroup);

		var _this = possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

		_this.toggleOption = function (option) {
			var optionIndex = _this.state.value.indexOf(option.value);
			var value = [].concat(toConsumableArray(_this.state.value));
			if (optionIndex === -1) {
				value.push(option.value);
			} else {
				value.splice(optionIndex, 1);
			}
			if (!('value' in _this.props)) {
				_this.setState({ value: value });
			}
			var onChange = _this.props.onChange;
			if (onChange) {
				onChange(value);
			}
		};

		_this.state = {
			value: props.value || props.defaultValue || []
		};
		return _this;
	}

	createClass(CheckboxGroup, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				checkboxGroup: {
					toggleOption: this.toggleOption,
					value: this.state.value,
					disabled: this.props.disabled
				}
			};
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ('value' in nextProps) {
				this.setState({
					value: nextProps.value || []
				});
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return !index$2(this.props, nextProps) || !index$2(this.state, nextState);
		}
	}, {
		key: 'getOptions',
		value: function getOptions() {
			var options = this.props.options;

			return options.map(function (option) {
				if (typeof option === 'string') {
					return {
						label: option,
						value: option
					};
				}
				return option;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props,
			    state = this.state;
			var prefixCls = props.prefixCls,
			    className = props.className,
			    options = props.options;

			var children = props.children;
			if (options && options.length > 0) {
				children = this.getOptions().map(function (option) {
					return React__default.createElement(
						Checkbox$2,
						{
							key: option.value,
							disabled: 'disabled' in option ? option.disabled : props.disabled,
							value: option.value,
							checked: state.value.indexOf(option.value) !== -1,
							onChange: function onChange() {
								return _this2.toggleOption(option);
							},
							className: prefixCls + '-item'
						},
						option.label
					);
				});
			}

			var classString = index$1(prefixCls, className);
			return React__default.createElement(
				'div',
				{ className: classString },
				children
			);
		}
	}]);
	return CheckboxGroup;
}(React__default.Component);

CheckboxGroup.defaultProps = {
	options: [],
	prefixCls: 'nex-checkbox-group'
};
CheckboxGroup.propTypes = {
	defaultValue: index.array,
	value: index.array,
	options: index.array.isRequired,
	onChange: index.func
};
CheckboxGroup.childContextTypes = {
	checkboxGroup: index.any
};

var Radio = function (_React$Component) {
	inherits(Radio, _React$Component);

	function Radio() {
		classCallCheck(this, Radio);
		return possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
	}

	createClass(Radio, [{
		key: 'render',
		value: function render() {
			return React__default.createElement(Checkbox, _extends({}, this.props, { ref: 'checkbox' }));
		}
	}]);
	return Radio;
}(React__default.Component);

Radio.defaultProps = {
	prefixCls: 'nex-radio',
	type: 'radio'
};

var Radio$1 = function (_Component) {
	inherits(Radio$$1, _Component);

	function Radio$$1() {
		classCallCheck(this, Radio$$1);
		return possibleConstructorReturn(this, (Radio$$1.__proto__ || Object.getPrototypeOf(Radio$$1)).apply(this, arguments));
	}

	createClass(Radio$$1, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
			return !index$2(this.props, nextProps) || !index$2(this.state, nextState) || !index$2(this.context.radioGroup, nextContext.radioGroup);
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var props = this.props,
			    context = this.context;
			var prefixCls = props.prefixCls,
			    className = props.className,
			    children = props.children,
			    style = props.style,
			    onMouseEnter = props.onMouseEnter,
			    onMouseLeave = props.onMouseLeave,
			    others = objectWithoutProperties(props, ['prefixCls', 'className', 'children', 'style', 'onMouseEnter', 'onMouseLeave']);


			var classString = index$1((_classNames = {}, defineProperty(_classNames, prefixCls + '-wrapper', true), defineProperty(_classNames, className, !!className), _classNames));

			var radioGroup = context.radioGroup;


			if (radioGroup) {
				others.onChange = radioGroup.onChange;
				others.checked = props.value + '' === radioGroup.value + '';
				others.disabled = props.disabled || radioGroup.disabled;
			}

			return React__default.createElement(
				'label',
				{
					className: classString,
					style: style,
					onMouseEnter: onMouseEnter,
					onMouseLeave: onMouseLeave
				},
				React__default.createElement(Radio, _extends({}, others, {
					prefixCls: prefixCls
				})),
				children !== undefined ? React__default.createElement(
					'span',
					{ className: prefixCls + '-label' },
					children
				) : null
			);
		}
	}]);
	return Radio$$1;
}(React.Component);

Radio$1.propTypes = {
	className: index.string,
	style: index.object,
	prefixCls: index.string
};
Radio$1.defaultProps = {
	prefixCls: 'nex-radio',
	className: '',
	style: {}
};
Radio$1.contextTypes = {
	radioGroup: index.any
};

var RadioGroup = function (_React$Component) {
	inherits(RadioGroup, _React$Component);

	function RadioGroup(props) {
		classCallCheck(this, RadioGroup);

		var _this = possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

		_this.toggleOption = function (e) {
			var lastValue = _this.state.value;
			var value = e.target.value;


			if (!('value' in _this.props)) {
				_this.setState({ value: value });
			}
			var onChange = _this.props.onChange;
			if (onChange && '' + value !== '' + lastValue) {
				onChange(value);
			}
		};

		_this.state = {
			value: props.value || props.defaultValue || null
		};
		return _this;
	}

	createClass(RadioGroup, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				radioGroup: {
					onChange: this.toggleOption,
					value: this.state.value,
					disabled: this.props.disabled
				}
			};
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ('value' in nextProps) {
				this.setState({
					value: nextProps.value || null
				});
			}
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return !index$2(this.props, nextProps) || !index$2(this.state, nextState);
		}
	}, {
		key: 'getOptions',
		value: function getOptions() {
			var options = this.props.options;

			return options.map(function (option) {
				if (typeof option === 'string') {
					return {
						label: option,
						value: option
					};
				}
				return option;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var props = this.props,
			    state = this.state;
			var prefixCls = props.prefixCls,
			    className = props.className,
			    options = props.options,
			    _props$style = props.style,
			    style = _props$style === undefined ? {} : _props$style;

			var children = props.children;
			if (options && options.length > 0) {
				children = this.getOptions().map(function (option) {
					return React__default.createElement(
						Radio$1,
						{
							key: option.value,
							disabled: 'disabled' in option ? option.disabled : props.disabled,
							value: option.value,
							checked: state.value + '' === option.value + '',
							onChange: _this2.toggleOption,
							className: prefixCls + '-item'
						},
						option.label
					);
				});
			}

			var classString = index$1(prefixCls, className);
			return React__default.createElement(
				'div',
				{ className: classString, style: style },
				children
			);
		}
	}]);
	return RadioGroup;
}(React__default.Component);

RadioGroup.defaultProps = {
	options: [],
	prefixCls: 'nex-radio-group'
};
RadioGroup.propTypes = {
	defaultValue: index.any,
	value: index.any,
	options: index.array.isRequired,
	onChange: index.func
};
RadioGroup.childContextTypes = {
	radioGroup: index.any
};

var Row = function (_React$Component) {
	inherits(Row, _React$Component);

	function Row() {
		classCallCheck(this, Row);
		return possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
	}

	createClass(Row, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$prefixCls = _props.prefixCls,
			    prefixCls = _props$prefixCls === undefined ? 'nex-row' : _props$prefixCls,
			    className = _props.className,
			    gutter = _props.gutter,
			    style = _props.style,
			    children = _props.children,
			    others = objectWithoutProperties(_props, ['prefixCls', 'className', 'gutter', 'style', 'children']);


			var classes = index$1(defineProperty({}, prefixCls, true), className);

			var rowStyle = gutter > 0 ? _extends({
				marginLeft: gutter / -2,
				marginRight: gutter / -2
			}, style) : style;

			var cols = React.Children.map(children, function (col) {
				if (!col) {
					return null;
				}
				if (col.props && gutter > 0) {
					return React.cloneElement(col, {
						style: _extends({
							paddingLeft: gutter / 2,
							paddingRight: gutter / 2
						}, col.props.style)
					});
				}
				return col;
			});
			return React__default.createElement(
				'div',
				_extends({}, others, { className: classes, style: rowStyle }),
				cols
			);
		}
	}]);
	return Row;
}(React__default.Component);

Row.propTypes = {
	className: index.string,
	children: index.node,
	gutter: index.number,
	prefixCls: index.string
};
Row.defaultProps = {
	gutter: 0
};

var stringOrNumber = index.oneOfType([index.string, index.number]);

var Col = function (_React$Component) {
	inherits(Col, _React$Component);

	function Col() {
		classCallCheck(this, Col);
		return possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
	}

	createClass(Col, [{
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props,
			    span = _props.span,
			    offset = _props.offset,
			    className = _props.className,
			    _props$prefixCls = _props.prefixCls,
			    prefixCls = _props$prefixCls === undefined ? 'nex-col' : _props$prefixCls,
			    children = _props.children,
			    others = objectWithoutProperties(_props, ['span', 'offset', 'className', 'prefixCls', 'children']);


			var classes = index$1((_classNames = {}, defineProperty(_classNames, '' + prefixCls, true), defineProperty(_classNames, prefixCls + '-' + span, span), defineProperty(_classNames, prefixCls + '-offset-' + offset, offset), defineProperty(_classNames, className, className), _classNames));

			return React__default.createElement(
				'div',
				_extends({}, others, { className: classes }),
				children
			);
		}
	}]);
	return Col;
}(React__default.Component);

Col.propTypes = {
	span: stringOrNumber,
	offset: stringOrNumber,
	className: index.string,
	children: index.node,
	prefixCls: index.string
};

function getDom(selector) {
	var dom = typeof selector === 'string' ? document.querySelector(selector) : selector;
	return dom || document.body;
}

function createContainer(parent) {
	var div = document.createElement('div');
	return parent.appendChild(div);
}

function removeContainer(elm) {
	var parentNode = elm.parentNode;

	if (parentNode) {
		parentNode.removeChild(elm);
	}
}

var Portal = function (_React$Component) {
	inherits(Portal, _React$Component);

	function Portal() {
		classCallCheck(this, Portal);
		return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	}

	createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var elm = getDom(this.props.selector);
			this._container = createContainer(elm);
			this.renderPortal();
		}
	}, {
		key: 'renderPortal',
		value: function renderPortal() {
			var children = React__default.Children.only(this.props.children);

			ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this._container, this.props.onUpdate);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var container = this._container;
			ReactDOM.unmountComponentAtNode(container);
			removeContainer(container);
			this._container = null;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.renderPortal();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return Portal;
}(React__default.Component);

Portal.propTypes = {
	children: index.node.isRequired,
	selector: index.oneOfType([index.string, index.object]).isRequired,
	className: index.string,
	css: index.object,
	prefix: index.string
};
Portal.defaultProps = {
	selector: 'body',
	className: '',
	css: {},
	prefix: 'zent'
};

exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.RCheckbox = Checkbox;
exports.Checkbox = Checkbox$2;
exports.CheckboxGroup = CheckboxGroup;
exports.RRadio = Radio;
exports.RadioGroup = RadioGroup;
exports.Radio = Radio$1;
exports.Row = Row;
exports.Col = Col;
exports.Portal = Portal;

Object.defineProperty(exports, '__esModule', { value: true });

})));
