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

var IosTimer = function (_React$Component) {
	_inherits(IosTimer, _React$Component);

	function IosTimer() {
		_classCallCheck(this, IosTimer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosTimer).apply(this, arguments));
	}

	_createClass(IosTimer, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M150.5,150.5c2.6-2.3,119.9,84.9,119.9,84.9c1,0.7,1.6,1.5,2.2,2.2c5,4.6,8.2,11,8.2,18.3c0,13.7-11.1,24.9-24.9,24.9 c-7.8,0-14.7-3.7-19.3-9.4c-0.4-0.4-0.8-0.7-1.1-1.1C235.6,270.4,148,152.9,150.5,150.5z M256.1,447.2 c-105.7,0-191.4-85.7-191.4-191.4c0-52.8,21.4-100.7,56-135.3l11.8,11.8c-31.6,31.6-51.2,75.3-51.2,123.5 c0,96.3,78.4,174.7,174.7,174.7s174.5-78.4,174.5-174.7c0-90.3-70.5-165.1-158.5-174V160h-16V64.4c105.7,0,191.5,85.7,191.5,191.4 C447.5,361.5,361.7,447.2,256.1,447.2z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M150.5,150.5c2.6-2.3,119.9,84.9,119.9,84.9c1,0.7,1.6,1.5,2.2,2.2c5,4.6,8.2,11,8.2,18.3c0,13.7-11.1,24.9-24.9,24.9 c-7.8,0-14.7-3.7-19.3-9.4c-0.4-0.4-0.8-0.7-1.1-1.1C235.6,270.4,148,152.9,150.5,150.5z M256.1,447.2 c-105.7,0-191.4-85.7-191.4-191.4c0-52.8,21.4-100.7,56-135.3l11.8,11.8c-31.6,31.6-51.2,75.3-51.2,123.5 c0,96.3,78.4,174.7,174.7,174.7s174.5-78.4,174.5-174.7c0-90.3-70.5-165.1-158.5-174V160h-16V64.4c105.7,0,191.5,85.7,191.5,191.4 C447.5,361.5,361.7,447.2,256.1,447.2z' })
			);
		}
	}]);

	return IosTimer;
}(_react2.default.Component);

exports.default = IosTimer;
;IosTimer.defaultProps = { bare: false };