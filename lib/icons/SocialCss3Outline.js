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

var SocialCss3Outline = function (_React$Component) {
	_inherits(SocialCss3Outline, _React$Component);

	function SocialCss3Outline() {
		_classCallCheck(this, SocialCss3Outline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialCss3Outline).apply(this, arguments));
	}

	_createClass(SocialCss3Outline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M354.676,366.898l-98.608,28.125l-98.458-28.248L150.864,289h48.253l3.433,39.563l53.586,15.163l0.132,0.273h0.034 l53.467-14.852L315.381,265H203l-4-50h120.646l4.396-51H140l-4-49h240.58L354.676,366.898z' }),
						_react2.default.createElement('path', { d: 'M64,32l34.936,403.301L255.769,480l157.245-44.705L448,32H64z M383.041,410.51l-127.262,36.187l-126.867-36.169L98.896,64 H413.1L383.041,410.51z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M354.676,366.898l-98.608,28.125l-98.458-28.248L150.864,289h48.253l3.433,39.563l53.586,15.163l0.132,0.273h0.034 l53.467-14.852L315.381,265H203l-4-50h120.646l4.396-51H140l-4-49h240.58L354.676,366.898z' }),
					_react2.default.createElement('path', { d: 'M64,32l34.936,403.301L255.769,480l157.245-44.705L448,32H64z M383.041,410.51l-127.262,36.187l-126.867-36.169L98.896,64 H413.1L383.041,410.51z' })
				)
			);
		}
	}]);

	return SocialCss3Outline;
}(_react2.default.Component);

exports.default = SocialCss3Outline;
;SocialCss3Outline.defaultProps = { bare: false };