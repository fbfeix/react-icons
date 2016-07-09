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

var AndroidSunny = function (_React$Component) {
	_inherits(AndroidSunny, _React$Component);

	function AndroidSunny() {
		_classCallCheck(this, AndroidSunny);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidSunny).apply(this, arguments));
	}

	_createClass(AndroidSunny, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_27_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,160c25.499,0,49.567,10.025,67.771,28.229C341.975,206.433,352,230.501,352,256s-10.025,49.567-28.229,67.771 C305.567,341.975,281.499,352,256,352s-49.567-10.025-67.771-28.229C170.025,305.567,160,281.499,160,256 s10.025-49.567,28.229-67.771C206.433,170.025,230.501,160,256,160 M277.333,32h-42.666v64h42.666V32L277.333,32z M406.396,75.729 L368,114.135L397.864,144l38.406-38.396L406.396,75.729L406.396,75.729z M105.604,75.729l-29.875,29.875L114.136,144L144,114.135 L105.604,75.729L105.604,75.729z M256,128c-70.396,0-128,57.604-128,128s57.604,128,128,128s128-57.604,128-128 S326.396,128,256,128L256,128z M480,234.666h-64v42.668h64V234.666L480,234.666z M96,234.666H32v42.668h64V234.666L96,234.666z M397.864,368L368,397.865l38.396,38.406l29.875-29.875L397.864,368L397.864,368z M114.136,368l-38.406,38.396l29.875,29.875 L144,397.865L114.136,368L114.136,368z M277.333,416h-42.666v64c6.396,0,42.666,0,42.666,0V416L277.333,416z' })
					)
				)
			);
		}
	}]);

	return AndroidSunny;
}(_react2.default.Component);

exports.default = AndroidSunny;
;