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

var AndroidCheckmarkCircle = function (_React$Component) {
	_inherits(AndroidCheckmarkCircle, _React$Component);

	function AndroidCheckmarkCircle() {
		_classCallCheck(this, AndroidCheckmarkCircle);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCheckmarkCircle).apply(this, arguments));
	}

	_createClass(AndroidCheckmarkCircle, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M170.718,216.482L141.6,245.6L235.2,339.2l208-208l-29.118-29.118L235.2,279.918L170.718,216.482z M422.4,256 c0,91.518-74.883,166.4-166.4,166.4S89.6,347.518,89.6,256S164.482,89.6,256,89.6c15.6,0,31.2,2.082,45.764,6.241L334,63.6 C310.082,53.2,284.082,48,256,48C141.6,48,48,141.6,48,256s93.6,208,208,208s208-93.6,208-208H422.4z' })
			);
		}
	}]);

	return AndroidCheckmarkCircle;
}(_react2.default.Component);

exports.default = AndroidCheckmarkCircle;
;