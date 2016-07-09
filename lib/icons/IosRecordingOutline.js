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

var IosRecordingOutline = function (_React$Component) {
	_inherits(IosRecordingOutline, _React$Component);

	function IosRecordingOutline() {
		_classCallCheck(this, IosRecordingOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosRecordingOutline).apply(this, arguments));
	}

	_createClass(IosRecordingOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M386.2,144c-60.6,0-109.8,50.1-109.8,112c0,40.4,21,75.7,52.5,95.4H183.1c31.5-19.7,52.5-55,52.5-95.4 c0-61.9-49.2-112-109.8-112C65.2,144,16,194.1,16,256c0,61.9,49.2,112,109.8,112h260.4c60.6,0,109.8-50.1,109.8-112 C496,194.1,446.8,144,386.2,144z M32.3,256c0-52.6,42-95.4,93.5-95.4c51.6,0,93.5,42.8,93.5,95.4s-42,95.4-93.5,95.4 C74.2,351.4,32.3,308.6,32.3,256z M386.2,351.4c-51.6,0-93.5-42.8-93.5-95.4s42-95.4,93.5-95.4s93.5,42.8,93.5,95.4 S437.8,351.4,386.2,351.4z' }),
				_react2.default.createElement('path', { d: 'M384,208c26.5,0,48,21.5,48,48c0,26.5-21.5,48-48,48s-48-21.5-48-48C336,229.5,357.5,208,384,208 M384,192 c-35.3,0-64,28.7-64,64c0,35.3,28.7,64,64,64s64-28.7,64-64C448,220.7,419.3,192,384,192L384,192z' }),
				_react2.default.createElement('path', { d: 'M128,208c26.5,0,48,21.5,48,48c0,26.5-21.5,48-48,48s-48-21.5-48-48C80,229.5,101.5,208,128,208 M128,192 c-35.3,0-64,28.7-64,64c0,35.3,28.7,64,64,64s64-28.7,64-64C192,220.7,163.3,192,128,192L128,192z' })
			);
		}
	}]);

	return IosRecordingOutline;
}(_react2.default.Component);

exports.default = IosRecordingOutline;
;