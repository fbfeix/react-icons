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

var IosBarcodeOutline = function (_React$Component) {
	_inherits(IosBarcodeOutline, _React$Component);

	function IosBarcodeOutline() {
		_classCallCheck(this, IosBarcodeOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBarcodeOutline).apply(this, arguments));
	}

	_createClass(IosBarcodeOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '48,384 128,384 128,368 64,368 64,144 128,144 128,128 48,128 \t' }),
						_react2.default.createElement('polygon', { points: '384,128 384,144 448,144 448,368 384,368 384,384 464,384 464,128 \t' }),
						_react2.default.createElement('rect', { x: '112', y: '192', width: '16', height: '128' }),
						_react2.default.createElement('rect', { x: '384', y: '192', width: '16', height: '128' }),
						_react2.default.createElement('rect', { x: '320', y: '160', width: '16', height: '192' }),
						_react2.default.createElement('rect', { x: '176', y: '160', width: '16', height: '192' }),
						_react2.default.createElement('rect', { x: '247', y: '176', width: '16', height: '160' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '48,384 128,384 128,368 64,368 64,144 128,144 128,128 48,128 \t' }),
					_react2.default.createElement('polygon', { points: '384,128 384,144 448,144 448,368 384,368 384,384 464,384 464,128 \t' }),
					_react2.default.createElement('rect', { x: '112', y: '192', width: '16', height: '128' }),
					_react2.default.createElement('rect', { x: '384', y: '192', width: '16', height: '128' }),
					_react2.default.createElement('rect', { x: '320', y: '160', width: '16', height: '192' }),
					_react2.default.createElement('rect', { x: '176', y: '160', width: '16', height: '192' }),
					_react2.default.createElement('rect', { x: '247', y: '176', width: '16', height: '160' })
				)
			);
		}
	}]);

	return IosBarcodeOutline;
}(_react2.default.Component);

exports.default = IosBarcodeOutline;
;IosBarcodeOutline.defaultProps = { bare: false };