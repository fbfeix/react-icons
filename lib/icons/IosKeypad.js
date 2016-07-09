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

var IosKeypad = function (_React$Component) {
	_inherits(IosKeypad, _React$Component);

	function IosKeypad() {
		_classCallCheck(this, IosKeypad);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosKeypad).apply(this, arguments));
	}

	_createClass(IosKeypad, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M394.6,341.2c-29.5,0-53.4,23.9-53.4,53.4s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S424.1,341.2,394.6,341.2z' }),
						_react2.default.createElement('path', { d: 'M256,341.2c-29.5,0-53.4,23.9-53.4,53.4S226.5,448,256,448c29.5,0,53.4-23.9,53.4-53.4S285.5,341.2,256,341.2z' }),
						_react2.default.createElement('path', { d: 'M117.4,341.2c-29.5,0-53.4,23.9-53.4,53.4S87.9,448,117.4,448c29.5,0,53.4-23.9,53.4-53.4S146.9,341.2,117.4,341.2z' }),
						_react2.default.createElement('path', { d: 'M394.6,202.6c-29.5,0-53.4,23.9-53.4,53.4s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S424.1,202.6,394.6,202.6z' }),
						_react2.default.createElement('path', { d: 'M256,202.6c-29.5,0-53.4,23.9-53.4,53.4s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S285.5,202.6,256,202.6z' }),
						_react2.default.createElement('path', { d: 'M117.4,202.6C87.9,202.6,64,226.5,64,256s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S146.9,202.6,117.4,202.6z' }),
						_react2.default.createElement('path', { d: 'M394.6,170.8c29.5,0,53.4-23.9,53.4-53.4c0-29.5-23.9-53.4-53.4-53.4c-29.5,0-53.4,23.9-53.4,53.4 C341.2,146.9,365.1,170.8,394.6,170.8z' }),
						_react2.default.createElement('path', { d: 'M256,64c-29.5,0-53.4,23.9-53.4,53.4c0,29.5,23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4C309.4,87.9,285.5,64,256,64z' }),
						_react2.default.createElement('path', { d: 'M117.4,64C87.9,64,64,87.9,64,117.4c0,29.5,23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4C170.8,87.9,146.9,64,117.4,64z ' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M394.6,341.2c-29.5,0-53.4,23.9-53.4,53.4s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S424.1,341.2,394.6,341.2z' }),
					_react2.default.createElement('path', { d: 'M256,341.2c-29.5,0-53.4,23.9-53.4,53.4S226.5,448,256,448c29.5,0,53.4-23.9,53.4-53.4S285.5,341.2,256,341.2z' }),
					_react2.default.createElement('path', { d: 'M117.4,341.2c-29.5,0-53.4,23.9-53.4,53.4S87.9,448,117.4,448c29.5,0,53.4-23.9,53.4-53.4S146.9,341.2,117.4,341.2z' }),
					_react2.default.createElement('path', { d: 'M394.6,202.6c-29.5,0-53.4,23.9-53.4,53.4s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S424.1,202.6,394.6,202.6z' }),
					_react2.default.createElement('path', { d: 'M256,202.6c-29.5,0-53.4,23.9-53.4,53.4s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S285.5,202.6,256,202.6z' }),
					_react2.default.createElement('path', { d: 'M117.4,202.6C87.9,202.6,64,226.5,64,256s23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4S146.9,202.6,117.4,202.6z' }),
					_react2.default.createElement('path', { d: 'M394.6,170.8c29.5,0,53.4-23.9,53.4-53.4c0-29.5-23.9-53.4-53.4-53.4c-29.5,0-53.4,23.9-53.4,53.4 C341.2,146.9,365.1,170.8,394.6,170.8z' }),
					_react2.default.createElement('path', { d: 'M256,64c-29.5,0-53.4,23.9-53.4,53.4c0,29.5,23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4C309.4,87.9,285.5,64,256,64z' }),
					_react2.default.createElement('path', { d: 'M117.4,64C87.9,64,64,87.9,64,117.4c0,29.5,23.9,53.4,53.4,53.4c29.5,0,53.4-23.9,53.4-53.4C170.8,87.9,146.9,64,117.4,64z ' })
				)
			);
		}
	}]);

	return IosKeypad;
}(_react2.default.Component);

exports.default = IosKeypad;
;IosKeypad.defaultProps = { bare: false };