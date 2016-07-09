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

var BatteryLow = function (_React$Component) {
	_inherits(BatteryLow, _React$Component);

	function BatteryLow() {
		_classCallCheck(this, BatteryLow);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BatteryLow).apply(this, arguments));
	}

	_createClass(BatteryLow, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M42.1,384h381.1c5.5,0,9.9-4.5,9.9-10v-54h36.9c5.6,0,10.1-4.5,10.1-10V202c0-5.5-4.5-10-10.1-10H433v-54 c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236C32,379.5,36.5,384,42.1,384z M401,160v32v32h32.2H448v64h-14.8H401v32v32 H224l-32-192H401z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M42.1,384h381.1c5.5,0,9.9-4.5,9.9-10v-54h36.9c5.6,0,10.1-4.5,10.1-10V202c0-5.5-4.5-10-10.1-10H433v-54 c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236C32,379.5,36.5,384,42.1,384z M401,160v32v32h32.2H448v64h-14.8H401v32v32 H224l-32-192H401z' })
			);
		}
	}]);

	return BatteryLow;
}(_react2.default.Component);

exports.default = BatteryLow;
;BatteryLow.defaultProps = { bare: false };