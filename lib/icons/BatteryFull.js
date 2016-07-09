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

var BatteryFull = function (_React$Component) {
	_inherits(BatteryFull, _React$Component);

	function BatteryFull() {
		_classCallCheck(this, BatteryFull);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BatteryFull).apply(this, arguments));
	}

	_createClass(BatteryFull, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M469.9,192H433v-54c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236c0,5.5,4.5,10,10.1,10h381.1c5.5,0,9.9-4.5,9.9-10 v-54h36.9c5.6,0,10.1-4.5,10.1-10V202C480,196.5,475.5,192,469.9,192z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M469.9,192H433v-54c0-5.5-4.3-10-9.9-10H42.1c-5.6,0-10.1,4.5-10.1,10v236c0,5.5,4.5,10,10.1,10h381.1c5.5,0,9.9-4.5,9.9-10 v-54h36.9c5.6,0,10.1-4.5,10.1-10V202C480,196.5,475.5,192,469.9,192z' })
			);
		}
	}]);

	return BatteryFull;
}(_react2.default.Component);

exports.default = BatteryFull;
;BatteryFull.defaultProps = { bare: false };