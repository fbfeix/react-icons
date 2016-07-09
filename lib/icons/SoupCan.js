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

var SoupCan = function (_React$Component) {
	_inherits(SoupCan, _React$Component);

	function SoupCan() {
		_classCallCheck(this, SoupCan);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SoupCan).apply(this, arguments));
	}

	_createClass(SoupCan, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('ellipse', { cx: '256', cy: '80', rx: '160', ry: '64' }),
					_react2.default.createElement('path', { d: 'M256,440c88.365,0,152-28.654,152-64V248c0,28.581-41.612,52.783-104.26,61.002C301.238,333.16,280.82,352,256,352 s-45.238-18.84-47.74-42.998C145.612,300.783,104,276.581,104,248v128C104,411.346,167.634,440,256,440z' }),
					_react2.default.createElement('path', { d: 'M256,160c-88.366,0-160-28.654-160-64c0,0,0,32.834,8,40v96c0,28.732,42.049,53.042,105.25,61.134 C214.176,271.861,233.229,256,256,256s41.824,15.861,46.75,37.134C365.951,285.042,408,260.732,408,232v-96c8-8.25,8-40,8-40 C416,131.346,344.365,160,256,160z' }),
					_react2.default.createElement('path', { d: 'M408,392c0,35.346-63.635,64-152,64c-88.366,0-152-28.654-152-64v23.999L96,432c0,6.994,2.815,13.725,8,20.025 C125.016,477.562,185.121,496,256,496c70.879,0,130.984-18.438,152-43.975c5.186-6.301,8-13.031,8-20.025l-8-16.001V392z' })
				)
			);
		}
	}]);

	return SoupCan;
}(_react2.default.Component);

exports.default = SoupCan;
;