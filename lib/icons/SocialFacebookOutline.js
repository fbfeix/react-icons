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

var SocialFacebookOutline = function (_React$Component) {
	_inherits(SocialFacebookOutline, _React$Component);

	function SocialFacebookOutline() {
		_classCallCheck(this, SocialFacebookOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialFacebookOutline).apply(this, arguments));
	}

	_createClass(SocialFacebookOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64 H288z M330.2,240h-41.1H272v15.5V432h-51V255.5V240h-14.9H176v-32h30.1H221v-16.5v-42.2c0-24.5,5.4-41.2,15.5-51.8 C247.7,85.5,267.6,80,296.1,80H336v32h-17.5c-12,0-27.5,1.1-37.1,11.7c-8.1,9-9.4,20.1-9.4,30.1v37.6V208h17.1H334L330.2,240z' })
			);
		}
	}]);

	return SocialFacebookOutline;
}(_react2.default.Component);

exports.default = SocialFacebookOutline;
;