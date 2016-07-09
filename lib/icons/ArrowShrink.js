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

var ArrowShrink = function (_React$Component) {
	_inherits(ArrowShrink, _React$Component);

	function ArrowShrink() {
		_classCallCheck(this, ArrowShrink);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrowShrink).apply(this, arguments));
	}

	_createClass(ArrowShrink, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '448,92.3 366.1,174.1 416,224 288,224 288,96 337.9,145.9 419.7,64 \t' }),
						_react2.default.createElement('polygon', { points: '448,419.7 366.1,337.9 416,288 288,288 288,416 337.9,366.1 419.7,448 \t' }),
						_react2.default.createElement('polygon', { points: '64,419.7 145.9,337.9 96,288 224,288 224,416 174.1,366.1 92.3,448 \t' }),
						_react2.default.createElement('polygon', { points: '64,92.3 145.9,174.1 96,224 224,224 224,96 174.1,145.9 92.3,64 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '448,92.3 366.1,174.1 416,224 288,224 288,96 337.9,145.9 419.7,64 \t' }),
					_react2.default.createElement('polygon', { points: '448,419.7 366.1,337.9 416,288 288,288 288,416 337.9,366.1 419.7,448 \t' }),
					_react2.default.createElement('polygon', { points: '64,419.7 145.9,337.9 96,288 224,288 224,416 174.1,366.1 92.3,448 \t' }),
					_react2.default.createElement('polygon', { points: '64,92.3 145.9,174.1 96,224 224,224 224,96 174.1,145.9 92.3,64 \t' })
				)
			);
		}
	}]);

	return ArrowShrink;
}(_react2.default.Component);

exports.default = ArrowShrink;
;ArrowShrink.defaultProps = { bare: false };