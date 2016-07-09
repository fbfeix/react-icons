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

var SocialBufferOutline = function (_React$Component) {
	_inherits(SocialBufferOutline, _React$Component);

	function SocialBufferOutline() {
		_classCallCheck(this, SocialBufferOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialBufferOutline).apply(this, arguments));
	}

	_createClass(SocialBufferOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M70.7,164.5l169.2,81.7c4.4,2.1,10.3,3.2,16.1,3.2s11.7-1.1,16.1-3.2l169.2-81.7c8.9-4.3,8.9-11.3,0-15.6L272.1,67.2 c-4.4-2.1-10.3-3.2-16.1-3.2s-11.7,1.1-16.1,3.2L70.7,148.9C61.8,153.2,61.8,160.2,70.7,164.5z M246.8,81.6 c1.6-0.8,4.9-1.6,9.2-1.6c4.3,0,7.5,0.8,9.2,1.6l155.5,75.1l-155.5,75.1c-1.6,0.8-4.9,1.6-9.2,1.6c-4.3,0-7.5-0.8-9.2-1.6 L91.3,156.7L246.8,81.6z' }),
						_react2.default.createElement('path', { d: 'M441.3,248.2c0,0-30.9-14.9-35-16.9s-5.2-1.9-9.5,0.1s-124.8,60.2-124.8,60.2c-4.5,2.1-10.3,3.2-16.1,3.2 s-11.7-1.1-16.1-3.2c0,0-117.3-56.6-122.8-59.3c-6-2.9-7.7-2.9-13.1-0.3c-5.6,2.7-33.4,16.1-33.4,16.1c-8.9,4.3-8.9,11.3,0,15.6 l169.2,81.7c4.4,2.1,10.3,3.2,16.1,3.2s11.7-1.1,16.1-3.2l169.2-81.7C450.2,259.5,450.2,252.5,441.3,248.2z M265.2,331.1 c-1.6,0.8-4.9,1.6-9.2,1.6c-4.3,0-7.5-0.8-9.2-1.6L91.3,256l18.9-9.1l122.7,59.3c6.4,3.1,14.6,4.8,23.1,4.8s16.6-1.7,23.1-4.8 l122.7-59.3l18.9,9.1L265.2,331.1z' })
					),
					_react2.default.createElement('path', { d: 'M441.3,347.5c0,0-30.9-14.9-35-16.9s-5.2-1.9-9.5,0.1S272.1,391,272.1,391c-4.5,2.1-10.3,3.2-16.1,3.2s-11.7-1.1-16.1-3.2 c0,0-117.3-56.6-122.8-59.3c-6-2.9-7.7-2.9-13.1-0.3c-5.6,2.7-33.4,16.1-33.4,16.1c-8.9,4.3-8.9,11.3,0,15.6l169.2,81.7 c4.4,2.2,10.3,3.2,16.1,3.2s11.7-1.1,16.1-3.2l169.2-81.7C450.2,358.8,450.2,351.8,441.3,347.5z M265.2,430.4 c-1.6,0.8-4.9,1.6-9.2,1.6c-4.3,0-7.5-0.8-9.2-1.6L91.3,355.3l18.9-9.1l122.7,59.3c6.4,3.1,14.6,4.8,23.1,4.8s16.6-1.7,23.1-4.8 l122.7-59.3l18.9,9.1L265.2,430.4z' })
				)
			);
		}
	}]);

	return SocialBufferOutline;
}(_react2.default.Component);

exports.default = SocialBufferOutline;
;