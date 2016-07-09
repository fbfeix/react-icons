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

var AndroidSettings = function (_React$Component) {
	_inherits(AndroidSettings, _React$Component);

	function AndroidSettings() {
		_classCallCheck(this, AndroidSettings);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidSettings).apply(this, arguments));
	}

	_createClass(AndroidSettings, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M413.967,276.8c1.06-6.235,1.06-13.518,1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318 c4.26-3.118,5.319-8.317,2.13-13.518L418.215,115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186,20.801 c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098 c-5.318,0-9.577,4.164-10.637,8.318l-8.508,55.117c-12.767,5.2-24.464,12.482-36.171,20.801l-53.186-20.801 c-5.319-2.071-10.638,0-12.767,4.164l-42.549,71.765c-2.119,4.153-1.061,10.399,2.129,13.518L96.97,235.2 c0,7.282-1.06,13.518-1.06,20.8s1.06,13.518,1.06,20.8l-44.668,34.318c-4.26,3.118-5.318,8.317-2.13,13.518L92.721,396.4 c2.13,4.164,8.508,6.235,12.767,4.164l53.187-20.801c10.637,8.318,23.394,15.601,36.16,20.801l8.508,55.117 c1.069,5.2,5.318,8.318,10.637,8.318h85.098c5.319,0,9.578-4.164,10.638-8.318l8.518-55.117c12.757-5.2,24.464-12.482,36.16-20.801 l53.187,20.801c5.318,2.071,10.637,0,12.767-4.164l42.549-71.765c2.129-4.153,1.06-10.399-2.13-13.518L413.967,276.8z M255.468,328.8c-41.489,0-74.46-32.235-74.46-72.8s32.971-72.8,74.46-72.8s74.461,32.235,74.461,72.8S296.957,328.8,255.468,328.8 z' })
				)
			);
		}
	}]);

	return AndroidSettings;
}(_react2.default.Component);

exports.default = AndroidSettings;
;