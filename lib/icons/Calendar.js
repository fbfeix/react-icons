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

var Calendar = function (_React$Component) {
	_inherits(Calendar, _React$Component);

	function Calendar() {
		_classCallCheck(this, Calendar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).apply(this, arguments));
	}

	_createClass(Calendar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M144,128c17.7,0,32-14.3,32-32V64c0-17.7-14.3-32-32-32s-32,14.3-32,32v32C112,113.7,126.3,128,144,128z' }),
					_react2.default.createElement('path', { d: 'M368,128c17.7,0,32-14.3,32-32V64c0-17.7-14.3-32-32-32s-32,14.3-32,32v32C336,113.7,350.3,128,368,128z' }),
					_react2.default.createElement('path', { d: 'M472,64h-56v40.7c0,22.5-23.2,39.3-47.2,39.3S320,127.2,320,104.7V64H192v40.7c0,22.5-24,39.3-48,39.3s-48-16.8-48-39.3V64 H40c-4.4,0-8,3.6-8,8v400c0,4.4,3.6,8,8,8h432c4.4,0,8-3.6,8-8V72C480,67.6,476.4,64,472,64z M432,432H80V176h352V432z' })
				)
			);
		}
	}]);

	return Calendar;
}(_react2.default.Component);

exports.default = Calendar;
;