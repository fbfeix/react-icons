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

var IosMicOutline = function (_React$Component) {
	_inherits(IosMicOutline, _React$Component);

	function IosMicOutline() {
		_classCallCheck(this, IosMicOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosMicOutline).apply(this, arguments));
	}

	_createClass(IosMicOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,32c-43.7,0-79,37.5-79,83.5V270c0,46,35.3,83.5,79,83.5c43.7,0,79-37.5,79-83.5V115.5C335,69.5,299.7,32,256,32z M319,270c0,37.2-28.3,67.5-63,67.5c-34.7,0-63-30.3-63-67.5V115.5c0-37.2,28.3-67.5,63-67.5c34.7,0,63,30.3,63,67.5V270z' }),
						_react2.default.createElement('path', { d: 'M367,192v79.7c0,60.2-49.8,109.2-110,109.2c-60.2,0-110-49-110-109.2V192h-19v79.7c0,67.2,53,122.6,120,127.5V462h-73v18 h161v-18h-69v-62.8c66-4.9,117-60.3,117-127.5V192H367z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32c-43.7,0-79,37.5-79,83.5V270c0,46,35.3,83.5,79,83.5c43.7,0,79-37.5,79-83.5V115.5C335,69.5,299.7,32,256,32z M319,270c0,37.2-28.3,67.5-63,67.5c-34.7,0-63-30.3-63-67.5V115.5c0-37.2,28.3-67.5,63-67.5c34.7,0,63,30.3,63,67.5V270z' }),
					_react2.default.createElement('path', { d: 'M367,192v79.7c0,60.2-49.8,109.2-110,109.2c-60.2,0-110-49-110-109.2V192h-19v79.7c0,67.2,53,122.6,120,127.5V462h-73v18 h161v-18h-69v-62.8c66-4.9,117-60.3,117-127.5V192H367z' })
				)
			);
		}
	}]);

	return IosMicOutline;
}(_react2.default.Component);

exports.default = IosMicOutline;
;IosMicOutline.defaultProps = { bare: false };