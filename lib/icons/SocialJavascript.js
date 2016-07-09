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

var SocialJavascript = function (_React$Component) {
	_inherits(SocialJavascript, _React$Component);

	function SocialJavascript() {
		_classCallCheck(this, SocialJavascript);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialJavascript).apply(this, arguments));
	}

	_createClass(SocialJavascript, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ transform: 'translate(384 48)' },
					_react2.default.createElement(
						'g',
						{ id: 'icon-javascript_1_1_' },
						_react2.default.createElement('path', { d: 'M-176,40.001h-80v212.498c0,52.58-18.032,67.261-49.412,67.261c-14.705,0-27.948-2.521-38.25-6.063L-352,375.904 c14.7,5.062,37.259,8.096,54.907,8.096C-225.045,384-176,350.129-176,253.02V40.001L-176,40.001z' }),
						_react2.default.createElement('path', { d: 'M-1.537,32C-78.98,32-128,75.998-128,134.154c0,50.083,37.751,81.44,92.641,101.665 c39.7,14.158,55.392,26.808,55.392,47.539c0,22.756-18.139,37.425-52.448,37.425c-31.863,0-60.789-10.64-80.394-21.255v-0.021 L-128,362.727c18.639,10.638,53.441,21.255,91.167,21.255C53.854,383.98,96,335.43,96,278.284c0-48.55-26.958-79.9-85.278-102.163 c-43.139-17.191-61.27-26.795-61.27-48.542c0-17.2,15.688-32.869,48.043-32.869c31.846,0,53.744,10.707,66.505,17.291l19.125-64 C63.125,39.22,36.188,32-1.537,32L-1.537,32z' })
					)
				)
			);
		}
	}]);

	return SocialJavascript;
}(_react2.default.Component);

exports.default = SocialJavascript;
;