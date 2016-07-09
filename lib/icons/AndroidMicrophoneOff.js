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

var AndroidMicrophoneOff = function (_React$Component) {
	_inherits(AndroidMicrophoneOff, _React$Component);

	function AndroidMicrophoneOff() {
		_classCallCheck(this, AndroidMicrophoneOff);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidMicrophoneOff).apply(this, arguments));
	}

	_createClass(AndroidMicrophoneOff, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M367.951,354.654l-26.616-26.562l-9.568-9.548l-4.698-4.706L187,174.041v0.346L76.112,63.531L51.921,87.572L187,222.47 v28.816c0,37.79,31.121,68.714,68.91,68.714c8.61,0,16.952-1.62,24.565-4.545l32.389,32.274 c-17.333,8.793-36.812,13.86-56.782,13.86c-62.986,0-121.365-48.59-121.365-116.59H95.773C95.773,322,158,387.701,233,398.013V480 h46v-81.987c22-3.352,43.066-11.222,61.627-22.622l95.278,95.078l24.033-24l-33.847-33.785l-58.216-57.959l58.224,57.959 L367.951,354.654z' }),
						_react2.default.createElement('path', { d: 'M325,251.286V100.714C325,62.924,293.791,32,256,32s-69,30.924-69,68.714v25.244l137.109,136.968 C324.779,259.135,325,255.247,325,251.286z' }),
						_react2.default.createElement('path', { d: 'M416.439,245h-38.941c0,20.496-5.498,39.676-14.931,56.197l27.572,27.516C406.662,304.603,416.439,275.926,416.439,245z' }),
						_react2.default.createElement('polygon', { points: '459.999,446.427 426.102,412.684 459.957,446.469 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M367.951,354.654l-26.616-26.562l-9.568-9.548l-4.698-4.706L187,174.041v0.346L76.112,63.531L51.921,87.572L187,222.47 v28.816c0,37.79,31.121,68.714,68.91,68.714c8.61,0,16.952-1.62,24.565-4.545l32.389,32.274 c-17.333,8.793-36.812,13.86-56.782,13.86c-62.986,0-121.365-48.59-121.365-116.59H95.773C95.773,322,158,387.701,233,398.013V480 h46v-81.987c22-3.352,43.066-11.222,61.627-22.622l95.278,95.078l24.033-24l-33.847-33.785l-58.216-57.959l58.224,57.959 L367.951,354.654z' }),
					_react2.default.createElement('path', { d: 'M325,251.286V100.714C325,62.924,293.791,32,256,32s-69,30.924-69,68.714v25.244l137.109,136.968 C324.779,259.135,325,255.247,325,251.286z' }),
					_react2.default.createElement('path', { d: 'M416.439,245h-38.941c0,20.496-5.498,39.676-14.931,56.197l27.572,27.516C406.662,304.603,416.439,275.926,416.439,245z' }),
					_react2.default.createElement('polygon', { points: '459.999,446.427 426.102,412.684 459.957,446.469 \t' })
				)
			);
		}
	}]);

	return AndroidMicrophoneOff;
}(_react2.default.Component);

exports.default = AndroidMicrophoneOff;
;AndroidMicrophoneOff.defaultProps = { bare: false };