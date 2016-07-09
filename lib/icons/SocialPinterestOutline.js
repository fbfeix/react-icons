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

var SocialPinterestOutline = function (_React$Component) {
	_inherits(SocialPinterestOutline, _React$Component);

	function SocialPinterestOutline() {
		_classCallCheck(this, SocialPinterestOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialPinterestOutline).apply(this, arguments));
	}

	_createClass(SocialPinterestOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M391.8,391.8 C355.5,428,307.3,448,256,448c-16.2,0-32.1-2-47.4-5.9c2.8-6.3,5.2-12.8,7-19.3c2.8-10,15.8-61.6,15.8-61.6 c7.8,14.8,30.5,27.9,54.7,27.9c72,0,120.9-65.6,120.9-153.5c0-66.4-56.3-128.3-141.8-128.3c-106.4,0-160.1,76.3-160.1,139.9 c0,38.5,14.6,72.8,45.9,85.6c5.1,2.1,9.7,0.1,11.2-5.6c1-3.9,3.5-13.9,4.6-18c1.5-5.6,0.9-7.6-3.2-12.5c-9-10.7-14.8-24.4-14.8-43.9 c0-56.6,42.3-107.3,110.3-107.3c60.1,0,93.2,36.7,93.2,85.8c0,64.6-28.6,119.1-71,119.1c-23.4,0-41-19.4-35.4-43.1 c6.7-28.4,19.8-59,19.8-79.5c0-18.3-9.8-33.6-30.2-33.6c-24,0-43.2,24.8-43.2,58c0,21.1,7.2,35.4,7.2,35.4s-24.5,103.9-28.8,122.1 c-1.3,5.5-2.2,11.1-2.9,16.8c-17.3-9-33.3-20.6-47.4-34.8C84,355.5,64,307.3,64,256s20-99.5,56.2-135.8C156.5,84,204.7,64,256,64 s99.5,20,135.8,56.2C428,156.5,448,204.7,448,256S428,355.5,391.8,391.8z' })
			);
		}
	}]);

	return SocialPinterestOutline;
}(_react2.default.Component);

exports.default = SocialPinterestOutline;
;