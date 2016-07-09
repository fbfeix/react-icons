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

var Refresh = function (_React$Component) {
	_inherits(Refresh, _React$Component);

	function Refresh() {
		_classCallCheck(this, Refresh);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Refresh).apply(this, arguments));
	}

	_createClass(Refresh, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M416,352l96-111.9h-64.7c-2.3-27.9-10.5-54-23.5-77.3c-27.4-49.2-75.8-85.1-133-95.6c-0.7-0.1-1.5-0.3-2.2-0.4 c-0.5-0.1-0.9-0.2-1.4-0.2C277.1,64.9,266.6,64,256,64c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0c-90.9,0.2-167,63.6-186.7,148.6 c0,0,0,0.1,0,0.1c-0.3,1.1-0.5,2.2-0.7,3.3c-0.1,0.5-0.2,0.9-0.3,1.4c-0.1,0.7-0.3,1.4-0.4,2.1c-0.2,0.9-0.3,1.7-0.5,2.6 c-0.1,0.4-0.1,0.7-0.2,1.1c-0.2,1.2-0.4,2.4-0.6,3.6c0,0.1,0,0.1,0,0.2c-1,6.3-1.6,12.7-1.9,19.1c0,0.3,0,0.6,0,0.8 c-0.1,1.4-0.1,2.7-0.2,4.1c0,1.6-0.1,3.3-0.1,5c0,1.7,0,3.3,0.1,5c0,1.4,0.1,2.7,0.2,4.1c0,0.3,0,0.6,0,0.9c0.3,6.5,1,12.9,1.9,19.1 c0,0.1,0,0.1,0,0.2c0.2,1.2,0.4,2.4,0.6,3.6c0.1,0.4,0.1,0.7,0.2,1.1c0.2,0.9,0.3,1.8,0.5,2.6c0.1,0.7,0.3,1.4,0.4,2.1 c0.1,0.5,0.2,1,0.3,1.4c0.2,1.1,0.5,2.2,0.7,3.2c0,0,0,0.1,0,0.1c19.7,85,96.1,148.4,187.1,148.6c42.9-0.1,83.1-14.2,116.9-40.7 l7.5-5.9l-43.2-46.2l-6.2,4.6c-22.1,16.3-47.5,24.2-75,24.2c-70.6,0-128-57-128-128c0-71,57.4-128,128-128 c66.4,0,122.8,46.6,129.5,112H312L416,352z' })
			);
		}
	}]);

	return Refresh;
}(_react2.default.Component);

exports.default = Refresh;
;