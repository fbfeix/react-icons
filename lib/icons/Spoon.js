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

var Spoon = function (_React$Component) {
	_inherits(Spoon, _React$Component);

	function Spoon() {
		_classCallCheck(this, Spoon);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Spoon).apply(this, arguments));
	}

	_createClass(Spoon, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M320,160C320,96,293.5,32,256,32s-64,64-64,128l0,0c0.9,25,15.7,54.3,36.6,64.3c0.5,0.2,0.9,0.4,1.4,0.6c0,0,0,0,0.1,0 c3.4,1.9,9.8,5.5,9.8,9.7c0,0-16,198.7-16,210.1s5,20.5,10.5,26c5.5,5.5,13.1,9.2,21.3,9.2c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0 c8.2,0,15.8-3.7,21.4-9.2c5.5-5.5,10.3-12.9,10.3-26s-16-210.1-16-210.1c0-4.2,6.4-7.9,9.8-9.8l1.7-0.9C304.9,214,320,186,320,160' })
			);
		}
	}]);

	return Spoon;
}(_react2.default.Component);

exports.default = Spoon;
;