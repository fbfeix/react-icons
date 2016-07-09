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

var AndroidNotificationsOff = function (_React$Component) {
	_inherits(AndroidNotificationsOff, _React$Component);

	function AndroidNotificationsOff() {
		_classCallCheck(this, AndroidNotificationsOff);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidNotificationsOff).apply(this, arguments));
	}

	_createClass(AndroidNotificationsOff, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,463.656c22.814,0,41.475-18.656,41.475-41.656h-82.95C214.525,445,233.186,463.656,256,463.656z' }),
					_react2.default.createElement('path', { d: 'M131.083,107.172l0.053,0.074L98.09,74.277L74.004,98.383l63.042,63.153C126.888,180.521,121,202.196,121,225.07v114.555 l-41,41.656V402h297.743l36.182,36.33l24.079-24.301L425.9,402h0.316L131.083,107.172z' }),
					_react2.default.createElement('path', { d: 'M391,225.07c0-63.526-45-117.677-104-131.218V79.274c0-17.706-13.371-31.243-31-31.243c-17.628,0-31,13.537-31,31.243 v14.578c-15,3.438-29.048,9.501-41.75,17.663L391,319.355V225.07z' })
				)
			);
		}
	}]);

	return AndroidNotificationsOff;
}(_react2.default.Component);

exports.default = AndroidNotificationsOff;
;