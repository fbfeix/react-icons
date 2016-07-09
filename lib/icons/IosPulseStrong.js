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

var IosPulseStrong = function (_React$Component) {
	_inherits(IosPulseStrong, _React$Component);

	function IosPulseStrong() {
		_classCallCheck(this, IosPulseStrong);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPulseStrong).apply(this, arguments));
	}

	_createClass(IosPulseStrong, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M448,273.001c-21.27,0-39.296,13.999-45.596,32.999h-38.857l-28.361-85.417c-2.176-6.553-8.303-10.956-15.183-10.956 c-0.112,0-0.224,0-0.335,0.004c-7.016,0.145-13.117,4.844-15.049,11.588l-44.484,155.262L207.782,62.373 C206.535,54.893,200.333,48,192,48s-13.693,5.776-15.525,13.135L115.496,306H16v31.999h112c7.348,0,13.75-5.003,15.525-12.134 l45.368-182.177l51.324,307.94c1.229,7.377,7.397,11.92,14.864,12.344C255.389,463.99,255.695,464,256,464 c7.097,0,13.406-3.701,15.381-10.594l49.744-173.617l15.689,47.252c2.173,6.543,8.292,10.958,15.186,10.958h51.108 C409.973,355.999,427.477,369,448,369c26.511,0,48-22.492,48-49C496,293.491,474.511,273.001,448,273.001z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M448,273.001c-21.27,0-39.296,13.999-45.596,32.999h-38.857l-28.361-85.417c-2.176-6.553-8.303-10.956-15.183-10.956 c-0.112,0-0.224,0-0.335,0.004c-7.016,0.145-13.117,4.844-15.049,11.588l-44.484,155.262L207.782,62.373 C206.535,54.893,200.333,48,192,48s-13.693,5.776-15.525,13.135L115.496,306H16v31.999h112c7.348,0,13.75-5.003,15.525-12.134 l45.368-182.177l51.324,307.94c1.229,7.377,7.397,11.92,14.864,12.344C255.389,463.99,255.695,464,256,464 c7.097,0,13.406-3.701,15.381-10.594l49.744-173.617l15.689,47.252c2.173,6.543,8.292,10.958,15.186,10.958h51.108 C409.973,355.999,427.477,369,448,369c26.511,0,48-22.492,48-49C496,293.491,474.511,273.001,448,273.001z' })
			);
		}
	}]);

	return IosPulseStrong;
}(_react2.default.Component);

exports.default = IosPulseStrong;
;IosPulseStrong.defaultProps = { bare: false };