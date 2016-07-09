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

var SocialTumblrOutline = function (_React$Component) {
	_inherits(SocialTumblrOutline, _React$Component);

	function SocialTumblrOutline() {
		_classCallCheck(this, SocialTumblrOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialTumblrOutline).apply(this, arguments));
	}

	_createClass(SocialTumblrOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M321.2,396.3c-11.8,0-22.4-2.8-31.5-8.3c-6.9-4.1-11.5-9.6-14-16.4c-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9 c-2.7,21.5-7.5,44.7-14.5,58.6s-14,25.8-25.6,35.7c-11.6,9.9-25.6,17.9-41.9,23.3V224h48v140.4c0,19,2,33.5,5.9,43.5 c4,10,11.1,19.5,21.4,28.4c10.3,8.9,22.8,15.7,37.3,20.5c14.6,4.8,31.4,7.2,50.4,7.2c16.7,0,30.3-1.7,44.7-5.1 c14.4-3.4,30.5-9.3,48.2-17.6v-65.6C363.2,389.4,342.3,396.3,321.2,396.3z M368,431c-13.1,5.7-25.1,9.9-35.9,12.4 c-13.1,3.1-25.6,4.6-41.1,4.6c-17.2,0-32.5-2.2-45.4-6.4c-12.5-4.1-23.2-10-31.9-17.5c-8.3-7.2-14-14.6-17-22.2 c-2.2-5.5-4.8-16.6-4.8-37.6V208H144v-31.3c13.4-5.6,25.5-13,36.3-22.2c13.2-11.2,21.6-24.9,29.6-40.7c7.1-14,11.6-34,14.1-49.8h32 v112h96v32h-96v117.1c0,34.6,2.4,46,4.6,52c3.8,10.3,10.8,18.6,21,24.6c11.7,7,25,10.5,39.7,10.5c15.7,0,31.3-3.3,46.7-9.8V431z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M321.2,396.3c-11.8,0-22.4-2.8-31.5-8.3c-6.9-4.1-11.5-9.6-14-16.4c-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9 c-2.7,21.5-7.5,44.7-14.5,58.6s-14,25.8-25.6,35.7c-11.6,9.9-25.6,17.9-41.9,23.3V224h48v140.4c0,19,2,33.5,5.9,43.5 c4,10,11.1,19.5,21.4,28.4c10.3,8.9,22.8,15.7,37.3,20.5c14.6,4.8,31.4,7.2,50.4,7.2c16.7,0,30.3-1.7,44.7-5.1 c14.4-3.4,30.5-9.3,48.2-17.6v-65.6C363.2,389.4,342.3,396.3,321.2,396.3z M368,431c-13.1,5.7-25.1,9.9-35.9,12.4 c-13.1,3.1-25.6,4.6-41.1,4.6c-17.2,0-32.5-2.2-45.4-6.4c-12.5-4.1-23.2-10-31.9-17.5c-8.3-7.2-14-14.6-17-22.2 c-2.2-5.5-4.8-16.6-4.8-37.6V208H144v-31.3c13.4-5.6,25.5-13,36.3-22.2c13.2-11.2,21.6-24.9,29.6-40.7c7.1-14,11.6-34,14.1-49.8h32 v112h96v32h-96v117.1c0,34.6,2.4,46,4.6,52c3.8,10.3,10.8,18.6,21,24.6c11.7,7,25,10.5,39.7,10.5c15.7,0,31.3-3.3,46.7-9.8V431z' })
			);
		}
	}]);

	return SocialTumblrOutline;
}(_react2.default.Component);

exports.default = SocialTumblrOutline;
;SocialTumblrOutline.defaultProps = { bare: false };