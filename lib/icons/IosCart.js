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

var IosCart = function (_React$Component) {
	_inherits(IosCart, _React$Component);

	function IosCart() {
		_classCallCheck(this, IosCart);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCart).apply(this, arguments));
	}

	_createClass(IosCart, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M160,400c-13.248,0-24,10.752-24,24s10.752,24,24,24s24-10.752,24-24S173.248,400,160,400z' }),
					_react2.default.createElement('path', { d: 'M384.5,400c-13.248,0-24,10.752-24,24s10.752,24,24,24s24-10.752,24-24S397.748,400,384.5,400z' }),
					_react2.default.createElement('path', { d: 'M448,128L123.177,95.646c-1.628-6.972-4.369-14.66-11.838-20.667C102.025,67.489,86.982,64,64,64v16.001 c18.614,0,31.167,2.506,37.312,7.447c4.458,3.585,5.644,8.423,7.165,15.989l-0.024,0.004l42.052,233.638 c2.413,14.422,7.194,25.209,13.291,32.986C171.043,379.312,180.533,384,192,384h240v-16H192c-4.727,0-19.136,0.123-25.749-33.755 l-5.429-30.16L432,256L448,128z' })
				)
			);
		}
	}]);

	return IosCart;
}(_react2.default.Component);

exports.default = IosCart;
;