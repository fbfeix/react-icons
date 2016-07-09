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

var Speedometer = function (_React$Component) {
	_inherits(Speedometer, _React$Component);

	function Speedometer() {
		_classCallCheck(this, Speedometer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Speedometer).apply(this, arguments));
	}

	_createClass(Speedometer, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M344,256l-84.4,64.2c-1.2-0.1-2.4-0.2-3.6-0.2c-17.7,0-32,14.3-32,32c0,17.7,14.3,32,32,32c17.7,0,32-14.3,32-32 c0-1.2-0.1-2.4-0.2-3.6L352,264L344,256z' }),
					_react2.default.createElement('path', { d: 'M256,96C132.3,96,32,196.3,32,320c0,34.4,7.8,66.9,21.6,96h36.1c-15.4-26.6-24.2-56.6-25.5-88H96v-16H64.2 c1.2-28.8,8.7-56.5,21.8-81.4l27.5,15.9l8-13.9L94,216.8c7.4-11.6,16.2-22.6,26.2-32.6c10.2-10.1,21.3-19,33.1-26.5l15.8,27.3 l13.9-8l-15.8-27.3c24.8-13,52.2-20.3,80.8-21.5V160h16v-31.8c28.6,1.2,56,8.6,80.8,21.5L329.1,177l13.9,8l15.8-27.3 c11.8,7.5,22.9,16.4,33.1,26.5c10,10,18.7,20.9,26.2,32.6l-27.4,15.8l8,13.9l27.5-15.9c13.1,24.9,20.6,52.6,21.8,81.4H416v16h31.8 c-1.3,31.4-10.1,61.4-25.5,88h36.1c13.8-29.1,21.6-61.6,21.6-96C480,196.3,379.7,96,256,96z' })
				)
			);
		}
	}]);

	return Speedometer;
}(_react2.default.Component);

exports.default = Speedometer;
;