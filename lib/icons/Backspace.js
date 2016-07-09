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

var Backspace = function (_React$Component) {
	_inherits(Backspace, _React$Component);

	function Backspace() {
		_classCallCheck(this, Backspace);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Backspace).apply(this, arguments));
	}

	_createClass(Backspace, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M498.941,93.559C490.037,84.654,478.696,80,465.875,80H168c-24.303,0-43.717,9.402-57.706,28.441L0,255.938l110.4,146.528 l0.18,0.231l0.184,0.232c6.904,8.855,14.424,15.701,22.99,20.417C143.883,428.924,155.405,432,168,432h298 c26.191,0,46-22.257,46-49V127C512,114.179,507.846,102.463,498.941,93.559z M413.442,332.307c1.528,1.51,2.372,3.562,2.372,5.71 c0,2.151-0.844,4.203-2.372,5.707l-21.823,21.905c-1.575,1.586-3.625,2.371-5.691,2.371c-2.071,0-4.138-0.785-5.695-2.371 l-76.23-76.461l-76.23,76.461c-1.558,1.586-3.625,2.371-5.695,2.371c-2.066,0-4.117-0.785-5.692-2.371l-21.824-21.905 c-1.527-1.504-2.373-3.556-2.373-5.707c0-2.148,0.846-4.2,2.373-5.71L271.098,256l-76.738-76.297 c-3.146-3.153-3.146-8.273,0-11.427l21.807-21.919c1.516-1.511,3.552-2.357,5.696-2.357c2.152,0,4.189,0.847,5.691,2.357 l76.448,75.533l76.447-75.533c1.504-1.511,3.541-2.357,5.693-2.357c2.143,0,4.179,0.847,5.695,2.357l21.807,21.919 c3.146,3.153,3.146,8.273,0,11.427L336.904,256L413.442,332.307z' })
				)
			);
		}
	}]);

	return Backspace;
}(_react2.default.Component);

exports.default = Backspace;
;