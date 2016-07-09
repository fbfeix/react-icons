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

var IosArrowThinDown = function (_React$Component) {
	_inherits(IosArrowThinDown, _React$Component);

	function IosArrowThinDown() {
		_classCallCheck(this, IosArrowThinDown);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosArrowThinDown).apply(this, arguments));
	}

	_createClass(IosArrowThinDown, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M349.7,322.2c-3.1-3.1-8-3-11.3,0L264,388.6V104c0-4.4-3.6-8-8-8c-4.4,0-8,3.6-8,8v284.6l-74.4-66.3 c-3.4-2.9-8.1-3.2-11.2-0.1c-3.1,3.1-3.3,8.5-0.1,11.4c0,0,87,79.2,88,80s2.8,2.4,5.7,2.4s4.9-1.6,5.7-2.4s88-80,88-80 c1.5-1.5,2.3-3.6,2.3-5.7C352,325.8,351.2,323.8,349.7,322.2z' })
			);
		}
	}]);

	return IosArrowThinDown;
}(_react2.default.Component);

exports.default = IosArrowThinDown;
;