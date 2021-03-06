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

var IosFlameOutline = function (_React$Component) {
	_inherits(IosFlameOutline, _React$Component);

	function IosFlameOutline() {
		_classCallCheck(this, IosFlameOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFlameOutline).apply(this, arguments));
	}

	_createClass(IosFlameOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M223.899,32c25.691,145-96.732,142-95.895,288c0.686,119.51,104.975,160,128.143,160c23.166,0,113.88-26,126.931-160 C393.711,210.816,310.572,96,223.899,32z M256.147,472c0,0-40.701-35.816-40.701-80c0-44.183,40.555-80,40.555-80 s40.332,35.817,40.332,80C296.332,436.184,256.147,472,256.147,472z M367.153,318.449c-2.823,28.988-9.704,54.523-20.45,75.894 c-8.749,17.397-20.084,32.114-33.692,43.743c-6.522,5.575-13.255,10.115-19.771,13.749c10.039-15.938,19.093-36.72,19.093-59.835 c0-50.788-43.842-90.307-45.708-91.963l-10.594-9.41l-10.621,9.381c-1.877,1.657-45.963,41.178-45.963,91.992 c0,21.842,8.168,41.594,17.636,57.152c-7.381-4.326-15.215-9.748-22.986-16.451c-14.688-12.67-26.365-27.608-34.708-44.402 c-10.063-20.255-15.239-43.265-15.383-68.391c-0.367-63.986,24.09-95.746,49.983-129.369c24.568-31.903,49.829-64.7,49.458-122.113 c32.513,28.827,61.257,63.03,82.822,98.877C357.576,219.35,371.715,271.615,367.153,318.449z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M223.899,32c25.691,145-96.732,142-95.895,288c0.686,119.51,104.975,160,128.143,160c23.166,0,113.88-26,126.931-160 C393.711,210.816,310.572,96,223.899,32z M256.147,472c0,0-40.701-35.816-40.701-80c0-44.183,40.555-80,40.555-80 s40.332,35.817,40.332,80C296.332,436.184,256.147,472,256.147,472z M367.153,318.449c-2.823,28.988-9.704,54.523-20.45,75.894 c-8.749,17.397-20.084,32.114-33.692,43.743c-6.522,5.575-13.255,10.115-19.771,13.749c10.039-15.938,19.093-36.72,19.093-59.835 c0-50.788-43.842-90.307-45.708-91.963l-10.594-9.41l-10.621,9.381c-1.877,1.657-45.963,41.178-45.963,91.992 c0,21.842,8.168,41.594,17.636,57.152c-7.381-4.326-15.215-9.748-22.986-16.451c-14.688-12.67-26.365-27.608-34.708-44.402 c-10.063-20.255-15.239-43.265-15.383-68.391c-0.367-63.986,24.09-95.746,49.983-129.369c24.568-31.903,49.829-64.7,49.458-122.113 c32.513,28.827,61.257,63.03,82.822,98.877C357.576,219.35,371.715,271.615,367.153,318.449z' })
			);
		}
	}]);

	return IosFlameOutline;
}(_react2.default.Component);

exports.default = IosFlameOutline;
;IosFlameOutline.defaultProps = { bare: false };