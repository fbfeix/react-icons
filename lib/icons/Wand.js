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

var Wand = function (_React$Component) {
	_inherits(Wand, _React$Component);

	function Wand() {
		_classCallCheck(this, Wand);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Wand).apply(this, arguments));
	}

	_createClass(Wand, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '238.059', y: '206.059', transform: 'matrix(0.7071 0.7071 -0.7071 0.7071 249.3726 -122.0387)', width: '67.882', height: '67.882' }),
					_react2.default.createElement('rect', { x: '110.058', y: '243.549', transform: 'matrix(0.7071 0.7071 -0.7071 0.7071 302.3989 5.9646)', width: '67.884', height: '248.901' }),
					_react2.default.createElement('rect', { x: '256', y: '32', width: '32', height: '64' }),
					_react2.default.createElement('rect', { x: '380.451', y: '83.55', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 595.0701 477.5923)', width: '32', height: '63.999' }),
					_react2.default.createElement('rect', { x: '131.549', y: '83.549', transform: 'matrix(0.7071 -0.7071 0.7071 0.7071 -38.4898 138.1746)', width: '32', height: '64' }),
					_react2.default.createElement('rect', { x: '380.451', y: '332.451', transform: 'matrix(0.7071 -0.7071 0.7071 0.7071 -141.5881 387.0668)', width: '32', height: '64' }),
					_react2.default.createElement('rect', { x: '416', y: '224', width: '64', height: '32' })
				)
			);
		}
	}]);

	return Wand;
}(_react2.default.Component);

exports.default = Wand;
;