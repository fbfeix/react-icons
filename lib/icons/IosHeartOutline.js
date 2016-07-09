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

var IosHeartOutline = function (_React$Component) {
	_inherits(IosHeartOutline, _React$Component);

	function IosHeartOutline() {
		_classCallCheck(this, IosHeartOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosHeartOutline).apply(this, arguments));
	}

	_createClass(IosHeartOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M359.385,80C319.966,80,277.171,97.599,256,132.8C234.83,97.599,192.034,80,152.615,80C83.647,80,32,123.238,32,195.779 c0,31.288,12.562,71.924,40.923,105.657c28.359,33.735,45.229,51.7,100.153,88C228,425.738,256,432,256,432s28-6.262,82.924-42.564 c54.923-36.3,71.794-54.265,100.153-88C467.438,267.703,480,227.067,480,195.779C480,123.238,428.353,80,359.385,80z M426.83,291.141c-26.852,31.94-42.18,48.895-96.729,84.947c-40.237,26.596-65.252,36.301-74.102,39.233 c-8.85-2.933-33.864-12.639-74.102-39.233c-54.548-36.052-69.876-53.006-96.729-84.948c-12.065-14.351-21.857-31.274-28.316-48.943 C51.062,226.355,48,210.304,48,195.779c0-30.284,10.131-55.643,29.297-73.335c9.14-8.437,20.158-14.992,32.752-19.484 C122.994,98.341,137.315,96,152.615,96c38.018,0,73.217,17.682,89.674,45.046L256,163.844l13.711-22.798 C286.169,113.682,321.368,96,359.385,96c15.3,0,29.621,2.341,42.566,6.959c12.594,4.493,23.612,11.048,32.752,19.484 C453.869,140.136,464,165.495,464,195.779c0,14.525-3.062,30.576-8.854,46.418C448.688,259.865,438.896,276.789,426.83,291.141z' })
			);
		}
	}]);

	return IosHeartOutline;
}(_react2.default.Component);

exports.default = IosHeartOutline;
;