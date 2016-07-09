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

var Pin = function (_React$Component) {
	_inherits(Pin, _React$Component);

	function Pin() {
		_classCallCheck(this, Pin);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Pin).apply(this, arguments));
	}

	_createClass(Pin, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M331.8,228C331.8,228,331.8,228,331.8,228c-1.2-0.5-2.4-1-3.5-1.7c-7-4-12.2-10.9-13.9-19.2L295.9,89.4l-0.2-5.8 c0-7.1,4.1-10.2,10-13l0,0c0.7-0.3,1.4-0.6,2.1-0.9c7.2-3.4,12.1-7.8,12.1-16.3c0-20.1-6.5-21.4-18.2-21.4h-91.3 c-11.7,0-18.2,1.2-18.2,21.4c0,8.5,4.9,12.9,12.1,16.3c0.7,0.3,1.4,0.5,2.1,0.9c0,0,0,0,0,0c5.9,2.9,10,6,10,13l-0.2,5.8 l-18.5,117.7c-1.7,8.3-6.9,15.2-13.9,19.2c-1.1,0.7-2.3,1.2-3.5,1.7c0,0,0,0,0,0c-19.7,10.2-36.2,30.8-36.2,54.7 c0,15.9,3.5,21.3,15.2,21.3H240l12,176h8l12-176h80.8c11.7,0,15.2-4.7,15.2-21.3C368,258.8,351.5,238.2,331.8,228z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M331.8,228C331.8,228,331.8,228,331.8,228c-1.2-0.5-2.4-1-3.5-1.7c-7-4-12.2-10.9-13.9-19.2L295.9,89.4l-0.2-5.8 c0-7.1,4.1-10.2,10-13l0,0c0.7-0.3,1.4-0.6,2.1-0.9c7.2-3.4,12.1-7.8,12.1-16.3c0-20.1-6.5-21.4-18.2-21.4h-91.3 c-11.7,0-18.2,1.2-18.2,21.4c0,8.5,4.9,12.9,12.1,16.3c0.7,0.3,1.4,0.5,2.1,0.9c0,0,0,0,0,0c5.9,2.9,10,6,10,13l-0.2,5.8 l-18.5,117.7c-1.7,8.3-6.9,15.2-13.9,19.2c-1.1,0.7-2.3,1.2-3.5,1.7c0,0,0,0,0,0c-19.7,10.2-36.2,30.8-36.2,54.7 c0,15.9,3.5,21.3,15.2,21.3H240l12,176h8l12-176h80.8c11.7,0,15.2-4.7,15.2-21.3C368,258.8,351.5,238.2,331.8,228z' })
			);
		}
	}]);

	return Pin;
}(_react2.default.Component);

exports.default = Pin;
;Pin.defaultProps = { bare: false };