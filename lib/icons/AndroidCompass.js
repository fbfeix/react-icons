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

var AndroidCompass = function (_React$Component) {
	_inherits(AndroidCompass, _React$Component);

	function AndroidCompass() {
		_classCallCheck(this, AndroidCompass);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCompass).apply(this, arguments));
	}

	_createClass(AndroidCompass, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,231.358c-13.442,0-24.643,11.2-24.643,24.642s11.2,24.643,24.643,24.643s24.643-11.2,24.643-24.643 S269.442,231.358,256,231.358z M256,32C132.8,32,32,132.8,32,256s100.8,224,224,224s224-100.8,224-224S379.2,32,256,32z M305.284,305.284L121.6,390.4l85.116-183.679L390.4,121.6L305.284,305.284z' })
			);
		}
	}]);

	return AndroidCompass;
}(_react2.default.Component);

exports.default = AndroidCompass;
;