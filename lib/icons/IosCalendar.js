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

var IosCalendar = function (_React$Component) {
	_inherits(IosCalendar, _React$Component);

	function IosCalendar() {
		_classCallCheck(this, IosCalendar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCalendar).apply(this, arguments));
	}

	_createClass(IosCalendar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '64', y: '192', width: '384', height: '256' }),
					_react2.default.createElement('polygon', { points: '448,96 352,96 352,144 336,144 336,96 176,96 176,144 160,144 160,96 64,96 64,176 448,176 \t' }),
					_react2.default.createElement('rect', { x: '160', y: '64', width: '16', height: '32' }),
					_react2.default.createElement('rect', { x: '336', y: '64', width: '16', height: '32' })
				)
			);
		}
	}]);

	return IosCalendar;
}(_react2.default.Component);

exports.default = IosCalendar;
;