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

var IosPrinter = function (_React$Component) {
	_inherits(IosPrinter, _React$Component);

	function IosPrinter() {
		_classCallCheck(this, IosPrinter);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPrinter).apply(this, arguments));
	}

	_createClass(IosPrinter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '128', y: '224', width: '256', height: '224' })
				),
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '127.5', y: '224.5', width: '256', height: '224' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '111.5', y: '64.5', width: '288', height: '32' }),
						_react2.default.createElement('path', { d: 'M432.5,112.5h-352c-17.645,0-33,12.842-33,30.309v158.393c0,17.468,15.355,33.299,33,33.299h31v-126h288v126h33 c17.645,0,31-15.831,31-33.299V142.809C463.5,125.342,450.145,112.5,432.5,112.5z' })
					)
				)
			);
		}
	}]);

	return IosPrinter;
}(_react2.default.Component);

exports.default = IosPrinter;
;