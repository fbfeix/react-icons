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

var IosPintOutline = function (_React$Component) {
	_inherits(IosPintOutline, _React$Component);

	function IosPintOutline() {
		_classCallCheck(this, IosPintOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPintOutline).apply(this, arguments));
	}

	_createClass(IosPintOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M368,170.085c0-21.022-0.973-88.554-19.308-125.013C344.244,36.228,336.25,32,316.999,32H195.001 c-19.25,0-27.246,4.197-31.693,13.041C144.973,81.5,144,149.25,144,170.272c0,98,32,100.353,32,180.853c0,39.5-16,71.402-16,99.402 c0,27,9,29.473,32,29.473h128c23,0,32-2.535,32-29.535c0-28-16-59.715-16-99.215C336,270.75,368,268.085,368,170.085z M177.602,51.983c0.778-1.546,1.339-1.763,2.53-2.295c1.977-0.884,6.161-1.688,14.869-1.688h121.998 c8.708,0,12.893,0.803,14.869,1.687c1.19,0.532,1.752,0.872,2.53,2.418c8.029,15.967,13.601,42.611,16.105,75.896H161.496 C164.001,94.653,169.572,67.951,177.602,51.983z M334.631,462.636C332.76,463.377,327.844,464,320,464H192 c-7.844,0-12.761-0.623-14.639-1.359c-0.394-0.93-1.361-4.166-1.361-12.27c0-10.856,3.016-23.16,6.508-37.334 c4.449-18.059,9.492-38.557,9.492-61.943c0-40.997-7.993-63.802-15.724-85.842C168.274,242.438,160,218.838,160,170.155 c0-9.025,0.191-17.756,0.558-26.155h190.886c0.365,8.376,0.557,17.083,0.557,26.085c0,48.688-8.276,72.302-16.28,95.169 c-7.728,22.079-15.72,44.895-15.72,85.887c0,23.39,5.043,43.822,9.493,61.856c3.491,14.15,6.507,26.368,6.507,37.222 C336,458.355,335.024,461.713,334.631,462.636z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M368,170.085c0-21.022-0.973-88.554-19.308-125.013C344.244,36.228,336.25,32,316.999,32H195.001 c-19.25,0-27.246,4.197-31.693,13.041C144.973,81.5,144,149.25,144,170.272c0,98,32,100.353,32,180.853c0,39.5-16,71.402-16,99.402 c0,27,9,29.473,32,29.473h128c23,0,32-2.535,32-29.535c0-28-16-59.715-16-99.215C336,270.75,368,268.085,368,170.085z M177.602,51.983c0.778-1.546,1.339-1.763,2.53-2.295c1.977-0.884,6.161-1.688,14.869-1.688h121.998 c8.708,0,12.893,0.803,14.869,1.687c1.19,0.532,1.752,0.872,2.53,2.418c8.029,15.967,13.601,42.611,16.105,75.896H161.496 C164.001,94.653,169.572,67.951,177.602,51.983z M334.631,462.636C332.76,463.377,327.844,464,320,464H192 c-7.844,0-12.761-0.623-14.639-1.359c-0.394-0.93-1.361-4.166-1.361-12.27c0-10.856,3.016-23.16,6.508-37.334 c4.449-18.059,9.492-38.557,9.492-61.943c0-40.997-7.993-63.802-15.724-85.842C168.274,242.438,160,218.838,160,170.155 c0-9.025,0.191-17.756,0.558-26.155h190.886c0.365,8.376,0.557,17.083,0.557,26.085c0,48.688-8.276,72.302-16.28,95.169 c-7.728,22.079-15.72,44.895-15.72,85.887c0,23.39,5.043,43.822,9.493,61.856c3.491,14.15,6.507,26.368,6.507,37.222 C336,458.355,335.024,461.713,334.631,462.636z' })
			);
		}
	}]);

	return IosPintOutline;
}(_react2.default.Component);

exports.default = IosPintOutline;
;IosPintOutline.defaultProps = { bare: false };