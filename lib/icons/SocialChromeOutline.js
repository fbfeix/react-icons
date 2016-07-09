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

var SocialChromeOutline = function (_React$Component) {
	_inherits(SocialChromeOutline, _React$Component);

	function SocialChromeOutline() {
		_classCallCheck(this, SocialChromeOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialChromeOutline).apply(this, arguments));
	}

	_createClass(SocialChromeOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,32C132.8,32,32,132.8,32,256s100.8,224,224,224s224-100.8,224-224S379.2,32,256,32z M256,76.799 c66.084,0,124.315,35.843,154.558,89.602H256c-43.685,0-79.517,31.358-87.358,71.684l-53.758-92.969 C147.358,103.685,198.884,76.799,256,76.799z M323.2,256c0,36.957-30.243,67.2-67.2,67.2s-67.2-30.243-67.2-67.2 s30.243-67.2,67.2-67.2S323.2,219.043,323.2,256z M76.799,256c0-32.484,8.958-62.716,24.644-89.6L178.715,300.8l0,0 c15.685,26.885,43.685,44.8,77.285,44.8c10.085,0,20.157-2.241,29.116-5.6l-53.758,92.958C144,421.758,76.799,346.715,76.799,256z M256,435.201L333.285,300.8l0,0c7.831-13.442,12.314-28,12.314-44.8c0-26.885-12.314-50.399-31.358-67.2h107.517 c8.957,21.284,13.443,43.685,13.443,67.2C435.201,354.557,354.557,435.201,256,435.201z' })
					)
				)
			);
		}
	}]);

	return SocialChromeOutline;
}(_react2.default.Component);

exports.default = SocialChromeOutline;
;