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

var IosMicOff = function (_React$Component) {
	_inherits(IosMicOff, _React$Component);

	function IosMicOff() {
		_classCallCheck(this, IosMicOff);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosMicOff).apply(this, arguments));
	}

	_createClass(IosMicOff, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '264.2', y: '1.1', transform: 'matrix(0.8629 -0.5053 0.5053 0.8629 -92.0515 172.66)', width: '16', height: '509.8' }),
						_react2.default.createElement('path', { d: 'M256.2,353.4c12.3,0,23.8-2.9,34.2-8.2L177,152.4V270C177,316,212.4,353.4,256.2,353.4z' }),
						_react2.default.createElement('path', { d: 'M335,270V115.5c0-46-35.2-83.5-79-83.5c-25.4,0-47.8,12.6-62.3,32.2l136.9,233.3C333.5,288.9,335,279.6,335,270z' }),
						_react2.default.createElement('path', { d: 'M384,271.7V192h-17v79.7c0,21.5-6.2,41.6-17.1,58.5l9.9,17C375.1,326,384,299.9,384,271.7z' }),
						_react2.default.createElement('path', { d: 'M267,399.2c17-1.2,33-5.8,47.3-13l-9.4-16.1c-14.5,7-30.7,10.9-47.7,10.9c-60.3,0-110.1-49-110.1-109.1V192h-19v79.7 c0,67.2,53,122.6,120,127.4V462h-73v18h161v-18h-69V399.2z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '264.2', y: '1.1', transform: 'matrix(0.8629 -0.5053 0.5053 0.8629 -92.0515 172.66)', width: '16', height: '509.8' }),
					_react2.default.createElement('path', { d: 'M256.2,353.4c12.3,0,23.8-2.9,34.2-8.2L177,152.4V270C177,316,212.4,353.4,256.2,353.4z' }),
					_react2.default.createElement('path', { d: 'M335,270V115.5c0-46-35.2-83.5-79-83.5c-25.4,0-47.8,12.6-62.3,32.2l136.9,233.3C333.5,288.9,335,279.6,335,270z' }),
					_react2.default.createElement('path', { d: 'M384,271.7V192h-17v79.7c0,21.5-6.2,41.6-17.1,58.5l9.9,17C375.1,326,384,299.9,384,271.7z' }),
					_react2.default.createElement('path', { d: 'M267,399.2c17-1.2,33-5.8,47.3-13l-9.4-16.1c-14.5,7-30.7,10.9-47.7,10.9c-60.3,0-110.1-49-110.1-109.1V192h-19v79.7 c0,67.2,53,122.6,120,127.4V462h-73v18h161v-18h-69V399.2z' })
				)
			);
		}
	}]);

	return IosMicOff;
}(_react2.default.Component);

exports.default = IosMicOff;
;IosMicOff.defaultProps = { bare: false };