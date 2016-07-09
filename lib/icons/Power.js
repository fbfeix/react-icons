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

var Power = function (_React$Component) {
	_inherits(Power, _React$Component);

	function Power() {
		_classCallCheck(this, Power);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Power).apply(this, arguments));
	}

	_createClass(Power, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,256c-17.7,0-32-14.3-32-32V64c0-17.7,14.3-32,32-32s32,14.3,32,32v160C288,241.7,273.7,256,256,256z' }),
						_react2.default.createElement('path', { d: 'M379,68.8L379,68.8c-5-3-10.8-4.8-17-4.8c-17.7,0-32,14.3-32,32c0,6.2,1.8,12,4.8,16.9c2,3.2,4.6,6.1,7.6,8.4 c1.2,0.9,2.4,1.7,3.7,2.5c8.1,5.6,15.8,11.9,23,19.1C399.4,173.1,416,213.3,416,256c0,42.7-16.6,82.9-46.9,113.1 C338.9,399.4,298.7,416,256,416c-42.7,0-82.9-16.6-113.1-46.9C112.6,338.9,96,298.7,96,256c0-42.7,16.6-82.9,46.9-113.1 c7.1-7.1,14.8-13.5,22.9-19c1.4-0.8,2.6-1.6,3.9-2.6c3-2.3,5.5-5.1,7.5-8.3c3.1-4.9,4.8-10.7,4.8-16.9c0-17.7-14.3-32-32-32 c-6.2,0-12,1.8-16.9,4.8l-0.1-0.1C72.2,108.8,32,177.7,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224 C480,177.7,439.8,108.8,379,68.8z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,256c-17.7,0-32-14.3-32-32V64c0-17.7,14.3-32,32-32s32,14.3,32,32v160C288,241.7,273.7,256,256,256z' }),
					_react2.default.createElement('path', { d: 'M379,68.8L379,68.8c-5-3-10.8-4.8-17-4.8c-17.7,0-32,14.3-32,32c0,6.2,1.8,12,4.8,16.9c2,3.2,4.6,6.1,7.6,8.4 c1.2,0.9,2.4,1.7,3.7,2.5c8.1,5.6,15.8,11.9,23,19.1C399.4,173.1,416,213.3,416,256c0,42.7-16.6,82.9-46.9,113.1 C338.9,399.4,298.7,416,256,416c-42.7,0-82.9-16.6-113.1-46.9C112.6,338.9,96,298.7,96,256c0-42.7,16.6-82.9,46.9-113.1 c7.1-7.1,14.8-13.5,22.9-19c1.4-0.8,2.6-1.6,3.9-2.6c3-2.3,5.5-5.1,7.5-8.3c3.1-4.9,4.8-10.7,4.8-16.9c0-17.7-14.3-32-32-32 c-6.2,0-12,1.8-16.9,4.8l-0.1-0.1C72.2,108.8,32,177.7,32,256c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224 C480,177.7,439.8,108.8,379,68.8z' })
				)
			);
		}
	}]);

	return Power;
}(_react2.default.Component);

exports.default = Power;
;Power.defaultProps = { bare: false };