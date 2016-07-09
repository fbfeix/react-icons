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

var SocialInstagramOutline = function (_React$Component) {
	_inherits(SocialInstagramOutline, _React$Component);

	function SocialInstagramOutline() {
		_classCallCheck(this, SocialInstagramOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialInstagramOutline).apply(this, arguments));
	}

	_createClass(SocialInstagramOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { fill: '#231F20', d: 'M448.5,112c0-26.233-21.267-47.5-47.5-47.5H112c-26.233,0-47.5,21.267-47.5,47.5v289 c0,26.233,21.267,47.5,47.5,47.5h289c26.233,0,47.5-21.267,47.5-47.5V112z M257,175.833c44.182,0,80,35.816,80,80s-35.818,80-80,80 s-80-35.816-80-80S212.818,175.833,257,175.833z M416.5,160.5c0,8.836-7.163,16-16,16h-48c-8.837,0-16-7.164-16-16v-48 c0-8.836,7.163-16,16-16h48c8.837,0,16,7.164,16,16V160.5z M401.5,416.5h-288c-8.822,0-17-8.178-17-17v-175h53.072 c-3.008,10-4.572,20.647-4.572,31.583C145,286,156.65,314,177.805,335.154s49.279,32.741,79.195,32.741s58.041-11.681,79.195-32.835 S369,286.016,369,256.099c0-10.936-1.563-21.599-4.572-31.599H416.5v175C416.5,408.322,410.322,416.5,401.5,416.5z' })
			);
		}
	}]);

	return SocialInstagramOutline;
}(_react2.default.Component);

exports.default = SocialInstagramOutline;
;