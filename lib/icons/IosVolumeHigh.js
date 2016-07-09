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

var IosVolumeHigh = function (_React$Component) {
	_inherits(IosVolumeHigh, _React$Component);

	function IosVolumeHigh() {
		_classCallCheck(this, IosVolumeHigh);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosVolumeHigh).apply(this, arguments));
	}

	_createClass(IosVolumeHigh, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M374.1,128l-13.6,10.3C384.6,171.2,399,211.9,399,256c0,44.1-14.4,84.8-38.6,117.7l13.6,10.3c26.3-35.7,41.9-80,41.9-128 C415.9,208,400.4,163.7,374.1,128z' }),
							_react2.default.createElement('path', { d: 'M320,351.8c20-26.8,32-59.9,32-95.8s-12-69-32-95.8l-13.6,10.1c17.9,24,28.6,53.6,28.6,85.7s-10.7,61.7-28.6,85.7 L320,351.8z' }),
							_react2.default.createElement('path', { d: 'M273.1,319.9c13.7-17.9,21.9-39.9,21.9-63.9c0-24-8.2-46-21.9-63.9l-13.5,9.8c11.6,15.1,18.5,33.8,18.5,54.1 s-6.9,38.9-18.5,54.1L273.1,319.9z' })
						)
					),
					_react2.default.createElement('polygon', { points: '153.9,216 96,216 96,296 153.9,296 224,352 224,160 \t' })
				)
			);
		}
	}]);

	return IosVolumeHigh;
}(_react2.default.Component);

exports.default = IosVolumeHigh;
;