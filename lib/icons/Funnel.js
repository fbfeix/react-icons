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

var Funnel = function (_React$Component) {
	_inherits(Funnel, _React$Component);

	function Funnel() {
		_classCallCheck(this, Funnel);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Funnel).apply(this, arguments));
	}

	_createClass(Funnel, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256.085,32c-123.79,0-224.096,35.817-224.096,80c0,8.476,3.729,16.642,10.573,24.309l-0.061,0.008 C74.408,175.213,192,313,192,352v87l0,0c0,22.688,28.891,41,64,41s64-18.312,64-41l0,0v-83.088c0-1.241,0.008-2.54,0.008-3.912 C320.008,313,436,177.432,471,134.062v-0.002c6-7.007,8.977-14.408,8.977-22.06C479.977,67.817,379.875,32,256.085,32z M256.178,160c-92.058,0-176.112-22-176.112-48s83.053-48,176.112-48c93.06,0,176.111,22.413,176.111,48S348.236,160,256.178,160z' })
				)
			);
		}
	}]);

	return Funnel;
}(_react2.default.Component);

exports.default = Funnel;
;