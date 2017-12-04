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
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var classnames = createCommonjsModule(function (module) {
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
			    className = _props.className,
			    nodeProps = objectWithoutProperties(_props, ['prefixCls', 'htmlType', 'disabled', 'iconCls', 'type', 'size', 'inline', 'className']);


			if (disabled) {
				nodeProps['disabled'] = true;
			}

			var Icon = iconCls ? React__default.createElement('span', { className: classnames((_classNames = {}, defineProperty(_classNames, prefixCls + '-icon', true), defineProperty(_classNames, iconCls, true), _classNames)) }) : null;

			return React__default.createElement(
				'button',
				_extends({}, nodeProps, { type: htmlType, onClick: function onClick(e) {
						return _this2.handleClick(e);
					}, className: classnames((_classNames2 = {}, defineProperty(_classNames2, '' + prefixCls, true), defineProperty(_classNames2, prefixCls + '-' + type, type), defineProperty(_classNames2, prefixCls + '-block', !inline), defineProperty(_classNames2, prefixCls + '-inline', inline), defineProperty(_classNames2, prefixCls + '-sm', size === 'small'), defineProperty(_classNames2, prefixCls + '-lg', size === 'large'), defineProperty(_classNames2, prefixCls + '-disabled', disabled), defineProperty(_classNames2, className, true), _classNames2)) }),
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
	type: propTypes.string,
	size: propTypes.string,
	htmlType: propTypes.oneOf(['button', 'submit', 'reset']),
	className: propTypes.string,
	inline: propTypes.bool,
	disabled: propTypes.bool,
	//loading: PropTypes.bool,
	iconCls: propTypes.string,
	prefixCls: propTypes.string,
	onClick: propTypes.func
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
var hasOwnProperty$1 = ObjProto.hasOwnProperty;

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
    return obj != null && hasOwnProperty$1.call(obj, key);
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
                if (hasOwnProperty$1.call(arg, key) && arg[key]) {
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
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.1' };
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
// typeof document.createElement is 'object' in old IE
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
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
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

var hasOwnProperty$2 = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty$2.call(it, key);
};

var toString$1 = {}.toString;

var _cof = function _cof(it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
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
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes


var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
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
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
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
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$3 = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
  module.exports = { "default": assign$3, __esModule: true };
});

var _extends$1 = createCommonjsModule(function (module, exports) {
  "use strict";

  exports.__esModule = true;

  var _assign2 = _interopRequireDefault(assign$1);

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

var propTypes$1 = {
	size: propTypes.oneOf(['small', 'default', 'large']),
	type: propTypes.string, //text textarea
	inline: propTypes.bool,
	prefixCls: propTypes.string,
	className: propTypes.string,
	onPressEnter: propTypes.func,
	onKeyDown: propTypes.func,
	onChange: propTypes.func,
	autoFocus: propTypes.bool,
	inputCls: propTypes.string,
	inputStyle: propTypes.object,
	prefix: propTypes.any,
	suffix: propTypes.any
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
			    disabled = _props.disabled,
			    inputCls = _props.inputCls;

			return classnames(prefixCls, (_classNames = {}, defineProperty(_classNames, prefixCls + '-sm', size === 'small'), defineProperty(_classNames, prefixCls + '-lg', size === 'large'), defineProperty(_classNames, prefixCls + '-disabled', disabled), defineProperty(_classNames, inputCls, inputCls), _classNames));
		}
	}, {
		key: 'renderInput',
		value: function renderInput() {
			var props = this.props;
			var inputStyle = props.inputStyle,
			    type = props.type;


			var otherProps = omit(props, Object.keys(propTypes$1));

			if ('value' in props) {
				otherProps.value = fixControlledValue(props.value);

				delete otherProps.defaultValue;
			}

			return this.wrapInput(React__default.createElement('input', _extends({}, otherProps, {
				ref: 'input',
				type: type,
				style: inputStyle,
				onChange: this.handleChange,
				className: this.getInputClassName(),
				onKeyDown: this.handleKeyDown
			})));
		}
	}, {
		key: 'getTextareaClassName',
		value: function getTextareaClassName() {
			var _classNames2;

			var _props2 = this.props,
			    prefixCls = _props2.prefixCls,
			    disabled = _props2.disabled,
			    inputCls = _props2.inputCls;

			return classnames((_classNames2 = {}, defineProperty(_classNames2, '' + prefixCls, true), defineProperty(_classNames2, prefixCls + '-disabled', disabled), defineProperty(_classNames2, inputCls, inputCls), _classNames2));
		}
	}, {
		key: 'renderTextarea',
		value: function renderTextarea() {
			var props = this.props;
			var _props3 = this.props,
			    inputStyle = _props3.inputStyle,
			    _props3$style = _props3.style,
			    style = _props3$style === undefined ? {} : _props3$style;


			var otherProps = omit(props, Object.keys(propTypes$1));

			if ('value' in props) {
				otherProps.value = fixControlledValue(props.value);

				delete otherProps.defaultValue;
			}

			var height = style.height;


			return this.wrapInput(React__default.createElement('textarea', _extends({}, otherProps, {
				ref: 'input',
				style: _extends({
					height: height
				}, inputStyle),
				className: this.getTextareaClassName(),
				onChange: this.handleChange,
				onKeyDown: this.handleKeyDown
			})));
		}
	}, {
		key: 'getPrefix',
		value: function getPrefix() {
			var _props4 = this.props,
			    prefix = _props4.prefix,
			    prefixCls = _props4.prefixCls;


			if (typeof prefix === 'function') {
				prefix = prefix();
			}

			if (prefix) {
				return React__default.createElement(
					'span',
					{ className: prefixCls + '-prefix' },
					prefix
				);
			}

			return null;
		}
	}, {
		key: 'getSuffix',
		value: function getSuffix() {
			var _props5 = this.props,
			    suffix = _props5.suffix,
			    prefixCls = _props5.prefixCls;


			if (typeof suffix === 'function') {
				suffix = suffix();
			}

			if (suffix) {
				return React__default.createElement(
					'span',
					{ className: prefixCls + '-suffix' },
					suffix
				);
			}

			return null;
		}
	}, {
		key: 'wrapInput',
		value: function wrapInput(input) {
			var _classNames3;

			var _props6 = this.props,
			    prefixCls = _props6.prefixCls,
			    className = _props6.className,
			    inline = _props6.inline,
			    _props6$style = _props6.style,
			    style = _props6$style === undefined ? {} : _props6$style;


			var prefix = this.getPrefix();
			var suffix = this.getSuffix();

			var classname = classnames((_classNames3 = {}, defineProperty(_classNames3, prefixCls + '-wrapper', true), defineProperty(_classNames3, prefixCls + '-wrapper-block', !inline), defineProperty(_classNames3, className, className), _classNames3));

			return React__default.createElement(
				'div',
				{ className: classname, style: style },
				prefix,
				input,
				suffix
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
}(React.PureComponent), _class$1.propTypes = propTypes$1, _class$1.defaultProps = {
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

	var cls = classnames((_classNames = {}, defineProperty(_classNames, '' + prefixCls, true), defineProperty(_classNames, prefixCls + '-lg', props.size === 'large'), defineProperty(_classNames, prefixCls + '-sm', props.size === 'small'), defineProperty(_classNames, className, className), _classNames));
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

			var classString = classnames(prefixCls, className, (_classNames = {}, defineProperty(_classNames, prefixCls + '-checked', checked), defineProperty(_classNames, prefixCls + '-indeterminate', indeterminate), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

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
	prefixCls: propTypes.string,
	className: propTypes.string,
	style: propTypes.object,
	name: propTypes.string,
	type: propTypes.string,
	defaultChecked: propTypes.oneOfType([propTypes.number, propTypes.bool]),
	checked: propTypes.oneOfType([propTypes.number, propTypes.bool]),
	disabled: propTypes.bool,
	onFocus: propTypes.func,
	onBlur: propTypes.func,
	onChange: propTypes.func,
	onClick: propTypes.func,
	tabIndex: propTypes.string,
	readOnly: propTypes.bool
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

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {

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
			return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState) || !shallowequal(this.context.checkboxGroup, nextContext.checkboxGroup);
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

			var classString = classnames((_classNames = {}, defineProperty(_classNames, prefixCls + '-wrapper', true), defineProperty(_classNames, className, !!className), _classNames));

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
	className: propTypes.string,
	style: propTypes.object,
	prefixCls: propTypes.string
}, _class$3.defaultProps = {
	prefixCls: 'nex-checkbox',
	className: '',
	style: {}
}, _class$3.contextTypes = {
	checkboxGroup: propTypes.any
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
			return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
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

			var classString = classnames(prefixCls, className);
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
	defaultValue: propTypes.array,
	value: propTypes.array,
	options: propTypes.array.isRequired,
	onChange: propTypes.func
}, _class$4.childContextTypes = {
	checkboxGroup: propTypes.any
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
			return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState) || !shallowequal(this.context.radioGroup, nextContext.radioGroup);
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


			var classString = classnames((_classNames = {}, defineProperty(_classNames, prefixCls + '-wrapper', true), defineProperty(_classNames, className, !!className), _classNames));

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
	className: propTypes.string,
	style: propTypes.object,
	prefixCls: propTypes.string
}, _class$6.defaultProps = {
	prefixCls: 'nex-radio',
	className: '',
	style: {}
}, _class$6.contextTypes = {
	radioGroup: propTypes.any
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
			return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
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

			var classString = classnames(prefixCls, className);
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
	defaultValue: propTypes.any,
	value: propTypes.any,
	options: propTypes.array.isRequired,
	onChange: propTypes.func
}, _class$7.childContextTypes = {
	radioGroup: propTypes.any
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


			var classes = classnames(defineProperty({}, prefixCls, true), className);

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
	className: propTypes.string,
	children: propTypes.node,
	gutter: propTypes.number,
	prefixCls: propTypes.string
}, _class$8.defaultProps = {
	gutter: 0
}, _temp$7);

var _class$9;
var _temp$8;

var stringOrNumber = propTypes.oneOfType([propTypes.string, propTypes.number]);

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


			var classes = classnames((_classNames = {}, defineProperty(_classNames, '' + prefixCls, true), defineProperty(_classNames, prefixCls + '-' + span, span), defineProperty(_classNames, prefixCls + '-offset-' + offset, offset), defineProperty(_classNames, className, className), _classNames));

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
	className: propTypes.string,
	children: propTypes.node,
	prefixCls: propTypes.string
}, _temp$8);

var _class$10;
var _temp$9;

var Portal = (_temp$9 = _class$10 = function (_React$Component) {
	inherits(Portal, _React$Component);

	function Portal() {
		classCallCheck(this, Portal);
		return possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	}

	createClass(Portal, [{
		key: 'render',
		value: function render() {
			return ReactDOM.createPortal(this.props.children, this.props.container);
		}
	}]);
	return Portal;
}(React__default.Component), _class$10.propTypes = {
	children: propTypes.node.isRequired,
	container: propTypes.node.isRequired,
	onUpdate: propTypes.func
}, _class$10.defaultProps = {
	container: document.body
}, _temp$9);

var position = function (target, source, config) {
	$(target).position(objectAssign({}, config, {
		of: source
	}));
};

var _class$11;
var _temp$10;

var propTypes$2 = {
	prefixCls: propTypes.string,
	rootCls: propTypes.string,
	container: propTypes.node.isRequired,
	className: propTypes.string,
	mask: propTypes.bool,
	maskCls: propTypes.string,
	destroyOnHide: propTypes.bool,
	visible: propTypes.bool,
	fixed: propTypes.bool,
	disabledSetPosition: propTypes.bool,
	onUpdate: propTypes.func,
	onMaskClick: propTypes.func,
	popupAnimate: propTypes.shape({
		appear: propTypes.func, //enter
		leave: propTypes.func //exit
	}),
	maskAnimate: propTypes.shape({
		appear: propTypes.func,
		leave: propTypes.func
	}),
	of: propTypes.any,
	my: propTypes.any,
	at: propTypes.any,
	collision: propTypes.any,
	using: propTypes.func,
	within: propTypes.any
};

var Popup$1 = (_temp$10 = _class$11 = function (_React$Component) {
	inherits(Popup, _React$Component);

	function Popup(props) {
		classCallCheck(this, Popup);

		var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

		_this._initAppear = false;
		_this._of = null;

		_this.onUpdate = function () {
			return;
		};

		_this.animateAppear = function () {
			var _this$props = _this.props,
			    popupAnimate = _this$props.popupAnimate,
			    maskAnimate = _this$props.maskAnimate;


			_this._initAppear = true;

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

		_this.savePopup = function (node) {
			_this._popupNode = node;
		};

		_this.state = {
			visible: props.visible,
			isInit: true,
			isHidden: false,
			enableAnim: true,
			status: !props.visible ? 'unmount' : 'mount'
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
			    _using = _props.using,
			    within = _props.within;

			if (this._of) {
				of = this._of;
			}
			var config = {
				using: function using(p, d) {
					if (_using) {
						_using(p, d);
					}

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

			if (!of) return null;

			position(popup, of, config);

			return type == 1 ? pos : type == 2 ? dir : objectAssign(pos, dir);
		}
	}, {
		key: 'setPosition',
		value: function setPosition(pos) {
			var popup = this.refs.popup;

			pos = pos || this.getPosition() || {};

			if ('left' in pos) {
				popup.style.left = pos.left + 'px';
			}
			if ('top' in pos) {
				popup.style.top = pos.top + 'px';
			}
			if ('right' in pos) {
				popup.style.right = pos.right + 'px';
			}
			if ('bottom' in pos) {
				popup.style.bottom = pos.bottom + 'px';
			}
		}
	}, {
		key: 'updatePosition',
		value: function updatePosition() {
			var of = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			this._of = of;
			this.setPosition();
			this._of = null;

			if (!this._initAppear) {
				this.animateAppear();
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var visible = this.props.visible; //使用props.visible进行控制

			if (visible) {
				this.showPopup();
				//this.animateAppear();
			}

			this.state.isInit = false;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var visible = this.props.visible;

			if (visible) {
				this.showPopup();
			}
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
		key: 'componentDidUpdate1',
		value: function componentDidUpdate1() {
			var visible = this.props.visible;
			var _refs = this.refs,
			    popup = _refs.popup,
			    mask = _refs.mask;
			var isHidden = this.state.isHidden;

			if (visible) {
				if (isHidden) {
					if (popup) {
						popup.style.display = "";
					}
					if (mask) {
						mask.style.display = "";
					}
				}

				this.showPopup();

				if (isHidden) {
					this.state.isHidden = false;
					this.animateAppear();
				} else if (!this._initAppear) {
					this.animateAppear();
				}
			} else if (isHidden) {
				this.animateLeave(null, function () {
					if (popup) {
						popup.style.display = "none";
					}
					if (mask) {
						mask.style.display = "none";
					}
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
		key: 'showPopup',
		value: function showPopup() {
			if (this.state.isInit || !this.props.disabledSetPosition) {
				this.setPosition();
			}
		}
	}, {
		key: 'getPopupMaskDomNode',
		value: function getPopupMaskDomNode() {
			//return this._popupNode;
		}
	}, {
		key: 'getPopupDomNode',
		value: function getPopupDomNode() {
			return this._popupNode;
		}
	}, {
		key: 'getMaskComponent',
		value: function getMaskComponent() {
			var _classNames;

			var _props2 = this.props,
			    prefixCls = _props2.prefixCls,
			    mask = _props2.mask,
			    maskCls = _props2.maskCls;


			var classes = classnames((_classNames = {}, defineProperty(_classNames, prefixCls + '-mask', true), defineProperty(_classNames, maskCls, maskCls), _classNames));

			return React__default.createElement('div', { ref: 'mask', className: classes, onClick: this.handleMaskClick });
		}
	}, {
		key: 'getPopupComponent',
		value: function getPopupComponent() {
			var _props3 = this.props,
			    prefixCls = _props3.prefixCls,
			    className = _props3.className,
			    container = _props3.container,
			    fixed = _props3.fixed,
			    mask = _props3.mask,
			    rootCls = _props3.rootCls,
			    style = _props3.style,
			    children = _props3.children;


			var classes = classnames(prefixCls, fixed ? prefixCls + '-fixed' : '', className);

			return React__default.createElement(
				Portal,
				{
					container: container
				},
				React__default.createElement(
					'div',
					{ ref: this.savePopup, className: classnames(prefixCls + '-root', rootCls) },
					mask ? this.getMaskComponent() : null,
					React__default.createElement(
						'div',
						{ ref: 'popup', className: classes, tabIndex: -1, style: style },
						children
					)
				)
			);
		}
	}, {
		key: 'getRenderComponent',
		value: function getRenderComponent() {
			var _props4 = this.props,
			    prefixCls = _props4.prefixCls,
			    className = _props4.className,
			    container = _props4.container,
			    destroyOnHide = _props4.destroyOnHide,
			    fixed = _props4.fixed,
			    mask = _props4.mask,
			    _props4$animate = _props4.animate,
			    animate = _props4$animate === undefined ? {} : _props4$animate,
			    rootCls = _props4.rootCls,
			    _others = objectWithoutProperties(_props4, ['prefixCls', 'className', 'container', 'destroyOnHide', 'fixed', 'mask', 'animate', 'rootCls']);

			var _state = this.state,
			    visible = _state.visible,
			    isInit = _state.isInit;


			var classes = classnames(prefixCls, className, fixed ? prefixCls + '-fixed' : '');

			var others = omit(_others, Object.keys(propTypes$2));

			var popup = React__default.createElement(
				'div',
				{ ref: this.savePopup, className: classnames(prefixCls + '-root', rootCls) },
				mask ? this.getMaskComponent() : null,
				React__default.createElement('div', _extends({}, others, { ref: 'popup', className: classes, tabIndex: -1 }))
			);

			if (!visible && !destroyOnHide && !isInit) {
				visible = true;
				this.state.isHidden = true;
			}

			return visible ? React__default.createElement(
				Portal,
				{
					container: container
				},
				popup
			) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var visible = this.state.visible;

			return visible ? this.getPopupComponent() : null;
		}
	}, {
		key: 'render1',
		value: function render1() {
			var destroyOnHide = this.props.destroyOnHide;
			var _state2 = this.state,
			    visible = _state2.visible,
			    isInit = _state2.isInit,
			    status = _state2.status;


			if (!visible && !destroyOnHide && !isInit) {
				visible = true;
				this.state.isHidden = true;
			}

			return status === 'unmount' ? null : this.getPopupComponent();
		}
	}, {
		key: 'render2',
		value: function render2() {
			return this.getRenderComponent();
		}
	}]);
	return Popup;
}(React__default.Component), _class$11.propTypes = propTypes$2, _class$11.defaultProps = {
	prefixCls: 'nex-popup',
	rootCls: '',
	container: document.body,
	mask: false,
	fixed: false,
	destroyOnHide: true,
	//禁用每次刷新更新位置
	disabledSetPosition: false,
	visible: true,
	of: window,
	collision: 'flip' // none flip fit flipfit
}, _temp$10);

var defaultConfig = {
	renderTo: document.body,
	autoShow: true,
	content: null,
	parentComponent: null,
	onUpdate: null
};

var create = function (opt) {
	var config = objectAssign({}, defaultConfig, opt);
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





/*class*/
function hasClass(element, className) {
	if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

function addClass(element, className) {
	if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

function replaceClassName(origClass, classToRemove) {
	return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
	if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
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
	className: propTypes.string,
	shouldComponentUpdate: propTypes.bool,
	component: propTypes.oneOfType([propTypes.string, propTypes.func])
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
				{ ref: scrollbarRef, className: classnames(prefixCls + '-bar', dirCls) },
				React__default.createElement(
					'div',
					{ ref: scrollbarWrapRef, className: prefixCls + '-bar-wrap' },
					showTrack ? React__default.createElement('div', {
						ref: scrollbarTrackRef,
						className: classnames((_classNames = {}, defineProperty(_classNames, prefixCls + '-bar-track', true), defineProperty(_classNames, trackCls, trackCls), _classNames)),
						onMouseDown: function onMouseDown(e) {
							return _this4.handleTrackMouseDown(e, dir);
						}
					}) : null,
					React__default.createElement('div', {
						ref: scrollbarThumbRef,
						className: classnames((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-bar-thumb', true), defineProperty(_classNames2, thumbCls, thumbCls), _classNames2)),
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


			var classes = classnames((_classNames3 = {}, defineProperty(_classNames3, prefixCls + '-view', true), defineProperty(_classNames3, '' + className, className), _classNames3));

			var bodyClasses = classnames((_classNames4 = {}, defineProperty(_classNames4, prefixCls + '-view-body', true), defineProperty(_classNames4, '' + scrollViewBodyCls, scrollViewBodyCls), _classNames4));

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
	prefixCls: propTypes.string,
	className: propTypes.oneOfType([propTypes.string, propTypes.object]),
	scrollViewBodyCls: propTypes.string,
	scrollViewBodyStyle: propTypes.object,
	overflow: propTypes.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
	overflowX: propTypes.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
	overflowY: propTypes.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
	wheelDir: propTypes.oneOfType(['x', 'y']),
	thumbCls: propTypes.string,
	trackCls: propTypes.string,
	scrollBarSize: propTypes.number,
	thumbSize: propTypes.number,
	thumbMinSize: propTypes.number,
	thumbMaxSize: propTypes.number,
	showTrack: propTypes.bool,
	scrollBarOffsetTopOrLeft: propTypes.number,
	scrollBarOffsetRightOrBottom: propTypes.number,
	wheelStep: propTypes.number,
	enablePreventDefaultOnEnd: propTypes.bool,
	onScroll: propTypes.func,
	onHScrollEnd: propTypes.func,
	onVScrollEnd: propTypes.func,
	onHScrollStart: propTypes.func,
	onVScrollStart: propTypes.func
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
	ScrollView: propTypes.object
}, _temp$15);

var _class$18;
var _temp2$1;

//import {findDOMNode} from 'react-dom';
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
				label: children
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
			return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    disabled = _props.disabled,
			    selected = _props.selected,
			    active = _props.active,
			    children = _props.children;

			var classes = classnames((_classNames = {}, defineProperty(_classNames, '' + prefixCls, true), defineProperty(_classNames, prefixCls + '-selected', selected), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

			var others = omit(this.props, Object.keys(ListItem.propTypes));

			return React__default.createElement(
				'div',
				_extends({}, others, {
					ref: 'item',
					className: classes,
					onClick: this.handleItemClick
				}),
				children
			);
		}
	}]);
	return ListItem;
}(React__default.Component), _class$18.propTypes = {
	prefixCls: propTypes.string,
	value: propTypes.any,
	onSelect: propTypes.func,
	onDeselect: propTypes.func,
	onClick: propTypes.func,
	selected: propTypes.bool,
	disabled: propTypes.bool
}, _class$18.defaultProps = {
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

function noop$2() {}

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

		//item 索引id
		_this._itemIndex = 0;
		//索引值对应的item.value
		_this._indexValueMap = {};
		_this._activeIndex = null;

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
					selectedValue: isArray(value) ? copy(value) : [value]
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    prefixCls = _props.prefixCls,
			    autoFocus = _props.autoFocus;

			var el = ReactDOM.findDOMNode(this);
			var scrollview = this.refs.listbox;
			var selector = '.' + prefixCls + '-item-selected';

			if (autoFocus) {
				this.focus();
			}

			var selectedItem = el.querySelector(selector);
			if (selectedItem) {
				scrollview.scrollIntoView(selectedItem);
			}
		}
	}, {
		key: 'focus',
		value: function focus() {
			ReactDOM.findDOMNode(this).focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			ReactDOM.findDOMNode(this).blur();
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
		key: 'setValue',
		value: function setValue(value) {
			var _props2 = this.props,
			    multiple = _props2.multiple,
			    onChange = _props2.onChange;
			var _state = this.state,
			    selectedValue = _state.selectedValue,
			    itemsMap = _state.itemsMap;


			if (!multiple) {
				selectedValue.length = 0;
			}

			selectedValue.push(value);

			if (!('value' in this.props)) {
				this.setState({
					selectedValue: selectedValue
				});
			}

			if (onChange) {
				onChange(this.transformChangeValue(multiple ? copy(selectedValue) : selectedValue[0]));
			}
		}
	}, {
		key: 'getVaule',
		value: function getVaule() {
			var multiple = this.props.multiple;
			var selectedValue = this.state.selectedValue;


			return this.transformChangeValue(multiple ? copy(selectedValue) : selectedValue[0]);
		}
	}, {
		key: 'onKeyDown',
		value: function onKeyDown() {
			var _this2 = this;

			var prefixCls = this.props.prefixCls;

			var selector = '.' + prefixCls + '-item:not(.' + prefixCls + '-item-disabled)';
			var activeCls = prefixCls + '-item-active';
			var selectCls = prefixCls + '-item-selected';
			var list = null; //NodeList

			function getActiveIndex(keyCode) {
				var idx = -1;
				var UP = keyCode === 38;
				var DOWN = keyCode === 40;
				var sIdx = -1;

				if (list) {
					//ie no support NodeList.prototype.forEach
					each(list, function (item, i) {
						if (hasClass(item, activeCls)) {
							removeClass(item, activeCls);
							if (UP) {
								if (idx === -1) idx = i;
							} else {
								idx = i;
							}
						} else if (idx === -1 && hasClass(item, selectCls)) {
							sIdx = i;
						}
					});
				}

				return idx === -1 ? sIdx : idx;
			}

			return function (e) {
				var scrollview = _this2.refs.listbox;
				var dom = ReactDOM.findDOMNode(_this2);
				var UP = e.keyCode === 38;
				var DOWN = e.keyCode === 40;
				var ENTER = e.keyCode === 13;
				var indexValueMap = _this2._indexValueMap;
				var activeIndex = _this2._activeIndex;

				if (!list) {
					list = dom.querySelectorAll(selector);
				}

				if (!list.length) return;

				var minIndex = 0;
				var maxIndex = list.length - 1;

				if (UP || DOWN) {
					e.preventDefault();
					var idx = getActiveIndex(e.keyCode);

					if (UP) {
						idx = idx === -1 ? maxIndex : --idx;
						if (idx < 0) idx = maxIndex;
						addClass(list[idx], activeCls);
					} else {
						idx = idx === -1 ? minIndex : ++idx;
						if (idx > maxIndex) idx = 0;
						addClass(list[idx], activeCls);
					}

					_this2._activeIndex = list[idx].getAttribute('data-index');

					scrollview.scrollIntoView(list[idx]);
				} else if (ENTER && activeIndex !== null) {
					_this2.setValue(indexValueMap[activeIndex]);
				}
			};
		}
	}, {
		key: 'renderListItems',
		value: function renderListItems(items, markMap) {
			var _this3 = this;

			var _props3 = this.props,
			    labelField = _props3.labelField,
			    valueField = _props3.valueField,
			    itemsField = _props3.itemsField,
			    prefixCls = _props3.prefixCls,
			    disabled = _props3.disabled;
			var itemsMap = this.state.itemsMap;


			return items.map(function (item) {
				if (typeof item === 'string') {
					var _item;

					item = (_item = {}, defineProperty(_item, labelField, item), defineProperty(_item, valueField, item), _item);
				}

				var isGroup = item[itemsField];
				var itemPrefixCls = prefixCls + '-item';
				var activeCls = prefixCls + '-item-active';
				var onMouseEnter = noop$2;
				var onMouseLeave = noop$2;
				var itemIndex = _this3._itemIndex++;

				if (!isGroup) {
					itemsMap[item[valueField]] = item;
					_this3._indexValueMap[itemIndex] = item[valueField];

					if (!disabled && !item.disabled) {
						onMouseEnter = function onMouseEnter(e) {
							addClass(e.currentTarget, activeCls);
						};
						onMouseLeave = function onMouseLeave(e) {
							removeClass(e.currentTarget, activeCls);
						};
					}
				}

				return !isGroup ? React__default.createElement(
					ListItem$1,
					{
						key: item[valueField],
						value: item[valueField],
						prefixCls: itemPrefixCls,
						selected: markMap[item[valueField]],
						disabled: disabled || item.disabled,
						'data-index': itemIndex,
						onClick: _this3.onItemClick,
						onSelect: _this3.onItemSelect,
						onDeselect: _this3.onItemDeselect,
						onMouseEnter: onMouseEnter,
						onMouseLeave: onMouseLeave
					},
					item[labelField]
				) : React__default.createElement(
					ItemGroup,
					{ prefixCls: itemPrefixCls + '-group', key: item[labelField], label: item[labelField] },
					_this3.renderListItems(item[itemsField] || [], markMap)
				);
			});
		}
	}, {
		key: 'renderListChild',
		value: function renderListChild(children, markMap) {
			var _this4 = this;

			var _props4 = this.props,
			    labelField = _props4.labelField,
			    valueField = _props4.valueField,
			    itemsField = _props4.itemsField,
			    prefixCls = _props4.prefixCls,
			    disabled = _props4.disabled;
			var itemsMap = this.state.itemsMap;


			var itemPrefixCls = prefixCls + '-item';
			var activeCls = prefixCls + '-item-active';

			return React__default.Children.map(children, function (child) {
				var props = child.props;

				if (child.type.isListItemGroup) {
					return React__default.cloneElement(child, {}, _this4.renderListChild(props.children, markMap));
				}

				var onMouseEnter = noop$2;
				var onMouseLeave = noop$2;
				var itemIndex = _this4._itemIndex++;

				itemsMap[props[valueField]] = objectAssign({}, omit(props, ['children', 'selected', 'prefixCls']), defineProperty({}, labelField, props.children));
				_this4._indexValueMap[itemIndex] = props[valueField];

				if (!props.disabled) {
					onMouseEnter = function onMouseEnter(e) {
						addClass(e.currentTarget, activeCls);
						if (props.onMouseEnter) props.onMouseEnter(e);
					};
					onMouseLeave = function onMouseLeave(e) {
						removeClass(e.currentTarget, activeCls);
						if (props.onMouseLeave) props.onMouseLeave(e);
					};
				}

				var newProps = {
					selected: markMap[props[valueField]],
					prefixCls: itemPrefixCls,
					'data-index': itemIndex,
					onClick: _this4.onItemClick,
					onSelect: _this4.onItemSelect,
					onDeselect: _this4.onItemDeselect,
					onMouseEnter: onMouseEnter,
					onMouseLeave: onMouseLeave
				};

				if (disabled) {
					newProps.disabled = true;
				}

				return React__default.cloneElement(child, newProps);
			});
		}
	}, {
		key: 'getListItems',
		value: function getListItems() {
			var _props5 = this.props,
			    labelField = _props5.labelField,
			    valueField = _props5.valueField,
			    prefixCls = _props5.prefixCls,
			    multiple = _props5.multiple,
			    items = _props5.items,
			    emptyLabel = _props5.emptyLabel,
			    children = _props5.children;
			var selectedValue = this.state.selectedValue;


			this.state.itemsMap = {};

			var markMap = {};
			selectedValue.forEach(function (v) {
				return markMap[v] = true;
			});

			this._itemIndex = 0;
			this._indexValueMap = {};
			this._activeIndex = null;

			var childs = items.length ? this.renderListItems(items, markMap) : this.renderListChild(children, markMap);

			return React__default.Children.count(childs) ? childs : emptyLabel;
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var _props6 = this.props,
			    className = _props6.className,
			    value = _props6.value,
			    prefixCls = _props6.prefixCls,
			    items = _props6.items,
			    width = _props6.width,
			    height = _props6.height,
			    tabIndex = _props6.tabIndex,
			    disabled = _props6.disabled,
			    onFocus = _props6.onFocus,
			    onBlur = _props6.onBlur,
			    _props6$style = _props6.style,
			    style = _props6$style === undefined ? {} : _props6$style,
			    _props6$scrollViewBod = _props6.scrollViewBodyStyle,
			    scrollViewBodyStyle = _props6$scrollViewBod === undefined ? {} : _props6$scrollViewBod;


			if (width) {
				style.width = width;
			}
			if (height) {
				style.height = height;
			}

			var classes = classnames((_classNames = {}, defineProperty(_classNames, '' + prefixCls, true), defineProperty(_classNames, className, className), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

			return React__default.createElement(
				ScrollView,
				{
					ref: 'listbox',
					tabIndex: tabIndex,
					scrollViewBodyCls: prefixCls + '-body',
					scrollViewBodyStyle: scrollViewBodyStyle,
					className: classes,
					style: style,
					onKeyDown: this.onKeyDown(),
					onFocus: onFocus,
					onBlur: onBlur
				},
				this.getListItems()
			);
		}
	}]);
	return ListBox;
}(React__default.Component), _class$15.propTypes = {
	className: propTypes.string,
	style: propTypes.object,
	scrollViewBodyStyle: propTypes.object,
	prefixCls: propTypes.string,
	valueField: propTypes.string,
	labelField: propTypes.string,
	itemsField: propTypes.string,
	items: propTypes.array,
	emptyLabel: propTypes.any,
	multiple: propTypes.bool,
	disabled: propTypes.bool,
	autoFocus: propTypes.bool,
	width: propTypes.oneOfType([propTypes.string, propTypes.number]),
	height: propTypes.oneOfType([propTypes.string, propTypes.number]),
	labelInValue: propTypes.bool,
	tabIndex: propTypes.number,
	onItemClick: propTypes.func,
	onChange: propTypes.func,
	onFocus: propTypes.func,
	onBlur: propTypes.func
}, _class$15.defaultProps = {
	prefixCls: 'nex-listbox',
	valueField: 'value',
	labelField: 'label',
	itemsField: 'items',
	labelInValue: false,
	tabIndex: 0,
	items: [],
	emptyLabel: null,
	onFocus: noop$2,
	onBlur: noop$2

}, _initialiseProps$2 = function _initialiseProps() {
	var _this5 = this;

	this.onItemClick = function (item, e) {
		var onItemClick = _this5.props.onItemClick;

		_this5.refs.listbox.scrollIntoView(e.target);

		if (onItemClick) onItemClick(item);
	};

	this.onItemSelect = function (item, el) {
		var valueField = 'value';
		_this5.setValue(item[valueField]);
	};

	this.onItemDeselect = function (item, el) {
		var _props7 = _this5.props,
		    multiple = _props7.multiple,
		    onChange = _props7.onChange,
		    labelInValue = _props7.labelInValue;
		var selectedValue = _this5.state.selectedValue;

		var valueField = 'value';

		if (!multiple) return;

		var newSelectedValue = selectedValue.filter(function (d) {
			return !isEqual(item[valueField], d);
		});

		if (!('value' in _this5.props)) {
			_this5.setState({
				selectedValue: newSelectedValue
			});
		}

		if (onChange) {
			onChange(_this5.transformChangeValue(copy(newSelectedValue)));
		}
	};
}, _temp$14);

ListBox$1.ListItemGroup = ItemGroup;
ListBox$1.ListItem = ListItem$1;

var _class$14;
var _temp$13;
var _initialiseProps$1;

//import {omit, assign} from 'lodash';
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
			optionsMap: {}
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
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.updatePopupPosition();

			this.__resizeHandle = function () {
				if (_this2.state.showDropdown) {
					_this2.hideDropdown();
				}
			};

			this.__mousedownHandle = function (e) {
				if (_this2.state.showDropdown && !contains$1(_this2.refs.dropdown, e.target)) {
					if (contains$1(_this2.refs.select, e.target)) return;
					_this2.hideDropdown();
				}
			};

			on(window, 'resize', this.__resizeHandle);

			on(document, 'mousedown', this.__mousedownHandle);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.updatePopupPosition();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.__resizeHandle) {
				off(window, 'resize', this.__resizeHandle);
			}

			if (this.__mousedownHandle) {
				off(document, 'mousedown', this.__mousedownHandle);
			}
		}
	}, {
		key: 'updateOptionsMap',
		value: function updateOptionsMap(props) {
			var options = props.options,
			    children = props.children,
			    valueField = props.valueField,
			    labelField = props.labelField,
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
						maps[props[valueField]] = objectAssign(omit(props, ['children']), defineProperty({}, labelField, props.children));
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
			    labelField = _props.labelField;

			var value = this.state.value;

			var ret = this.state.optionsMap[value];

			return ret ? ret[labelField] : value;
		}
	}, {
		key: 'transformChangeValue',
		value: function transformChangeValue(value) {
			var labelInValue = this.props.labelInValue;
			var optionsMap = this.state.optionsMap;


			if (labelInValue) {
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
			    labelField = _props2.labelField,
			    optionsField = _props2.optionsField,
			    options = _props2.options,
			    children = _props2.children;

			var value = this.state.value;

			return React__default.createElement(ListBox$1, {
				autoFocus: true,
				ref: this.handleDropdownCreate,
				valueField: valueField,
				labelField: labelField,
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
			    labelField = _props3.labelField,
			    valueField = _props3.valueField;


			return React__default.Children.map(children, function (child) {
				var props = child.props;

				if (child.type.isOptOption) {
					return React__default.createElement(
						ListItemGroup,
						{ label: props[labelField] },
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

			return objectAssign(dropdownStyle, this.props.dropdownStyle);
		}
	}, {
		key: 'updatePopupPosition',
		value: function updatePopupPosition() {
			if (this.state.showDropdown) {
				this.refs.popup.updatePosition(ReactDOM.findDOMNode(this));
			}
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
			    dropdownDestroyOnHide = props.dropdownDestroyOnHide,
			    others = objectWithoutProperties(props, ['prefixCls', 'tabIndex', 'inline', 'disabled', 'readOnly', 'arrowCls', 'children', 'options', 'dropdownCls', 'dropdownDestroyOnHide']);

			var classes = classnames((_classNames = {}, defineProperty(_classNames, prefixCls, true), defineProperty(_classNames, prefixCls + '-inline', inline), defineProperty(_classNames, prefixCls + '-readonly', readOnly), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

			var otherProps = omit(others, ['value', 'valueField', 'dropdownCls', 'dropdownStyle', 'dropdownDestroyOnHide', 'labelField', 'optionsField', 'labelInValue']);

			return React__default.createElement(
				'div',
				_extends({}, otherProps, {
					ref: 'select',
					className: classes,
					tabIndex: tabIndex,
					onClick: this.handleClick,
					onKeyDown: this.onKeyDown
				}),
				React__default.createElement(
					'div',
					{ className: prefixCls + '-text' },
					this.getSelectText()
				),
				React__default.createElement('span', { className: classnames((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-arrow', true), defineProperty(_classNames2, arrowCls, true), _classNames2)) }),
				React__default.createElement(
					Popup$1,
					{ ref: 'popup', visible: showDropdown, className: dropdownCls, destroyOnHide: dropdownDestroyOnHide, fixed: false, rootCls: prefixCls + '-dropdown-root', of: null, my: 'left top', at: 'left bottom', style: this.getPopupStyle() },
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
	className: propTypes.string,
	style: propTypes.object,
	prefixCls: propTypes.string,
	options: propTypes.array,
	dropdownCls: propTypes.string,
	dropdownDestroyOnHide: propTypes.bool,
	dropdownStyle: propTypes.object,
	labelInValue: propTypes.bool
}, _class$14.defaultProps = {
	disabled: false,
	readOnly: false,
	inline: true,
	options: [],
	tabIndex: 0,
	prefixCls: 'nex-select',
	arrowCls: 'fa fa-caret-down',
	valueField: 'value',
	labelField: 'text',
	optionsField: 'options',
	dropdownCls: null,
	dropdownStyle: null,
	dropdownDestroyOnHide: true,
	labelInValue: false
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

	this.onKeyDown = function (e) {
		if (e.keyCode === 40 && !_this4.state.showDropdown) {
			_this4.setState({
				showDropdown: !_this4.state.showDropdown
			});
		}
	};
}, _temp$13);

Select$1.Option = Option;
Select$1.OptGroup = Option$1;

/**
 * The date parsing and formatting syntax contains a subset of
 * <a href="http://www.php.net/date">PHP's date() function</a>, and the formats that are
 * supported will provide results equivalent to their PHP versions.
 *
 * The following is a list of all currently supported formats:
 * <pre class="">
Format  Description                                                               Example returned values
------  -----------------------------------------------------------------------   -----------------------
  d     Day of the month, 2 digits with leading zeros                             01 to 31
  D     A short textual representation of the day of the week                     Mon to Sun
  j     Day of the month without leading zeros                                    1 to 31
  l     A full textual representation of the day of the week                      Sunday to Saturday
  N     ISO-8601 numeric representation of the day of the week                    1 (for Monday) through 7 (for Sunday)
  S     English ordinal suffix for the day of the month, 2 characters             st, nd, rd or th. Works well with j
  w     Numeric representation of the day of the week                             0 (for Sunday) to 6 (for Saturday)
  z     The day of the year (starting from 0)                                     0 to 364 (365 in leap years)
  W     ISO-8601 week number of year, weeks starting on Monday                    01 to 53
  F     A full textual representation of a month, such as January or March        January to December
  m     Numeric representation of a month, with leading zeros                     01 to 12
  M     A short textual representation of a month                                 Jan to Dec
  n     Numeric representation of a month, without leading zeros                  1 to 12
  t     Number of days in the given month                                         28 to 31
  L     Whether it&#39;s a leap year                                                  1 if it is a leap year, 0 otherwise.
  o     ISO-8601 year number (identical to (Y), but if the ISO week number (W)    Examples: 1998 or 2004
        belongs to the previous or next year, that year is used instead)
  Y     A full numeric representation of a year, 4 digits                         Examples: 1999 or 2003
  y     A two digit representation of a year                                      Examples: 99 or 03
  a     Lowercase Ante meridiem and Post meridiem                                 am or pm
  A     Uppercase Ante meridiem and Post meridiem                                 AM or PM
  g     12-hour format of an hour without leading zeros                           1 to 12
  G     24-hour format of an hour without leading zeros                           0 to 23
  h     12-hour format of an hour with leading zeros                              01 to 12
  H     24-hour format of an hour with leading zeros                              00 to 23
  i     Minutes, with leading zeros                                               00 to 59
  s     Seconds, with leading zeros                                               00 to 59
  u     Decimal fraction of a second                                              Examples:
        (minimum 1 digit, arbitrary number of digits allowed)                     001 (i.e. 0.001s) or
                                                                                  100 (i.e. 0.100s) or
                                                                                  999 (i.e. 0.999s) or
                                                                                  999876543210 (i.e. 0.999876543210s)
  O     Difference to Greenwich time (GMT) in hours and minutes                   Example: +1030
  P     Difference to Greenwich time (GMT) with colon between hours and minutes   Example: -08:00
  T     Timezone abbreviation of the machine running the code                     Examples: EST, MDT, PDT ...
  Z     Timezone offset in seconds (negative if west of UTC, positive if east)    -43200 to 50400
  c     ISO 8601 date
        Notes:                                                                    Examples:
        1) If unspecified, the month / day defaults to the current month / day,   1991 or
           the time defaults to midnight, while the timezone defaults to the      1992-10 or
           browser's timezone. If a time is specified, it must include both hours 1993-09-20 or
           and minutes. The "T" delimiter, seconds, milliseconds and timezone     1994-08-19T16:20+01:00 or
           are optional.                                                          1995-07-18T17:21:28-02:00 or
        2) The decimal fraction of a second, if specified, must contain at        1996-06-17T18:22:29.98765+03:00 or
           least 1 digit (there is no limit to the maximum number                 1997-05-16T19:23:30,12345-0400 or
           of digits allowed), and may be delimited by either a '.' or a ','      1998-04-15T20:24:31.2468Z or
        Refer to the examples on the right for the various levels of              1999-03-14T20:24:32Z or
        date-time granularity which are supported, or see                         2000-02-13T21:25:33
        http://www.w3.org/TR/NOTE-datetime for more info.                         2001-01-12 22:26:34
  U     Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)                1193432466 or -2138434463
</pre>
 */

var toString$2 = Object.prototype.toString;

function isFunction$1(obj) {
    return toString$2.call(obj) == '[object Function]';
}

function isDate$1(obj) {
    return toString$2.call(obj) == '[object Date]';
}

function escapeRegex(str) {
    return str.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1");
}

function defalut(value, defaultValue) {
    if (isFinite(value)) {
        value = parseFloat(value);
    }

    return !isNaN(value) ? value : defaultValue;
}

var DateUtil = {
    isDate: isDate$1,

    pad: function pad(v, len, s) {
        var res = "" + v,
            s = s || '0',
            len = len || 2;
        for (; res.length < len; res = s + res) {}
        return res;
    },

    now: Date.now || function () {
        return +new Date();
    },

    /**
     * @private
     * Private for now
     */
    toString: function toString(date) {
        var pad = this.pad;

        return date.getFullYear() + "-" + pad(date.getMonth() + 1, 2, '0') + "-" + pad(date.getDate(), 2, '0') + "T" + pad(date.getHours(), 2, '0') + ":" + pad(date.getMinutes(), 2, '0') + ":" + pad(date.getSeconds(), 2, '0');
    },

    /**
     * parse时的默认时间，否则取当前时间
     * y,m,d,h,i,s,ms
     */
    defaults: {},

    defaultFormat: 'Y-m-d',

    y2kYear: 50,

    /**
     * Date interval constant
     * @type String
     */
    MILLI: "ms",

    /**
     * Date interval constant
     * @type String
     */
    SECOND: "s",

    /**
     * Date interval constant
     * @type String
     */
    MINUTE: "mi",

    /** Date interval constant
     * @type String
     */
    HOUR: "h",

    /**
     * Date interval constant
     * @type String
     */
    DAY: "d",

    //工作日 一周5个工作日
    WEEKDAY: 'wd',

    /**
     * Date interval constant
     * @type String
     */
    WEEK: 'w',

    /**
     * Date interval constant
     * @type String
     */
    MONTH: "mo",

    /**
     * Date interval constant
     * @type String
     */
    QUARTER: 'q',

    /**
     * Date interval constant
     * @type String
     */
    YEAR: "y",

    /**
     * @property {String[]} dayNames
     */
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

    /**
     * @property {String[]} monthNames
     */
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    /**
     * @property {Object} monthNumbers
     */
    monthNumbers: {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11
    },

    /**
     * 检测格式字符是否包含时间信息 //这里暂时还没加上\H \i \s的检测..
     * @param {String} format The format to check
     * @return {Boolean} True if the format contains hour information
     * @method
     */
    formatContainsHourInfo: function () {
        var stripEscapeRe = /(\\.)/g,
            hourInfoRe = /([gGhHisucUOPZ]|MS)/;
        return function (format) {
            return hourInfoRe.test(format.replace(stripEscapeRe, ''));
        };
    }(),

    /**
     * 检测格式字符是否包含日期信息
     * anything other than the time.
     * @param {String} format The format to check
     * @return {Boolean} True if the format contains information about
     * date/day information.
     * @method
     */
    formatContainsDateInfo: function () {
        var stripEscapeRe = /(\\.)/g,
            dateInfoRe = /([djzmnYycU]|MS)/;

        return function (format) {
            return dateInfoRe.test(format.replace(stripEscapeRe, ''));
        };
    }(),

    /**
     * @param {Number} month A zero-based javascript month number.
     * @return {String} The short month name.
     */
    getShortMonthName: function getShortMonthName(month) {
        return this.monthNames[month].substring(0, 3);
    },

    /**
     * @param {Number} day A zero-based javascript day number.
     * @return {String} The short day name.
     */
    getShortDayName: function getShortDayName(day) {
        return this.dayNames[day].substring(0, 3);
    },

    /**
     * @param {String} name The short/full month name.
     * @return {Number} The zero-based javascript month number.
     */
    getMonthNumber: function getMonthNumber(name) {
        // handle camel casing for english month names (since the keys for the this.monthNumbers hash are case sensitive)
        return this.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
    },
    /**
     * Checks if the passed Date parameters will cause a javascript Date "rollover".
     * @param {Number} year 4-digit year
     * @param {Number} month 1-based month-of-year
     * @param {Number} day Day of month
     * @param {Number} hour (optional) Hour
     * @param {Number} minute (optional) Minute
     * @param {Number} second (optional) Second
     * @param {Number} millisecond (optional) Millisecond
     * @return {Boolean} true if the passed parameters do not cause a Date "rollover", false otherwise.
     */
    isValid: function isValid(y, m, d, h, i, s, ms) {
        // setup defaults
        h = h || 0;
        i = i || 0;
        s = s || 0;
        ms = ms || 0;

        // Special handling for year < 100
        var dt = this.add(new Date(y < 100 ? 100 : y, m - 1, d, h, i, s, ms), this.YEAR, y < 100 ? y - 100 : 0);

        return y == dt.getFullYear() && m == dt.getMonth() + 1 && d == dt.getDate() && h == dt.getHours() && i == dt.getMinutes() && s == dt.getSeconds() && ms == dt.getMilliseconds();
    },
    /**
     * 判断当前年份是否闰年
     * @param {int|Date} year 年份或者日期对象
     * @return {boolean}
     */
    isLeapYear: function isLeapYear(year) {
        year = isDate$1(year) ? year.getFullYear() : parseInt(year, 10);
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    /**
     * @param {Date} date The date
     * @return {Number} The day number (0-6).
     */
    getFirstDayOfMonth: function getFirstDayOfMonth(date) {
        var day = (date.getDay() - (date.getDate() - 1)) % 7;
        return day < 0 ? day + 7 : day;
    },

    /**
     * @param {Date} date The date
     * @return {Number} The day number (0-6).
     */
    getLastDayOfMonth: function getLastDayOfMonth(date) {
        return this.getLastDateOfMonth(date).getDay();
    },

    /**
     * 获取本月第一天
     * @param {Date} date The date
     * @return {Date}
     */
    getFirstDateOfMonth: function getFirstDateOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    },

    /**
     * 获取本月最后一天
     * @param {Date} date The date
     * @return {Date}
     */
    getLastDateOfMonth: function getLastDateOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), this.getDaysInMonth(date));
    },

    /**
     * 获取本月有多少天数
     * 还有个方法：日期设置上个月的日期为0，那么就可以得到这个月的最后一天日期
     * examples : date1.setDate(1);date1.setMonth( date1.getMonth()+1 );date1.setDate(0);return date1.getDate(); 	
     * @param {Date} date The date
     * @return {Number} 本月天数
     */
    getDaysInMonth: function () {
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        return function (date) {
            // return a closure for efficiency
            var m = date.getMonth();
            return m == 1 && this.isLeapYear(date) ? 29 : daysInMonth[m];
        };
    }(),

    /**
     * Get the timezone abbreviation of the current date (equivalent to the format specifier 'T').
     *
     * Note: The date string returned by the javascript Date object's toString() method varies
     * between browsers (e.g. FF vs IE) and system region settings (e.g. IE in Asia vs IE in America).
     * For a given date string e.g. "Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)",
     * getTimezone() first tries to get the timezone abbreviation from between a pair of parentheses
     * (which may or may not be present), failing which it proceeds to get the timezone abbreviation
     * from the GMT offset portion of the date string.
     * @param {Date} date The date
     * @return {String} The abbreviated timezone name (e.g. 'CST', 'PDT', 'EDT', 'MPST' ...).
     */
    getTimezone: function getTimezone(date) {
        // the following list shows the differences between date strings from different browsers on a WinXP SP2 machine from an Asian locale:
        //
        // Opera  : "Thu, 25 Oct 2007 22:53:45 GMT+0800" -- shortest (weirdest) date string of the lot
        // Safari : "Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)" -- value in parentheses always gives the correct timezone (same as FF)
        // FF     : "Thu Oct 25 2007 22:55:35 GMT+0800 (Malay Peninsula Standard Time)" -- value in parentheses always gives the correct timezone
        // IE     : "Thu Oct 25 22:54:35 UTC+0800 2007" -- (Asian system setting) look for 3-4 letter timezone abbrev
        // IE     : "Thu Oct 25 17:06:37 PDT 2007" -- (American system setting) look for 3-4 letter timezone abbrev
        //
        // this crazy regex attempts to guess the correct timezone abbreviation despite these differences.
        // step 1: (?:\((.*)\) -- find timezone in parentheses
        // step 2: ([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?) -- if nothing was found in step 1, find timezone from timezone offset portion of date string
        // step 3: remove all non uppercase characters found in step 1 and 2
        return date.toString().replace(/^.* (?:\((.*)\)|([A-Z]{1,4})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/, "$1$2").replace(/[^A-Z]/g, "");
    },

    /**
     * Get the offset from GMT of the current date (equivalent to the format specifier 'O').
     * @param {Date} date The date
     * @param {Boolean} colon (optional) true to separate the hours and minutes with a colon (defaults to false).
     * @return {String} The 4-character offset string prefixed with + or - (e.g. '-0600').
     */
    getGMTOffset: function getGMTOffset(date, colon) {
        var offset = date.getTimezoneOffset();
        return (offset > 0 ? "-" : "+") + this.pad(Math.floor(Math.abs(offset) / 60), 2, "0") + (colon ? ":" : "") + this.pad(Math.abs(offset % 60), 2, "0");
    },

    /**
     * Get the English ordinal suffix of the current day (equivalent to the format specifier 'S').
     * @param {Date} date The date
     * @return {String} 'st, 'nd', 'rd' or 'th'.
     */
    getSuffix: function getSuffix(date) {
        switch (date.getDate()) {
            case 1:
            case 21:
            case 31:
                return "st";
            case 2:
            case 22:
                return "nd";
            case 3:
            case 23:
                return "rd";
            default:
                return "th";
        }
    },

    /**
     * 获取当前日期在本年的天数 从0开始
     * @param {Date} date The date
     * @return {Number} 0 to 364 (365 in leap years).
     */
    getDayOfYear: function getDayOfYear(date) {
        var num = 0,
            d = this.clone(date),
            m = date.getMonth(),
            i;

        for (i = 0, d.setDate(1), d.setMonth(0); i < m; d.setMonth(++i)) {
            num += this.getDaysInMonth(d);
        }
        return num + date.getDate() - 1;
    },

    getQuarterOfYear: function getQuarterOfYear(date) {
        return Math.ceil((date.getMonth() + 1) / 3);
    },

    /**
     * 获取 ISO-8601 周数
     * (equivalent to the format specifier 'W', but without a leading zero).
     * @param {Date} date The date
     * @return {Number} 1 to 53
     * @method
     */
    getWeekOfYear: function () {
        // adapted from http://www.merlyn.demon.co.uk/weekcalc.htm
        var ms1d = 864e5,
            // milliseconds in a day
        ms7d = 7 * ms1d; // milliseconds in a week

        return function (date) {
            // return a closure so constants get calculated only once
            var DC3 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate() + 3) / ms1d,
                // an Absolute Day Number
            AWN = Math.floor(DC3 / 7),
                // an Absolute Week Number
            Wyr = new Date(AWN * ms7d).getUTCFullYear();

            return AWN - Math.floor(Date.UTC(Wyr, 0, 7) / ms7d) + 1;
        };
    }(),

    /**
     * 判断两个日期是否相等
     * @param {Date} date1
     * @param {Date} date2
     * @return {Boolean} 
     */
    isEqual: function isEqual(date1, date2) {
        // check we have 2 date objects
        if (date1 && date2) {
            return date1.getTime() === date2.getTime();
        }
        // one or both isn't a date, only equal if both are falsey
        return !(date1 || date2);
    },
    /**
     * 复制当前日期对象
     * @param {Date}
     * @return {Date}
     */
    clone: function clone(date) {
        return new Date(+date);
    },

    /**
     * 返回2日期之间的毫秒数
     * @param {Date} dateA The first date
     * @param {Date} dateB (optional) The second date, defaults to now
     * @return {Number} The difference in milliseconds
     */
    getElapsed: function getElapsed(dateA, dateB) {
        return Math.abs(dateA - (dateB || new Date()));
    },

    addFormatCode: function addFormatCode(code, formatter) {
        this.formatCodes[code] = formatter;
        return this;
    },

    formatCodes: {
        d: function d(date) {
            return this.pad(date.getDate(), 2, '0');
        },
        D: function D(date) {
            return this.getShortDayName(date.getDay());
        }, // get localised short day name
        j: function j(date) {
            return date.getDate();
        },
        l: function l(date) {
            return this.dayNames[date.getDay()];
        },
        N: function N(date) {
            return date.getDay() ? date.getDay() : 7;
        },
        S: function S(date) {
            return this.getSuffix(date);
        },
        w: function w(date) {
            return date.getDay();
        },
        z: function z(date) {
            return this.getDayOfYear(date);
        },
        W: function W(date) {
            return this.pad(this.getWeekOfYear(date), 2, '0');
        },
        F: function F(date) {
            return this.monthNames[date.getMonth()];
        },
        m: function m(date) {
            return this.pad(date.getMonth() + 1, 2, '0');
        },
        M: function M(date) {
            return this.getShortMonthName(date.getMonth());
        }, // get localised short month name
        n: function n(date) {
            return date.getMonth() + 1;
        },
        t: function t(date) {
            return this.getDaysInMonth(date);
        },
        L: function L(date) {
            return this.isLeapYear(date) ? 1 : 0;
        },
        o: function o(date) {
            return date.getFullYear() + (this.getWeekOfYear(date) == 1 && date.getMonth() > 0 ? +1 : this.getWeekOfYear(date) >= 52 && date.getMonth() < 11 ? -1 : 0);
        },
        Y: function Y(date) {
            return this.pad(date.getFullYear(), 4, '0');
        },
        y: function y(date) {
            return ('' + date.getFullYear()).substring(2, 4);
        },
        a: function a(date) {
            return date.getHours() < 12 ? 'am' : 'pm';
        },
        A: function A(date) {
            return date.getHours() < 12 ? 'AM' : 'PM';
        },
        g: function g(date) {
            return date.getHours() % 12 ? date.getHours() % 12 : 12;
        },
        G: function G(date) {
            return date.getHours();
        },
        h: function h(date) {
            return this.pad(date.getHours() % 12 ? date.getHours() % 12 : 12, 2, '0');
        },
        H: function H(date) {
            return this.pad(date.getHours(), 2, '0');
        },
        i: function i(date) {
            return this.pad(date.getMinutes(), 2, '0');
        },
        s: function s(date) {
            return this.pad(date.getSeconds(), 2, '0');
        },
        u: function u(date) {
            return this.pad(date.getMilliseconds(), 3, '0');
        },
        O: function O(date) {
            return this.getGMTOffset(date);
        },
        P: function P(date) {
            return this.getGMTOffset(date, true);
        },
        T: function T(date) {
            return this.getTimezone(date);
        },
        Z: function Z(date) {
            return date.getTimezoneOffset() * -60;
        },
        c: function c(date) {
            //ISO-8601 -- GMT format
            return [this.getFormatCode('Y')(date), '-', this.getFormatCode('m')(date), '-', this.getFormatCode('d')(date), 'T', this.getFormatCode('H')(date), ':', this.getFormatCode('i')(date), ':', this.getFormatCode('s')(date), this.getFormatCode('P')(date)].join('');
        },
        U: function U(date) {
            return Math.round(date.getTime() / 1000);
        },
        Q: function Q(date) {
            return this.pad(Math.ceil((date.getMonth() + 1) / 3), 2, '0');
        },
        q: function q() {
            return Math.ceil((date.getMonth() + 1) / 3);
        }
    },

    getFormatCode: function getFormatCode(code) {
        var self = this,
            formatCodes = this.formatCodes;
        return function (date) {
            return formatCodes[code].call(self, date);
        };
    },
    /** 
     * 日期格式化
     * @param {Date}
     * @param {String}
     * @return {String}
     */
    format: function format(date, format) {
        var self = this,
            reg = ['\\\\?['],
            _reg = [],
            format = format || this.defaultFormat,
            parseCodes = this.parseCodes;

        for (var k in parseCodes) {
            _reg.push(k);
        }

        reg.push(_reg.join('|'));

        reg.push(']');

        var formatRegex = new RegExp(reg.join(''), 'g');

        var result = format.replace(formatRegex, function (ch, idx) {
            if (ch.charAt(0) == "\\") return ch.slice(1);

            return self.getFormatCode(ch)(date);
        });

        return '' + result;
    },

    formatDate: function formatDate() {
        return this.format.apply(this, arguments);
    },

    addParseCode: function addParseCode(code, regex, parser) {
        this.parseCodes[code] = {
            f: parser,
            r: regex
        };
        return this;
    },

    // private
    parseCodes: {
        d: {
            f: function f(v, date) {
                date.d = parseInt(v, 10);
            },
            r: "(3[0-1]|[1-2][0-9]|0[1-9])" // day of month with leading zeroes (01 - 31)
        },
        j: {
            f: function f(v, date) {
                date.d = parseInt(v, 10);
            },
            r: "(3[0-1]|[1-2][0-9]|[1-9])" // day of month without leading zeroes (1 - 31)
        },
        D: function D() {
            for (var a = [], i = 0; i < 7; a.push(this.getShortDayName(i)), ++i) {} // get localised short day names
            return {
                f: null,
                r: "(?:" + a.join("|") + ")"
            };
        },
        l: function l() {
            return {
                f: null,
                r: "(?:" + this.dayNames.join("|") + ")"
            };
        },
        N: {
            f: null,
            r: "[1-7]" // ISO-8601 day number (1 (monday) - 7 (sunday))
        },
        S: {
            f: null,
            r: "(?:st|nd|rd|th)"
        },
        w: {
            f: null,
            r: "[0-6]" // javascript day number (0 (sunday) - 6 (saturday))
        },
        z: {
            f: function f(v, date) {
                date.z = parseInt(v, 10);
            },
            r: "(\\d{1,3})" // day of the year (0 - 364 (365 in leap years))
        },
        W: {
            f: null,
            r: "(?:\\d{2})" // ISO-8601 week number (with leading zero)
        },
        F: function F() {
            return {
                f: function f(v, date) {
                    date.m = parseInt(this.getMonthNumber(v), 10);
                }, // get localised month number
                r: "(" + this.monthNames.join("|") + ")"
            };
        },
        M: function M() {
            for (var a = [], i = 0; i < 12; a.push(this.getShortMonthName(i)), ++i) {} // get localised short month names
            return {
                f: function f(v, date) {
                    date.m = parseInt(this.getMonthNumber(v), 10);
                },
                r: "(" + a.join("|") + ")"
            };
        },
        m: {
            f: function f(v, date) {
                date.m = parseInt(v, 10) - 1;
            },
            r: "(1[0-2]|0[1-9])"
        },
        n: {
            f: function f(v, date) {
                date.m = parseInt(v, 10) - 1;
            },
            r: "(1[0-2]|[1-9])" // month number without leading zeros (1 - 12)
        },
        t: {
            f: null,
            r: "(?:\\d{2})" // no. of days in the month (28 - 31)
        },
        L: {
            f: null,
            r: "(?:1|0)"
        },
        o: function o() {
            return this.parseCodes.Y;
        },
        Y: {
            f: function f(v, date) {
                date.y = parseInt(v, 10);
            },
            r: "(\\d{4})" // 4-digit year
        },
        y: {
            f: function f(v, date) {
                var _y = parseInt(v, 10);
                date.y = _y > this.y2kYear ? 1900 + _y : 2000 + _y;
            }, // 2-digit year
            r: "(\\d{1,2})"
        },
        a: {
            f: function f(v, date) {
                var h = date.h;
                if (/(am)/i.test(v)) {
                    if (!h || h == 12) {
                        h = 0;
                    }
                } else {
                    if (!h || h < 12) {
                        h = (h || 0) + 12;
                    }
                }

                date.h = h;
            },
            r: "(am|pm|AM|PM)",
            calcAtEnd: true
        },
        A: function A() {
            return this.parseCodes.a;
        },
        g: {
            f: function f(v, date) {
                date.h = parseInt(v, 10);
            },
            r: "(1[0-2]|[0-9])" //  12-hr format of an hour without leading zeroes (1 - 12)	
        },
        G: {
            f: function f(v, date) {
                date.h = parseInt(v, 10);
            },
            r: "(2[0-3]|1[0-9]|[0-9])" // 24-hr format of an hour without leading zeroes (0 - 23)
        },
        h: {
            f: function f(v, date) {
                date.h = parseInt(v, 10);
            },
            r: "(1[0-2]|0[1-9])" //  12-hr format of an hour with leading zeroes (01 - 12)	
        },
        H: {
            f: function f(v, date) {
                date.h = parseInt(v, 10);
            },
            r: "(2[0-3]|[0-1][0-9])" //  24-hr format of an hour with leading zeroes (00 - 23)
        },
        i: {
            f: function f(v, date) {
                date.i = parseInt(v, 10);
            },
            r: "([0-5][0-9])" // minutes with leading zeros (00 - 59)
        },
        s: {
            f: function f(v, date) {
                date.s = parseInt(v, 10);
            },
            r: "([0-5][0-9])" // seconds with leading zeros (00 - 59)
        },
        u: {
            f: function f(ms, date) {
                date.ms = parseInt(ms, 10) / Math.pow(10, ms.length - 3);
            },
            r: '(\\d+)'
        },
        O: {
            f: function f(v, date) {
                var o = v,
                    sn = o.substring(0, 1),
                    hr = o.substring(1, 3) * 1 + Math.floor(o.substring(3, 5) / 60),
                    mn = o.substring(3, 5) % 60;

                date.sn = sn;
                date.hr = hr;
                date.mn = mn;

                date.o = -12 <= (hr * 60 + mn) / 60 && (hr * 60 + mn) / 60 <= 14 ? sn + this.pad(hr, 2, '0') + this.pad(mn, 2, '0') : null;
            },
            r: "([+\-]\\d{4})" // GMT offset in hrs and mins	
        },
        P: {
            f: function f(v, date) {
                var o = v,
                    sn = o.substring(0, 1),
                    hr = o.substring(1, 3) * 1 + Math.floor(o.substring(4, 6) / 60),
                    mn = o.substring(4, 6) % 60;

                date.sn = sn;
                date.hr = hr;
                date.mn = mn;

                date.o = -12 <= (hr * 60 + mn) / 60 && (hr * 60 + mn) / 60 <= 14 ? sn + this.pad(hr, 2, '0') + this.pad(mn, 2, '0') : null;
            },
            r: "([+\-]\\d{2}:\\d{2})" // GMT offset in hrs and mins (with colon separator)	
        },
        T: {
            f: null,
            r: "[A-Z]{1,4}" // timezone abbrev. may be between 1 - 4 chars	
        },
        Z: {
            f: function f(v, date) {
                var zz = v * 1;
                date.zz = -43200 <= zz && zz <= 50400 ? zz : null;
            },
            r: "([+\-]?\\d{1,5})" // leading '+' sign is optional for UTC offset	
        },
        c: function c() {
            var calc = [],
                arr = [this.getParseCode("Y"), // year
            this.getParseCode("m"), // month
            this.getParseCode("d"), // day
            this.getParseCode("h"), // hour
            this.getParseCode("i"), // minute
            this.getParseCode("s") // second
            ];

            return {
                f: null,
                r: [arr[0].r, // year (required)
                "(?:", "-", arr[1].r, // month (optional)
                "(?:", "-", arr[2].r, // day (optional)
                "(?:", "(?:T| )?", // time delimiter -- either a "T" or a single blank space
                arr[3].r, ":", arr[4].r, // hour AND minute, delimited by a single colon (optional). MUST be preceded by either a "T" or a single blank space
                "(?::", arr[5].r, ")?", // seconds (optional)
                "(?:(?:\\.|,)(\\d+))?", // decimal fraction of a second (e.g. ",12345" or ".98765") (optional)
                "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?", // "Z" (UTC) or "-0530" (UTC offset without colon delimiter) or "+08:00" (UTC offset with colon delimiter) (optional)
                ")?", ")?", ")?"].join("")
            };
        },
        U: {
            f: function f(v, date) {
                date.u = parseInt(v, 10);
            },
            r: "(-?\\d+)" // leading minus sign indicates seconds before UNIX epoch	
        },
        Q: {
            f: null,
            r: "0[1-4]"
        },
        q: {
            f: null,
            r: "[1-4]"
        }
    },

    getParseCode: function getParseCode(code) {
        var pCode = this.parseCodes[code];

        if (isFunction$1(pCode)) pCode = pCode.call(this);

        return pCode;
    },
    //缓存
    parseFunctions: {},

    createParser: function createParser(format) {
        if (this.parseFunctions[format]) {
            return this.parseFunctions[format];
        }
        //eg: step1: foramt = Y-m-d\s
        var obj,
            parser,
            self = this,
            calc = [],
            reg = ['\\\\?['],
            _reg = [],
            reg2 = [],
            parseCodes = this.parseCodes,
            _format = format,
            format = escapeRegex(format || this.defaultFormat);

        //eg: after escapeRegex => step2: foramt = Y\-m\-d\\s //此处的\s不应该转成\\s 所以后续需要转回\s	

        for (var k in parseCodes) {
            _reg.push(k);
            reg2.push('\\\\' + k);
        }

        reg.push(_reg.join('|'));

        reg.push(']');

        reg = reg.join('');

        format = format.replace(new RegExp(reg2.join('|', 'g')), function (ch) {
            return ch.replace('\\', '');
        });
        //eg: step3: foramt = Y\-m\-d\s

        var parseRegex = new RegExp(reg, 'g');

        var regExp = format.replace(parseRegex, function (ch, idx) {
            if (ch.charAt(0) == "\\") return ch.slice(1);

            obj = self.getParseCode(ch);

            if (obj.f) {
                calc.push(obj);
            }

            return obj.r;
        });

        parser = function parser(input, strict) {
            var ret = input.match(regExp);
            if (!ret) return;

            var dt,
                y,
                m,
                d,
                h,
                i,
                s,
                ms,
                o,
                z,
                zz,
                u,
                v,
                sn,
                hr,
                mn,
                date = {},
                fnCall = [],
                fnCallEnd = [],
                def = self.defaults;

            for (var i = 0; i < calc.length; i++) {
                var obj = calc[i];
                var match = ret[i + 1];
                if (obj.calcAtEnd) {
                    fnCallEnd.push({ fn: obj.f, params: [match, date, strict, i + 1, ret] });
                } else {
                    fnCall.push({ fn: obj.f, params: [match, date, strict, i + 1, ret] });
                }
            }

            for (var i = 0, calls = fnCall.concat(fnCallEnd); i < calls.length; i++) {
                var obj = calls[i];
                if (obj.fn && isFunction$1(obj.fn)) {
                    obj.fn.apply(self, obj.params);
                }
            }

            if (date.u != null) {
                v = new Date(date.u * 1000);
            } else {
                dt = self.clearTime(new Date());

                y = defalut(date.y, defalut(def.y, dt.getFullYear()));
                m = defalut(date.m, defalut(def.m, dt.getMonth()));
                d = defalut(date.d, defalut(def.d, dt.getDate()));

                h = defalut(date.h, defalut(def.h, dt.getHours()));
                i = defalut(date.i, defalut(def.i, dt.getMinutes()));
                s = defalut(date.s, defalut(def.s, dt.getSeconds()));
                ms = defalut(date.ms, defalut(def.ms, dt.getMilliseconds()));

                z = date.z;

                if (z >= 0 && y >= 0) {
                    // both the year and zero-based day of year are defined and >= 0.
                    // these 2 values alone provide sufficient info to create a full date object

                    // create Date object representing January 1st for the given year
                    // handle years < 100 appropriately
                    v = self.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), self.YEAR, y < 100 ? y - 100 : 0);

                    // then add day of year, checking for Date "rollover" if necessary
                    v = !strict ? v : strict === true && (z <= 364 || self.isLeapYear(v) && z <= 365) ? self.add(v, self.DAY, z) : null;
                } else if (strict === true && !self.isValid(y, m + 1, d, h, i, s, ms)) {
                    // check for Date "rollover"
                    v = null; // invalid date, so return null
                } else {
                    // plain old Date object
                    // handle years < 100 properly
                    v = self.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), self.YEAR, y < 100 ? y - 100 : 0);
                }
            }

            if (v) {
                zz = date.zz;
                o = date.o;
                // favour UTC offset over GMT offset
                if (zz != null) {
                    // reset to UTC, then add offset
                    v = self.add(v, self.SECOND, -v.getTimezoneOffset() * 60 - zz);
                } else if (o) {
                    sn = date.sn;
                    hr = date.hr;
                    mn = date.mn;
                    // reset to GMT, then add offset
                    v = self.add(v, self.MINUTE, -v.getTimezoneOffset() + (sn == '+' ? -1 : 1) * (hr * 60 + mn));
                }
            }

            return v;
        };

        this.parseFunctions[_format] = parser;

        return parser;
    },

    parse: function parse(input, format, strict) {

        if (Date.parse && arguments.length == 1) {
            var r = Date.parse(input);
            if (r) return new Date(r);
        }

        return this.createParser(format)(input, strict);
    },

    parseDate: function parseDate(input, format, strict) {
        return this.parse(input, format, strict);
    },

    /**
     * Checks if the current date is affected by Daylight Saving Time (DST).
     * @param {Date} date The date
     * @return {Boolean} True if the current date is affected by DST.
     */
    isDST: function isDST(date) {
        // adapted from http://sencha.com/forum/showthread.php?p=247172#post247172
        // courtesy of @geoffrey.mcgill
        return new Date(date.getFullYear(), 0, 1).getTimezoneOffset() != date.getTimezoneOffset();
    },

    /**
     * Attempts to clear all time information from this Date by setting the time to midnight of the same day,
     * automatically adjusting for Daylight Saving Time (DST) where applicable.
     * (note: DST timezone information for the browser's host operating system is assumed to be up-to-date)
     * @param {Date} date The date
     * @param {Boolean} clone true to create a clone of this date, clear the time and return it (defaults to false).
     * @return {Date} this or the clone.
     */
    clearTime: function clearTime(date, clone) {
        if (clone) {
            return this.clearTime(this.clone(date));
        }

        // get current date before clearing time
        var d = date.getDate();

        // clear time
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);

        if (date.getDate() != d) {
            // account for DST (i.e. day of month changed when setting hour = 0)
            // note: DST adjustments are assumed to occur in multiples of 1 hour (this is almost always the case)
            // refer to http://www.timeanddate.com/time/aboutdst.html for the (rare) exceptions to this rule

            // increment hour until cloned date == current date
            for (var hr = 1, c = this.add(date, this.HOUR, hr); c.getDate() != d; hr++, c = this.add(date, this.HOUR, hr)) {}

            date.setDate(d);
            date.setHours(c.getHours());
        }

        return date;
    },
    /**
     * 日期推移
     * @param {Date}
     * @param {String} interval 添加间隔类型 年y 月mo 日d 小时h 分mi 秒s 毫秒ms
     * @param {Int}	number 添加时间间隔值,可以是正负值
     */
    add: function add(date, interval, value) {
        var d = this.clone(date);
        if (!interval || value === 0) return d;

        switch (interval.toLowerCase()) {
            case this.MILLI:
                d.setMilliseconds(d.getMilliseconds() + value);
                break;
            case this.SECOND:
                d.setSeconds(d.getSeconds() + value);
                break;
            case this.MINUTE:
                d.setMinutes(d.getMinutes() + value);
                break;
            case this.HOUR:
                d.setHours(d.getHours() + value);
                break;
            case this.DAY:
                d.setDate(d.getDate() + value);
                break;
            case this.WEEKDAY:
                //i18n FIXME: assumes Saturday/Sunday weekend, but this is not always true.  see dojo/cldr/supplemental

                // Divide the increment time span into weekspans plus leftover days
                // e.g., 8 days is one 5-day weekspan / and two leftover days
                // Can't have zero leftover days, so numbers divisible by 5 get
                // a days value of 5, and the remaining days make up the number of weeks
                var days,
                    weeks,
                    amount = parseInt(value, 10);
                var mod = amount % 5;
                if (!mod) {
                    days = amount > 0 ? 5 : -5;
                    weeks = amount > 0 ? (amount - 5) / 5 : (amount + 5) / 5;
                } else {
                    days = mod;
                    weeks = parseInt(amount / 5);
                }
                // Get weekday value for orig date param
                var strt = date.getDay();
                // Orig date is Sat / positive incrementer
                // Jump over Sun
                var adj = 0;
                if (strt == 6 && amount > 0) {
                    adj = 1;
                } else if (strt == 0 && amount < 0) {
                    // Orig date is Sun / negative incrementer
                    // Jump back over Sat
                    adj = -1;
                }
                // Get weekday val for the new date
                var trgt = strt + days;
                // New date is on Sat or Sun
                if (trgt == 0 || trgt == 6) {
                    adj = amount > 0 ? 2 : -2;
                }
                // Increment by number of weeks plus leftover days plus
                // weekend adjustments
                amount = 7 * weeks + days + adj;

                d = this.add(d, this.DAY, amount);
                break;
            case this.WEEK:
                d = this.add(d, this.DAY, value * 7);
                break;
            case this.MONTH:
                var day = date.getDate();
                if (day > 28) {
                    day = Math.min(day, this.getLastDateOfMonth(this.add(this.getFirstDateOfMonth(date), 'mo', value)).getDate());
                }
                d.setDate(day);
                d.setMonth(date.getMonth() + value);
                break;
            case this.QUARTER:
                d = this.add(d, this.MONTH, value * 3);
                break;
            case this.YEAR:
                d.setFullYear(date.getFullYear() + value);
                break;
        }
        return d;
    },
    /**
     * Checks if a date falls on or between the given start and end dates.
     * @param {Date} date The date to check
     * @param {Date} start Start date
     * @param {Date} end End date
     * @return {Boolean} true if this date falls on or between the given start and end dates.
     */
    between: function between(date, start, end) {
        var t = date.getTime();
        return start.getTime() <= t && t <= end.getTime();
    },
    /** 
     * Get the difference in a specific unit of time (e.g., number of
     *	months, weeks, days, etc.) between two dates, rounded to the
     *	nearest integer.
     * @param {Date}
     * @param {Date?} Defaults now()
     * @param {String?} Defaults d
     * @return {Number}
     */
    difference: function difference(date1, date2, interval) {
        var date = this;
        date2 = date2 || new Date();
        interval = interval || date.DAY;
        var yearDiff = date2.getFullYear() - date1.getFullYear();
        var delta = 1; // Integer return value
        //see dojo date
        switch (interval) {
            case date.QUARTER:
                var m1 = date1.getMonth();
                var m2 = date2.getMonth();
                // Figure out which quarter the months are in
                var q1 = Math.floor(m1 / 3) + 1;
                var q2 = Math.floor(m2 / 3) + 1;
                // Add quarters for any year difference between the dates
                q2 += yearDiff * 4;
                delta = q2 - q1;
                break;
            case date.WEEKDAY:
                var days = Math.round(date.difference(date1, date2, date.DAY));
                var weeks = parseInt(date.difference(date1, date2, date.WEEK));
                var mod = days % 7;

                // Even number of weeks
                if (mod == 0) {
                    days = weeks * 5;
                } else {
                    // Weeks plus spare change (< 7 days)
                    var adj = 0;
                    var aDay = date1.getDay();
                    var bDay = date2.getDay();

                    weeks = parseInt(days / 7);
                    mod = days % 7;
                    // Mark the date advanced by the number of
                    // round weeks (may be zero)
                    var dtMark = new Date(date1);
                    dtMark.setDate(dtMark.getDate() + weeks * 7);
                    var dayMark = dtMark.getDay();

                    // Spare change days -- 6 or less
                    if (days > 0) {
                        switch (true) {
                            // Range starts on Sat
                            case aDay == 6:
                                adj = -1;
                                break;
                            // Range starts on Sun
                            case aDay == 0:
                                adj = 0;
                                break;
                            // Range ends on Sat
                            case bDay == 6:
                                adj = -1;
                                break;
                            // Range ends on Sun
                            case bDay == 0:
                                adj = -2;
                                break;
                            // Range contains weekend
                            case dayMark + mod > 5:
                                adj = -2;
                        }
                    } else if (days < 0) {
                        switch (true) {
                            // Range starts on Sat
                            case aDay == 6:
                                adj = 0;
                                break;
                            // Range starts on Sun
                            case aDay == 0:
                                adj = 1;
                                break;
                            // Range ends on Sat
                            case bDay == 6:
                                adj = 2;
                                break;
                            // Range ends on Sun
                            case bDay == 0:
                                adj = 1;
                                break;
                            // Range contains weekend
                            case dayMark + mod < 0:
                                adj = 2;
                        }
                    }
                    days += adj;
                    days -= weeks * 2;
                }
                delta = days;
                break;
            case date.YEAR:
                delta = yearDiff;
                break;
            case date.MONTH:
                delta = date2.getMonth() - date1.getMonth() + yearDiff * 12;
                break;
            case date.WEEK:
                // Truncate instead of rounding
                // Don't use Math.floor -- value may be negative
                delta = parseInt(date.difference(date1, date2, date.DAY) / 7);
                break;
            case date.DAY:
                delta /= 24;
            // fallthrough
            case date.HOUR:
                delta /= 60;
            // fallthrough
            case date.MINUTE:
                delta /= 60;
            // fallthrough
            case date.SECOND:
                delta /= 1000;
            // fallthrough
            case date.MILLI:
                delta *= date2.getTime() - date1.getTime();
        }

        // Round for fractional values and DST leaps
        return Math.round(delta); // Number (integer)	
    },
    diff: function diff() {
        return this.difference.apply(this, arguments);
    },
    part: function part(date, interval) {
        interval = interval || 'd';
        return this.format(date, interval);
    }
};

/**
 * 获取指定日期所在月份的显示范围
 * 日历显示最少会有28~42天，7天一行，二月有可能只有28天
 * @param {date} date 日期
 * @param {object?} options 相关配置参数
 * @param {boolean} [options.showOtherMonths=true] 默认会显示42(7x6)天的日期格式，否则就有可能是28(7x4)天 35(7x5)天
 * @param {number} [options.firstDay=0] 默认一周中的第一天 0-6 星期天-星期六
 * @return {array<start, end>}
 */
function getMonthDateRange(date, options) {
    var defaults = {
        showOtherMonths: true,
        firstDay: 0
    };

    var _assign2 = objectAssign({}, defaults, options),
        showOtherMonths = _assign2.showOtherMonths,
        firstDay = _assign2.firstDay;

    var start = DateUtil.getFirstDateOfMonth(date),
        end = DateUtil.getLastDateOfMonth(date);

    var startDay = start.getDay();
    var startOffset = startDay >= firstDay ? startDay - firstDay : 7 - (firstDay - startDay);
    start = DateUtil.add(start, 'd', -startOffset);

    //方法一
    //end日期可通过 (start + 当月天数 + startOffset) 最后取 end + (end - start)的天数 % 7
    //方法二 找规律
    var endDay = end.getDay();
    var endOffset = firstDay <= endDay ? 7 - (endDay - firstDay + 1) : firstDay - endDay - 1;
    end = DateUtil.add(end, 'd', endOffset);

    //日期开始和结尾必定有上个月和下个月的日期信息
    if (showOtherMonths) {
        //开始日期为月初则+7天
        if (start.getDate() === 1) {
            start = DateUtil.add(start, 'd', -7);
        }
        //
        end = DateUtil.add(start, 'd', 41);
    }

    return [start, end];
}

function isEqualDate(d1, d2) {
    return DateUtil.format(d1, 'Ymd') === DateUtil.format(d2, 'Ymd');
}

function isEqualMonth(d1, d2) {
    return DateUtil.format(d1, 'Ym') === DateUtil.format(d2, 'Ym');
}

var _class$20;
var _temp$18;

function noop$3() {}

// function checkDate(props, name, componentName){
//     if ( props[name] && !DateUtil.isDate(props[name])) {
//         return new Error(`${componentName}: ${name} is invalid Date!`);
//     }
// }

var Calendar$1 = (_temp$18 = _class$20 = function (_React$Component) {
  inherits(Calendar, _React$Component);

  function Calendar(props) {
    classCallCheck(this, Calendar);

    var _this = possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.currentShowDate = null;


    var currentDate = 'currentDate' in props ? props.currentDate : props.defaultDate;

    _this.state = {
      currentDate: currentDate,
      currentShowDate: DateUtil.isDate(currentDate) ? currentDate : new Date()
    };

    return _this;
  }

  createClass(Calendar, [{
    key: 'now',
    value: function now() {
      return new Date();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('currentDate' in nextProps) {
        this.setState({
          currentDate: nextProps.currentDate
        });
      }

      if ('currentShowDate' in nextProps) {
        this.setState({
          currentShowDate: nextProps.currentShowDate
        });
      }
    }
  }, {
    key: 'classNames',
    value: function classNames() {
      return classnames.apply(undefined, arguments);
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          firstDay = _props.firstDay,
          dayNamesMin = _props.dayNamesMin;


      var ths = [];

      var len2 = 7 + firstDay;
      for (var i = firstDay; i < len2; i++) {
        var day = i % 7;
        ths.push(React__default.createElement(
          'th',
          { key: i, className: this.classNames(prefixCls + '-cell', prefixCls + '-cell-h') },
          dayNamesMin[day]
        ));
      }

      return React__default.createElement(
        'tr',
        null,
        ths
      );
    }

    /**
    * 判断当前日期是否不可选
     */

  }, {
    key: 'isDisabledDate',
    value: function isDisabledDate(date) {
      var _props2 = this.props,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          disabledDate = _props2.disabledDate;

      var cTime = date.getTime();

      if (minDate && cTime < minDate.getTime()) {
        return true;
      }

      if (maxDate && cTime > maxDate.getTime()) {
        return true;
      }

      if (disabledDate) {
        return disabledDate(date, this);
      }

      return false;
    }
  }, {
    key: 'onDateClick',
    value: function onDateClick(date, e) {
      var props = this.props;
      var onSelect = props.onSelect,
          currentDate = props.currentDate;


      if (this.isDisabledDate(date)) return;

      if (!currentDate) {
        currentDate = date;
      }

      currentDate.setFullYear(date.getFullYear());
      currentDate.setMonth(date.getMonth());
      currentDate.setDate(date.getDate());

      if (!(currentDate in props)) {
        this.setState({
          currentDate: currentDate
        });
      }

      onSelect(currentDate);
    }
  }, {
    key: 'renderDate',
    value: function renderDate(date, key) {
      var _classNames2;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          dateRender = _props3.dateRender,
          dateClassNameRender = _props3.dateClassNameRender;
      var _state = this.state,
          currentDate = _state.currentDate,
          currentShowDate = _state.currentShowDate;

      var now = this.now();
      //const currentShowDate = this.currentShowDate;

      var dateLabel = dateRender ? dateRender(date, this) : date.getDate();

      var classes = this.classNames((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-cell', true), defineProperty(_classNames2, prefixCls + '-cell-b', true), defineProperty(_classNames2, prefixCls + '-cell-other-month', !isEqualMonth(currentShowDate, date)), defineProperty(_classNames2, prefixCls + '-cell-today', isEqualDate(now, date)), defineProperty(_classNames2, prefixCls + '-cell-selected', currentDate && isEqualDate(currentDate, date)), defineProperty(_classNames2, prefixCls + '-cell-disabled', this.isDisabledDate(date)), _classNames2), dateClassNameRender ? dateClassNameRender(date, this) : null);

      return React__default.createElement(
        'td',
        {
          key: key,
          className: classes,
          onClick: this.onDateClick.bind(this, date)
        },
        dateLabel
      );
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      var _props4 = this.props,
          showOtherMonths = _props4.showOtherMonths,
          firstDay = _props4.firstDay;
      var _state2 = this.state,
          currentDate = _state2.currentDate,
          currentShowDate = _state2.currentShowDate;

      //this.currentShowDate = currentDate || this.now();

      var dateRange = getMonthDateRange(currentShowDate, {
        showOtherMonths: showOtherMonths,
        firstDay: firstDay
      });

      var diff = DateUtil.difference(dateRange[0], dateRange[1], 'd');

      var startDate = dateRange[0];
      var endDate = dateRange[1];

      var trs = [];
      var tds = [];

      for (var i = 0; i <= diff; i++) {

        tds.push(this.renderDate(DateUtil.add(startDate, 'd', i), i));

        if (tds.length === 7) {
          trs.push(React__default.createElement(
            'tr',
            { key: i },
            tds.map(function (td) {
              return td;
            })
          ));
          tds.length = 0;
        }
      }

      return trs;
    }
  }, {
    key: 'renderWrapper',
    value: function renderWrapper() {
      var _props5 = this.props,
          prefixCls = _props5.prefixCls,
          className = _props5.className,
          style = _props5.style;


      return React__default.createElement(
        'div',
        { className: this.classNames(prefixCls, className), style: style },
        React__default.createElement(
          'table',
          { className: prefixCls + '-table' },
          React__default.createElement(
            'thead',
            null,
            this.renderHeader()
          ),
          React__default.createElement(
            'tbody',
            null,
            this.renderBody()
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderWrapper();
    }
  }]);
  return Calendar;
}(React__default.Component), _class$20.DateUtil = DateUtil, _class$20.propTypes = {
  className: propTypes.string,
  prefixCls: propTypes.string,
  onSelect: propTypes.func,
  dayNamesMin: propTypes.array,
  firstDay: propTypes.number,
  showOtherMonths: propTypes.bool,
  currentDate: propTypes.instanceOf(Date), //selectedDate
  defaultDate: propTypes.instanceOf(Date), //selectedDate
  currentShowDate: propTypes.instanceOf(Date), //显示当前月份的日期面板
  dateRender: propTypes.func,
  dateClassNameRender: propTypes.func,
  disabledDate: propTypes.func,
  maxDate: propTypes.instanceOf(Date),
  minDate: propTypes.instanceOf(Date)
}, _class$20.defaultProps = {
  prefixCls: 'nex-calendar',
  dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
  firstDay: 0,
  showOtherMonths: true,
  defaultDate: null,
  dateRender: null,
  dateClassNameRender: null,
  disabledDate: null,
  maxDate: null,
  minDate: null,
  onSelect: noop$3
}, _temp$18);

var _class$21;
var _temp$19;

// function checkDate(props, name, componentName){
//     if ( props[name] && !DateUtil.isDate(props[name])) {
//         return new Error(`${componentName}: ${name} is invalid Date!`);
//     }
// }

function fixValue(date, format) {
    if (typeof date === 'string') {
        return DateUtil.parse(date, format);
    }

    if (typeof date === 'number') {
        return new Date(date);
    }

    return date;
}

var DatePicker$1 = (_temp$19 = _class$21 = function (_React$Component) {
    inherits(DatePicker, _React$Component);

    function DatePicker(props) {
        classCallCheck(this, DatePicker);

        var _this = possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

        _this.handleDropdownCreate = function (el) {
            _this.refs.dropdown = el ? ReactDOM.findDOMNode(el) : null;
        };

        _this.handleClick = function (e) {
            _this.setState({
                showDropdown: !_this.state.showDropdown,
                showYearList: false,
                showMonthList: false
            });
        };

        _this.inputValue = null;


        var value = fixValue('value' in props ? props.value : props.defaultValue, props.dateFormat);

        _this.state = {
            value: value,
            currentShowDate: DateUtil.isDate(value) ? DateUtil.clone(value) : new Date(),
            _ext: uuid(6),
            showYearList: false,
            showMonthList: false
        };

        return _this;
    }

    createClass(DatePicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {

            if ('value' in props) {
                var value = fixValue(props.value, props.dateFormat);
                if (value) {
                    this.setState({
                        value: value,
                        currentShowDate: value
                    });
                }
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
        key: 'hideDropdown',
        value: function hideDropdown() {
            this.setState({
                showDropdown: false,
                showYearList: false,
                showMonthList: false
            });
        }
    }, {
        key: 'getPopupStyle',
        value: function getPopupStyle() {
            var showDropdown = this.state.showDropdown;

            var selectEl = this.refs.select;
            var dropdownStyle = {
                //maxWidth: 0,
                //maxHeight: 0,
            };

            if (showDropdown && selectEl) {
                //const rect = selectEl.getBoundingClientRect();
                //dropdownStyle.minWidth = selectEl.offsetWidth;
                //dropdownStyle.maxWidth = selectEl.offsetWidth + rect.right - 10;
                //dropdownStyle.maxHeight = Math.max(rect.top, window.innerHeight - rect.top - selectEl.offsetHeight) - 10;
            }

            return objectAssign(dropdownStyle, this.props.dropdownStyle);
        }
    }, {
        key: 'getDateLabel',
        value: function getDateLabel() {
            var dateFormat = this.props.dateFormat;
            var value = this.state.value;


            return DateUtil.isDate(value) ? DateUtil.format(value, dateFormat) : '';
        }
    }, {
        key: 'transformDateValue',
        value: function transformDateValue(date) {
            var dateFormat = this.props.dateFormat;


            return DateUtil.format(date, dateFormat);
        }
    }, {
        key: 'onDateSelect',
        value: function onDateSelect(date) {
            var props = this.props;
            var state = this.state;

            if (DateUtil.isEqual(date, state.value)) {
                this.hideDropdown();
                return;
            }

            if (!('value' in props)) {
                this.setState({
                    value: date,
                    currentShowDate: date,
                    showYearList: false,
                    showMonthList: false
                });
            }

            if (props.onChange) props.onChange(date); //this.transformDateValue(date)

            this.hideDropdown();
        }
    }, {
        key: 'renderYearList',
        value: function renderYearList() {
            var currentShowDate = this.state.currentShowDate;

            var list = [];
            var year = DateUtil.part(new Date(), 'Y');
            var currentYear = DateUtil.part(currentShowDate, 'Y');

            var end = year * 1 + 3;
            var start = year * 1 - 30;

            var onChange = function onChange(year) {
                currentShowDate.setFullYear(year);
                this.setState({
                    currentShowDate: currentShowDate,
                    showYearList: false,
                    showMonthList: false
                });
            };

            for (; start < end; start++) {
                list.push(React__default.createElement(
                    'div',
                    { key: start, className: classnames({
                            'active': currentYear == start
                        }), onClick: onChange.bind(this, start) },
                    start,
                    '\u5E74'
                ));
            }

            return list.reverse();
        }
    }, {
        key: 'renderMonthList',
        value: function renderMonthList() {
            var _this3 = this;

            var currentShowDate = this.state.currentShowDate;

            var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            var month = DateUtil.part(new Date(), 'm');
            var cMonth = DateUtil.part(currentShowDate, 'm');

            var onChange = function onChange(month) {
                currentShowDate.setMonth(month - 1);
                this.setState({
                    currentShowDate: currentShowDate,
                    showYearList: false,
                    showMonthList: false
                });
            };

            return months.map(function (num) {
                return React__default.createElement(
                    'div',
                    { key: num, className: classnames({
                            'active': cMonth == num
                        }), onClick: onChange.bind(_this3, num) },
                    num,
                    '\u6708'
                );
            });
        }
    }, {
        key: 'showYearList',
        value: function showYearList() {
            this.setState({
                showYearList: !this.state.showYearList,
                showMonthList: false
            });
        }
    }, {
        key: 'showMonthList',
        value: function showMonthList() {
            this.setState({
                showYearList: false,
                showMonthList: !this.state.showMonthList
            });
        }
    }, {
        key: 'renderPickerHeader',
        value: function renderPickerHeader() {
            var prefixCls = this.props.prefixCls;
            var _state = this.state,
                currentShowDate = _state.currentShowDate,
                showYearList = _state.showYearList,
                showMonthList = _state.showMonthList;


            var date = currentShowDate;

            return React__default.createElement(
                'div',
                { className: prefixCls + '-picker-header' },
                React__default.createElement(
                    'div',
                    { className: 'prev-btns' },
                    React__default.createElement('span', { className: 'prev-year-btn fa fa-angle-double-left', onClick: this.onPrevYear.bind(this) }),
                    React__default.createElement('span', { className: 'prev-month-btn fa fa-angle-left', onClick: this.onPrevMonth.bind(this) })
                ),
                React__default.createElement(
                    'span',
                    { className: 'year-label' },
                    React__default.createElement(
                        'span',
                        { onClick: this.showYearList.bind(this) },
                        DateUtil.part(date, 'Y'),
                        '\u5E74'
                    ),
                    showYearList ? React__default.createElement(
                        ScrollView,
                        { overflowX: 'hidden', className: 'year-list' },
                        this.renderYearList()
                    ) : null
                ),
                React__default.createElement(
                    'span',
                    { className: 'month-label' },
                    React__default.createElement(
                        'span',
                        { onClick: this.showMonthList.bind(this) },
                        DateUtil.part(date, 'm'),
                        '\u6708'
                    ),
                    showMonthList ? React__default.createElement(
                        ScrollView,
                        { overflowX: 'hidden', className: 'year-list' },
                        this.renderMonthList()
                    ) : null
                ),
                React__default.createElement(
                    'div',
                    { className: 'next-btns' },
                    React__default.createElement('span', { className: 'next-month-btn fa fa-angle-right', onClick: this.onNextMonth.bind(this) }),
                    React__default.createElement('span', { className: 'next-year-btn fa fa-angle-double-right', onClick: this.onNextYear.bind(this) })
                )
            );
        }
    }, {
        key: 'onPrevYear',
        value: function onPrevYear() {
            var currentShowDate = this.state.currentShowDate;


            this.setState({
                showYearList: false,
                showMonthList: false,
                currentShowDate: DateUtil.add(currentShowDate, 'y', -1)
            });
        }
    }, {
        key: 'onPrevMonth',
        value: function onPrevMonth() {
            var currentShowDate = this.state.currentShowDate;


            this.setState({
                showYearList: false,
                showMonthList: false,
                currentShowDate: DateUtil.add(currentShowDate, 'mo', -1)
            });
        }
    }, {
        key: 'onNextYear',
        value: function onNextYear() {
            var currentShowDate = this.state.currentShowDate;


            this.setState({
                showYearList: false,
                showMonthList: false,
                currentShowDate: DateUtil.add(currentShowDate, 'y', 1)
            });
        }
    }, {
        key: 'onNextMonth',
        value: function onNextMonth() {
            var currentShowDate = this.state.currentShowDate;


            this.setState({
                showYearList: false,
                showMonthList: false,
                currentShowDate: DateUtil.add(currentShowDate, 'mo', 1)
            });
        }
    }, {
        key: 'renderPicker',
        value: function renderPicker() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                maxDate = _props.maxDate,
                minDate = _props.minDate,
                disabledDate = _props.disabledDate;
            var _state2 = this.state,
                value = _state2.value,
                currentShowDate = _state2.currentShowDate;


            return React__default.createElement(
                'div',
                { ref: this.handleDropdownCreate, className: prefixCls + '-dropdown' },
                this.renderPickerHeader(),
                React__default.createElement(
                    'div',
                    { className: prefixCls + '-picker-body' },
                    React__default.createElement(Calendar$1, {
                        currentDate: value,
                        currentShowDate: currentShowDate,
                        maxDate: maxDate,
                        minDate: minDate,
                        disabledDate: disabledDate,
                        onSelect: this.onDateSelect.bind(this)
                    })
                )
            );
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(e) {
            var dateFormat = this.props.dateFormat;

            this.inputValue = e.target.value;

            var date = DateUtil.parse(e.target.value, dateFormat);

            if (date) {
                this.onDateSelect(date);
            }

            this.hideDropdown(); //forceUpdate
        }
    }, {
        key: 'getInputLabel',
        value: function getInputLabel() {
            return this.inputValue === null ? this.getDateLabel() : this.inputValue;
        }
    }, {
        key: 'onInputBlur',
        value: function onInputBlur(e) {
            var dateFormat = this.props.dateFormat;


            if (!this.state.showDropdown) {
                var date = DateUtil.parse(e.target.value, dateFormat);

                if (!date) {
                    //this.inputValue = null;
                    this.forceUpdate();
                }

                this.inputValue = null;
            }
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
                style = props.style,
                readOnly = props.readOnly,
                arrowCls = props.arrowCls,
                dropdownCls = props.dropdownCls,
                dropdownDestroyOnHide = props.dropdownDestroyOnHide,
                others = objectWithoutProperties(props, ['prefixCls', 'tabIndex', 'inline', 'disabled', 'style', 'readOnly', 'arrowCls', 'dropdownCls', 'dropdownDestroyOnHide']);

            var classes = classnames((_classNames = {}, defineProperty(_classNames, prefixCls, true), defineProperty(_classNames, prefixCls + '-inline', inline), defineProperty(_classNames, prefixCls + '-readonly', readOnly), defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));

            return React__default.createElement(
                'div',
                {
                    style: style,
                    ref: 'select',
                    className: classes,
                    tabIndex: tabIndex,
                    onClick: this.handleClick
                },
                React__default.createElement('input', { className: prefixCls + '-text', value: this.getInputLabel(),
                    onChange: this.onInputChange.bind(this),
                    onBlur: this.onInputBlur.bind(this) }),
                React__default.createElement('span', { className: classnames((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-arrow', true), defineProperty(_classNames2, arrowCls, true), _classNames2)) }),
                React__default.createElement(
                    Popup$1,
                    {
                        visible: showDropdown,
                        className: dropdownCls,
                        destroyOnHide: dropdownDestroyOnHide,
                        fixed: false,
                        rootCls: prefixCls + '-dropdown-root',
                        of: this.refs.select,
                        my: 'left top',
                        at: 'left bottom',
                        style: this.getPopupStyle()
                    },
                    this.renderPicker()
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderSelect();
        }
    }]);
    return DatePicker;
}(React__default.Component), _class$21.DateUtil = DateUtil, _class$21.propTypes = {
    className: propTypes.string,
    prefixCls: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.instanceOf(Date)]),
    defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.instanceOf(Date)]),
    dateFormat: propTypes.string
}, _class$21.defaultProps = {
    prefixCls: 'nex-datepicker',
    dateFormat: 'Y-m-d',
    maxDate: null,
    minDate: null,
    dropdownCls: null,
    dropdownStyle: null,
    dropdownDestroyOnHide: true,
    tabIndex: 0
}, _temp$19);

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

		this.config = objectAssign({
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
		value: function abort(ts) {
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

var _class$22;
var _temp$20;

var Pagination = (_temp$20 = _class$22 = function (_React$Component) {
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

			return classnames((_classNames = {}, defineProperty(_classNames, prefixCls + '-item', true), defineProperty(_classNames, prefixCls + '-item-first', pn == 1), defineProperty(_classNames, prefixCls + '-item-last', pn == pageCount), defineProperty(_classNames, prefixCls + '-item-active', current == pn), _classNames));
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
				React__default.createElement(Select$1, { options: list, size: small ? 'small' : 'default', value: this.state.pageSize, onChange: this.handlePageSizeChange, className: prefixCls + '-changer' })
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

			var _prevBtnCls = classnames((_classNames2 = {}, defineProperty(_classNames2, prefixCls + '-btn', true), defineProperty(_classNames2, prefixCls + '-prev', true), defineProperty(_classNames2, '' + prevBtnCls, prevBtnCls), defineProperty(_classNames2, prefixCls + '-btn-disabled', current == 1), _classNames2));

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
			var _nextBtnCls = classnames((_classNames3 = {}, defineProperty(_classNames3, prefixCls + '-btn', true), defineProperty(_classNames3, prefixCls + '-next', true), defineProperty(_classNames3, '' + nextBtnCls, nextBtnCls), defineProperty(_classNames3, prefixCls + '-btn-disabled', totalPages == current), _classNames3));

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

			var jumper = React__default.createElement(Input, { style: { width: 40 }, key: 'jumper', size: small ? 'small' : 'default', defaultValue: current, onPressEnter: _toPage, className: prefixCls + '-jumper' });

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

			var classes = classnames((_classNames4 = {}, defineProperty(_classNames4, '' + prefixCls, true), defineProperty(_classNames4, prefixCls + '-sm', small), _classNames4), className);

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
}(React__default.Component), _class$22.propTypes = {
	className: propTypes.string,
	prefixCls: propTypes.string,
	small: propTypes.bool,
	total: propTypes.number.isRequired,
	defaultCurrent: propTypes.number,
	current: propTypes.number,
	defaultPageSize: propTypes.number,
	pageSize: propTypes.number,
	maxPagesShow: propTypes.number,
	pageSizeOptions: propTypes.array,
	onPageSizeChange: propTypes.func,
	onChange: propTypes.func,
	prevBtnCls: propTypes.string,
	nextBtnCls: propTypes.string,
	layout: propTypes.string,
	defalutLayoutRender: propTypes.func,
	totalRender: propTypes.func,
	prevBtnRender: propTypes.func,
	nextBtnRender: propTypes.func,
	itemRender: propTypes.func,
	pageSizeOptionRender: propTypes.func,
	jumperRender: propTypes.func,
	showPrevMore: propTypes.bool,
	showNextMore: propTypes.bool
}, _class$22.defaultProps = {
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
}, _temp$20);

var _class$23;
var _temp$21;
var _initialiseProps$3;

function noop$5() {}

var Switch = (_temp$21 = _class$23 = function (_Component) {
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
			var switchClassName = classnames((_classNames = {}, defineProperty(_classNames, prefixCls, true), defineProperty(_classNames, prefixCls + '-small', size === 'small'), defineProperty(_classNames, prefixCls + '-checked', checked), defineProperty(_classNames, prefixCls + '-disabled', disabled), defineProperty(_classNames, className, !!className), _classNames));

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
}(React.Component), _class$23.propTypes = {
	className: propTypes.string,
	size: propTypes.oneOf(['small', 'default', 'large']),
	prefixCls: propTypes.string,
	disabled: propTypes.bool,
	checkedText: propTypes.any,
	unCheckedText: propTypes.any,
	onChange: propTypes.func,
	onMouseUp: propTypes.func,
	onClick: propTypes.func,
	tabIndex: propTypes.number,
	checked: propTypes.bool,
	defaultChecked: propTypes.bool,
	checkedColor: propTypes.string,
	unCheckedColor: propTypes.string
}, _class$23.defaultProps = {
	prefixCls: 'nex-switch',
	checkedText: null,
	unCheckedText: null,
	className: '',
	defaultChecked: false,
	onChange: noop$5,
	onClick: noop$5
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
}, _temp$21);

var reg = /^\-/;

function getOffset$1(h, v, offset) {
	if (offset[0]) {
		h += reg.test(offset[0]) ? offset[0] : '+' + offset[0];
	}

	if (offset[1]) {
		v += reg.test(offset[1]) ? offset[1] : '+' + offset[1];
	}

	return h + ' ' + v;
}

// at: point(at)
// my: point(at) position of target

var _placements = {
	LeftCenter: function LeftCenter() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('left', 'center', offset),
			my: 'right center'
		};
	},
	RightCenter: function RightCenter() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('right', 'center', offset),
			my: 'left center'
		};
	},
	TopCenter: function TopCenter() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('center', 'top', offset),
			my: 'center bottom'
		};
	},
	BottomCenter: function BottomCenter() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('center', 'bottom', offset),
			my: 'center top'
		};
	},
	TopLeft: function TopLeft() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('left', 'top', offset),
			my: 'left bottom'
		};
	},
	LeftTop: function LeftTop() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('left', 'top', offset),
			my: 'right top'
		};
	},
	TopRight: function TopRight() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('right', 'top', offset),
			my: 'right bottom'
		};
	},
	RightTop: function RightTop() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('right', 'top', offset),
			my: 'left top'
		};
	},
	BottomRight: function BottomRight() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('right', 'bottom', offset),
			my: 'right top'
		};
	},
	RightBottom: function RightBottom() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('right', 'bottom', offset),
			my: 'left bottom'
		};
	},
	BottomLeft: function BottomLeft() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('left', 'bottom', offset),
			my: 'left top'
		};
	},
	LeftBottom: function LeftBottom() {
		var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		return {
			at: getOffset$1('left', 'bottom', offset),
			my: 'right bottom'
		};
	}
};

function placements(placement, offset) {
	console.log(placement);
	return _placements[placement] ? _placements[placement](offset) : null;
}

var _class$24;
var _temp$22;

function noop$6() {}

var propTypes$3 = {
	popupVisible: propTypes.bool,
	defaultPopupVisible: propTypes.bool,
	action: propTypes.oneOf(['click', 'focus', 'hover', 'contextMenu']),
	onPopupVisibleChange: propTypes.func,
	destroyPopupOnHide: propTypes.bool,
	zIndex: propTypes.number,
	popup: propTypes.oneOfType([propTypes.node, propTypes.func]).isRequired,
	popupClassName: propTypes.string,
	popupAnimate: propTypes.object,
	popupMaskAnimate: propTypes.object,
	popupStyle: propTypes.object,
	popupProps: propTypes.object,
	mask: propTypes.bool,
	maskClosable: propTypes.bool,
	placement: propTypes.string
};

var Trigger = (_temp$22 = _class$24 = function (_React$Component) {
	inherits(Trigger, _React$Component);

	function Trigger(props) {
		classCallCheck(this, Trigger);

		var _this = possibleConstructorReturn(this, (Trigger.__proto__ || Object.getPrototypeOf(Trigger)).call(this, props));

		_this.onMaskClick = function () {
			var maskClosable = _this.props.maskClosable;


			if (maskClosable) {
				_this.setPopupVisible(false);
			}
		};

		_this.savePopup = function (node) {
			_this._popup = node;
		};

		var popupVisible = void 0;

		if ('popupVisible' in props) {
			popupVisible = !!props.popupVisible;
		} else {
			popupVisible = !!props.defaultPopupVisible;
		}

		_this._container = null;

		_this.state = {
			popupVisible: popupVisible
		};
		return _this;
	}

	createClass(Trigger, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.componentDidUpdate();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {

			if ('popupVisible' in nextProps) {
				this.setState({
					popupVisible: nextProps.popupVisible
				});
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.createPopup();
			this.createPopupEvents();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this._container) {
				ReactDOM__default.unmountComponentAtNode(this._container);
			}
		}
	}, {
		key: 'setPopupVisible',
		value: function setPopupVisible(popupVisible) {
			this.clearDelayTimer();
			if (this.state.popupVisible !== popupVisible) {
				if (!('popupVisible' in this.props)) {
					this.setState({
						popupVisible: popupVisible
					});
				}
				this.props.onPopupVisibleChange(popupVisible);
			}
		}
	}, {
		key: 'clearDelayTimer',
		value: function clearDelayTimer() {}
	}, {
		key: 'getClickTriggerProps',
		value: function getClickTriggerProps(child) {
			var _this2 = this;

			var action = this.props.action;
			var popupVisible = this.state.popupVisible;

			var _child$props$onClick = child.props.onClick,
			    _onClick = _child$props$onClick === undefined ? noop$6 : _child$props$onClick;

			if (action !== 'click') return;

			return {
				onClick: function onClick(e) {
					_onClick(e);
					_this2.setPopupVisible(!popupVisible);
				}
			};
		}
	}, {
		key: 'getContextMenuTriggerProps',
		value: function getContextMenuTriggerProps(child) {
			var _this3 = this;

			var action = this.props.action;
			var popupVisible = this.state.popupVisible;

			var _child$props$onContex = child.props.onContextMenu,
			    _onContextMenu = _child$props$onContex === undefined ? noop$6 : _child$props$onContex;

			if (action !== 'contextMenu') return;

			return {
				onContextMenu: function onContextMenu(e) {
					e.preventDefault();
					_onContextMenu(e);
					if (!popupVisible) _this3.setPopupVisible(true);
				}
			};
		}
	}, {
		key: 'getHoverTriggerProps',
		value: function getHoverTriggerProps(child) {
			var _this4 = this;

			var action = this.props.action;
			var popupVisible = this.state.popupVisible;

			var _child$props = child.props,
			    _child$props$onMouseE = _child$props.onMouseEnter,
			    _onMouseEnter = _child$props$onMouseE === undefined ? noop$6 : _child$props$onMouseE,
			    _child$props$onMouseL = _child$props.onMouseLeave,
			    _onMouseLeave = _child$props$onMouseL === undefined ? noop$6 : _child$props$onMouseL;

			if (action !== 'hover') return;

			return {
				onMouseEnter: function onMouseEnter(e) {
					_onMouseEnter(e);
					_this4.setPopupVisible(true);
				},
				onMouseLeave: function onMouseLeave(e) {
					_onMouseLeave(e);
					_this4.setPopupVisible(false);
				}
			};
		}
	}, {
		key: 'getFocusTriggerProps',
		value: function getFocusTriggerProps(child) {
			var _this5 = this;

			var action = this.props.action;
			var popupVisible = this.state.popupVisible;

			var _child$props2 = child.props,
			    _child$props2$onFocus = _child$props2.onFocus,
			    _onFocus = _child$props2$onFocus === undefined ? noop$6 : _child$props2$onFocus,
			    _child$props2$onBlur = _child$props2.onBlur,
			    _onBlur = _child$props2$onBlur === undefined ? noop$6 : _child$props2$onBlur;

			if (action !== 'focus') return;

			return {
				onFocus: function onFocus(e) {
					_onFocus(e);
					_this5.setPopupVisible(true);
				},
				onBlur: function onBlur(e) {
					_onBlur(e);
					_this5.setPopupVisible(false);
				}
			};
		}
	}, {
		key: 'getPopupAlign',
		value: function getPopupAlign() {}
	}, {
		key: 'getComponent',
		value: function getComponent() {
			var _props = this.props,
			    popup = _props.popup,
			    destroyPopupOnHide = _props.destroyPopupOnHide,
			    zIndex = _props.zIndex,
			    mask = _props.mask,
			    popupClassName = _props.popupClassName,
			    popupStyle = _props.popupStyle,
			    popupAnimate = _props.popupAnimate,
			    popupMaskAnimate = _props.popupMaskAnimate,
			    popupProps = _props.popupProps,
			    placement = _props.placement;
			var popupVisible = this.state.popupVisible;

			var triggerNode = ReactDOM__default.findDOMNode(this.refs.trigger);

			return React__default.createElement(
				Popup$1,
				_extends({}, placements(placement), {
					popupAnimate: popupAnimate,
					maskAnimate: popupMaskAnimate,
					className: popupClassName,
					style: _extends({
						zIndex: zIndex
					}, popupStyle),
					rootCls: 'nex-trigger-popup-root',
					of: triggerNode,
					destroyOnHide: destroyPopupOnHide,
					mask: mask,
					onMaskClick: this.onMaskClick
				}, popupProps, {
					visible: popupVisible,
					ref: this.savePopup
				}),
				typeof popup === 'function' ? popup() : popup
			);
		}
	}, {
		key: 'createPopup',
		value: function createPopup() {
			var popupVisible = this.state.popupVisible;


			if (!this._container && !popupVisible) return null;

			if (popupVisible && !this._container) {
				this._container = document.createElement('div');
			}

			ReactDOM__default.unstable_renderSubtreeIntoContainer(this, this.getComponent(), this._container);
		}
	}, {
		key: 'getPopupDomNode',
		value: function getPopupDomNode() {
			return this._popup ? this._popup.getPopupDomNode() : null;
		}

		//创建相关的close事件

	}, {
		key: 'createPopupEvents',
		value: function createPopupEvents() {
			var _this6 = this;

			var action = this.props.action;
			var popupVisible = this.state.popupVisible;

			var popup = this._popup;

			if (popupVisible) {

				if (!this.__resizeHandle) {
					this.__resizeHandle = function () {
						popup.updatePosition();
					};
					on(window, 'resize', this.__resizeHandle);
				}

				if (!this.__mousedownHandle) {
					this.__mousedownHandle = function (e) {
						if (action === 'click' || action === 'contextMenu') {
							var target = e.target;
							var root = ReactDOM.findDOMNode(_this6);
							var popupNode = _this6.getPopupDomNode();

							if (!contains$1(root, target) && !contains$1(popupNode, target)) {
								_this6.setPopupVisible(false);
							}

							if (action === 'contextMenu' && !contains$1(popupNode, target)) {
								_this6.setPopupVisible(false);
							}
						}
					};
					on(document, 'mousedown', this.__mousedownHandle);
				}

				return;
			}

			this.clearPopupEvents();
		}
	}, {
		key: 'clearPopupEvents',
		value: function clearPopupEvents() {
			if (this.__resizeHandle) {
				this.__resizeHandle = null;
				off(window, 'resize', this.__resizeHandle);
			}

			if (this.__mousedownHandle) {
				this.__mousedownHandle = null;
				off(document, 'mousedown', this.__mousedownHandle);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var children = this.props.children;


			var child = React__default.Children.only(children);

			var trigger = React__default.cloneElement(child, _extends({}, this.getClickTriggerProps(child), this.getContextMenuTriggerProps(child), this.getHoverTriggerProps(child), this.getFocusTriggerProps(child), {
				key: 'trigger',
				ref: 'trigger'
			}));

			return trigger;
		}
	}]);
	return Trigger;
}(React__default.Component), _class$24.propTypes = propTypes$3, _class$24.defaultProps = {
	onPopupVisibleChange: noop$6,
	destroyPopupOnHide: false,
	action: 'click',
	mask: false,
	maskClosable: true,
	placement: 'BottomLeft'
}, _temp$22);

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
exports.Trigger = Trigger;
exports.Calendar = Calendar$1;
exports.DatePicker = DatePicker$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
