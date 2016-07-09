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

var Woman = function (_React$Component) {
	_inherits(Woman, _React$Component);

	function Woman() {
		_classCallCheck(this, Woman);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Woman).apply(this, arguments));
	}

	_createClass(Woman, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M190.4,148.6L161,252.9c-6.3,22.8,20.7,31.7,27.3,10.3l26.3-96.2h7.4l-45.2,169H219v127c0,23,32,23,32,0V336h10v127 c0,23,31,23,31,0V336h43.4l-46.2-169h8.4l26.3,96.2c6.5,21.9,33.3,12.5,27.3-10.2l-29.4-104.4c-4-11.8-18.2-32.6-42-33.6h-47.3 C207.9,116,193.8,136.6,190.4,148.6z' }),
					_react2.default.createElement('path', { d: 'M292.6,69.2c0-20.6-16.4-37.3-36.6-37.3c-20.2,0-36.6,16.7-36.6,37.3c0,20.6,16.4,37.3,36.6,37.3 C276.2,106.5,292.6,89.8,292.6,69.2z' })
				)
			);
		}
	}]);

	return Woman;
}(_react2.default.Component);

exports.default = Woman;
;