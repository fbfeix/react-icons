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

var IosPint = function (_React$Component) {
	_inherits(IosPint, _React$Component);

	function IosPint() {
		_classCallCheck(this, IosPint);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPint).apply(this, arguments));
	}

	_createClass(IosPint, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M368,170.085c0-21.022-0.973-88.554-19.308-125.013C344.244,36.228,336.25,32,316.999,32H195.001 c-19.25,0-27.246,4.197-31.693,13.041C144.973,81.5,144,149.25,144,170.272c0,98,32,100.353,32,180.853c0,39.5-16,71.402-16,99.402 c0,27,9,29.473,32,29.473h128c23,0,32-2.535,32-29.535c0-28-16-59.715-16-99.215C336,270.75,368,268.085,368,170.085z M177.602,51.983c0.778-1.546,1.339-1.763,2.53-2.295c1.977-0.884,6.161-1.688,14.869-1.688h121.998 c8.708,0,12.893,0.803,14.869,1.687c1.19,0.532,1.752,0.872,2.53,2.418c8.029,15.967,13.601,42.611,16.105,75.896H161.496 C164.001,94.653,169.572,67.951,177.602,51.983z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M368,170.085c0-21.022-0.973-88.554-19.308-125.013C344.244,36.228,336.25,32,316.999,32H195.001 c-19.25,0-27.246,4.197-31.693,13.041C144.973,81.5,144,149.25,144,170.272c0,98,32,100.353,32,180.853c0,39.5-16,71.402-16,99.402 c0,27,9,29.473,32,29.473h128c23,0,32-2.535,32-29.535c0-28-16-59.715-16-99.215C336,270.75,368,268.085,368,170.085z M177.602,51.983c0.778-1.546,1.339-1.763,2.53-2.295c1.977-0.884,6.161-1.688,14.869-1.688h121.998 c8.708,0,12.893,0.803,14.869,1.687c1.19,0.532,1.752,0.872,2.53,2.418c8.029,15.967,13.601,42.611,16.105,75.896H161.496 C164.001,94.653,169.572,67.951,177.602,51.983z' })
			);
		}
	}]);

	return IosPint;
}(_react2.default.Component);

exports.default = IosPint;
;IosPint.defaultProps = { bare: false };