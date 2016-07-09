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

var IosBody = function (_React$Component) {
	_inherits(IosBody, _React$Component);

	function IosBody() {
		_classCallCheck(this, IosBody);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBody).apply(this, arguments));
	}

	_createClass(IosBody, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('circle', { cx: '256', cy: '79.838', r: '48' }),
					_react2.default.createElement('path', { d: 'M424,144H88c-13.255,0-24,10.745-24,24s10.745,24,24,24h98.451c5.579,1,13.197,3.837,17.216,14.252 c4.651,12.056,2.37,33.606-0.539,51.727l-3.775,21.395c-0.019,0.104-0.039,0.207-0.058,0.311c-0.002,0.008-0.002,0.012-0.004,0.02 l-30.375,172.268c-2.303,13.053,6.414,25.5,19.467,27.803c13.055,2.301,25.333-6.416,27.634-19.471L237,340.348v0.167 c0,0,6.25-32.515,18.452-32.515h1.096C269,308,275,340.515,275,340.515v-0.083l20.983,119.913 c2.301,13.055,14.663,21.749,27.718,19.448c13.053-2.303,21.728-14.762,19.425-27.814L312.73,279.703 c-0.002-0.008-0.013-0.02-0.015-0.027c-0.019-0.104-0.044-0.217-0.063-0.322l-3.777-21.414 c-2.909-18.121-5.191-39.631-0.541-51.688C312.354,195.838,319.97,193,325.549,192H424c13.255,0,24-10.745,24-24 S437.255,144,424,144z' })
				)
			);
		}
	}]);

	return IosBody;
}(_react2.default.Component);

exports.default = IosBody;
;