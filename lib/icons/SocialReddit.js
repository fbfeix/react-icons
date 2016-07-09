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

var SocialReddit = function (_React$Component) {
	_inherits(SocialReddit, _React$Component);

	function SocialReddit() {
		_classCallCheck(this, SocialReddit);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialReddit).apply(this, arguments));
	}

	_createClass(SocialReddit, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M480.5,251c0-27.7-22.2-50.2-49.5-50.2c-13,0-24.7,5-33.6,13.3c-32.4-22.8-76.1-37.8-124.9-40.6l21.9-73.2l67.1,13.5 c2.3,22.7,21.2,40.4,44.3,40.4c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c24.6,0,44.5-20.2,44.5-45.1S430.7,64,406.1,64 c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-17.2,0-32,9.8-39.5,24.3l-89.7-18l-30.8,103l-2.5,0.1c-50.3,2.2-95.5,17.4-128.7,40.7 c-8.8-8.3-20.6-13.3-33.6-13.3c-27.3,0-49.5,22.5-49.5,50.2c0,19.6,11,36.5,27.1,44.8c-0.8,4.9-1.2,9.8-1.2,14.8 C57.5,386.4,146.4,448,256,448s198.5-61.6,198.5-137.5c0-5-0.4-9.9-1.1-14.8C469.5,287.4,480.5,270.5,480.5,251z M65.8,271.1 c-6.6-4.5-10.9-12.1-10.9-20.8c0-13.8,11.1-25.1,24.7-25.1c5.6,0,10.8,1.9,15,5.1C81.1,242.2,71.1,256,65.8,271.1z M389.3,109.1 c0-9.2,7.4-16.8,16.5-16.8s16.5,7.5,16.5,16.8c0,9.2-7.4,16.8-16.5,16.8S389.3,118.4,389.3,109.1z M158.5,288.4 c0-17.6,14.2-31.8,31.8-31.8s31.8,14.2,31.8,31.8c0,17.6-14.2,31.8-31.8,31.8S158.5,306,158.5,288.4z M256,400 c-47.6-0.2-76-28.5-77.2-29.7l12.6-12.4c0.2,0.2,23.7,24.2,64.6,24.4c40.3-0.2,64.2-24.2,64.5-24.4l12.6,12.4 C331.9,371.5,303.6,399.8,256,400z M322.3,320.2c-17.6,0-31.8-14.2-31.8-31.8c0-17.6,14.2-31.8,31.8-31.8s31.8,14.2,31.8,31.8 C354.1,306,339.8,320.2,322.3,320.2z M446.4,271.5c-5.4-15.3-15.6-29.4-29.3-41.4c4.2-3.3,9.5-5.2,15.2-5.2 c13.9,0,25.1,11.4,25.1,25.5C457.5,259.2,453.1,266.9,446.4,271.5z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M480.5,251c0-27.7-22.2-50.2-49.5-50.2c-13,0-24.7,5-33.6,13.3c-32.4-22.8-76.1-37.8-124.9-40.6l21.9-73.2l67.1,13.5 c2.3,22.7,21.2,40.4,44.3,40.4c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c24.6,0,44.5-20.2,44.5-45.1S430.7,64,406.1,64 c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-17.2,0-32,9.8-39.5,24.3l-89.7-18l-30.8,103l-2.5,0.1c-50.3,2.2-95.5,17.4-128.7,40.7 c-8.8-8.3-20.6-13.3-33.6-13.3c-27.3,0-49.5,22.5-49.5,50.2c0,19.6,11,36.5,27.1,44.8c-0.8,4.9-1.2,9.8-1.2,14.8 C57.5,386.4,146.4,448,256,448s198.5-61.6,198.5-137.5c0-5-0.4-9.9-1.1-14.8C469.5,287.4,480.5,270.5,480.5,251z M65.8,271.1 c-6.6-4.5-10.9-12.1-10.9-20.8c0-13.8,11.1-25.1,24.7-25.1c5.6,0,10.8,1.9,15,5.1C81.1,242.2,71.1,256,65.8,271.1z M389.3,109.1 c0-9.2,7.4-16.8,16.5-16.8s16.5,7.5,16.5,16.8c0,9.2-7.4,16.8-16.5,16.8S389.3,118.4,389.3,109.1z M158.5,288.4 c0-17.6,14.2-31.8,31.8-31.8s31.8,14.2,31.8,31.8c0,17.6-14.2,31.8-31.8,31.8S158.5,306,158.5,288.4z M256,400 c-47.6-0.2-76-28.5-77.2-29.7l12.6-12.4c0.2,0.2,23.7,24.2,64.6,24.4c40.3-0.2,64.2-24.2,64.5-24.4l12.6,12.4 C331.9,371.5,303.6,399.8,256,400z M322.3,320.2c-17.6,0-31.8-14.2-31.8-31.8c0-17.6,14.2-31.8,31.8-31.8s31.8,14.2,31.8,31.8 C354.1,306,339.8,320.2,322.3,320.2z M446.4,271.5c-5.4-15.3-15.6-29.4-29.3-41.4c4.2-3.3,9.5-5.2,15.2-5.2 c13.9,0,25.1,11.4,25.1,25.5C457.5,259.2,453.1,266.9,446.4,271.5z' })
			);
		}
	}]);

	return SocialReddit;
}(_react2.default.Component);

exports.default = SocialReddit;
;SocialReddit.defaultProps = { bare: false };