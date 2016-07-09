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

var IosStopwatchOutline = function (_React$Component) {
	_inherits(IosStopwatchOutline, _React$Component);

	function IosStopwatchOutline() {
		_classCallCheck(this, IosStopwatchOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosStopwatchOutline).apply(this, arguments));
	}

	_createClass(IosStopwatchOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M397.6,146.7l-1.8-1.7h18.4l8.5,7.8l22.5-22.8l-40.8-40.3L381.2,112l8.8,9.2v18.6l-5-4.7c-31.3-28.3-70-45.2-113-48.9V48 h-32v38h-2c-43.7,3-85,22.5-116,53v-17.8l8.9-9.2L108,89.8L67.2,130l22.5,22.8l8.5-7.8H116c-0.3,0-0.7,0.7-1,1.1 C82.2,181.2,64,227,64,274.6C64,379,150.1,464,256.1,464C361.9,464,448,379.1,448,274.7C448,227.1,430,181.6,397.6,146.7z M256.3,445.7c-95.5,0-173.1-76.7-173.1-170.9c0-94.3,77.7-170.9,173.1-170.9c95.5,0,173.1,76.7,173.1,170.9 C429.5,369,351.8,445.7,256.3,445.7z' }),
						_react2.default.createElement('path', { d: 'M264,257.3V128h-16v129.4c-12.5,4.3-24,16.5-24,30.3c0,14.7,10,27,24,30.5l8,17.8l0,0l8-17.8c14-3.5,24-15.8,24-30.5 C288,273.2,277.5,261,264,257.3z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M397.6,146.7l-1.8-1.7h18.4l8.5,7.8l22.5-22.8l-40.8-40.3L381.2,112l8.8,9.2v18.6l-5-4.7c-31.3-28.3-70-45.2-113-48.9V48 h-32v38h-2c-43.7,3-85,22.5-116,53v-17.8l8.9-9.2L108,89.8L67.2,130l22.5,22.8l8.5-7.8H116c-0.3,0-0.7,0.7-1,1.1 C82.2,181.2,64,227,64,274.6C64,379,150.1,464,256.1,464C361.9,464,448,379.1,448,274.7C448,227.1,430,181.6,397.6,146.7z M256.3,445.7c-95.5,0-173.1-76.7-173.1-170.9c0-94.3,77.7-170.9,173.1-170.9c95.5,0,173.1,76.7,173.1,170.9 C429.5,369,351.8,445.7,256.3,445.7z' }),
					_react2.default.createElement('path', { d: 'M264,257.3V128h-16v129.4c-12.5,4.3-24,16.5-24,30.3c0,14.7,10,27,24,30.5l8,17.8l0,0l8-17.8c14-3.5,24-15.8,24-30.5 C288,273.2,277.5,261,264,257.3z' })
				)
			);
		}
	}]);

	return IosStopwatchOutline;
}(_react2.default.Component);

exports.default = IosStopwatchOutline;
;IosStopwatchOutline.defaultProps = { bare: false };