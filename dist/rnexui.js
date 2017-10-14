(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(factory((global.rnexui = global.rnexui || {}),global.React,global.ReactDOM));
}(this, (function (exports,React,ReactDOM) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

var _class;
var _temp;

var Button = (_temp = _class = function (_PureComponent) {
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
			    inline = _props.inline,
			    className = _props.className;


			var nodeProps = {};
			if (disabled) {
				nodeProps['disabled'] = true;
			}

			var Icon = iconCls ? React__default.createElement('span', { className: index$1((_classNames = {}, defineProperty(_classNames, prefixCls + '-icon', true), defineProperty(_classNames, iconCls, true), _classNames)) }) : null;

			return React__default.createElement(
				'button',
				_extends({}, nodeProps, { type: htmlType, onClick: function onClick(e) {
						return _this2.handleClick(e);
					}, className: index$1((_classNames2 = {}, defineProperty(_classNames2, '' + prefixCls, true), defineProperty(_classNames2, prefixCls + '-' + type, type), defineProperty(_classNames2, prefixCls + '-block', !inline), defineProperty(_classNames2, prefixCls + '-inline', inline), defineProperty(_classNames2, prefixCls + '-sm', size === 'small'), defineProperty(_classNames2, prefixCls + '-lg', size === 'large'), defineProperty(_classNames2, prefixCls + '-disabled', disabled), defineProperty(_classNames2, className, true), _classNames2)) }),
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
}(React.PureComponent), _class.propTypes = {
	type: index.string,
	size: index.string,
	htmlType: index.oneOf(['button', 'submit', 'reset']),
	className: index.string,
	block: index.bool,
	disabled: index.bool,
	loading: index.bool,
	outline: index.bool,
	bordered: index.bool,
	iconCls: index.string,
	prefixCls: index.string,
	onClick: index.func
}, _class.defaultProps = {
	type: '',
	size: '',
	htmlType: 'button',
	className: '',
	iconCls: '',
	disabled: false,
	inline: true,
	prefixCls: 'nex-btn'
}, _temp);

var ObjProto = Object.prototype;

var toString = ObjProto.toString;
var hasOwnProperty = ObjProto.hasOwnProperty;

var nativeIsArray = Array.isArray;
var nativeKeys = Object.keys;

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;





var isArray = nativeIsArray ? nativeIsArray : function (value) {
    return toString.call(value) === '[object Array]';
};





function isUndefined(obj) {
    return obj === undefined;
}











function isPromiseLike(promise) {
    return promise && isFunction(promise.then);
}









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



function isEqual(a, b) {
    return String(a) === String(b);
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









function indexOf(array, item) {
    var i = 0,
        length = array && array.length;

    for (; i < length; i++) {
        if (array[i] === item) return i;
    }return -1;
}

function contains(array, item) {
    return indexOf(array, item) >= 0;
}







function uuid(n) {
    var n = n || 6;
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 35);
        res += chars[id];
    }
    return res;
}



function classNames$1() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (isArray(arg)) {
            classes.push(classNames$1.apply(null, arg));
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


var isFunction = _util.isFunction;

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

  var classes = classNames$1(prefixCls, defineProperty({}, prefixCls + '-' + sizeCls, sizeCls), className);

  return React__default.createElement('div', _extends({}, others, { className: classes }));
};

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

var _class$1;
var _temp2;

function fixControlledValue(value) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

var propTypes = {
	size: index.oneOf(['small', 'default', 'large']),
	addonBefore: index.any,
	addonBeforeCls: index.string,
	addonBeforeStyle: index.object,
	addonAfter: index.any,
	addonAfterCls: index.string,
	addonAfterStyle: index.object,
	type: index.string, //text textarea hidden
	inline: index.bool,
	prefixCls: index.string,
	onPressEnter: index.func,
	onKeyDown: index.func,
	onChange: index.func,
	autoFocus: index.bool,
	inputCls: index.string,
	inputStyle: index.object
};

var Input = (_temp2 = _class$1 = function (_PureComponent) {
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
		}, _this.handleChange = function (e) {
			var onChange = _this.props.onChange;


			if (onChange) {
				onChange(e.target.value);
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

			return index$1(prefixCls, (_classNames = {}, defineProperty(_classNames, prefixCls + '-sm', size === 'small'), defineProperty(_classNames, prefixCls + '-lg', size === 'large'), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
		}
	}, {
		key: 'renderInput',
		value: function renderInput() {
			var _classNames2, _classNames3, _classNames4;

			var props = this.props;
			var className = props.className,
			    inputStyle = props.inputStyle,
			    type = props.type,
			    addonBeforeCls = props.addonBeforeCls,
			    addonAfterCls = props.addonAfterCls,
			    addonBeforeStyle = props.addonBeforeStyle,
			    addonAfterStyle = props.addonAfterStyle,
			    _props$style = props.style,
			    style = _props$style === undefined ? {} : _props$style,
			    others = objectWithoutProperties(props, ['className', 'inputStyle', 'type', 'addonBeforeCls', 'addonAfterCls', 'addonBeforeStyle', 'addonAfterStyle', 'style']);

			var otherProps = omit(others, Object.keys(propTypes));

			if (props.type === 'hidden') {
				style.display = 'none';
			}

			if ('value' in props) {
				otherProps.value = fixControlledValue(props.value);

				delete otherProps.defaultValue;
			}

			var classname = index$1(props.prefixCls + '-wrapper', (_classNames2 = {}, defineProperty(_classNames2, props.prefixCls + '-wrapper-inline', props.inline), defineProperty(_classNames2, className, className), _classNames2));

			var addonBefore = props.addonBefore ? React__default.createElement(
				'span',
				{ className: index$1((_classNames3 = {}, defineProperty(_classNames3, props.prefixCls + '-addon ' + props.prefixCls + '-addon-before', true), defineProperty(_classNames3, addonBeforeCls, addonBeforeCls), _classNames3)), style: addonBeforeStyle },
				props.addonBefore
			) : null;

			var addonAfter = props.addonAfter ? React__default.createElement(
				'span',
				{ className: index$1((_classNames4 = {}, defineProperty(_classNames4, props.prefixCls + '-addon ' + props.prefixCls + '-addon-after', true), defineProperty(_classNames4, addonAfterCls, addonAfterCls), _classNames4)), style: addonAfterStyle },
				props.addonAfter
			) : null;

			return React__default.createElement(
				'div',
				{ className: classname, style: style },
				addonBefore,
				React__default.createElement(
					'span',
					{ className: props.prefixCls + '-inner' },
					React__default.createElement('input', _extends({}, otherProps, {
						ref: 'input',
						type: type,
						style: inputStyle,
						onChange: this.handleChange,
						className: index$1(this.getInputClassName()),
						onKeyDown: this.handleKeyDown
					}))
				),
				addonAfter
			);
		}
	}, {
		key: 'getTextareaClassName',
		value: function getTextareaClassName() {
			var _classNames5;

			var _props2 = this.props,
			    prefixCls = _props2.prefixCls,
			    disabled = _props2.disabled,
			    inputCls = _props2.inputCls;

			return index$1(prefixCls, (_classNames5 = {}, defineProperty(_classNames5, prefixCls + '-disabled', disabled), defineProperty(_classNames5, inputCls, inputCls), _classNames5));
		}
	}, {
		key: 'renderTextarea',
		value: function renderTextarea() {
			var _classNames6;

			var _props3 = this.props,
			    prefixCls = _props3.prefixCls,
			    className = _props3.className,
			    inline = _props3.inline,
			    inputStyle = _props3.inputStyle,
			    style = _props3.style,
			    others = objectWithoutProperties(_props3, ['prefixCls', 'className', 'inline', 'inputStyle', 'style']);

			var otherProps = omit(others, Object.keys(propTypes));

			if ('value' in this.props) {
				otherProps.value = fixControlledValue(this.props.value);

				delete otherProps.defaultValue;
			}

			var classname = index$1(prefixCls + '-wrapper', (_classNames6 = {}, defineProperty(_classNames6, prefixCls + '-wrapper-inline', inline), defineProperty(_classNames6, className, className), _classNames6));

			var height = style.height;


			return React__default.createElement(
				'div',
				{ className: classname, style: style },
				React__default.createElement('textarea', _extends({}, otherProps, {
					ref: 'input',
					style: _extends({
						height: height
					}, inputStyle),
					className: index$1(this.getTextareaClassName()),
					onChange: this.handleChange,
					onKeyDown: this.handleKeyDown
				}))
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.type === 'textarea') {
				return this.renderTextarea();
			}
			return this.renderInput();
		}
	}]);
	return Input;
}(React.PureComponent), _class$1.propTypes = propTypes, _class$1.defaultProps = {
	disabled: false,
	autoComplete: 'off',
	type: 'text',
	inline: true,
	size: 'default',
	prefixCls: 'nex-input'
}, _temp2);

var InputGroup = function InputGroup(props) {
	var _classNames;

	var _props$prefixCls = props.prefixCls,
	    prefixCls = _props$prefixCls === undefined ? 'nex-input-group' : _props$prefixCls,
	    _props$className = props.className,
	    className = _props$className === undefined ? '' : _props$className;

	var cls = classNames$1(prefixCls, (_classNames = {}, defineProperty(_classNames, prefixCls + '-lg', props.size === 'large'), defineProperty(_classNames, prefixCls + '-sm', props.size === 'small'), _classNames), className);
	return React__default.createElement(
		'div',
		{ className: cls, style: props.style },
		props.children
	);
};

var _class$2;
var _temp$1;
var _initialiseProps;

var Checkbox = (_temp$1 = _class$2 = function (_PureComponent) {
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
}(React.PureComponent), _class$2.propTypes = {
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
}, _class$2.defaultProps = {
	prefixCls: 'nex-checkbox',
	className: '',
	style: {},
	type: 'checkbox',
	defaultChecked: false,
	onFocus: function onFocus() {},
	onBlur: function onBlur() {},
	onChange: function onChange() {}
}, _initialiseProps = function _initialiseProps() {
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
}, _temp$1);

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

var _class$3;
var _temp$2;

var Checkbox$1 = (_temp$2 = _class$3 = function (_Component) {
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
}(React.Component), _class$3.propTypes = {
	className: index.string,
	style: index.object,
	prefixCls: index.string
}, _class$3.defaultProps = {
	prefixCls: 'nex-checkbox',
	className: '',
	style: {}
}, _class$3.contextTypes = {
	checkboxGroup: index.any
}, _temp$2);

var _class$4;
var _temp$3;

var CheckboxGroup = (_temp$3 = _class$4 = function (_React$Component) {
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
						Checkbox$1,
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
}(React__default.Component), _class$4.defaultProps = {
	options: [],
	prefixCls: 'nex-checkbox-group'
}, _class$4.propTypes = {
	defaultValue: index.array,
	value: index.array,
	options: index.array.isRequired,
	onChange: index.func
}, _class$4.childContextTypes = {
	checkboxGroup: index.any
}, _temp$3);

var _class$5;
var _temp$4;

var Radio = (_temp$4 = _class$5 = function (_React$Component) {
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
}(React__default.Component), _class$5.defaultProps = {
	prefixCls: 'nex-radio',
	type: 'radio'
}, _temp$4);

var _class$6;
var _temp$5;

var Radio$1 = (_temp$5 = _class$6 = function (_Component) {
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
}(React.Component), _class$6.propTypes = {
	className: index.string,
	style: index.object,
	prefixCls: index.string
}, _class$6.defaultProps = {
	prefixCls: 'nex-radio',
	className: '',
	style: {}
}, _class$6.contextTypes = {
	radioGroup: index.any
}, _temp$5);

var _class$7;
var _temp$6;

var RadioGroup = (_temp$6 = _class$7 = function (_React$Component) {
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
}(React__default.Component), _class$7.defaultProps = {
	options: [],
	prefixCls: 'nex-radio-group'
}, _class$7.propTypes = {
	defaultValue: index.any,
	value: index.any,
	options: index.array.isRequired,
	onChange: index.func
}, _class$7.childContextTypes = {
	radioGroup: index.any
}, _temp$6);

var _class$8;
var _temp$7;

var Row = (_temp$7 = _class$8 = function (_React$Component) {
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
}(React__default.Component), _class$8.propTypes = {
	className: index.string,
	children: index.node,
	gutter: index.number,
	prefixCls: index.string
}, _class$8.defaultProps = {
	gutter: 0
}, _temp$7);

var _class$9;
var _temp$8;

var stringOrNumber = index.oneOfType([index.string, index.number]);

var Col = (_temp$8 = _class$9 = function (_React$Component) {
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
}(React__default.Component), _class$9.propTypes = {
	span: stringOrNumber,
	offset: stringOrNumber,
	className: index.string,
	children: index.node,
	prefixCls: index.string
}, _temp$8);

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

var _class$10;
var _temp$9;

var Portal = (_temp$9 = _class$10 = function (_React$Component) {
	inherits(Portal, _React$Component);

	function Portal() {
		classCallCheck(this, Portal);
		return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	}

	createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    renderTo = _props.renderTo,
			    onCreate = _props.onCreate,
			    prefixCls = _props.prefixCls,
			    className = _props.className,
			    container = _props.container,
			    _props$animate = _props.animate,
			    animate = _props$animate === undefined ? {} : _props$animate;

			if (!container) {
				var elm = getDom(typeof renderTo === 'function' ? renderTo() : renderTo);
				this._container = createContainer(elm);
			} else {
				this._container = container;
			}
			this.renderPortal();

			if (animate.appear) {
				animate.appear(ReactDOM.findDOMNode(this._instance));
			}
		}
	}, {
		key: 'renderPortal',
		value: function renderPortal() {
			var _props2 = this.props,
			    prefixCls = _props2.prefixCls,
			    className = _props2.className;

			var children = React__default.Children.only(this.props.children);

			this._container.className = index$1(prefixCls, className);

			this._instance = ReactDOM__default.unstable_renderSubtreeIntoContainer(this, children, this._container, this.props.onUpdate);
		}
	}, {
		key: 'removePortal',
		value: function removePortal() {
			var container = this._container;
			ReactDOM__default.unmountComponentAtNode(container);
			removeContainer(container);
			this._container = null;
			this._instance = null;
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var _this2 = this;

			var _props$animate2 = this.props.animate,
			    animate = _props$animate2 === undefined ? {} : _props$animate2;


			var done = function done() {
				_this2.removePortal();
			};

			if (animate.leave) {
				animate.leave(ReactDOM.findDOMNode(this._instance), done);
			} else {
				done();
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.renderPortal();
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return Portal;
}(React__default.Component), _class$10.propTypes = {
	children: index.node.isRequired,
	container: index.node,
	renderTo: index.oneOfType([index.string, index.object, index.func]).isRequired,
	animate: index.shape({
		appear: index.func,
		leave: index.func
	})
}, _class$10.defaultProps = {
	renderTo: 'body',
	className: '',
	container: null,
	prefixCls: 'nex-portal'
}, _temp$9);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$1(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$3 = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$1(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$2.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var position = function (target, source, config) {
	$(target).position(index$3({}, config, {
		of: source
	}));
};

var _class$11;
var _temp$10;

//import $ from 'jquery';
var Popup$1 = (_temp$10 = _class$11 = function (_React$Component) {
	inherits(Popup, _React$Component);

	function Popup(props) {
		classCallCheck(this, Popup);

		var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

		_this.animateAppear = function () {
			var _this$props = _this.props,
			    popupAnimate = _this$props.popupAnimate,
			    maskAnimate = _this$props.maskAnimate;


			if (popupAnimate && popupAnimate.appear) {
				popupAnimate.appear(_this.refs.popup);
			}

			if (maskAnimate && maskAnimate.appear) {
				maskAnimate.appear(_this.refs.mask);
			}
		};

		_this.animateLeave = function (node, done) {
			var _this$props2 = _this.props,
			    popupAnimate = _this$props2.popupAnimate,
			    maskAnimate = _this$props2.maskAnimate,
			    visible = _this$props2.visible;


			if (_this.state.enableAnim && popupAnimate && popupAnimate.leave) {
				popupAnimate.leave(_this.refs.popup, done);
			} else {
				done();
			}

			if (_this.state.enableAnim && maskAnimate && maskAnimate.leave) {
				maskAnimate.leave(_this.refs.mask, function () {});
			}
		};

		_this.handleMaskClick = function (e) {
			var onMaskClick = _this.props.onMaskClick;

			if (onMaskClick) {
				onMaskClick(e);
			}
		};

		_this.state = {
			visible: props.visible,
			isInit: true,
			isHidden: false,
			enableAnim: true
		};
		return _this;
	}

	createClass(Popup, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(_ref) {
			var visible = _ref.visible;

			return !!(this.props.visible || visible);
		}

		/**
  * 获取显示方位 
  *  @param number 1 默认 
  *	- 1 位置
  *	- 2 方位
  *	- 0 包含位置和方位
  */

	}, {
		key: 'getPosition',
		value: function getPosition() {
			var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

			var pos = void 0,
			    dir = void 0;
			var popup = this.refs.popup;
			var _props = this.props,
			    of = _props.of,
			    my = _props.my,
			    at = _props.at,
			    collision = _props.collision,
			    using = _props.using,
			    within = _props.within;

			var config = {
				using: function using(p, d) {
					pos = p;
					dir = d;
				}
			};

			if (my) {
				config.my = my;
			}
			if (at) {
				config.at = at;
			}
			if (collision) {
				config.collision = collision;
			}
			if (within) {
				config.within = within;
			}

			if (typeof of === 'function') {
				of = of();
			}

			position(popup, of || document.body, config);

			return type == 1 ? pos : type == 2 ? dir : index$3(pos, dir);
		}
	}, {
		key: 'setPosition',
		value: function setPosition(pos) {
			var popup = this.refs.popup;
			$(popup).css(pos || this.getPosition());
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var visible = this.props.visible;


			if (visible) {
				this.doShow();
			}

			this.state.isInit = false;
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref2) {
			var visible = _ref2.visible;

			this.setState({
				visible: visible
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var visible = this.props.visible;
			var _refs = this.refs,
			    popup = _refs.popup,
			    mask = _refs.mask;

			if (visible) {
				if (this.state.isHidden) {
					$(popup).show();
					$(mask).show();
				}

				this.doShow();

				if (this.state.isHidden) {
					this.state.isHidden = false;
					this.animateAppear();
				}
			} else if (this.state.isHidden) {
				this.animateLeave(null, function () {
					$(popup).hide();
					$(mask).hide();
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.state.isHidden) {
				this.state.enableAnim = false;
			}
		}
	}, {
		key: 'doShow',
		value: function doShow() {
			if (this.state.isInit || !this.props.disabledSetPosition) {
				this.setPosition();
			}
		}
	}, {
		key: 'getMaskComponent',
		value: function getMaskComponent() {
			var _classNames;

			var _props2 = this.props,
			    prefixCls = _props2.prefixCls,
			    mask = _props2.mask,
			    maskCls = _props2.maskCls;


			var classes = index$1((_classNames = {}, defineProperty(_classNames, prefixCls + '-mask', true), defineProperty(_classNames, maskCls, maskCls), _classNames));

			return React__default.createElement('div', { ref: 'mask', className: classes, onClick: this.handleMaskClick });
		}
	}, {
		key: 'getRenderComponent',
		value: function getRenderComponent() {
			var _props3 = this.props,
			    prefixCls = _props3.prefixCls,
			    className = _props3.className,
			    destroyOnClose = _props3.destroyOnClose,
			    fixed = _props3.fixed,
			    mask = _props3.mask,
			    _props3$animate = _props3.animate,
			    animate = _props3$animate === undefined ? {} : _props3$animate,
			    renderTo = _props3.renderTo,
			    container = _props3.container,
			    rootCls = _props3.rootCls,
			    _others = objectWithoutProperties(_props3, ['prefixCls', 'className', 'destroyOnClose', 'fixed', 'mask', 'animate', 'renderTo', 'container', 'rootCls']);

			var _state = this.state,
			    visible = _state.visible,
			    isInit = _state.isInit;

			var classes = index$1(prefixCls, className, fixed ? prefixCls + '-fixed' : '');

			var PortalConf = {};

			if (renderTo) {
				PortalConf.renderTo = renderTo;
			}
			if (container) {
				PortalConf.container = container;
			}

			var others = omit(_others, ['prefixCls', 'className', 'visible', 'fixed', 'of', 'my', 'at', 'collision', 'using', 'within', 'mask', 'maskCls', 'destroyOnClose', 'popupAnimate', 'maskAnimate', 'disabledSetPosition']);

			var popup = React__default.createElement(
				'div',
				null,
				mask ? this.getMaskComponent() : null,
				React__default.createElement('div', _extends({}, others, { ref: 'popup', className: classes, tabIndex: -1 }))
			);

			if (!visible && !destroyOnClose && !isInit) {
				visible = true;
				this.state.isHidden = true;
			}

			return visible ? React__default.createElement(
				Portal,
				_extends({}, PortalConf, {
					className: prefixCls + '-root ' + rootCls,
					animate: {
						appear: this.animateAppear,
						leave: this.animateLeave
					}
				}),
				popup
			) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			return this.getRenderComponent();
		}
	}]);
	return Popup;
}(React__default.Component), _class$11.propTypes = {
	prefixCls: index.string,
	rootCls: index.string,
	className: index.oneOfType([index.string, index.object]),
	destroyOnClose: index.bool,
	visible: index.bool,
	fixed: index.bool,
	disabledSetPosition: index.bool,
	onMaskClick: index.func,
	popupAnimate: index.shape({
		appear: index.func,
		leave: index.func
	}),
	maskAnimate: index.shape({
		appear: index.func,
		leave: index.func
	})
}, _class$11.defaultProps = {
	prefixCls: 'nex-popup',
	rootCls: '',
	mask: false,
	fixed: false,
	destroyOnClose: true,
	disabledSetPosition: false,
	visible: false
}, _temp$10);

var defaultConfig = {
	renderTo: document.body,
	autoShow: true,
	content: null,
	parentComponent: null,
	onUpdate: null
};

var create = function (opt) {
	var config = index$3({}, defaultConfig, opt);
	var content = config.content,
	    renderTo = config.renderTo,
	    autoShow = config.autoShow,
	    parentComponent = config.parentComponent,
	    onUpdate = config.onUpdate,
	    others = objectWithoutProperties(config, ['content', 'renderTo', 'autoShow', 'parentComponent', 'onUpdate']);


	var visible = false;
	var inst = void 0,
	    isUnmount = false;
	var children = content;

	if (autoShow) {
		visible = true;
	}

	var container = document.createElement('div');

	var getPopup = function getPopup() {
		return React__default.createElement(
			Popup$1,
			_extends({}, others, {
				visible: visible
			}),
			typeof children === 'function' ? children() : children
		);
	};

	var renderer = function renderer() {
		if (parentComponent) {
			inst = ReactDOM__default.unstable_renderSubtreeIntoContainer(parentComponent, getPopup(), container, onUpdate);
		} else {
			inst = ReactDOM__default.render(getPopup(), container);
		}
	};

	if (autoShow) renderer();

	var close = function close() {
		if (isUnmount) return;
		visible = false;
		renderer();
	};

	var show = function show() {
		if (isUnmount) return;
		visible = true;
		renderer();
	};

	var destroy = function destroy() {
		if (isUnmount) return;
		ReactDOM__default.unmountComponentAtNode(container);
		var parentNode = container.parentNode;

		if (parentNode) {
			parentNode.removeChild(container);
		}
		inst = null;
		isUnmount = true;
	};

	return {
		update: function update(content) {
			if (content) children = content;
			visible && renderer();
		},
		toggle: function toggle() {
			return visible ? close() : show();
		},

		close: close,
		show: show,
		destroy: destroy,
		getInst: function getInst() {
			return inst;
		}
	};
};

Popup$1.create = create;

var _class$12;
var _temp$11;

var Option = (_temp$11 = _class$12 = function Option() {
	classCallCheck(this, Option);
}, _class$12.isOption = true, _temp$11);

var _class$13;
var _temp$12;

var Option$1 = (_temp$12 = _class$13 = function Option() {
	classCallCheck(this, Option);
}, _class$13.isOptOption = true, _temp$12);

function on(el, type, eventHandle) {
	el.addEventListener(type, eventHandle);
	return function () {
		off(el, type, eventHandle);
	};
}

function off(el, type, eventHandle) {
	el.removeEventListener(type, eventHandle);
}

var selectEventName = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
function disableSelection(el) {
	function preventDefault(e) {
		e.preventDefault();
	}
	on(el, selectEventName, preventDefault);

	return function () {
		off(el, selectEventName, preventDefault);
	};
}

function contains$1(parent, child) {
	if (typeof parent.contains == 'function') {
		return parent.contains(child);
	} else if (typeof parent.compareDocumentPosition == 'function') {
		// 判断浏览器是否有 compareDocumentPosition 方法 且 返回值为16 
		// https://developer.mozilla.org/en-US/docs/Web/API/Node.compareDocumentPosition
		return !!(parent.compareDocumentPosition(child) & 16);
	} else {
		// 循环查出父节点 是否 等于 wrapNode; 
		var node = child.parentNode;
		do {
			if (node === parent) {
				return true;
			} else {
				node = node.parentNode;
			}
		} while (node !== null);

		return false;
	}
}

function getStyle(el, proto) {
	var style = getComputedStyle ? getComputedStyle(el) : el.currentStyle;
	return style[proto];
}



function getOffset(el) {
	var rect = el.getBoundingClientRect();
	var docEl = document.documentElement;
	var bd = document.body;

	return {
		top: rect.top + (docEl && docEl.scrollTop ? docEl.scrollTop : bd.scrollTop),
		left: rect.left + (docEl && docEl.scrollLeft ? docEl.scrollLeft : bd.scrollLeft)
	};
}









/**
* @param margin {boolean} 是否包含margin
*/




function isVisible(el) {
	var node = el;
	do {
		var display = getStyle(node, 'display');
		if (display === 'none') {
			return false;
		} else {
			node = node.parentNode;
			if (node === document.body) {
				return true;
			}
		}
	} while (node !== null);

	return true;
}

var _class$17;
var _temp$16;

var ScrollViewBody = (_temp$16 = _class$17 = function (_React$Component) {
	inherits(ScrollViewBody, _React$Component);

	function ScrollViewBody() {
		classCallCheck(this, ScrollViewBody);
		return possibleConstructorReturn(this, (ScrollViewBody.__proto__ || Object.getPrototypeOf(ScrollViewBody)).apply(this, arguments));
	}

	createClass(ScrollViewBody, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(_ref) {
			var _shouldComponentUpdate = _ref.shouldComponentUpdate;

			return _shouldComponentUpdate;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    shouldComponentUpdate = _props.shouldComponentUpdate,
			    component = _props.component,
			    others = objectWithoutProperties(_props, ['shouldComponentUpdate', 'component']);


			var Node = component;

			return React__default.createElement(Node, others);
		}
	}]);
	return ScrollViewBody;
}(React__default.Component), _class$17.propTypes = {
	className: index.string,
	shouldComponentUpdate: index.bool,
	component: index.oneOfType([index.string, index.func])
}, _class$17.defaultProps = {
	className: '',
	shouldComponentUpdate: true,
	component: 'div'
}, _temp$16);

var _class$16;
var _temp$15;

var ScrollView = (_temp$15 = _class$16 = function (_React$Component) {
	inherits(ScrollView, _React$Component);

	function ScrollView(props) {
		classCallCheck(this, ScrollView);

		var _this = possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

		_this.handleWheel = function () {
			var defNoop = function defNoop(e) {
				e.preventDefault();
			};
			var noop = function noop() {};
			//滚动到底部时下一次滚动不需要禁用默认行为
			//dir 1 向下 -1 向上
			var nextEnd = defNoop;
			var lastDir = 1;
			return function (e) {
				var deltaY = e.deltaY;
				var _this$props = _this.props,
				    wheelStep = _this$props.wheelStep,
				    wheelDir = _this$props.wheelDir,
				    enablePreventDefaultOnEnd = _this$props.enablePreventDefaultOnEnd;

				var curDir = deltaY > 0 ? 1 : -1;
				var state = _this.state;

				if (lastDir != curDir) {
					lastDir = curDir;
					nextEnd = defNoop;
				}

				if (!state.hasScrollY && wheelDir === 'y') {
					return;
				} else if (!state.hasScrollX && wheelDir === 'x') {
					return;
				}

				_this.scrollTo(wheelDir, deltaY > 0 ? _this.getScrollPos(wheelDir) + wheelStep : _this.getScrollPos(wheelDir) - wheelStep);

				if (enablePreventDefaultOnEnd /* && wheelDir !== 'x' */) {
						var isEnd = deltaY > 0 ? _this.isScrollEnd(wheelDir) : _this.getScrollPos(wheelDir) <= 0;
						if (!isEnd) {
							e.preventDefault();
							nextEnd = defNoop;
						} else {
							nextEnd(e);
							nextEnd = noop;
						}
					} else {
					e.preventDefault();
				}
			};
		}();

		_this.handleScroll = function (e) {
			var _this$props2 = _this.props,
			    onScroll = _this$props2.onScroll,
			    onHScrollEnd = _this$props2.onHScrollEnd,
			    onHScrollStart = _this$props2.onHScrollStart,
			    onVScrollEnd = _this$props2.onVScrollEnd,
			    onVScrollStart = _this$props2.onVScrollStart;

			var state = _this.state;
			var target = e.target;

			var lastScrollTop = state.scrollTop,
			    lastScrollLeft = state.scrollLeft;

			state.scrollTop = target.scrollTop;
			state.scrollLeft = target.scrollLeft;

			_this.updateScrollBarPosition();

			if (onScroll) {
				onScroll.call(_this, state.scrollLeft, state.scrollTop, e);
			}

			if (lastScrollTop !== state.scrollTop) {
				if (onVScrollEnd && _this.isScrollEnd('y')) {
					onVScrollEnd.call(_this, e);
				}
				if (onVScrollStart && state.scrollTop === 0) {
					onVScrollStart.call(_this, e);
				}
			}

			if (lastScrollLeft !== state.scrollLeft) {
				if (onHScrollEnd && _this.isScrollEnd('x')) {
					onHScrollEnd.call(_this, e);
				}
				if (onHScrollStart && state.scrollLeft === 0) {
					onHScrollStart.call(_this, e);
				}
			}
		};

		_this.state = {
			shouldComponentUpdate: true,
			hasScrollX: false,
			hasScrollY: false,
			thumbXSize: null,
			thumbYSize: null,
			isUpdating: false,
			scrollXRatio: null,
			scrollYRatio: null,
			scrollTop: 0,
			scrollLeft: 0,
			origScrollViewPaddingRight: null,
			origScrollViewPaddingBottom: null,
			lastScrollViewPaddingRight: null,
			lastScrollViewPaddingBottom: null
		};
		return _this;
	}

	createClass(ScrollView, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				ScrollView: this
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {

			this.updateScrollBarLayoutAndPosition();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps() {
			var state = this.state;
			state.origScrollViewPaddingRight = null;
			state.lastScrollViewPaddingRight = null;
			state.origScrollViewPaddingBottom = null;
			state.lastScrollViewPaddingBottom = null;

			this.setState({
				shouldComponentUpdate: true
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (!this.state.isUpdating) this.updateScrollBarLayoutAndPosition();
		}
	}, {
		key: 'handleTrackMouseDown',
		value: function handleTrackMouseDown(e) {
			var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';

			if (e.button !== 0) {
				return;
			}
			var target = e.target;
			var _state = this.state,
			    scrollXRatio = _state.scrollXRatio,
			    scrollYRatio = _state.scrollYRatio;
			var _refs = this.refs,
			    verticalBarThumbEl = _refs.verticalBarThumbEl,
			    horizontalBarThumbEl = _refs.horizontalBarThumbEl;

			var rect = target.getBoundingClientRect();
			var isVertical = dir === 'y';
			var proto = isVertical ? 'scrollTop' : 'scrollLeft';
			var trackPos = rect[isVertical ? 'top' : 'left'] + (document.documentElement && document.documentElement[proto] ? document.documentElement[proto] : document.body[proto]);
			var thumbEl = isVertical ? verticalBarThumbEl : horizontalBarThumbEl;

			var clickPagePos = e[isVertical ? 'pageY' : 'pageX'];
			var clickPos = clickPagePos - trackPos;

			var thumbPos = parseInt(getStyle(thumbEl, isVertical ? 'top' : 'left'), 10);
			var thumbSize = thumbEl[isVertical ? 'offsetHeight' : 'offsetWidth'];

			var ratio = isVertical ? scrollYRatio : scrollXRatio;

			if (clickPos < thumbPos) {
				this.scrollTo(dir, (clickPagePos - trackPos) * ratio);
			} else {
				this.scrollTo(dir, (thumbPos + clickPagePos - (thumbPos + thumbSize + trackPos)) * ratio);
			}
		}
	}, {
		key: 'handleThumbMouseDown',
		value: function handleThumbMouseDown(e) {
			var _this2 = this;

			var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';

			var doc = document;
			var state = this.state;
			var startY = e.pageY;
			var startX = e.pageX;
			var start = this.getScrollPos(dir);
			var ratio = state[dir === 'y' ? 'scrollYRatio' : 'scrollXRatio'];

			var moveOff = void 0,
			    upOff = void 0,
			    cursor = void 0;

			cursor = doc.body.style.cursor;

			doc.body.style.cursor = 'default';

			var enableSelection = disableSelection(doc.body);

			upOff = on(doc, 'mouseup', function (e) {
				enableSelection();
				upOff();
				moveOff();
				doc.body.style.cursor = cursor;
			});

			moveOff = on(doc, 'mousemove', function (e) {
				var moveDist = dir === 'y' ? e.pageY - startY : e.pageX - startX;
				var sPos = start + moveDist * ratio;
				_this2.scrollTo(dir, sPos);
			});
		}
	}, {
		key: 'scrollTo',
		value: function scrollTo() {
			var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
			var pos = arguments[1];

			var scrollview = this.getScrollViewBody();
			var proto = dir === 'y' ? 'scrollTop' : 'scrollLeft';

			if (this.state[proto] === pos) {
				return;
			}

			scrollview[proto] = pos;
		}
	}, {
		key: 'scrollX',
		value: function scrollX(sLeft) {
			this.scrollTo('x', sLeft);
		}
	}, {
		key: 'scrollY',
		value: function scrollY(sTop) {
			this.scrollTo('y', sTop);
		}
	}, {
		key: 'scrollEnd',
		value: function scrollEnd() {
			var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';

			var scrollview = this.getScrollViewBody();
			var proto = dir === 'y' ? 'Height' : 'Width';

			var c = scrollview['client' + proto];
			var s = scrollview['scroll' + proto];

			if (s <= c) {
				return;
			}

			this.scrollTo(dir, s - c);
		}
	}, {
		key: 'scrollIntoView',
		value: function scrollIntoView(el) {
			var scrollview = this.getScrollViewBody();
			if (!contains$1(scrollview, el) || !isVisible(el)) return;

			var pOffset = getOffset(scrollview);
			var tOffset = getOffset(el);

			var pTop = pOffset.top,
			    pLeft = pOffset.left,
			    pBottom = pOffset.top + scrollview.offsetHeight,
			    pRight = pOffset.left + scrollview.offsetWidth,
			    tTop = tOffset.top,
			    tLeft = tOffset.left,
			    tBottom = tOffset.top + el.offsetHeight,
			    tRight = tOffset.left + el.offsetWidth;

			var sTop = scrollview.scrollTop,
			    sLeft = scrollview.scrollLeft;

			if (pTop > tTop) {
				scrollview.scrollTop = sTop - (pTop - tTop);
			} else if (pBottom < tTop + el.offsetHeight) {
				scrollview.scrollTop = sTop + tTop - pBottom + Math.min(el.offsetHeight, scrollview.clientHeight);
			}

			if (pLeft > tLeft) {
				scrollview.scrollLeft = sLeft - (pLeft - tLeft);
			} else if (pRight < tLeft + el.offsetWidth) {
				scrollview.scrollLeft = sLeft + tLeft - pRight + Math.min(el.offsetWidth, scrollview.clientWidth);
			}
		}
	}, {
		key: 'setThumbPos',
		value: function setThumbPos() {
			this.setThumbYPos();
			this.setThumbXPos();
		}
	}, {
		key: 'setThumbYPos',
		value: function setThumbYPos() {
			var _state2 = this.state,
			    hasScrollY = _state2.hasScrollY,
			    scrollYRatio = _state2.scrollYRatio,
			    scrollTop = _state2.scrollTop,
			    thumbYSize = _state2.thumbYSize;

			if (!hasScrollY) return;

			var verticalBarWrapEl = this.refs.verticalBarWrapEl;

			var minTop = 0;
			var maxTop = verticalBarWrapEl.clientHeight - thumbYSize;

			this.refs.verticalBarThumbEl.style.top = Math.min(Math.max(scrollTop / scrollYRatio, minTop), maxTop) + 'px';
		}
	}, {
		key: 'setThumbXPos',
		value: function setThumbXPos() {
			var _state3 = this.state,
			    hasScrollX = _state3.hasScrollX,
			    scrollXRatio = _state3.scrollXRatio,
			    scrollLeft = _state3.scrollLeft,
			    thumbXSize = _state3.thumbXSize;

			if (!hasScrollX) return;

			var horizontalBarWrapEl = this.refs.horizontalBarWrapEl;

			var minLeft = 0;
			var maxLeft = horizontalBarWrapEl.clientWidth - thumbXSize;

			this.refs.horizontalBarThumbEl.style.left = Math.min(Math.max(scrollLeft / scrollXRatio, minLeft), maxLeft) + 'px';
		}
	}, {
		key: 'getScrollViewBody',
		value: function getScrollViewBody() {
			return ReactDOM.findDOMNode(this.refs.scrollviewBody);
		}
	}, {
		key: 'getThumbSize',
		value: function getThumbSize() {
			var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
			var _props = this.props,
			    thumbSize = _props.thumbSize,
			    thumbMinSize = _props.thumbMinSize,
			    thumbMaxSize = _props.thumbMaxSize;
			var _refs2 = this.refs,
			    verticalBarWrapEl = _refs2.verticalBarWrapEl,
			    horizontalBarWrapEl = _refs2.horizontalBarWrapEl;

			var scrollview = this.getScrollViewBody();
			var isVertical = dir === 'y';
			var client = isVertical ? scrollview.clientHeight : scrollview.clientWidth,
			    scroll = isVertical ? scrollview.scrollHeight : scrollview.scrollWidth,
			    trackSize = isVertical ? verticalBarWrapEl.clientHeight : horizontalBarWrapEl.clientWidth;

			return thumbSize && thumbSize > 0 ? thumbSize : Math.min(Math.max(thumbMinSize, client / scroll * trackSize), thumbMaxSize);
		}

		//判断是否创建滚动条

	}, {
		key: 'hasVerticalScrollBar',
		value: function hasVerticalScrollBar() {
			var _props2 = this.props,
			    overflow = _props2.overflow,
			    overflowY = _props2.overflowY;

			var scrollview = this.getScrollViewBody();

			if (!overflowY && (overflow === 'hidden' || overflow === 'visible')) {
				return false;
			} else if (overflow === 'scroll') {
				return true;
			}

			if (overflowY === 'hidden' || overflowY === 'visible') {
				return false;
			} else if (overflow === 'scroll') {
				return true;
			}

			return scrollview.scrollHeight - scrollview.clientHeight > 1;
		}
		//判断是否创建滚动条

	}, {
		key: 'hasHorizontalScrollBar',
		value: function hasHorizontalScrollBar() {
			var _props3 = this.props,
			    overflow = _props3.overflow,
			    overflowX = _props3.overflowX;

			var scrollview = this.getScrollViewBody();

			if (!overflowX && (overflow === 'hidden' || overflow === 'visible')) {
				return false;
			} else if (overflow === 'scroll') {
				return true;
			}

			if (overflowX === 'hidden' || overflowX === 'visible') {
				return false;
			} else if (overflow === 'scroll') {
				return true;
			}

			return scrollview.scrollWidth - scrollview.clientWidth > 1;
		}
	}, {
		key: 'isScrollEnd',
		value: function isScrollEnd() {
			var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';

			var scrollview = this.getScrollViewBody();

			return dir === 'y' ? scrollview.scrollTop >= scrollview.scrollHeight - scrollview.clientHeight : scrollview.scrollLeft >= scrollview.scrollWidth - scrollview.clientWidth;
		}
	}, {
		key: 'getScrollPos',
		value: function getScrollPos() {
			var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';

			var scrollview = this.getScrollViewBody();

			return scrollview[dir === 'y' ? 'scrollTop' : 'scrollLeft'];
		}
	}, {
		key: 'hasScroll',
		value: function hasScroll() {
			var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';

			return dir === 'y' ? this.hasVerticalScrollBar() : this.hasHorizontalScrollBar();
		}
	}, {
		key: 'refreshScrollBar',
		value: function refreshScrollBar() {
			this.updateScrollBarLayoutAndPosition();
		}
	}, {
		key: 'updateScrollBarLayoutAndPosition',
		value: function updateScrollBarLayoutAndPosition() {
			var _this3 = this;

			var hasScrollX = this.hasScroll('x'),
			    hasScrollY = this.hasScroll('y');

			this.state.isUpdating = true;

			this.setState({
				shouldComponentUpdate: false,
				hasScrollX: hasScrollX,
				hasScrollY: hasScrollY
			}, function () {

				_this3.updateScrollBarLayout();
				_this3.updateScrollBarPosition();

				_this3.state.isUpdating = false;
			});
		}
	}, {
		key: 'updateScrollBarLayout',
		value: function updateScrollBarLayout() {
			var _props4 = this.props,
			    scrollBarSize = _props4.scrollBarSize,
			    scrollBarOffsetTopOrLeft = _props4.scrollBarOffsetTopOrLeft,
			    scrollBarOffsetRightOrBottom = _props4.scrollBarOffsetRightOrBottom;
			var _refs3 = this.refs,
			    verticalBarEl = _refs3.verticalBarEl,
			    horizontalBarEl = _refs3.horizontalBarEl,
			    verticalBarWrapEl = _refs3.verticalBarWrapEl,
			    horizontalBarWrapEl = _refs3.horizontalBarWrapEl,
			    verticalBarThumbEl = _refs3.verticalBarThumbEl,
			    horizontalBarThumbEl = _refs3.horizontalBarThumbEl;

			var container = this.refs.scrollview;
			var scrollview = this.getScrollViewBody();
			var state = this.state;
			var hasScrollX = state.hasScrollX,
			    hasScrollY = state.hasScrollY;


			if (hasScrollX || hasScrollY) {
				if (hasScrollY) {
					verticalBarEl.style.top = scrollBarOffsetTopOrLeft + 'px';
					verticalBarEl.style.right = scrollBarOffsetRightOrBottom + 'px';
					verticalBarEl.style.bottom = scrollBarOffsetTopOrLeft + (hasScrollX ? scrollBarSize + scrollBarOffsetRightOrBottom : 0) + 'px';
				}

				if (hasScrollX) {
					horizontalBarEl.style.left = scrollBarOffsetTopOrLeft + 'px';
					horizontalBarEl.style.bottom = scrollBarOffsetRightOrBottom + 'px';
					horizontalBarEl.style.right = scrollBarOffsetTopOrLeft + (hasScrollY ? scrollBarSize + scrollBarOffsetRightOrBottom : 0) + 'px';
				}
			}

			if (hasScrollY) {
				var thumbSize = this.getThumbSize('y');
				state.thumbYSize = thumbSize;
				verticalBarThumbEl.style.height = thumbSize + 'px';
				state.scrollYRatio = (scrollview.scrollHeight - scrollview.clientHeight) / (verticalBarWrapEl.clientHeight - thumbSize);
			}

			if (hasScrollX) {
				var _thumbSize = this.getThumbSize('x');
				state.thumbXSize = _thumbSize;
				horizontalBarThumbEl.style.width = _thumbSize + 'px';
				state.scrollXRatio = (scrollview.scrollWidth - scrollview.clientWidth) / (horizontalBarWrapEl.clientWidth - _thumbSize);
			}
		}
	}, {
		key: 'updateScrollBarPosition',
		value: function updateScrollBarPosition() {
			this.setThumbPos();
		}
	}, {
		key: 'getScrollBar',
		value: function getScrollBar() {
			var _this4 = this,
			    _classNames,
			    _classNames2;

			var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
			var _props5 = this.props,
			    prefixCls = _props5.prefixCls,
			    showTrack = _props5.showTrack,
			    thumbCls = _props5.thumbCls,
			    trackCls = _props5.trackCls;

			var isVertical = dir === 'y';
			var dirCls = prefixCls + '-bar-' + (isVertical ? 'vertical' : 'horizontal');

			var ScrollbarRef = function ScrollbarRef(el) {
				_this4.refs[isVertical ? 'verticalBarEl' : 'horizontalBarEl'] = el;
			};

			var scrollbarRef = isVertical ? 'verticalBarEl' : 'horizontalBarEl',
			    scrollbarWrapRef = isVertical ? 'verticalBarWrapEl' : 'horizontalBarWrapEl',
			    scrollbarTrackRef = isVertical ? 'verticalBarTrackEl' : 'horizontalBarTrackEl',
			    scrollbarThumbRef = isVertical ? 'verticalBarThumbEl' : 'horizontalBarThumbEl';

			return React__default.createElement(
				'div',
				{ ref: scrollbarRef, className: index$1(prefixCls + '-bar', dirCls) },
				React__default.createElement(
					'div',
					{ ref: scrollbarWrapRef, className: prefixCls + '-bar-wrap' },
					showTrack ? React__default.createElement('div', {
						ref: scrollbarTrackRef,
						className: index$1((_classNames = {}, defineProperty(_classNames, prefixCls + '-bar-track', true), defineProperty(_classNames, trackCls, trackCls), _classNames)),
						onMouseDown: function onMouseDown(e) {
							return _this4.handleTrackMouseDown(e, dir);
						}
					}) : null,
					React__default.createElement('div', {
						ref: scrollbarThumbRef,
						className: index$1((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-bar-thumb', true), defineProperty(_classNames2, thumbCls, thumbCls), _classNames2)),
						onMouseDown: function onMouseDown(e) {
							return _this4.handleThumbMouseDown(e, dir);
						}
					})
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames3, _classNames4;

			var _props6 = this.props,
			    prefixCls = _props6.prefixCls,
			    className = _props6.className,
			    scrollViewBodyCls = _props6.scrollViewBodyCls,
			    _props6$style = _props6.style,
			    style = _props6$style === undefined ? {} : _props6$style,
			    _props6$component = _props6.component,
			    component = _props6$component === undefined ? 'div' : _props6$component,
			    _props6$scrollViewBod = _props6.scrollViewBodyStyle,
			    scrollViewBodyStyle = _props6$scrollViewBod === undefined ? {} : _props6$scrollViewBod,
			    children = _props6.children,
			    others = objectWithoutProperties(_props6, ['prefixCls', 'className', 'scrollViewBodyCls', 'style', 'component', 'scrollViewBodyStyle', 'children']);
			var _state4 = this.state,
			    shouldComponentUpdate = _state4.shouldComponentUpdate,
			    hasScrollX = _state4.hasScrollX,
			    hasScrollY = _state4.hasScrollY;


			var classes = index$1((_classNames3 = {}, defineProperty(_classNames3, prefixCls + '-view', true), defineProperty(_classNames3, '' + className, className), _classNames3));

			var bodyClasses = index$1((_classNames4 = {}, defineProperty(_classNames4, prefixCls + '-view-body', true), defineProperty(_classNames4, '' + scrollViewBodyCls, scrollViewBodyCls), _classNames4));

			var otherProps = omit(others, Object.keys(ScrollView.defaultProps));

			return React__default.createElement(
				'div',
				_extends({}, otherProps, { ref: 'scrollview', className: classes, style: style, onWheel: this.handleWheel }),
				React__default.createElement(
					ScrollViewBody,
					{ ref: 'scrollviewBody', className: bodyClasses, style: scrollViewBodyStyle, component: component, onScroll: this.handleScroll, shouldComponentUpdate: shouldComponentUpdate },
					children
				),
				hasScrollX ? this.getScrollBar('x') : null,
				hasScrollY ? this.getScrollBar('y') : null
			);
		}
	}]);
	return ScrollView;
}(React__default.Component), _class$16.propTypes = {
	prefixCls: index.string,
	className: index.oneOfType([index.string, index.object]),
	scrollViewBodyCls: index.string,
	scrollViewBodyStyle: index.object,
	overflow: index.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
	overflowX: index.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
	overflowY: index.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
	wheelDir: index.oneOfType(['x', 'y']),
	thumbCls: index.string,
	trackCls: index.string,
	scrollBarSize: index.number,
	thumbSize: index.number,
	thumbMinSize: index.number,
	thumbMaxSize: index.number,
	showTrack: index.bool,
	scrollBarOffsetTopOrLeft: index.number,
	scrollBarOffsetRightOrBottom: index.number,
	wheelStep: index.number,
	enablePreventDefaultOnEnd: index.bool,
	onScroll: index.func,
	onHScrollEnd: index.func,
	onVScrollEnd: index.func,
	onHScrollStart: index.func,
	onVScrollStart: index.func
}, _class$16.defaultProps = {
	prefixCls: 'nex-scroll',
	className: '',
	scrollViewBodyCls: '',
	overflow: 'auto',
	overflowX: 'auto',
	overflowY: 'auto',
	scrollBarSize: 7,
	scrollBarOffsetTopOrLeft: 2,
	scrollBarOffsetRightOrBottom: 0,
	wheelDir: 'y',
	thumbCls: '',
	trackCls: '',
	thumbSize: null,
	thumbMinSize: 6,
	thumbMaxSize: 999999,
	showTrack: true,
	wheelStep: 100,
	enablePreventDefaultOnEnd: true,
	onScroll: null,
	onHScrollEnd: null,
	onVScrollEnd: null,
	onHScrollStart: null,
	onVScrollStart: null
}, _class$16.childContextTypes = {
	ScrollView: index.object
}, _temp$15);

var _class$18;
var _temp2$1;

var ListItem$1 = (_temp2$1 = _class$18 = function (_React$Component) {
	inherits(ListItem, _React$Component);

	function ListItem() {
		var _ref;

		var _temp, _this, _ret;

		classCallCheck(this, ListItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (e) {
			var _this$props = _this.props,
			    onSelect = _this$props.onSelect,
			    onDeselect = _this$props.onDeselect,
			    onClick = _this$props.onClick,
			    selected = _this$props.selected,
			    disabled = _this$props.disabled,
			    value = _this$props.value,
			    children = _this$props.children;

			if (disabled) return;

			var item = {
				value: value,
				text: children
			};

			if (onClick) {
				onClick(item, e);
			}

			if (!selected) {
				onSelect && onSelect(item, _this.refs.item);
			} else {
				onDeselect && onDeselect(item, _this.refs.item);
			}
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	createClass(ListItem, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
			return !index$2(this.props, nextProps) || !index$2(this.state, nextState);
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props,
			    value = _props.value,
			    prefixCls = _props.prefixCls,
			    disabled = _props.disabled,
			    selected = _props.selected,
			    children = _props.children;

			var classes = index$1((_classNames = {}, defineProperty(_classNames, '' + prefixCls, true), defineProperty(_classNames, prefixCls + '-selected', selected), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

			return React__default.createElement(
				'div',
				{ ref: 'item', className: classes, onClick: this.handleItemClick },
				children
			);
		}
	}]);
	return ListItem;
}(React__default.Component), _class$18.defaultProps = {
	prefixCls: 'nex-listbox-item',
	value: '',
	selected: false,
	disabled: false
}, _class$18.isListItem = true, _temp2$1);

var _class$19;
var _temp$17;

var ItemGroup = (_temp$17 = _class$19 = function (_React$Component) {
	inherits(ItemGroup, _React$Component);

	function ItemGroup() {
		classCallCheck(this, ItemGroup);
		return possibleConstructorReturn(this, (ItemGroup.__proto__ || Object.getPrototypeOf(ItemGroup)).apply(this, arguments));
	}

	createClass(ItemGroup, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    label = _props.label,
			    children = _props.children;

			return React__default.createElement(
				'div',
				{ className: prefixCls },
				React__default.createElement(
					'div',
					{ className: prefixCls + '-title' },
					label
				),
				React__default.createElement(
					'div',
					{ className: prefixCls + '-list' },
					children
				)
			);
		}
	}]);
	return ItemGroup;
}(React__default.Component), _class$19.defaultProps = {
	prefixCls: 'nex-listbox-item-group',
	label: ''
}, _class$19.isListItemGroup = true, _temp$17);

var _class$15;
var _temp$14;
var _initialiseProps$2;

function copy(data) {
	return isArray(data) ? [].concat(data) : data;
}

var ListBox$1 = (_temp$14 = _class$15 = function (_React$Component) {
	inherits(ListBox, _React$Component);

	function ListBox(props) {
		classCallCheck(this, ListBox);

		var _this = possibleConstructorReturn(this, (ListBox.__proto__ || Object.getPrototypeOf(ListBox)).call(this, props));

		_initialiseProps$2.call(_this);

		var selectedValue = [];
		var value = void 0;

		if (!isUndefined(props.value)) {
			value = isArray(props.value) ? props.value : [props.value];
		} else if (!isUndefined(props.defaultValue)) {
			value = isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue];
		}

		if (value) {
			selectedValue.push.apply(selectedValue, toConsumableArray(value));
		}

		_this.state = {
			selectedValue: selectedValue,
			itemsMap: {}
		};
		return _this;
	}

	createClass(ListBox, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref) {
			var value = _ref.value;

			if (!isUndefined(value)) {
				this.setState({
					selectedValue: isArray(value) ? value : [value]
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var el = ReactDOM.findDOMNode(this);
			var scrollview = this.refs.listbox;

			var selectedItem = el.querySelector('.nex-listbox-item-selected');
			if (selectedItem) {
				scrollview.scrollIntoView(selectedItem);
			}
		}
	}, {
		key: 'transformChangeValue',
		value: function transformChangeValue(value) {
			var labelInValue = this.props.labelInValue;
			var itemsMap = this.state.itemsMap;


			if (labelInValue) {
				return isArray(value) ? value.map(function (v) {
					return itemsMap[v];
				}) : itemsMap[value];
			}

			return value;
		}
	}, {
		key: 'renderListItems',
		value: function renderListItems(items, markMap) {
			var _this2 = this;

			var _props = this.props,
			    textField = _props.textField,
			    valueField = _props.valueField,
			    itemsField = _props.itemsField,
			    prefixCls = _props.prefixCls,
			    filter$$1 = _props.filter;
			var itemsMap = this.state.itemsMap;


			return items.map(function (item) {
				if (typeof item === 'string') {
					var _item;

					item = (_item = {}, defineProperty(_item, textField, item), defineProperty(_item, valueField, item), _item);
				}

				var isGroup = item[itemsField];
				var itemPrefixCls = prefixCls + '-item';

				if (!isGroup) {
					itemsMap[item[valueField]] = item;
				}

				return (filter$$1 && !isGroup ? filter$$1(item) : true) ? !isGroup ? React__default.createElement(
					ListItem$1,
					{
						key: item[valueField],
						value: item[valueField],
						prefixCls: itemPrefixCls,
						selected: markMap[item[valueField]],
						disabled: item.disabled,
						onClick: _this2.onItemClick,
						onSelect: _this2.onItemSelect,
						onDeselect: _this2.onItemDeselect
					},
					item[textField]
				) : React__default.createElement(
					ItemGroup,
					{ prefixCls: itemPrefixCls + '-group', key: item[textField], label: item[textField] },
					_this2.renderListItems(item[itemsField] || [], markMap)
				) : null;
			});
		}
	}, {
		key: 'renderListChild',
		value: function renderListChild(children, markMap) {
			var _this3 = this;

			var _props2 = this.props,
			    textField = _props2.textField,
			    valueField = _props2.valueField,
			    itemsField = _props2.itemsField,
			    prefixCls = _props2.prefixCls,
			    filter$$1 = _props2.filter;
			var itemsMap = this.state.itemsMap;


			var itemPrefixCls = prefixCls + '-item';

			return React__default.Children.map(children, function (child) {
				var props = child.props;

				if (child.type.isListItemGroup) {
					return React__default.cloneElement(child, {}, _this3.renderListChild(props.children, markMap));
				}

				itemsMap[props[valueField]] = index$3({}, omit(props, ['children', 'selected', 'prefixCls']), defineProperty({}, textField, props.children));

				return React__default.cloneElement(child, {
					selected: markMap[props[valueField]],
					prefixCls: itemPrefixCls,
					onClick: _this3.onItemClick,
					onSelect: _this3.onItemSelect,
					onDeselect: _this3.onItemDeselect
				});
			});
		}
	}, {
		key: 'getListItems',
		value: function getListItems() {
			var _props3 = this.props,
			    textField = _props3.textField,
			    valueField = _props3.valueField,
			    prefixCls = _props3.prefixCls,
			    multiple = _props3.multiple,
			    items = _props3.items,
			    children = _props3.children;
			var selectedValue = this.state.selectedValue;


			this.state.itemsMap = {};

			var markMap = {};

			selectedValue.forEach(function (v) {
				return markMap[v] = true;
			});

			return items.length ? this.renderListItems(items, markMap) : this.renderListChild(children, markMap);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props4 = this.props,
			    filter$$1 = _props4.filter,
			    className = _props4.className,
			    value = _props4.value,
			    prefixCls = _props4.prefixCls,
			    items = _props4.items,
			    width = _props4.width,
			    height = _props4.height,
			    _props4$style = _props4.style,
			    style = _props4$style === undefined ? {} : _props4$style,
			    _props4$scrollViewBod = _props4.scrollViewBodyStyle,
			    scrollViewBodyStyle = _props4$scrollViewBod === undefined ? {} : _props4$scrollViewBod;


			if (width) {
				style.width = width;
			}
			if (height) {
				style.height = height;
			}

			return React__default.createElement(
				ScrollView,
				{ ref: 'listbox', tabIndex: -1, scrollViewBodyCls: prefixCls + '-body', scrollViewBodyStyle: scrollViewBodyStyle, className: index$1('' + prefixCls, className), style: style },
				this.getListItems()
			);
		}
	}]);
	return ListBox;
}(React__default.Component), _class$15.propTypes = {
	className: index.string,
	style: index.object,
	scrollViewBodyStyle: index.object,
	prefixCls: index.string,
	valueField: index.string,
	textField: index.string,
	itemsField: index.string,
	items: index.array,
	filter: index.func,
	multiple: index.bool,
	width: index.oneOfType([index.string, index.number]),
	height: index.oneOfType([index.string, index.number]),
	labelInValue: index.bool,
	onItemClick: index.func,
	onChange: index.func
}, _class$15.defaultProps = {
	prefixCls: 'nex-listbox',
	valueField: 'value',
	textField: 'text',
	itemsField: 'items',
	labelInValue: false,
	items: []
}, _initialiseProps$2 = function _initialiseProps() {
	var _this4 = this;

	this.onItemClick = function (item, e) {
		var onItemClick = _this4.props.onItemClick;

		_this4.refs.listbox.scrollIntoView(e.target);

		if (onItemClick) onItemClick(item);
	};

	this.onItemSelect = function (item, el) {
		var _props5 = _this4.props,
		    multiple = _props5.multiple,
		    onChange = _props5.onChange;
		var _state = _this4.state,
		    selectedValue = _state.selectedValue,
		    itemsMap = _state.itemsMap;

		var valueField = 'value';

		if (!multiple) {
			selectedValue.length = 0;
		}

		selectedValue.push(item[valueField]);

		if (!('value' in _this4.props)) {
			_this4.setState({
				selectedValue: selectedValue
			});
		}

		if (onChange) {
			onChange(_this4.transformChangeValue(multiple ? copy(selectedValue) : selectedValue[0]));
		}
	};

	this.onItemDeselect = function (item, el) {
		var _props6 = _this4.props,
		    multiple = _props6.multiple,
		    onChange = _props6.onChange,
		    labelInValue = _props6.labelInValue;
		var selectedValue = _this4.state.selectedValue;

		var valueField = 'value';

		if (!multiple) return;

		var newSelectedValue = selectedValue.filter(function (d) {
			return !isEqual(item[valueField], d);
		});

		if (!('value' in _this4.props)) {
			_this4.setState({
				selectedValue: newSelectedValue
			});
		}

		if (onChange) {
			onChange(_this4.transformChangeValue(copy(newSelectedValue)));
		}
	};
}, _temp$14);

ListBox$1.ListItemGroup = ItemGroup;
ListBox$1.ListItem = ListItem$1;

var _class$14;
var _temp$13;
var _initialiseProps$1;

var ListItem = ListBox$1.ListItem;
var ListItemGroup = ListBox$1.ListItemGroup;
var Select$1 = (_temp$13 = _class$14 = function (_React$Component) {
	inherits(Select, _React$Component);

	function Select(props) {
		classCallCheck(this, Select);

		var _this = possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

		_initialiseProps$1.call(_this);

		_this.state = {
			value: props.value || props.defaultValue,
			showDropdown: false,
			optionsMap: {},
			_ext: uuid(6)
		};

		_this.updateOptionsMap(props);
		return _this;
	}

	createClass(Select, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			this.updateOptionsMap(props);

			if (!isUndefined(props.value)) {
				this.setState({
					value: props.value
				});
			}
		}
		//使用jquery的position做定位，所以这时候jquery是必定存在的

	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var ext = this.state._ext;

			$(window).on('resize.' + ext, function () {
				if (_this2.state.showDropdown) {
					_this2.hideDropdown();
				}
			});

			$(document.body).on('mousewheel.' + ext + ' DOMMouseScroll.' + ext, function (e) {
				if (_this2.state.showDropdown && !$(e.target).closest(_this2.refs.dropdown).length) {
					if ($(e.target).closest(_this2.refs.select).length) return;
					_this2.hideDropdown();
				}
			});

			$(document).on('mousedown.' + ext, function (e) {
				if (_this2.state.showDropdown && !$(e.target).closest(_this2.refs.dropdown).length) {
					if ($(e.target).closest(_this2.refs.select).length) return;
					_this2.hideDropdown();
				}
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			var ext = this.state._ext;
			$(window).off('.' + ext);
			$(document.body).off('.' + ext);
			$(document).off('.' + ext);
		}
	}, {
		key: 'updateOptionsMap',
		value: function updateOptionsMap(props) {
			var options = props.options,
			    children = props.children,
			    valueField = props.valueField,
			    textField = props.textField,
			    optionsField = props.optionsField;

			var maps = {};

			function parseOptions(list) {
				list.forEach(function (option) {
					if (option[optionsField]) {
						parseOptions(option[optionsField]);
					} else {
						maps[option[valueField]] = option;
					}
				});
			}

			function parseChildren(childs) {
				React__default.Children.map(childs, function (child) {
					var props = child.props;

					if (child.type.isOptOption) {
						parseChildren(props.children);
					} else {
						maps[props[valueField]] = index$3(omit(props, ['children']), defineProperty({}, textField, props.children));
					}
				});
			}

			if (options && options.length) {
				parseOptions(options);
			} else {
				parseChildren(children);
			}

			this.state.optionsMap = maps;
		}
	}, {
		key: 'getSelectText',
		value: function getSelectText() {
			var _props = this.props,
			    options = _props.options,
			    valueField = _props.valueField,
			    textField = _props.textField;

			var value = this.state.value;

			var ret = this.state.optionsMap[value];

			return ret ? ret[textField] : value;
		}
	}, {
		key: 'transformChangeValue',
		value: function transformChangeValue(value) {
			var textInValue = this.props.textInValue;
			var optionsMap = this.state.optionsMap;


			if (textInValue) {
				return isArray(value) ? value.map(function (v) {
					return optionsMap[v];
				}) : optionsMap[value];
			}

			return value;
		}
	}, {
		key: 'getSelectOptions',
		value: function getSelectOptions() {
			var _props2 = this.props,
			    valueField = _props2.valueField,
			    textField = _props2.textField,
			    optionsField = _props2.optionsField,
			    options = _props2.options,
			    children = _props2.children;

			var value = this.state.value;

			return React__default.createElement(ListBox$1, {
				ref: this.handleDropdownCreate,
				valueField: valueField,
				textField: textField,
				itemsField: optionsField,
				value: value,
				items: options,
				children: this.renderSelectChild(children),
				onItemClick: this.handleListItemClick
			});
		}
	}, {
		key: 'renderSelectChild',
		value: function renderSelectChild(children) {
			var _this3 = this;

			var _props3 = this.props,
			    textField = _props3.textField,
			    valueField = _props3.valueField;


			return React__default.Children.map(children, function (child) {
				var props = child.props;

				if (child.type.isOptOption) {
					return React__default.createElement(
						ListItemGroup,
						{ label: props[textField] },
						_this3.renderSelectChild(props.children)
					);
				}

				return React__default.createElement(ListItem, props);
			});
		}
	}, {
		key: 'hideDropdown',
		value: function hideDropdown() {
			this.setState({
				showDropdown: false
			});
		}
	}, {
		key: 'getPopupStyle',
		value: function getPopupStyle() {
			var showDropdown = this.state.showDropdown;

			var selectEl = this.refs.select;
			var dropdownStyle = {
				maxWidth: 0,
				maxHeight: 0
			};

			if (showDropdown && selectEl) {
				var rect = selectEl.getBoundingClientRect();
				dropdownStyle.minWidth = selectEl.offsetWidth;
				dropdownStyle.maxWidth = selectEl.offsetWidth + rect.right - 10;
				dropdownStyle.maxHeight = Math.max(rect.top, window.innerHeight - rect.top - selectEl.offsetHeight) - 10;
			}

			return index$3(dropdownStyle, this.props.dropdownStyle);
		}
	}, {
		key: 'renderSelect',
		value: function renderSelect() {
			var _classNames, _classNames2;

			var props = this.props;
			var showDropdown = this.state.showDropdown;
			var prefixCls = props.prefixCls,
			    tabIndex = props.tabIndex,
			    inline = props.inline,
			    disabled = props.disabled,
			    readOnly = props.readOnly,
			    arrowCls = props.arrowCls,
			    children = props.children,
			    options = props.options,
			    dropdownCls = props.dropdownCls,
			    dropdownDestroyOnClose = props.dropdownDestroyOnClose,
			    others = objectWithoutProperties(props, ['prefixCls', 'tabIndex', 'inline', 'disabled', 'readOnly', 'arrowCls', 'children', 'options', 'dropdownCls', 'dropdownDestroyOnClose']);

			var classes = index$1((_classNames = {}, defineProperty(_classNames, prefixCls, true), defineProperty(_classNames, prefixCls + '-inline', inline), defineProperty(_classNames, prefixCls + '-readonly', readOnly), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

			var otherProps = omit(others, ['value', 'valueField', 'dropdownCls', 'dropdownStyle', 'dropdownDestroyOnClose', 'textField', 'optionsField', 'textInValue']);

			return React__default.createElement(
				'div',
				_extends({}, otherProps, {
					ref: 'select',
					className: classes,
					tabIndex: tabIndex,
					onClick: this.handleClick
				}),
				React__default.createElement(
					'div',
					{ className: prefixCls + '-text' },
					this.getSelectText()
				),
				React__default.createElement('span', { className: index$1((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-arrow', true), defineProperty(_classNames2, arrowCls, true), _classNames2)) }),
				React__default.createElement(
					Popup$1,
					{ visible: showDropdown, className: dropdownCls, destroyOnClose: dropdownDestroyOnClose, fixed: false, rootCls: prefixCls + '-dropdown-root', of: this.refs.select, my: 'left top', at: 'left bottom', style: this.getPopupStyle() },
					this.getSelectOptions()
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return this.renderSelect();
		}
	}]);
	return Select;
}(React__default.Component), _class$14.propTypes = {
	className: index.string,
	style: index.object,
	prefixCls: index.string,
	options: index.array,
	dropdownCls: index.string,
	dropdownDestroyOnClose: index.bool,
	dropdownStyle: index.object,
	textInValue: index.bool
}, _class$14.defaultProps = {
	disabled: false,
	readOnly: false,
	inline: true,
	options: [],
	tabIndex: 0,
	prefixCls: 'nex-select',
	arrowCls: 'fa fa-caret-down',
	valueField: 'value',
	textField: 'text',
	optionsField: 'options',
	dropdownCls: null,
	dropdownStyle: null,
	dropdownDestroyOnClose: true,
	textInValue: false
}, _initialiseProps$1 = function _initialiseProps() {
	var _this4 = this;

	this.handleDropdownCreate = function (el) {
		_this4.refs.listbox = el;
		_this4.refs.dropdown = el ? ReactDOM.findDOMNode(el) : null;
	};

	this.handleListItemClick = function (_ref) {
		var value = _ref.value;

		var props = _this4.props;
		var state = _this4.state;

		if (state.value + '' === value + '') {
			_this4.hideDropdown();
			return;
		}

		if (!('value' in props)) {
			_this4.setState({
				value: value
			});
		}

		if (props.onChange) props.onChange(_this4.transformChangeValue(value));

		_this4.hideDropdown();
	};

	this.handleClick = function (e) {
		_this4.setState({
			showDropdown: !_this4.state.showDropdown
		});
	};
}, _temp$13);

Select$1.Option = Option;
Select$1.OptGroup = Option$1;

var Ajax = function () {
	createClass(Ajax, null, [{
		key: 'create',
		value: function create(opts) {
			return new Ajax(opts);
		}
	}]);

	function Ajax() {
		var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		classCallCheck(this, Ajax);

		this.config = index$3({
			url: '',
			timeout: 0,
			async: true,
			sendType: 'ajax',
			/**
    * 数据最终处理
    * @examples:
    * dataType = json
    * success  = function(data){
    *	return data.data;
    * }
    */
			dataFormatter: null,
			/**
    * @ type {function(resolve, reject)}
    * 在触发success之前再次进行验证 如果这时候验证失败可以调用 hooks
    */
			resolveProcess: null,
			onSuccess: null,
			onError: null,
			onAbort: null,
			onComplete: null,
			data: {}
		}, opts);

		this.config.sendType = String(this.config.sendType).toLowerCase();

		if (isFunction(this.config.url)) {
			this.config.sendType = 'custom';
		}

		this._initAjax();
	}

	createClass(Ajax, [{
		key: '_initAjax',
		value: function _initAjax() {
			var _this = this;

			var _config = this.config,
			    url = _config.url,
			    resolveProcess = _config.resolveProcess,
			    dataFormatter = _config.dataFormatter,
			    sendType = _config.sendType;

			var dfd = $.Deferred();
			var self = this;

			dfd.promise(this);

			dfd.done(function () {
				_this.onSuccess.apply(_this, arguments);
			}).fail(function () {
				_this.onError.apply(_this, arguments);
			}).always(function () {
				_this.onComplete.apply(_this, arguments);
			});

			function reject(msg, ts, xhr) {

				var args = [].slice.apply(arguments);

				dfd.rejectWith(self, args);
			}

			function resolve(data, ts, xhr) {
				var args = [].slice.apply(arguments);

				if (dataFormatter && isFunction(dataFormatter)) {
					args[0] = dataFormatter(args[0]);
				}

				dfd.resolveWith(self, args);
			}

			var method = isFunction(sendType) ? sendType : this[sendType + 'Send'];

			if (!method) {
				throw new Error('error sendType not exists!');
			}

			this._xhr = method.call(this, function (data, ts, xhr) {
				if (resolveProcess && isFunction(resolveProcess)) {
					resolveProcess.call(self, data, function (d) {
						resolve(d || data, ts, xhr);
					}, function (msg, ts) {
						reject(msg, ts || 'error', xhr);
					});
				} else {
					resolve(data, ts, xhr);
				}
			}, reject);
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess() {
			var onSuccess = this.config.onSuccess;


			if (onSuccess && isFunction(onSuccess)) {
				onSuccess.apply(undefined, arguments);
			}
		}
	}, {
		key: 'onError',
		value: function onError(msg, ts, xhr) {
			var _config2 = this.config,
			    onError = _config2.onError,
			    onAbort = _config2.onAbort;


			if (contains(['timeout', 'canceled', 'abort'], ts)) {
				if (onAbort && isFunction(onAbort)) {
					onAbort(msg, ts, xhr);
				}
			}

			if (onError && isFunction(onError)) {
				onError(msg, ts, xhr);
			}
		}
	}, {
		key: 'onComplete',
		value: function onComplete() {
			var onComplete = this.config.onComplete;


			if (onComplete && isFunction(onComplete)) {
				onComplete.apply(undefined, arguments);
			}
		}
	}, {
		key: 'abort',
		value: function abort() {
			var xhr = this._xhr;

			if (xhr && xhr.abort) {
				xhr.abort(ts);
			}

			return this;
		}
	}, {
		key: 'getAjaxConfig',
		value: function getAjaxConfig() {
			return omit(this.config, ['sendType', 'dataFormatter', 'resolveProcess', 'onSuccess', 'onError', 'onAbort', 'onComplete']);
		}

		/**
  * ajax请求
  */

	}, {
		key: 'ajaxSend',
		value: function ajaxSend(resolve, reject) {
			var _resolve = function _resolve(data, ts, xhr) {
				resolve(data, ts, xhr);
			},
			    _reject = function _reject(xhr, ts, msg) {
				reject(msg, ts || 'error', xhr);
			},
			    xhr = $.ajax(this.getAjaxConfig());

			xhr.then(_resolve, _reject);

			return xhr;
		}
	}, {
		key: 'customSend',
		value: function customSend(resolve, reject) {
			var undef,
			    timeoutTimer,
			    dfd = $.Deferred(),
			    xhr = dfd.promise(),
			    _resolve = function _resolve(data) {
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}
				resolve(data, 'success', xhr);
			},
			    _reject = function _reject(msg, ts) {
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}
				reject(msg, ts || 'error', xhr);
			};

			var _config3 = this.config,
			    url = _config3.url,
			    async = _config3.async,
			    timeout = _config3.timeout,
			    data = _config3.data;


			xhr = url(data, _resolve, _reject, xhr);

			if (xhr === undef || !isPromiseLike(xhr)) {
				xhr = dfd.promise();
			}

			xhr.then(_resolve, _reject);

			xhr.abort = xhr.abort || function (ts) {
				ts = ts || 'abort'; //canceled
				_reject(ts, ts);
			};

			if (async && timeout > 0) {
				timeoutTimer = setTimeout(function () {
					xhr.abort('timeout');
				}, timeout);
			}

			return xhr;
		}
		/**
  * form表单请求
  */

	}, {
		key: 'formSend',
		value: function formSend() {}
		/**
  * form文件上传
  */

	}, {
		key: 'fileSend',
		value: function fileSend() {}
	}]);
	return Ajax;
}();

var _class$20;
var _temp$18;

var Pagination = (_temp$18 = _class$20 = function (_React$Component) {
	inherits(Pagination, _React$Component);

	function Pagination(props) {
		var _ref;

		classCallCheck(this, Pagination);

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		var _this = possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this, props].concat(args)));

		_this.handlePageSizeChange = function (v) {
			var onPageSizeChange = _this.props.onPageSizeChange;


			if (!('pageSize' in _this.props)) {
				_this.setState({
					pageSize: v
				});
			}

			if (onPageSizeChange) onPageSizeChange(v);
		};

		_this.state = {
			current: props.current || props.defaultCurrent || 1,
			pageSize: props.pageSize || props.defaultPageSize || 10
		};
		return _this;
	}

	createClass(Pagination, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {

			if (!isUndefined(props.current)) {
				this.setState({
					current: props.current
				});
			}
			if (!isUndefined(props.pageSize)) {
				this.setState({
					pageSize: props.pageSize
				});
			}
		}
	}, {
		key: 'toPage',
		value: function toPage(num) {
			if (num === this.state.current) return;
			var props = this.props;
			var pageCount = this.getTotalPages();

			num = Math.max(Math.min(num, pageCount), 1);

			if (!('current' in props)) {
				this.setState({
					current: num
				});
			}

			if (props.onChange) props.onChange(num);
		}
	}, {
		key: 'prevPage',
		value: function prevPage() {
			var current = this.state.current;

			this.toPage(--current);
		}
	}, {
		key: 'nextPage',
		value: function nextPage() {
			var current = this.state.current;

			this.toPage(++current);
		}

		/**
   * 获取总页数
   */

	}, {
		key: 'getTotalPages',
		value: function getTotalPages() {
			return Math.max(Math.ceil(this.props.total / this.state.pageSize), 1);
		}
		/**
   * 获取当前页码的样式
   */

	}, {
		key: 'getPageItemCls',
		value: function getPageItemCls(pn) {
			var _classNames;

			var prefixCls = this.props.prefixCls;
			var current = this.state.current;

			var pageCount = this.getTotalPages();

			return index$1((_classNames = {}, defineProperty(_classNames, prefixCls + '-item', true), defineProperty(_classNames, prefixCls + '-item-first', pn == 1), defineProperty(_classNames, prefixCls + '-item-last', pn == pageCount), defineProperty(_classNames, prefixCls + '-item-active', current == pn), _classNames));
		}
	}, {
		key: 'renderPagination',
		value: function renderPagination() {
			var _this2 = this;

			this.state.current = this.state.current < 1 ? 1 : this.state.current;

			var _state = this.state,
			    pageSize = _state.pageSize,
			    current = _state.current;

			var pageNumber = current;
			var _props = this.props,
			    total = _props.total,
			    prefixCls = _props.prefixCls,
			    maxPagesShow = _props.maxPagesShow,
			    itemRender = _props.itemRender,
			    showPrevMore = _props.showPrevMore,
			    showNextMore = _props.showNextMore;

			var pageCount = this.getTotalPages();
			var p = ~~(maxPagesShow / 2);
			var prevPage = pageNumber - 1;
			var nextPage = pageNumber + 1;

			var toPage = function toPage(pn) {
				return function () {
					return _this2.toPage(pn);
				};
			};

			var _itemRender = function _itemRender(pn) {
				return itemRender ? itemRender.call(_this2, pn) : pn;
			};

			var loopPage = function loopPage() {
				var list = [];
				var end = Math.min(pageNumber + p, pageCount - 1);
				var start = Math.max(end - maxPagesShow + 1, 2);

				list.push(React__default.createElement(
					'a',
					{ key: '1', className: this.getPageItemCls(1), onClick: toPage(1) },
					_itemRender(1)
				));
				list.push(showPrevMore && start > 2 ? React__default.createElement(
					'span',
					{ key: 'prev', className: prefixCls + '-item ' + prefixCls + '-item-more' },
					'...'
				) : null);

				var cpn = end - start + 1;

				if (cpn < maxPagesShow) {
					end = Math.min(pageCount - 1, end + maxPagesShow - cpn);
				}

				for (var page = start; page <= end; page++) {
					list.push(React__default.createElement(
						'a',
						{ key: page, className: this.getPageItemCls(page), onClick: toPage(page) },
						_itemRender(page)
					));
				}

				list.push(showNextMore && end < pageCount - 1 ? React__default.createElement(
					'span',
					{ key: 'next', className: prefixCls + '-item ' + prefixCls + '-item-more' },
					'...'
				) : null);
				list.push(pageCount > 1 ? React__default.createElement(
					'a',
					{ key: pageCount, className: this.getPageItemCls(pageCount), onClick: toPage(pageCount) },
					_itemRender(pageCount)
				) : null);

				return list;
			};

			return loopPage.call(this);
		}
	}, {
		key: 'renderLTotal',
		value: function renderLTotal() {
			var _props2 = this.props,
			    prefixCls = _props2.prefixCls,
			    totalRender = _props2.totalRender,
			    total = _props2.total;
			var _state2 = this.state,
			    current = _state2.current,
			    pageSize = _state2.pageSize;


			return React__default.createElement(
				'span',
				{ key: 'total', className: prefixCls + '-total-text' },
				totalRender.call(this, total, current, pageSize)
			);
		}
	}, {
		key: 'renderLSizes',
		value: function renderLSizes() {
			var _props3 = this.props,
			    prefixCls = _props3.prefixCls,
			    pageSizeOptions = _props3.pageSizeOptions,
			    pageSizeOptionRender = _props3.pageSizeOptionRender,
			    handlePageSizeChange = _props3.handlePageSizeChange,
			    small = _props3.small;

			var list = pageSizeOptions.map(function (v) {
				return {
					text: pageSizeOptionRender(v),
					value: v
				};
			});

			return React__default.createElement(
				'span',
				{ key: 'sizes', className: prefixCls + '-pagesize' },
				React__default.createElement(Select$1, { options: list, size: small ? 'small' : '', value: this.state.pageSize, onChange: this.handlePageSizeChange, className: prefixCls + '-changer' })
			);
		}
	}, {
		key: 'renderLPrev',
		value: function renderLPrev() {
			var _classNames2,
			    _this3 = this;

			var _props4 = this.props,
			    prefixCls = _props4.prefixCls,
			    prevBtnCls = _props4.prevBtnCls,
			    prevBtnRender = _props4.prevBtnRender;
			var current = this.state.current;

			var _prevBtnCls = index$1((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-btn', true), defineProperty(_classNames2, prefixCls + '-prev', true), defineProperty(_classNames2, '' + prevBtnCls, prevBtnCls), defineProperty(_classNames2, prefixCls + '-btn-disabled', current == 1), _classNames2));

			return React__default.createElement(
				'a',
				{ key: 'prev-btn', className: '' + _prevBtnCls, onClick: function onClick() {
						return _this3.prevPage();
					} },
				prevBtnRender ? prevBtnRender.call(this) : null
			);
		}
	}, {
		key: 'renderLPager',
		value: function renderLPager() {
			return this.renderPagination();
		}
	}, {
		key: 'renderLNext',
		value: function renderLNext() {
			var _classNames3,
			    _this4 = this;

			var _props5 = this.props,
			    prefixCls = _props5.prefixCls,
			    nextBtnCls = _props5.nextBtnCls,
			    nextBtnRender = _props5.nextBtnRender;
			var current = this.state.current;

			var totalPages = this.getTotalPages();
			var _nextBtnCls = index$1((_classNames3 = {}, defineProperty(_classNames3, prefixCls + '-btn', true), defineProperty(_classNames3, prefixCls + '-next', true), defineProperty(_classNames3, '' + nextBtnCls, nextBtnCls), defineProperty(_classNames3, prefixCls + '-btn-disabled', totalPages == current), _classNames3));

			return React__default.createElement(
				'a',
				{ key: 'next-btn', className: '' + _nextBtnCls, onClick: function onClick() {
						return _this4.nextPage();
					} },
				nextBtnRender ? nextBtnRender.call(this) : null
			);
		}
	}, {
		key: 'renderLJumper',
		value: function renderLJumper() {
			var _this5 = this;

			var _props6 = this.props,
			    prefixCls = _props6.prefixCls,
			    nextBtnCls = _props6.nextBtnCls,
			    jumperRender = _props6.jumperRender,
			    small = _props6.small;
			var current = this.state.current;


			var _toPage = function _toPage(e) {
				var pn = parseInt(e.target.value);
				if (pn) {
					_this5.toPage(pn);
				}
			};

			var jumper = React__default.createElement(Input, { style: { width: 40 }, key: 'jumper', size: small ? 'small' : '', defaultValue: current, onPressEnter: _toPage, className: prefixCls + '-jumper' });

			return React__default.createElement(
				'span',
				{ key: 'jumper', className: prefixCls + '-quick-jumper' },
				jumperRender ? jumperRender.call(this, jumper) : ['前往', jumper, '页']
			);
		}
	}, {
		key: 'renderLDefault',
		value: function renderLDefault(layout) {
			var _props7 = this.props,
			    defalutLayoutRender = _props7.defalutLayoutRender,
			    prefixCls = _props7.prefixCls;


			return defalutLayoutRender ? React__default.createElement(
				'span',
				{ key: 'defalut-' + layout, className: prefixCls + '-layout-default' },
				defalutLayoutRender.call(this, layout, this.props, this.state)
			) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames4,
			    _this6 = this;

			var _props8 = this.props,
			    prefixCls = _props8.prefixCls,
			    className = _props8.className,
			    layout = _props8.layout,
			    small = _props8.small;

			var classes = index$1((_classNames4 = {}, defineProperty(_classNames4, '' + prefixCls, true), defineProperty(_classNames4, prefixCls + '-sm', small), _classNames4), className);

			return React__default.createElement(
				'div',
				{ className: classes },
				layout.split(',').map(function (l) {
					switch (l.trim()) {
						case 'total':
							return _this6.renderLTotal();
							break;
						case 'sizes':
							return _this6.renderLSizes();
							break;
						case 'prev':
							return _this6.renderLPrev();
							break;
						case 'pager':
							return _this6.renderLPager();
							break;
						case 'next':
							return _this6.renderLNext();
							break;
						case 'jumper':
							return _this6.renderLJumper();
							break;
						default:
							return _this6.renderLDefault(l.trim());
					}
				})
			);
		}
	}]);
	return Pagination;
}(React__default.Component), _class$20.propTypes = {
	className: index.string,
	prefixCls: index.string,
	small: index.bool,
	total: index.number.isRequired,
	defaultCurrent: index.number,
	current: index.number,
	defaultPageSize: index.number,
	pageSize: index.number,
	maxPagesShow: index.number,
	pageSizeOptions: index.array,
	onPageSizeChange: index.func,
	onChange: index.func,
	prevBtnCls: index.string,
	nextBtnCls: index.string,
	layout: index.string,
	defalutLayoutRender: index.func,
	totalRender: index.func,
	prevBtnRender: index.func,
	nextBtnRender: index.func,
	itemRender: index.func,
	pageSizeOptionRender: index.func,
	jumperRender: index.func,
	showPrevMore: index.bool,
	showNextMore: index.bool
}, _class$20.defaultProps = {
	prefixCls: 'nex-pagination',
	small: false,
	total: 0,
	showSizeChanger: false,
	pageSizeOptions: [10, 20, 30, 40],
	maxPagesShow: 5, //必须是奇数，界面上最多显示7页
	prevBtnCls: 'fa fa-angle-left',
	nextBtnCls: 'fa fa-angle-right',
	//total, sizes, prev, pager, next, jumper, default
	layout: 'total, sizes, prev, pager, next, jumper',
	defalutLayoutRender: null,
	totalRender: function totalRender(total, pn, ps) {
		return '\u5171 ' + total + ' \u6761';
	},
	pageSizeOptionRender: function pageSizeOptionRender(v) {
		return v + ' \u6761/\u9875';
	},
	jumperRender: null,
	prevBtnRender: null,
	nextBtnRender: null,
	itemRender: null,
	showPrevMore: true,
	showNextMore: true
}, _temp$18);

var _class$21;
var _temp$19;
var _initialiseProps$3;

function noop$2() {}

var Switch = (_temp$19 = _class$21 = function (_Component) {
	inherits(Switch, _Component);

	function Switch(props) {
		classCallCheck(this, Switch);

		var _this = possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

		_initialiseProps$3.call(_this);

		var checked = false;
		if ('checked' in props) {
			checked = !!props.checked;
		} else {
			checked = !!props.defaultChecked;
		}
		_this.state = { checked: checked };
		return _this;
	}

	createClass(Switch, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ('checked' in nextProps) {
				this.setState({
					checked: !!nextProps.checked
				});
			}
		}
	}, {
		key: 'setChecked',
		value: function setChecked(checked) {
			if (this.props.disabled) {
				return;
			}
			if (!('checked' in this.props)) {
				this.setState({
					checked: checked
				});
			}
			this.props.onChange(checked);
		}

		// Handle auto focus when click switch in Chrome

	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props,
			    className = _props.className,
			    prefixCls = _props.prefixCls,
			    disabled = _props.disabled,
			    size = _props.size,
			    checkedText = _props.checkedText,
			    tabIndex = _props.tabIndex,
			    unCheckedText = _props.unCheckedText,
			    checkedColor = _props.checkedColor,
			    unCheckedColor = _props.unCheckedColor,
			    _props$style = _props.style,
			    style = _props$style === undefined ? {} : _props$style,
			    restProps = objectWithoutProperties(_props, ['className', 'prefixCls', 'disabled', 'size', 'checkedText', 'tabIndex', 'unCheckedText', 'checkedColor', 'unCheckedColor', 'style']);

			var checked = this.state.checked;
			var switchTabIndex = disabled ? -1 : tabIndex || 0;
			var switchClassName = index$1((_classNames = {}, defineProperty(_classNames, prefixCls, true), defineProperty(_classNames, prefixCls + '-small', size === 'small'), defineProperty(_classNames, prefixCls + '-checked', checked), defineProperty(_classNames, prefixCls + '-disabled', disabled), defineProperty(_classNames, className, !!className), _classNames));

			if (checked && !!checkedColor) {
				style.borderColor = checkedColor;
				style.backgroundColor = checkedColor;
			}

			if (!checked && !!unCheckedColor) {
				style.borderColor = unCheckedColor;
				style.backgroundColor = unCheckedColor;
			}

			return React__default.createElement(
				'span',
				_extends({}, restProps, {
					style: style,
					className: switchClassName,
					tabIndex: switchTabIndex,
					ref: this.saveNode,
					onKeyDown: this.handleKeyDown,
					onClick: this.toggle,
					onMouseUp: this.handleMouseUp
				}),
				React__default.createElement(
					'span',
					{ className: prefixCls + '-inner' },
					checked ? checkedText : unCheckedText
				)
			);
		}
	}]);
	return Switch;
}(React.Component), _class$21.propTypes = {
	className: index.string,
	size: index.oneOf(['small', 'default', 'large']),
	prefixCls: index.string,
	disabled: index.bool,
	checkedText: index.any,
	unCheckedText: index.any,
	onChange: index.func,
	onMouseUp: index.func,
	onClick: index.func,
	tabIndex: index.number,
	checked: index.bool,
	defaultChecked: index.bool,
	checkedColor: index.string,
	unCheckedColor: index.string
}, _class$21.defaultProps = {
	prefixCls: 'nex-switch',
	checkedText: null,
	unCheckedText: null,
	className: '',
	defaultChecked: false,
	onChange: noop$2,
	onClick: noop$2
}, _initialiseProps$3 = function _initialiseProps() {
	var _this2 = this;

	this.toggle = function () {
		var onClick = _this2.props.onClick;

		var checked = !_this2.state.checked;
		_this2.setChecked(checked);
		onClick(checked);
	};

	this.handleKeyDown = function (e) {
		if (e.keyCode === 37) {
			// Left
			_this2.setChecked(false);
		} else if (e.keyCode === 39) {
			// Right
			_this2.setChecked(true);
		} else if (e.keyCode === 32 || e.keyCode === 13) {
			// Space, Enter
			_this2.toggle();
		}
	};

	this.handleMouseUp = function (e) {
		if (_this2.node) {
			_this2.node.blur();
		}
		if (_this2.props.onMouseUp) {
			_this2.props.onMouseUp(e);
		}
	};

	this.saveNode = function (node) {
		_this2.node = node;
	};
}, _temp$19);

//import Tree from './tree/Tree';

exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.RCheckbox = Checkbox;
exports.Checkbox = Checkbox$1;
exports.CheckboxGroup = CheckboxGroup;
exports.RRadio = Radio;
exports.RadioGroup = RadioGroup;
exports.Radio = Radio$1;
exports.Row = Row;
exports.Col = Col;
exports.Portal = Portal;
exports.Popup = Popup$1;
exports.Select = Select$1;
exports.ListBox = ListBox$1;
exports.ScrollView = ScrollView;
exports.Ajax = Ajax;
exports.Pagination = Pagination;
exports.Switch = Switch;

Object.defineProperty(exports, '__esModule', { value: true });

})));
