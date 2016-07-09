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

var IosPrinterOutline = function (_React$Component) {
	_inherits(IosPrinterOutline, _React$Component);

	function IosPrinterOutline() {
		_classCallCheck(this, IosPrinterOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPrinterOutline).apply(this, arguments));
	}

	_createClass(IosPrinterOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M432.5,112H400V64H112v48H80.5C62.9,112,48,125.8,48,143.3v158.4c0,17.5,14.9,32.3,32.5,32.3H128v114h256V334h48.5 c17.6,0,31.5-14.8,31.5-32.3V143.3C464,125.8,450.1,112,432.5,112z M128,80h256v32H128V80z M368,432H144V240h224V432z M448,301.7 c0,8.7-6.7,16.3-15.5,16.3H384v-94H128v94H80.5c-8.8,0-16.5-7.6-16.5-16.3V143.3c0-8.7,7.7-15.3,16.5-15.3H432h0.5 c8.8,0,15.5,6.6,15.5,15.3V301.7z' })
				)
			);
		}
	}]);

	return IosPrinterOutline;
}(_react2.default.Component);

exports.default = IosPrinterOutline;
;