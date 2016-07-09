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

var SocialAngularOutline = function (_React$Component) {
	_inherits(SocialAngularOutline, _React$Component);

	function SocialAngularOutline() {
		_classCallCheck(this, SocialAngularOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialAngularOutline).apply(this, arguments));
	}

	_createClass(SocialAngularOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M255.982,64l187.967,69.105l-39.17,230.389l-148.881,79.949l-148.812-80.051L68.031,133.11L255.982,64 M255.981,32L32,112 l46.12,272L256,480l177.75-96L480,112L255.981,32L255.981,32z' }),
					_react2.default.createElement('path', { d: 'M344,352h40L256,72L128,352h40l26.584-56h122.827L344,352z M213.573,256l42.419-89.356L298.419,256H213.573z' })
				)
			);
		}
	}]);

	return SocialAngularOutline;
}(_react2.default.Component);

exports.default = SocialAngularOutline;
;