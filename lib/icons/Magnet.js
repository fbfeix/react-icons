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

var Magnet = function (_React$Component) {
	_inherits(Magnet, _React$Component);

	function Magnet() {
		_classCallCheck(this, Magnet);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Magnet).apply(this, arguments));
	}

	_createClass(Magnet, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,32C141,32.5,64,109.6,64,231.8c0,48.8,2.1,76.8,14.5,127.8c15.9,65.7,39.1,113.3,39.1,113.3l0.6,1.3 c1.9,3.4,5.5,5.8,9.8,5.8c1.4,0,2.7-0.2,4-0.7l1.7-0.8l50.3-20.7l1.8-0.8c3.3-1.9,5.5-5.3,5.5-9.3c-0.2-1.4-0.4-2.8-1-4 c-0.1-0.1-0.1-0.2-0.2-0.4c-7-16-27.2-59.2-37-101.1c-9.9-41.9-13.5-62.4-13.5-107.7C139.6,163.4,192,112,256,112 c64,0,116.4,51.4,116.4,122.5c0,45.3-3.7,65.8-13.6,107.7c-9.9,41.9-30,85.2-37,101.1c-0.1,0.2-0.1,0.3-0.2,0.4 c-0.6,1.2-0.8,2.6-1,4c0,4,2.2,7.4,5.5,9.3l1.8,0.8l50.3,20.7l1.7,0.8c1.3,0.5,2.6,0.7,4,0.7c4.3,0,7.9-2.4,9.8-5.8l0.6-1.3 c0,0,23.2-47.6,39.1-113.3c12.4-51,14.5-79,14.5-127.8C448,109.6,371,32.5,256,32z M173,444.2c0.1,0.2,0.2,0.5,0.3,0.7l-42.8,17.6 c-5.4-11.8-22.7-51-35.7-104.4l42.5-12.3C146.5,385,164.4,425,173,444.2z M381.4,462.5l-42.8-17.6c0.1-0.2,0.2-0.4,0.3-0.7 c8.6-19.2,26.4-59.2,35.6-98.4l42.5,12.3C404.1,411.5,386.8,450.7,381.4,462.5z' })
			);
		}
	}]);

	return Magnet;
}(_react2.default.Component);

exports.default = Magnet;
;