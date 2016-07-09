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

var IosSettings = function (_React$Component) {
	_inherits(IosSettings, _React$Component);

	function IosSettings() {
		_classCallCheck(this, IosSettings);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosSettings).apply(this, arguments));
	}

	_createClass(IosSettings, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M352,104c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S343.163,104,352,104 M352,88c-17.645,0-32,14.355-32,32 s14.355,32,32,32s32-14.355,32-32S369.645,88,352,88L352,88z' }),
					_react2.default.createElement('path', { d: 'M352,376c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S343.163,376,352,376 M352,360c-17.645,0-32,14.355-32,32 s14.355,32,32,32s32-14.355,32-32S369.645,360,352,360L352,360z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M160,240c8.837,0,16,7.163,16,16s-7.163,16-16,16s-16-7.163-16-16S151.163,240,160,240 M160,224 c-17.645,0-32,14.355-32,32s14.355,32,32,32s32-14.355,32-32S177.645,224,160,224L160,224z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M207.32,248H480v16H207.32c0.439-2.604,0.68-5.273,0.68-8S207.76,250.604,207.32,248z' }),
							_react2.default.createElement('path', { d: 'M112,256c0,2.727,0.24,5.396,0.68,8H32v-16h80.68C112.24,250.604,112,253.273,112,256z' }),
							_react2.default.createElement('path', { d: 'M399.32,384H480v16h-80.68c0.439-2.604,0.68-5.273,0.68-8S399.76,386.604,399.32,384z' }),
							_react2.default.createElement('path', { d: 'M304,392c0,2.727,0.24,5.396,0.68,8H32v-16h272.68C304.24,386.604,304,389.273,304,392z' }),
							_react2.default.createElement('path', { d: 'M399.32,112H480v16h-80.68c0.439-2.604,0.68-5.273,0.68-8S399.76,114.604,399.32,112z' }),
							_react2.default.createElement('path', { d: 'M304.68,112c-0.439,2.604-0.68,5.273-0.68,8s0.24,5.396,0.68,8H32v-16H304.68z' })
						)
					)
				)
			);
		}
	}]);

	return IosSettings;
}(_react2.default.Component);

exports.default = IosSettings;
;