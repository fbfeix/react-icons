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

var SocialYoutubeOutline = function (_React$Component) {
	_inherits(SocialYoutubeOutline, _React$Component);

	function SocialYoutubeOutline() {
		_classCallCheck(this, SocialYoutubeOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialYoutubeOutline).apply(this, arguments));
	}

	_createClass(SocialYoutubeOutline, [{
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
						_react2.default.createElement('path', { d: 'M265,96c65.3,0,118.7,1.1,168.1,3.3l0.7,0h0.7c23.1,0,42,22,42,49.1v1.1l0.1,1.1c2.3,34,3.4,69.3,3.4,104.9v0v0 c0.1,35.6-1.1,70.9-3.4,104.9l-0.1,1.1v1.1c0,13.8-4.7,26.6-13.4,36.1c-7.8,8.6-18,13.4-28.6,13.4h-0.8l-0.8,0 c-52.9,2.5-108.8,3.8-166.4,3.8c-3.5,0-7.1,0-10.6,0H256h-0.1c-3.6,0-7.2,0-10.8,0c-57.8,0-113.7-1.3-166.2-3.7l-0.8,0h-0.8 c-10.6,0-20.7-4.8-28.5-13.4c-8.6-9.5-13.4-22.3-13.4-36.1v-1.1l-0.1-1.1c-2.4-34.1-3.5-69.4-3.3-104.7v-0.1v-0.1 c-0.1-35.3,1-70.5,3.3-104.6l0.1-1.1v-1.1c0-27.2,18.8-49.3,41.9-49.3H78l0.7,0c49.5-2.3,102.9-3.3,168.2-3.3h9H265 M265,64 c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,0.8-169.6,3.3c-40.8,0-73.9,36.3-73.9,81.3C1,184.4-0.1,220,0,255.7 c-0.1,35.7,0.9,71.3,3.4,107c0,45,33.1,81.6,73.9,81.6c54.8,2.6,110.7,3.8,167.8,3.8c3.6,0,7.3,0,10.9,0c3.6,0,7.2,0,10.7,0 c57.1,0,113-1.2,167.9-3.8c40.9,0,74-36.6,74-81.6c2.4-35.7,3.5-71.4,3.4-107.1c0.1-35.7-1-71.3-3.4-107.1c0-45-33.1-81.1-74-81.1 C379.2,64.8,322.7,64,265,64L265,64z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M207,353.8V157.4l145,98.2L207,353.8z' })
					)
				)
			);
		}
	}]);

	return SocialYoutubeOutline;
}(_react2.default.Component);

exports.default = SocialYoutubeOutline;
;