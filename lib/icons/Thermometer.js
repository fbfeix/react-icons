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

var Thermometer = function (_React$Component) {
	_inherits(Thermometer, _React$Component);

	function Thermometer() {
		_classCallCheck(this, Thermometer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Thermometer).apply(this, arguments));
	}

	_createClass(Thermometer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M303,335.6V78.4c0-25.7-21-46.5-47-46.5c-26,0-47,20.8-47,46.5v256.8c-20,14.5-32.9,38.2-32.9,64.9c0,44.2,36,80,80.2,80 c44.2,0,79.8-35.8,79.8-80C336,373.6,323,350.1,303,335.6z M241,78.4c0-8,6.7-14.5,15-14.5s15,6.5,15,14.5V128h-30V78.4z M272,288 h-16v-16h16V288z M272,256h-16v-64h16V256z' })
				)
			);
		}
	}]);

	return Thermometer;
}(_react2.default.Component);

exports.default = Thermometer;
;