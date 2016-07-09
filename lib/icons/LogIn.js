'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('./../components/IconBase/IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogIn = function (_React$Component) {
	_inherits(LogIn, _React$Component);

	function LogIn() {
		_classCallCheck(this, LogIn);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LogIn).apply(this, arguments));
	}

	_createClass(LogIn, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M255.988,32C160.473,32,78.934,91.804,46.727,176h34.639c9.396-20.484,22.457-39.35,38.868-55.762 C156.497,83.973,204.709,64,255.988,64c51.286,0,99.504,19.973,135.771,56.239C428.027,156.505,448,204.719,448,256 c0,51.285-19.973,99.501-56.239,135.765C355.494,428.029,307.275,448,255.988,448c-51.281,0-99.493-19.971-135.755-56.234 C103.821,375.354,90.76,356.486,81.362,336H46.725c32.206,84.201,113.746,144,209.264,144C379.703,480,480,379.715,480,256 C480,132.298,379.703,32,255.988,32z' }),
					_react2.default.createElement('polygon', { points: '206.863,323.883 229.49,346.51 320,256 229.49,165.49 206.862,188.118 258.745,240 32,240 32,272 258.745,272 \t' })
				)
			);
		}
	}]);

	return LogIn;
}(_react2.default.Component);

exports.default = LogIn;
;