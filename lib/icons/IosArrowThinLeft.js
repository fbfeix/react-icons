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

var IosArrowThinLeft = function (_React$Component) {
	_inherits(IosArrowThinLeft, _React$Component);

	function IosArrowThinLeft() {
		_classCallCheck(this, IosArrowThinLeft);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosArrowThinLeft).apply(this, arguments));
	}

	_createClass(IosArrowThinLeft, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M189.8,349.7c3.1-3.1,3-8,0-11.3L123.4,264H408c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4,3.2-8.1,0.1-11.2 c-3.1-3.1-8.5-3.3-11.4-0.1c0,0-79.2,87-80,88S96,253.1,96,256s1.6,4.9,2.4,5.7s80,88,80,88c1.5,1.5,3.6,2.3,5.7,2.3 C186.2,352,188.2,351.2,189.8,349.7z' })
			);
		}
	}]);

	return IosArrowThinLeft;
}(_react2.default.Component);

exports.default = IosArrowThinLeft;
;