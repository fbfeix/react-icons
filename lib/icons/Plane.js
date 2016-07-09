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

var Plane = function (_React$Component) {
	_inherits(Plane, _React$Component);

	function Plane() {
		_classCallCheck(this, Plane);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Plane).apply(this, arguments));
	}

	_createClass(Plane, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M281.7,311.9c0.4-6.9,8.3-4.5,8.3-4.5l62,12.6l128,48.7c0-24-3.8-26.5-9.4-30.7L288,207c0,0-4.9-60-4.9-112.9 c0-24.5-11.8-78.1-27.1-78.1s-27.1,54.4-27.1,78.1c0,50.2-4.9,112.9-4.9,112.9L41.4,338c-7.1,5-9.4,7.7-9.4,30.7L160,320l61.9-12.6 c0,0,7.9-2.4,8.3,4.5c0.4,6.9-1.2,69.1,5.9,102.1c0.9,4.4-2.5,4.7-4.8,7.4l-51.9,32.8c-1.7,1.9-2.5,7.3-2.5,7.3l-1,18.5l68-16l12,32 l12-32l68,16l-1-18.5c0.1,0-0.7-5.4-2.4-7.3l-51.9-32.8c-2.3-2.7-5.7-3-4.8-7.4C282.7,381,281.3,318.8,281.7,311.9z' })
			);
		}
	}]);

	return Plane;
}(_react2.default.Component);

exports.default = Plane;
;