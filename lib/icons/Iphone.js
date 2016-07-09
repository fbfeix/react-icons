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

var Iphone = function (_React$Component) {
	_inherits(Iphone, _React$Component);

	function Iphone() {
		_classCallCheck(this, Iphone);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Iphone).apply(this, arguments));
	}

	_createClass(Iphone, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M328.2,64H183.8C170.7,64,160,74.7,160,87.9v336.3c0,13.1,10.7,23.8,23.8,23.8h144.3c13.1,0,23.8-10.7,23.8-23.8V87.9 C352,74.7,341.3,64,328.2,64z M240,99.9c0-2.1,1.7-3.9,3.9-3.9h24.3c2.1,0,3.9,1.7,3.9,3.9v0.3c0,2.1-1.7,3.9-3.9,3.9h-24.3 c-2.1,0-3.9-1.7-3.9-3.9V99.9z M228,96c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4s-4-1.8-4-4C224,97.8,225.8,96,228,96z M256,432.1 c-8.9,0-16.1-7.2-16.1-16.1c0-8.9,7.2-16.1,16.1-16.1c8.9,0,16.1,7.2,16.1,16.1C272.1,424.9,264.8,432.1,256,432.1z M336,384H176 V128h160V384z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M328.2,64H183.8C170.7,64,160,74.7,160,87.9v336.3c0,13.1,10.7,23.8,23.8,23.8h144.3c13.1,0,23.8-10.7,23.8-23.8V87.9 C352,74.7,341.3,64,328.2,64z M240,99.9c0-2.1,1.7-3.9,3.9-3.9h24.3c2.1,0,3.9,1.7,3.9,3.9v0.3c0,2.1-1.7,3.9-3.9,3.9h-24.3 c-2.1,0-3.9-1.7-3.9-3.9V99.9z M228,96c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4s-4-1.8-4-4C224,97.8,225.8,96,228,96z M256,432.1 c-8.9,0-16.1-7.2-16.1-16.1c0-8.9,7.2-16.1,16.1-16.1c8.9,0,16.1,7.2,16.1,16.1C272.1,424.9,264.8,432.1,256,432.1z M336,384H176 V128h160V384z' })
				)
			);
		}
	}]);

	return Iphone;
}(_react2.default.Component);

exports.default = Iphone;
;Iphone.defaultProps = { bare: false };