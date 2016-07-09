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

var Ipad = function (_React$Component) {
	_inherits(Ipad, _React$Component);

	function Ipad() {
		_classCallCheck(this, Ipad);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Ipad).apply(this, arguments));
	}

	_createClass(Ipad, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M112,72.8v366.4c0,4.9,3.9,8.8,8.8,8.8h270.4c4.9,0,8.8-3.9,8.8-8.8V72.8c0-4.9-3.9-8.8-8.8-8.8H120.8 C115.9,64,112,67.9,112,72.8z M256,437.6c-7.5,0-13.6-6-13.6-13.5c0-7.5,6.1-13.6,13.6-13.6c7.4,0,13.5,6.1,13.5,13.6 C269.6,431.6,263.5,437.6,256,437.6z M144,118.6c0-3.5,2.7-6.6,6-6.6h211.2c3.4,0,6.8,3.1,6.8,6.6v275.2c0,3.5-3.4,6.3-6.8,6.3H150 c-3.4,0-6-2.8-6-6.3V118.6z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M112,72.8v366.4c0,4.9,3.9,8.8,8.8,8.8h270.4c4.9,0,8.8-3.9,8.8-8.8V72.8c0-4.9-3.9-8.8-8.8-8.8H120.8 C115.9,64,112,67.9,112,72.8z M256,437.6c-7.5,0-13.6-6-13.6-13.5c0-7.5,6.1-13.6,13.6-13.6c7.4,0,13.5,6.1,13.5,13.6 C269.6,431.6,263.5,437.6,256,437.6z M144,118.6c0-3.5,2.7-6.6,6-6.6h211.2c3.4,0,6.8,3.1,6.8,6.6v275.2c0,3.5-3.4,6.3-6.8,6.3H150 c-3.4,0-6-2.8-6-6.3V118.6z' })
			);
		}
	}]);

	return Ipad;
}(_react2.default.Component);

exports.default = Ipad;
;Ipad.defaultProps = { bare: false };