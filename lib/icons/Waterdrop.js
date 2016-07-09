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

var Waterdrop = function (_React$Component) {
	_inherits(Waterdrop, _React$Component);

	function Waterdrop() {
		_classCallCheck(this, Waterdrop);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Waterdrop).apply(this, arguments));
	}

	_createClass(Waterdrop, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M271,38.6c-0.3-0.4-0.7-0.7-0.9-1c0,0-0.1-0.1-0.1-0.1c-3.6-3.4-8.5-5.5-13.9-5.5c-5.5,0-10.4,2.1-13.9,5.5 c0,0-0.1,0.1-0.1,0.1c-0.3,0.3-0.6,0.6-0.9,1c-6.1,6.3-13.8,14.4-22.4,24.1c-17.4,19.7-38.6,46-58.5,76.8 c-33.4,51.8-62.9,116.1-64.1,183.1c0,1.3-0.1,2.7-0.1,4c0,19.7,3.9,38.5,10.9,55.8c4.1,10,9.2,19.4,15.2,28.2 C150.7,452.4,200,480,256,480c88.4,0,160-68.7,160-153.4C416,198.7,310.8,79.2,271,38.6z M256,424c-15.8,0-30.7-3.7-43.9-10.1 c65.9-14.4,118.4-64.7,135.8-129.5c5.2,12.1,8.2,25.5,8.2,39.6C356,379.2,311.2,424,256,424z' })
			);
		}
	}]);

	return Waterdrop;
}(_react2.default.Component);

exports.default = Waterdrop;
;