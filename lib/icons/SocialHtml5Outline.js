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

var SocialHtml5Outline = function (_React$Component) {
	_inherits(SocialHtml5Outline, _React$Component);

	function SocialHtml5Outline() {
		_classCallCheck(this, SocialHtml5Outline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialHtml5Outline).apply(this, arguments));
	}

	_createClass(SocialHtml5Outline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M64,32l34.936,403.301L255.769,480l157.245-44.705L448,32H64z M383.041,410.51l-127.262,36.187l-126.867-36.169L98.896,64 H413.1L383.041,410.51z' }),
					_react2.default.createElement('polygon', { points: '147.991,264 314.984,264 309.411,327.986 255.991,342.734 202.225,328.064 198.801,289 150.55,289  157.313,366.336 255.991,394.146 354.486,366.163 367.991,215 191.991,215 188,164 371.991,164 376.199,114.316 135.421,114.188 \t ' })
				)
			);
		}
	}]);

	return SocialHtml5Outline;
}(_react2.default.Component);

exports.default = SocialHtml5Outline;
;