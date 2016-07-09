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

var SocialWordpressOutline = function (_React$Component) {
	_inherits(SocialWordpressOutline, _React$Component);

	function SocialWordpressOutline() {
		_classCallCheck(this, SocialWordpressOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialWordpressOutline).apply(this, arguments));
	}

	_createClass(SocialWordpressOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M255.9,64C150.2,64,64,150.2,64,256.1C64,361.9,150.2,448,255.9,448c8.5,0,16.8-0.5,24.9-1.8 c85.7-11,153.8-78.7,165.3-164.1c1.3-8.5,1.9-17.2,1.9-26C448,150.2,361.8,64,255.9,64z M83.4,256.1c0-25,5.4-48.8,15-70.2 l82.3,225.5C123.1,383.4,83.4,324.3,83.4,256.1z M278.3,427.3c-7.3,0.9-14.8,1.4-22.4,1.4c-16.9,0-33.2-2.5-48.6-7.1l18.8-55h0.1 l32.7-95.5L312,416.5c0.4,0.8,0.9,1.6,1.3,2.3C302.1,422.8,290.4,425.6,278.3,427.3z M279.8,175.1c10.4-0.5,19.7-1.6,19.7-1.6 c9.4-1,8.2-14.8-1.1-14.2c0,0-28,2.2-46,2.2c-16.9,0-45.5-2.2-45.5-2.2c-9.2-0.6-10.4,13.7-1,14.2c0,0,8.7,1.1,18.1,1.6l26.9,73.7 l-37.8,113.3l-62.9-187c10.5-0.5,19.8-1.6,19.8-1.6c9.2-1,8.2-14.8-1.1-14.2c0,0-27.9,2.2-46,2.2c-3.3,0-7.1-0.1-11.1-0.2 c30.8-46.8,83.9-77.7,144.1-77.7c45,0,85.9,17.2,116.6,45.2c-0.8,0-1.5-0.1-2.3-0.1c-17,0-29,14.8-29,30.7 c0,14.2,8.2,26.2,16.9,40.4c6.6,11.5,14.3,26.3,14.3,47.6c0,14.8-4.4,33.4-13.1,55.7l-17.3,57.6L279.8,175.1z M342.7,405.3 l13.7-39.7l39-112.8c9.9-24.6,13.1-44.3,13.1-61.8c0-6.3-0.4-12.3-1.1-17.8c13.5,24.6,21.2,52.8,21.2,82.9c0,8-0.5,15.8-1.5,23.5 C419.7,333.3,387.6,379.2,342.7,405.3z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M255.9,64C150.2,64,64,150.2,64,256.1C64,361.9,150.2,448,255.9,448c8.5,0,16.8-0.5,24.9-1.8 c85.7-11,153.8-78.7,165.3-164.1c1.3-8.5,1.9-17.2,1.9-26C448,150.2,361.8,64,255.9,64z M83.4,256.1c0-25,5.4-48.8,15-70.2 l82.3,225.5C123.1,383.4,83.4,324.3,83.4,256.1z M278.3,427.3c-7.3,0.9-14.8,1.4-22.4,1.4c-16.9,0-33.2-2.5-48.6-7.1l18.8-55h0.1 l32.7-95.5L312,416.5c0.4,0.8,0.9,1.6,1.3,2.3C302.1,422.8,290.4,425.6,278.3,427.3z M279.8,175.1c10.4-0.5,19.7-1.6,19.7-1.6 c9.4-1,8.2-14.8-1.1-14.2c0,0-28,2.2-46,2.2c-16.9,0-45.5-2.2-45.5-2.2c-9.2-0.6-10.4,13.7-1,14.2c0,0,8.7,1.1,18.1,1.6l26.9,73.7 l-37.8,113.3l-62.9-187c10.5-0.5,19.8-1.6,19.8-1.6c9.2-1,8.2-14.8-1.1-14.2c0,0-27.9,2.2-46,2.2c-3.3,0-7.1-0.1-11.1-0.2 c30.8-46.8,83.9-77.7,144.1-77.7c45,0,85.9,17.2,116.6,45.2c-0.8,0-1.5-0.1-2.3-0.1c-17,0-29,14.8-29,30.7 c0,14.2,8.2,26.2,16.9,40.4c6.6,11.5,14.3,26.3,14.3,47.6c0,14.8-4.4,33.4-13.1,55.7l-17.3,57.6L279.8,175.1z M342.7,405.3 l13.7-39.7l39-112.8c9.9-24.6,13.1-44.3,13.1-61.8c0-6.3-0.4-12.3-1.1-17.8c13.5,24.6,21.2,52.8,21.2,82.9c0,8-0.5,15.8-1.5,23.5 C419.7,333.3,387.6,379.2,342.7,405.3z' })
			);
		}
	}]);

	return SocialWordpressOutline;
}(_react2.default.Component);

exports.default = SocialWordpressOutline;
;SocialWordpressOutline.defaultProps = { bare: false };