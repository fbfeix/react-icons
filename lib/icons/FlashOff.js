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

var FlashOff = function (_React$Component) {
	_inherits(FlashOff, _React$Component);

	function FlashOff() {
		_classCallCheck(this, FlashOff);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FlashOff).apply(this, arguments));
	}

	_createClass(FlashOff, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M147.4,451.9c0.4,0.2,0.7,0.5,1.1,0.7c10.9,6,22.5,10.7,34.4,14.8c1.8,0.6,3.6,1.2,5.4,1.8c21.4,6.8,44,10.9,67.7,10.9 c123.7,0,224-100.3,224-224c0-84.3-46.6-157.7-115.5-195.9c-0.4-0.2-0.7-0.4-1-0.6c-10.9-6-22.5-10.7-34.4-14.8 c-1.8-0.6-3.6-1.2-5.4-1.8C302.3,36.1,279.6,32,256,32C132.3,32,32,132.3,32,256C32,340.3,78.6,413.6,147.4,451.9z M118.2,156.6 l54.4,54.4l36.3-40.5l-52.4-52.4c28-20.2,62.1-32.6,99.4-32.6c9.3,0,18.3,0.9,27.2,2.4c9.8,1.6,19.3,4.1,28.5,7.3 c1.8,0.6,3.7,1.2,5.6,1.9c6.2,2.4,12.2,5,18,8.1c54.2,28.5,91.2,85.3,91.2,150.8c0,37.2-12.4,71.3-32.7,99.4l-54.4-54.4L303,341.4 l52.4,52.4c-28,20.3-62.2,32.7-99.4,32.7c-9.3,0-18.4-0.9-27.2-2.4c-9.8-1.6-19.3-4.1-28.5-7.3c-1.9-0.6-3.8-1.2-5.6-1.9 c-6.5-2.5-12.9-5.3-19-8.6c-53.6-28.7-90.1-85.2-90.1-150.3C85.6,218.8,98,184.7,118.2,156.6z' }),
						_react2.default.createElement('polygon', { points: '209.7,389.8 348.9,235 263.6,235 302.2,122.2 163.1,277 248.4,277 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M147.4,451.9c0.4,0.2,0.7,0.5,1.1,0.7c10.9,6,22.5,10.7,34.4,14.8c1.8,0.6,3.6,1.2,5.4,1.8c21.4,6.8,44,10.9,67.7,10.9 c123.7,0,224-100.3,224-224c0-84.3-46.6-157.7-115.5-195.9c-0.4-0.2-0.7-0.4-1-0.6c-10.9-6-22.5-10.7-34.4-14.8 c-1.8-0.6-3.6-1.2-5.4-1.8C302.3,36.1,279.6,32,256,32C132.3,32,32,132.3,32,256C32,340.3,78.6,413.6,147.4,451.9z M118.2,156.6 l54.4,54.4l36.3-40.5l-52.4-52.4c28-20.2,62.1-32.6,99.4-32.6c9.3,0,18.3,0.9,27.2,2.4c9.8,1.6,19.3,4.1,28.5,7.3 c1.8,0.6,3.7,1.2,5.6,1.9c6.2,2.4,12.2,5,18,8.1c54.2,28.5,91.2,85.3,91.2,150.8c0,37.2-12.4,71.3-32.7,99.4l-54.4-54.4L303,341.4 l52.4,52.4c-28,20.3-62.2,32.7-99.4,32.7c-9.3,0-18.4-0.9-27.2-2.4c-9.8-1.6-19.3-4.1-28.5-7.3c-1.9-0.6-3.8-1.2-5.6-1.9 c-6.5-2.5-12.9-5.3-19-8.6c-53.6-28.7-90.1-85.2-90.1-150.3C85.6,218.8,98,184.7,118.2,156.6z' }),
					_react2.default.createElement('polygon', { points: '209.7,389.8 348.9,235 263.6,235 302.2,122.2 163.1,277 248.4,277 \t' })
				)
			);
		}
	}]);

	return FlashOff;
}(_react2.default.Component);

exports.default = FlashOff;
;FlashOff.defaultProps = { bare: false };