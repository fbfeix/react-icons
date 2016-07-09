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

var IosBookOutline = function (_React$Component) {
	_inherits(IosBookOutline, _React$Component);

	function IosBookOutline() {
		_classCallCheck(this, IosBookOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBookOutline).apply(this, arguments));
	}

	_createClass(IosBookOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M347.621,64c-40.941,0-79.121,14-91.578,44.495C242.5,78,205.408,64,164.466,64C109.265,64,64,89.98,64,143v1v8.995V417v9 h6.215h10.958h4.967c12.86-26.334,44.238-42,78.325-42c40.224,0,73.877,27.528,81.617,64h19.714c7.739-36.472,41.495-64,81.722-64 c34.085,0,61.149,11.666,78.429,42h4.967h10.959H448v-17V148v-4v-1C448,89.98,402.823,64,347.621,64z M248,410.926 C230,385.055,199.27,368,164.5,368c-34.769,0-64.5,10.055-83.5,35.926l-1,0.537V142l0,0v-1c3-41.825,40.089-61,84.293-61 c45.162,0,82.145,18.708,83.363,61.808c-0.017,0.729,0.016,1.459,0.016,2.192L248,157.103V410.926z M432,148v255.926 C414,378.055,382.269,368,347.5,368c-34.77,0-65.5,17.055-83.5,42.926V145v-1c0-44.112,37.659-64,83.587-64 C391.79,80,429,91.175,432,133v1V148z' })
			);
		}
	}]);

	return IosBookOutline;
}(_react2.default.Component);

exports.default = IosBookOutline;
;