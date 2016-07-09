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

var AlertCircled = function (_React$Component) {
	_inherits(AlertCircled, _React$Component);

	function AlertCircled() {
		_classCallCheck(this, AlertCircled);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AlertCircled).apply(this, arguments));
	}

	_createClass(AlertCircled, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M476.7,422.2L270.1,72.7c-2.9-5-8.3-8.7-14.1-8.7c-5.9,0-11.3,3.7-14.1,8.7L35.3,422.2c-2.8,5-4.8,13-1.9,17.9 c2.9,4.9,8.2,7.9,14,7.9h417.1c5.8,0,11.1-3,14-7.9C481.5,435.2,479.5,427.1,476.7,422.2z M288,400h-64v-48h64V400z M288,320h-64 V176h64V320z' })
				)
			);
		}
	}]);

	return AlertCircled;
}(_react2.default.Component);

exports.default = AlertCircled;
;