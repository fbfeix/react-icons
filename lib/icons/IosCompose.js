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

var IosCompose = function (_React$Component) {
	_inherits(IosCompose, _React$Component);

	function IosCompose() {
		_classCallCheck(this, IosCompose);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCompose).apply(this, arguments));
	}

	_createClass(IosCompose, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '256,320 192,320 192,256 320,128 64,128 64,432 384,432 384,192 \t' }),
						_react2.default.createElement('polygon', { points: '387.927,91.74 208,271.651 208,304 240.216,304 420.261,124.016 \t' }),
						_react2.default.createElement('path', { d: 'M444.213,80.312l-12.465-12.466C429.084,65.467,425.556,64,421.746,64c-3.812,0-7.304,1.468-9.929,3.85L399.666,80 l0.08,0.08l11.293,11.293l21.02,21.02l12.15-12.15c2.383-2.625,3.791-6.117,3.791-9.929C448,86.504,446.592,82.975,444.213,80.312z ' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '256,320 192,320 192,256 320,128 64,128 64,432 384,432 384,192 \t' }),
					_react2.default.createElement('polygon', { points: '387.927,91.74 208,271.651 208,304 240.216,304 420.261,124.016 \t' }),
					_react2.default.createElement('path', { d: 'M444.213,80.312l-12.465-12.466C429.084,65.467,425.556,64,421.746,64c-3.812,0-7.304,1.468-9.929,3.85L399.666,80 l0.08,0.08l11.293,11.293l21.02,21.02l12.15-12.15c2.383-2.625,3.791-6.117,3.791-9.929C448,86.504,446.592,82.975,444.213,80.312z ' })
				)
			);
		}
	}]);

	return IosCompose;
}(_react2.default.Component);

exports.default = IosCompose;
;IosCompose.defaultProps = { bare: false };