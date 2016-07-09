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

var AndroidFavoriteOutline = function (_React$Component) {
	_inherits(AndroidFavoriteOutline, _React$Component);

	function AndroidFavoriteOutline() {
		_classCallCheck(this, AndroidFavoriteOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidFavoriteOutline).apply(this, arguments));
	}

	_createClass(AndroidFavoriteOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M349.6,64c-36.4,0-70.718,16.742-93.6,43.947C233.117,80.742,198.8,64,162.4,64C97.918,64,48,114.221,48,179.095 c0,79.516,70.718,143.348,177.836,241.694L256,448l30.164-27.211C393.281,322.442,464,258.61,464,179.095 C464,114.221,414.082,64,349.6,64z M268.836,393.257l-4.219,3.873L256,404.903l-8.616-7.772l-4.214-3.869 c-50.418-46.282-93.961-86.254-122.746-121.994C92.467,236.555,80,208.128,80,179.095c0-22.865,8.422-43.931,23.715-59.316 C118.957,104.445,139.798,96,162.4,96c26.134,0,51.97,12.167,69.11,32.545L256,157.661l24.489-29.116 C297.63,108.167,323.465,96,349.6,96c22.603,0,43.443,8.445,58.686,23.778C423.578,135.164,432,156.229,432,179.095 c0,29.033-12.467,57.459-40.422,92.171C362.794,307.006,319.253,346.975,268.836,393.257z' })
			);
		}
	}]);

	return AndroidFavoriteOutline;
}(_react2.default.Component);

exports.default = AndroidFavoriteOutline;
;