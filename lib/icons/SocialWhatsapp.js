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

var SocialWhatsapp = function (_React$Component) {
	_inherits(SocialWhatsapp, _React$Component);

	function SocialWhatsapp() {
		_classCallCheck(this, SocialWhatsapp);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialWhatsapp).apply(this, arguments));
	}

	_createClass(SocialWhatsapp, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M260.062,32C138.605,32,40.134,129.701,40.134,250.232c0,41.23,11.532,79.79,31.559,112.687L32,480l121.764-38.682 c31.508,17.285,67.745,27.146,106.298,27.146C381.535,468.464,480,370.749,480,250.232C480,129.701,381.535,32,260.062,32z M369.424,333.11c-5.174,12.827-28.574,24.533-38.899,25.072c-10.314,0.547-10.608,7.994-66.84-16.434 c-56.225-24.434-90.052-83.844-92.719-87.67c-2.669-3.812-21.78-31.047-20.749-58.455c1.038-27.413,16.047-40.346,21.404-45.725 c5.351-5.387,11.486-6.352,15.232-6.413c4.428-0.072,7.296-0.132,10.573-0.011c3.274,0.124,8.192-0.685,12.45,10.639 c4.256,11.323,14.443,39.153,15.746,41.989c1.302,2.839,2.108,6.126,0.102,9.771c-2.012,3.653-3.042,5.935-5.961,9.083 c-2.935,3.148-6.174,7.042-8.792,9.449c-2.92,2.665-5.97,5.572-2.9,11.269c3.068,5.693,13.653,24.356,29.779,39.736 c20.725,19.771,38.598,26.329,44.098,29.317c5.515,3.004,8.806,2.67,12.226-0.929c3.404-3.599,14.639-15.746,18.596-21.169 c3.955-5.438,7.661-4.373,12.742-2.329c5.078,2.052,32.157,16.556,37.673,19.551c5.51,2.989,9.193,4.529,10.51,6.9 C375.012,309.131,374.596,320.282,369.424,333.11z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M260.062,32C138.605,32,40.134,129.701,40.134,250.232c0,41.23,11.532,79.79,31.559,112.687L32,480l121.764-38.682 c31.508,17.285,67.745,27.146,106.298,27.146C381.535,468.464,480,370.749,480,250.232C480,129.701,381.535,32,260.062,32z M369.424,333.11c-5.174,12.827-28.574,24.533-38.899,25.072c-10.314,0.547-10.608,7.994-66.84-16.434 c-56.225-24.434-90.052-83.844-92.719-87.67c-2.669-3.812-21.78-31.047-20.749-58.455c1.038-27.413,16.047-40.346,21.404-45.725 c5.351-5.387,11.486-6.352,15.232-6.413c4.428-0.072,7.296-0.132,10.573-0.011c3.274,0.124,8.192-0.685,12.45,10.639 c4.256,11.323,14.443,39.153,15.746,41.989c1.302,2.839,2.108,6.126,0.102,9.771c-2.012,3.653-3.042,5.935-5.961,9.083 c-2.935,3.148-6.174,7.042-8.792,9.449c-2.92,2.665-5.97,5.572-2.9,11.269c3.068,5.693,13.653,24.356,29.779,39.736 c20.725,19.771,38.598,26.329,44.098,29.317c5.515,3.004,8.806,2.67,12.226-0.929c3.404-3.599,14.639-15.746,18.596-21.169 c3.955-5.438,7.661-4.373,12.742-2.329c5.078,2.052,32.157,16.556,37.673,19.551c5.51,2.989,9.193,4.529,10.51,6.9 C375.012,309.131,374.596,320.282,369.424,333.11z' })
				)
			);
		}
	}]);

	return SocialWhatsapp;
}(_react2.default.Component);

exports.default = SocialWhatsapp;
;SocialWhatsapp.defaultProps = { bare: false };