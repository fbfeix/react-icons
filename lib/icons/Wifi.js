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

var Wifi = function (_React$Component) {
	_inherits(Wifi, _React$Component);

	function Wifi() {
		_classCallCheck(this, Wifi);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Wifi).apply(this, arguments));
	}

	_createClass(Wifi, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256.1,96L256.1,96c-79.9,0-155.7,29.9-213.9,84.1L32,189.6l9.9,9.8l32.3,32l9.3,9.2l9.6-8.8 c44.5-40.9,102.3-63.5,162.8-63.5c60.5,0,118.4,22.6,162.8,63.5l9.6,8.8l9.3-9.2l32.3-32l9.9-9.8l-10.2-9.5 C411.6,125.9,335.7,96,256.1,96z' }),
						_react2.default.createElement('path', { d: 'M397.4,256.4c-38.8-35.1-88.9-54.4-141.1-54.4h-0.1h-0.3h-8.5l-0.1,0.2c-49.2,2-96,21.1-132.6,54.2l-10.5,9.5l10.1,10 l32.7,32.4l9.1,9l9.6-8.4c25.3-22.2,57.4-34.5,90.3-34.5c33.1,0,65.2,12.3,90.5,34.5l9.6,8.4l9.1-9l32.7-32.4l10.1-10L397.4,256.4z ' }),
						_react2.default.createElement('path', { d: 'M256.2,416l9.6-9.5l52.8-52.2l10.6-10.5l-11.6-9.5c-15.4-11.4-32.4-20-61.5-20c-29,0-44.9,9.4-61.5,20l-11.5,9.5l10.6,10.5 l52.8,52.2L256.2,416z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256.1,96L256.1,96c-79.9,0-155.7,29.9-213.9,84.1L32,189.6l9.9,9.8l32.3,32l9.3,9.2l9.6-8.8 c44.5-40.9,102.3-63.5,162.8-63.5c60.5,0,118.4,22.6,162.8,63.5l9.6,8.8l9.3-9.2l32.3-32l9.9-9.8l-10.2-9.5 C411.6,125.9,335.7,96,256.1,96z' }),
					_react2.default.createElement('path', { d: 'M397.4,256.4c-38.8-35.1-88.9-54.4-141.1-54.4h-0.1h-0.3h-8.5l-0.1,0.2c-49.2,2-96,21.1-132.6,54.2l-10.5,9.5l10.1,10 l32.7,32.4l9.1,9l9.6-8.4c25.3-22.2,57.4-34.5,90.3-34.5c33.1,0,65.2,12.3,90.5,34.5l9.6,8.4l9.1-9l32.7-32.4l10.1-10L397.4,256.4z ' }),
					_react2.default.createElement('path', { d: 'M256.2,416l9.6-9.5l52.8-52.2l10.6-10.5l-11.6-9.5c-15.4-11.4-32.4-20-61.5-20c-29,0-44.9,9.4-61.5,20l-11.5,9.5l10.6,10.5 l52.8,52.2L256.2,416z' })
				)
			);
		}
	}]);

	return Wifi;
}(_react2.default.Component);

exports.default = Wifi;
;Wifi.defaultProps = { bare: false };