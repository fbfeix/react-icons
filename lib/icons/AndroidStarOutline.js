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

var AndroidStarOutline = function (_React$Component) {
	_inherits(AndroidStarOutline, _React$Component);

	function AndroidStarOutline() {
		_classCallCheck(this, AndroidStarOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidStarOutline).apply(this, arguments));
	}

	_createClass(AndroidStarOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M458,210.409l-145.267-12.476L256,64l-56.743,133.934L54,210.409l110.192,95.524L131.161,448L256,372.686L380.83,448 l-33.021-142.066L458,210.409z M272.531,345.286L256,335.312l-16.53,9.973l-59.988,36.191l15.879-68.296l4.369-18.79l-14.577-12.637 l-52.994-45.939l69.836-5.998l19.206-1.65l7.521-17.75l27.276-64.381l27.27,64.379l7.52,17.751l19.208,1.65l69.846,5.998 l-52.993,45.939l-14.576,12.636l4.367,18.788l15.875,68.299L272.531,345.286z' })
			);
		}
	}]);

	return AndroidStarOutline;
}(_react2.default.Component);

exports.default = AndroidStarOutline;
;