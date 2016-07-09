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

var IosCalculator = function (_React$Component) {
	_inherits(IosCalculator, _React$Component);

	function IosCalculator() {
		_classCallCheck(this, IosCalculator);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCalculator).apply(this, arguments));
	}

	_createClass(IosCalculator, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M368,64H144c-17.7,0-32,14.3-32,32v320c0,17.7,14.3,32,32,32h224c17.7,0,32-14.3,32-32V96C400,78.3,385.7,64,368,64z M360,280v128h-48V280H360z M360,200v48h-48v-48H360z M280,360v48h-48v-48H280z M280,280v48h-48v-48H280z M280,200v48h-48v-48H280z M200,360v48h-48v-48H200z M200,280v48h-48v-48H200z M200,200v48h-48v-48H200z M152,152v-48h208v48H152z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M368,64H144c-17.7,0-32,14.3-32,32v320c0,17.7,14.3,32,32,32h224c17.7,0,32-14.3,32-32V96C400,78.3,385.7,64,368,64z M360,280v128h-48V280H360z M360,200v48h-48v-48H360z M280,360v48h-48v-48H280z M280,280v48h-48v-48H280z M280,200v48h-48v-48H280z M200,360v48h-48v-48H200z M200,280v48h-48v-48H200z M200,200v48h-48v-48H200z M152,152v-48h208v48H152z' })
			);
		}
	}]);

	return IosCalculator;
}(_react2.default.Component);

exports.default = IosCalculator;
;IosCalculator.defaultProps = { bare: false };