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

var IosLocationOutline = function (_React$Component) {
	_inherits(IosLocationOutline, _React$Component);

	function IosLocationOutline() {
		_classCallCheck(this, IosLocationOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosLocationOutline).apply(this, arguments));
	}

	_createClass(IosLocationOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48c34.19,0,66.334,13.314,90.51,37.49S384,141.81,384,176c0,42.92-24.092,107.127-69.67,185.68 c-22.279,38.396-44.771,71.634-58.332,90.931c-13.518-19.232-35.912-52.327-58.161-90.645C152.149,283.281,128,218.976,128,176 c0-34.19,13.314-66.334,37.49-90.51S221.81,48,256,48 M256,32c-79.529,0-144,64.471-144,144c0,112,144,304,144,304s144-192,144-304 C400,96.471,335.529,32,256,32L256,32z' }),
					_react2.default.createElement('path', { d: 'M256,112c-35.3,0-64,28.7-64,64s28.7,64,64,64s64-28.7,64-64S291.3,112,256,112z M256,222.9c-25.9,0-46.9-21-46.9-46.9 s21-46.9,46.9-46.9s46.9,21,46.9,46.9S281.9,222.9,256,222.9z' })
				)
			);
		}
	}]);

	return IosLocationOutline;
}(_react2.default.Component);

exports.default = IosLocationOutline;
;