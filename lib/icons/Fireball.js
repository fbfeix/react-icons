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

var Fireball = function (_React$Component) {
	_inherits(Fireball, _React$Component);

	function Fireball() {
		_classCallCheck(this, Fireball);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Fireball).apply(this, arguments));
	}

	_createClass(Fireball, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M393.267,238.088l-0.231,10.404c-0.814,11.65-3.797,31.912-14.102,54.736c3.251-15.208,4.978-30.982,4.978-47.164 c0-12.096-0.958-23.968-2.799-35.544c-15.091-94.901-89.626-169.923-184.138-185.518C185.706,32.285,179.048,32,179.048,32 c0.238,0.281,0.465,0.562,0.7,0.844c39.458,47.181,44.1,96.656,37.744,131.85c-2.281,12.629-5.978,23.421-9.991,31.605 c0,0,3.359-13.911,3.035-29.72c-0.293-14.234-3.572-30.006-14.986-38.552c3.497,18.378-0.752,33.501-9.121,47.729 C161.69,217.808,101,249.386,96,327.408v3.836c0,53.692,25.624,98.979,68.719,125.012c-6.85-12.344-14.964-35.207-8.733-60.151 c3.998,23.669,9.951,36.045,20.879,51.756c8.153,11.721,19.104,19.269,33.095,24.934S238.995,480,255.889,480 c55.809,0,105.228-28.567,133.845-71.952l0.267,0.061v-0.007c16-25.254,26.1-55.5,26.1-88.019 C416.1,290.112,407.596,262.071,393.267,238.088z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M393.267,238.088l-0.231,10.404c-0.814,11.65-3.797,31.912-14.102,54.736c3.251-15.208,4.978-30.982,4.978-47.164 c0-12.096-0.958-23.968-2.799-35.544c-15.091-94.901-89.626-169.923-184.138-185.518C185.706,32.285,179.048,32,179.048,32 c0.238,0.281,0.465,0.562,0.7,0.844c39.458,47.181,44.1,96.656,37.744,131.85c-2.281,12.629-5.978,23.421-9.991,31.605 c0,0,3.359-13.911,3.035-29.72c-0.293-14.234-3.572-30.006-14.986-38.552c3.497,18.378-0.752,33.501-9.121,47.729 C161.69,217.808,101,249.386,96,327.408v3.836c0,53.692,25.624,98.979,68.719,125.012c-6.85-12.344-14.964-35.207-8.733-60.151 c3.998,23.669,9.951,36.045,20.879,51.756c8.153,11.721,19.104,19.269,33.095,24.934S238.995,480,255.889,480 c55.809,0,105.228-28.567,133.845-71.952l0.267,0.061v-0.007c16-25.254,26.1-55.5,26.1-88.019 C416.1,290.112,407.596,262.071,393.267,238.088z' })
				)
			);
		}
	}]);

	return Fireball;
}(_react2.default.Component);

exports.default = Fireball;
;Fireball.defaultProps = { bare: false };