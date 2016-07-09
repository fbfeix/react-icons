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

var IosCalculatorOutline = function (_React$Component) {
	_inherits(IosCalculatorOutline, _React$Component);

	function IosCalculatorOutline() {
		_classCallCheck(this, IosCalculatorOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCalculatorOutline).apply(this, arguments));
	}

	_createClass(IosCalculatorOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M144,160h224V96H144V160z M160,112h192v32H160V112z' }),
						_react2.default.createElement('path', { d: 'M368,64H144c-17.7,0-32,14.3-32,32v320c0,17.7,14.3,32,32,32h224c17.7,0,32-14.3,32-32V96C400,78.3,385.7,64,368,64z M384,416c0,8.8-7.2,16-16,16H144c-8.8,0-16-7.2-16-16V96c0-8.8,7.2-16,16-16h224c8.8,0,16,7.2,16,16V416z' }),
						_react2.default.createElement('polygon', { points: '160,240 160,208 160,192 144,192 144,256 208,256 208,240 192,240 \t' }),
						_react2.default.createElement('polygon', { points: '160,320 160,288 160,272 144,272 144,336 208,336 208,320 192,320 \t' }),
						_react2.default.createElement('polygon', { points: '160,400 160,368 160,352 144,352 144,416 208,416 208,400 192,400 \t' }),
						_react2.default.createElement('polygon', { points: '240,240 240,208 240,192 224,192 224,256 288,256 288,240 272,240 \t' }),
						_react2.default.createElement('polygon', { points: '320,240 320,208 320,192 304,192 304,256 368,256 368,240 352,240 \t' }),
						_react2.default.createElement('polygon', { points: '240,320 240,288 240,272 224,272 224,336 288,336 288,320 272,320 \t' }),
						_react2.default.createElement('polygon', { points: '240,400 240,368 240,352 224,352 224,416 288,416 288,400 272,400 \t' }),
						_react2.default.createElement('polygon', { points: '320,400 320,368 320,272 304,272 304,416 368,416 368,400 352,400 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M144,160h224V96H144V160z M160,112h192v32H160V112z' }),
					_react2.default.createElement('path', { d: 'M368,64H144c-17.7,0-32,14.3-32,32v320c0,17.7,14.3,32,32,32h224c17.7,0,32-14.3,32-32V96C400,78.3,385.7,64,368,64z M384,416c0,8.8-7.2,16-16,16H144c-8.8,0-16-7.2-16-16V96c0-8.8,7.2-16,16-16h224c8.8,0,16,7.2,16,16V416z' }),
					_react2.default.createElement('polygon', { points: '160,240 160,208 160,192 144,192 144,256 208,256 208,240 192,240 \t' }),
					_react2.default.createElement('polygon', { points: '160,320 160,288 160,272 144,272 144,336 208,336 208,320 192,320 \t' }),
					_react2.default.createElement('polygon', { points: '160,400 160,368 160,352 144,352 144,416 208,416 208,400 192,400 \t' }),
					_react2.default.createElement('polygon', { points: '240,240 240,208 240,192 224,192 224,256 288,256 288,240 272,240 \t' }),
					_react2.default.createElement('polygon', { points: '320,240 320,208 320,192 304,192 304,256 368,256 368,240 352,240 \t' }),
					_react2.default.createElement('polygon', { points: '240,320 240,288 240,272 224,272 224,336 288,336 288,320 272,320 \t' }),
					_react2.default.createElement('polygon', { points: '240,400 240,368 240,352 224,352 224,416 288,416 288,400 272,400 \t' }),
					_react2.default.createElement('polygon', { points: '320,400 320,368 320,272 304,272 304,416 368,416 368,400 352,400 \t' })
				)
			);
		}
	}]);

	return IosCalculatorOutline;
}(_react2.default.Component);

exports.default = IosCalculatorOutline;
;IosCalculatorOutline.defaultProps = { bare: false };