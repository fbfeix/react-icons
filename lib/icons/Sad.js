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

var Sad = function (_React$Component) {
	_inherits(Sad, _React$Component);

	function Sad() {
		_classCallCheck(this, Sad);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Sad).apply(this, arguments));
	}

	_createClass(Sad, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32C132.288,32,32,132.288,32,256s100.288,224,224,224s224-100.288,224-224S379.712,32,256,32z M145.062,291.696 c-1.551,4.952-5.62,8.724-10.693,10.606c-3.358,1.246-6.816,1.774-10.236,0.938c-8.866-2.185-13.916-10.907-11.255-19.443 c5.101-16.379,14.22-29.995,33.802-37.263s35.265-2.877,49.868,6.15c7.615,4.707,10.029,14.019,4.214,22.123 c-2.049,2.854-5.019,4.717-8.376,5.963c-5.059,1.876-10.584,1.678-14.965-1.036c-4.778-2.957-10.643-6.526-19.607-3.199 C148.805,279.878,146.712,286.374,145.062,291.696z M345.156,381.454c-2.789,1.946-5.982,2.881-9.144,2.881 c-5.053,0-10.023-2.388-13.134-6.845C322.703,377.239,304,352,256,352c-47.98,0-66.704,25.239-66.879,25.49 c-3.111,4.457-8.083,6.845-13.135,6.845c-3.161,0-6.354-0.935-9.143-2.881c-7.246-5.058-9.021-15.031-3.963-22.278 C163.986,357.59,190.739,320,256,320c65,0,92.013,37.59,93.119,39.176C354.177,366.423,352.402,376.396,345.156,381.454z M388.029,303.24c-3.42,0.837-6.879,0.309-10.236-0.938c-5.073-1.883-9.143-5.654-10.693-10.606 c-1.649-5.322-3.742-11.818-12.752-15.161c-8.964-3.327-14.829,0.242-19.607,3.199c-4.381,2.714-9.906,2.912-14.965,1.036 c-3.357-1.246-6.327-3.108-8.376-5.963c-5.815-8.104-3.401-17.416,4.214-22.123c14.604-9.027,30.286-13.418,49.868-6.15 s28.702,20.884,33.802,37.263C401.944,292.333,396.895,301.056,388.029,303.24z' })
				)
			);
		}
	}]);

	return Sad;
}(_react2.default.Component);

exports.default = Sad;
;