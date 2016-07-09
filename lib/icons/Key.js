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

var Key = function (_React$Component) {
	_inherits(Key, _React$Component);

	function Key() {
		_classCallCheck(this, Key);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Key).apply(this, arguments));
	}

	_createClass(Key, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M304.3,301c0,0-5.4-28-7.3-90c-1.9-62-9-142.5-9-142.5c-2.5-28-11.8-36.5-32-36.5c-9.4,0-20.5,2.3-23.3,3.3 c-9.4,3.6-8.7,11.6-8.7,22.5l0,17.8c0,3.2,1.2,6,3.2,8.2l0.8,0.8l4.1,4.1c0.4,0.3,0.1,0.7,0.4,1c1.9,2.2,3.1,5,3.1,8.1l0,24.5 c0,3.2-1.2,3.2-3.2,5.3c-0.2,0.3-0.5,0.6-0.8,0.8l-4.4,4.4c-0.1,0.1-0.3,0.3-0.4,0.4c-2.1,2.2-3.4,5.2-3.4,8.4l0,7.2 c0,3.1,1.1,5.9,3.1,8.1c0,0,0.1,0.1,0.1,0.1l0.8,0.8c0,0,0.1,0.1,0.1,0.1l4,4c0.4,0.3,0.7,0.7,1,1c1.9,2.2,3.1,5,3.1,8.1 c0,0.7-0.1,8.1-0.2,8.8c-0.4,2.3-1.5,4.4-3,6.1c-0.2,0.3-0.5,0.6-0.8,0.8l-3.9,3.9l-1.4,1.5c-0.5,0.6-0.7,1.3-1.1,2.1 c-0.9,1.7-1.2,3.7-1.2,5.9v7.8c0,2.9-0.1,5.7-0.2,8.6c0.2,2.4,7.2,5.7,7.2,10.5v20.4c0,6.2-10.5,7-11,11.3 c-4.7,25.4-11.9,41.8-11.9,41.8c-28.7,16.6-48,47.6-48,83.2c0,53,43,96,96,96s96-43,96-96C352,348.6,332.8,317.7,304.3,301z M256,448c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S273.7,448,256,448z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M304.3,301c0,0-5.4-28-7.3-90c-1.9-62-9-142.5-9-142.5c-2.5-28-11.8-36.5-32-36.5c-9.4,0-20.5,2.3-23.3,3.3 c-9.4,3.6-8.7,11.6-8.7,22.5l0,17.8c0,3.2,1.2,6,3.2,8.2l0.8,0.8l4.1,4.1c0.4,0.3,0.1,0.7,0.4,1c1.9,2.2,3.1,5,3.1,8.1l0,24.5 c0,3.2-1.2,3.2-3.2,5.3c-0.2,0.3-0.5,0.6-0.8,0.8l-4.4,4.4c-0.1,0.1-0.3,0.3-0.4,0.4c-2.1,2.2-3.4,5.2-3.4,8.4l0,7.2 c0,3.1,1.1,5.9,3.1,8.1c0,0,0.1,0.1,0.1,0.1l0.8,0.8c0,0,0.1,0.1,0.1,0.1l4,4c0.4,0.3,0.7,0.7,1,1c1.9,2.2,3.1,5,3.1,8.1 c0,0.7-0.1,8.1-0.2,8.8c-0.4,2.3-1.5,4.4-3,6.1c-0.2,0.3-0.5,0.6-0.8,0.8l-3.9,3.9l-1.4,1.5c-0.5,0.6-0.7,1.3-1.1,2.1 c-0.9,1.7-1.2,3.7-1.2,5.9v7.8c0,2.9-0.1,5.7-0.2,8.6c0.2,2.4,7.2,5.7,7.2,10.5v20.4c0,6.2-10.5,7-11,11.3 c-4.7,25.4-11.9,41.8-11.9,41.8c-28.7,16.6-48,47.6-48,83.2c0,53,43,96,96,96s96-43,96-96C352,348.6,332.8,317.7,304.3,301z M256,448c-17.7,0-32-14.3-32-32s14.3-32,32-32s32,14.3,32,32S273.7,448,256,448z' })
			);
		}
	}]);

	return Key;
}(_react2.default.Component);

exports.default = Key;
;Key.defaultProps = { bare: false };