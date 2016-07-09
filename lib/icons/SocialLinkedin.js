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

var SocialLinkedin = function (_React$Component) {
	_inherits(SocialLinkedin, _React$Component);

	function SocialLinkedin() {
		_classCallCheck(this, SocialLinkedin);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialLinkedin).apply(this, arguments));
	}

	_createClass(SocialLinkedin, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9 C448,76.6,434.7,64,417.2,64z M183,384h-55V213h55V384z M157.4,187H157c-17.6,0-29-13.1-29-29.5c0-16.7,11.7-29.5,29.7-29.5 c18,0,29,12.7,29.4,29.5C187.1,173.9,175.7,187,157.4,187z M384,384h-55v-93.5c0-22.4-8-37.7-27.9-37.7 c-15.2,0-24.2,10.3-28.2,20.3c-1.5,3.6-1.9,8.5-1.9,13.5V384h-55V213h55v23.8c8-11.4,20.5-27.8,49.6-27.8 c36.1,0,63.4,23.8,63.4,75.1V384z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9 C448,76.6,434.7,64,417.2,64z M183,384h-55V213h55V384z M157.4,187H157c-17.6,0-29-13.1-29-29.5c0-16.7,11.7-29.5,29.7-29.5 c18,0,29,12.7,29.4,29.5C187.1,173.9,175.7,187,157.4,187z M384,384h-55v-93.5c0-22.4-8-37.7-27.9-37.7 c-15.2,0-24.2,10.3-28.2,20.3c-1.5,3.6-1.9,8.5-1.9,13.5V384h-55V213h55v23.8c8-11.4,20.5-27.8,49.6-27.8 c36.1,0,63.4,23.8,63.4,75.1V384z' })
				)
			);
		}
	}]);

	return SocialLinkedin;
}(_react2.default.Component);

exports.default = SocialLinkedin;
;SocialLinkedin.defaultProps = { bare: false };