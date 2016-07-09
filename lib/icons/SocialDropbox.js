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

var SocialDropbox = function (_React$Component) {
	_inherits(SocialDropbox, _React$Component);

	function SocialDropbox() {
		_classCallCheck(this, SocialDropbox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialDropbox).apply(this, arguments));
	}

	_createClass(SocialDropbox, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '177,77 64,150.9 142.1,213.6 256,143.1 \t' }),
						_react2.default.createElement('polygon', { points: '64,276.3 177,350.2 256,284.1 142.1,213.6 \t' }),
						_react2.default.createElement('polygon', { points: '256,284.1 335,350.2 448,276.3 369.9,213.6 \t' }),
						_react2.default.createElement('polygon', { points: '448,150.9 335,77 256,143.1 369.9,213.6 \t' }),
						_react2.default.createElement('polygon', { points: '256.2,298.3 176.4,364.3 142,342.1 142,367 256,435 370,367 370,342.1 335.8,364.3 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '177,77 64,150.9 142.1,213.6 256,143.1 \t' }),
					_react2.default.createElement('polygon', { points: '64,276.3 177,350.2 256,284.1 142.1,213.6 \t' }),
					_react2.default.createElement('polygon', { points: '256,284.1 335,350.2 448,276.3 369.9,213.6 \t' }),
					_react2.default.createElement('polygon', { points: '448,150.9 335,77 256,143.1 369.9,213.6 \t' }),
					_react2.default.createElement('polygon', { points: '256.2,298.3 176.4,364.3 142,342.1 142,367 256,435 370,367 370,342.1 335.8,364.3 \t' })
				)
			);
		}
	}]);

	return SocialDropbox;
}(_react2.default.Component);

exports.default = SocialDropbox;
;SocialDropbox.defaultProps = { bare: false };