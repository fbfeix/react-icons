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

var IosVideocamOutline = function (_React$Component) {
	_inherits(IosVideocamOutline, _React$Component);

	function IosVideocamOutline() {
		_classCallCheck(this, IosVideocamOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosVideocamOutline).apply(this, arguments));
	}

	_createClass(IosVideocamOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M303.7,128h-221C63.9,128,47,142.1,47,160.7v187.9c0,18.6,16.9,35.4,35.7,35.4h221c18.8,0,33.3-16.8,33.3-35.4V160.7 C337,142.1,322.5,128,303.7,128z M320,348.6c0,9.3-6.9,18.4-16.3,18.4h-221c-9.4,0-18.7-9.1-18.7-18.4V160.7 c0-9.3,9-15.5,18.4-15.5l221,0.1c9.4,0,16.6,6.1,16.6,15.4V348.6z' }),
					_react2.default.createElement('path', { d: 'M367,213v85.6l98,53.4V160L367,213z M448,190v132.3l-64-33.5v-65.6l64.1-33.6L448,190z' })
				)
			);
		}
	}]);

	return IosVideocamOutline;
}(_react2.default.Component);

exports.default = IosVideocamOutline;
;