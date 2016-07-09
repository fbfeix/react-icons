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

var Printer = function (_React$Component) {
	_inherits(Printer, _React$Component);

	function Printer() {
		_classCallCheck(this, Printer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Printer).apply(this, arguments));
	}

	_createClass(Printer, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M423.8,128H384V64H128v64H88.2C60.3,128,32,144.9,32,182.6v123.8c0,38,28.3,61.6,56.2,61.6c0,0,30.4,0,39.8,0v112h5h11h224 h8h8V368c10.3,0,39.8,0,39.8,0c27.9,0,56.2-22.6,56.2-53.6V182.6C480,146.9,451.8,128,423.8,128z M368,464H144V288h224V464z M368,128H144V80h224V128z M416,192h-17v-16h17V192z' }),
						_react2.default.createElement('rect', { x: '160', y: '320', width: '192', height: '16' }),
						_react2.default.createElement('rect', { x: '160', y: '368', width: '192', height: '16' }),
						_react2.default.createElement('rect', { x: '160', y: '416', width: '192', height: '16' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M423.8,128H384V64H128v64H88.2C60.3,128,32,144.9,32,182.6v123.8c0,38,28.3,61.6,56.2,61.6c0,0,30.4,0,39.8,0v112h5h11h224 h8h8V368c10.3,0,39.8,0,39.8,0c27.9,0,56.2-22.6,56.2-53.6V182.6C480,146.9,451.8,128,423.8,128z M368,464H144V288h224V464z M368,128H144V80h224V128z M416,192h-17v-16h17V192z' }),
					_react2.default.createElement('rect', { x: '160', y: '320', width: '192', height: '16' }),
					_react2.default.createElement('rect', { x: '160', y: '368', width: '192', height: '16' }),
					_react2.default.createElement('rect', { x: '160', y: '416', width: '192', height: '16' })
				)
			);
		}
	}]);

	return Printer;
}(_react2.default.Component);

exports.default = Printer;
;Printer.defaultProps = { bare: false };