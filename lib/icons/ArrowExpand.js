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

var ArrowExpand = function (_React$Component) {
	_inherits(ArrowExpand, _React$Component);

	function ArrowExpand() {
		_classCallCheck(this, ArrowExpand);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrowExpand).apply(this, arguments));
	}

	_createClass(ArrowExpand, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '274,209.7 337.9,145.9 288,96 416,96 416,224 366.1,174.1 302.3,238 \t' }),
						_react2.default.createElement('polygon', { points: '274,302.3 337.9,366.1 288,416 416,416 416,288 366.1,337.9 302.3,274 \t' }),
						_react2.default.createElement('polygon', { points: '238,302.3 174.1,366.1 224,416 96,416 96,288 145.9,337.9 209.7,274 \t' }),
						_react2.default.createElement('polygon', { points: '238,209.7 174.1,145.9 224,96 96,96 96,224 145.9,174.1 209.7,238 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '274,209.7 337.9,145.9 288,96 416,96 416,224 366.1,174.1 302.3,238 \t' }),
					_react2.default.createElement('polygon', { points: '274,302.3 337.9,366.1 288,416 416,416 416,288 366.1,337.9 302.3,274 \t' }),
					_react2.default.createElement('polygon', { points: '238,302.3 174.1,366.1 224,416 96,416 96,288 145.9,337.9 209.7,274 \t' }),
					_react2.default.createElement('polygon', { points: '238,209.7 174.1,145.9 224,96 96,96 96,224 145.9,174.1 209.7,238 \t' })
				)
			);
		}
	}]);

	return ArrowExpand;
}(_react2.default.Component);

exports.default = ArrowExpand;
;ArrowExpand.defaultProps = { bare: false };