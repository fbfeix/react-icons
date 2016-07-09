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

var SocialAngular = function (_React$Component) {
	_inherits(SocialAngular, _React$Component);

	function SocialAngular() {
		_classCallCheck(this, SocialAngular);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialAngular).apply(this, arguments));
	}

	_createClass(SocialAngular, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '213.573,256 298.419,256 255.992,166.644 \t' }),
						_react2.default.createElement('path', { d: 'M255.981,32L32,112l46.12,272L256,480l177.75-96L480,112L255.981,32z M344,352l-26.589-56H194.584L168,352h-40L256,72 l128,280H344z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '213.573,256 298.419,256 255.992,166.644 \t' }),
					_react2.default.createElement('path', { d: 'M255.981,32L32,112l46.12,272L256,480l177.75-96L480,112L255.981,32z M344,352l-26.589-56H194.584L168,352h-40L256,72 l128,280H344z' })
				)
			);
		}
	}]);

	return SocialAngular;
}(_react2.default.Component);

exports.default = SocialAngular;
;SocialAngular.defaultProps = { bare: false };