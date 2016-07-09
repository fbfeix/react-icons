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

var Pound = function (_React$Component) {
	_inherits(Pound, _React$Component);

	function Pound() {
		_classCallCheck(this, Pound);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Pound).apply(this, arguments));
	}

	_createClass(Pound, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M125.2,352.3H32v-54.6h101.2l13.1-83.3H47v-54.6h107.2L176,32h63.9l-21.8,127.7h105.6L345.5,32h63.1l-21.8,127.7H480v54.6 H378.1l-12.3,83.3H465v54.6H358.5L336,480h-63.1l21.8-127.7H188.3L166.5,480h-63.1L125.2,352.3z M209.4,214.3L197,297.7h105.6 l12.3-83.3H209.4z' })
				)
			);
		}
	}]);

	return Pound;
}(_react2.default.Component);

exports.default = Pound;
;