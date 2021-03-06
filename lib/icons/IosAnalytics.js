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

var IosAnalytics = function (_React$Component) {
	_inherits(IosAnalytics, _React$Component);

	function IosAnalytics() {
		_classCallCheck(this, IosAnalytics);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosAnalytics).apply(this, arguments));
	}

	_createClass(IosAnalytics, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32C141.174,32,46.544,118.404,33.54,229.739C32.534,238.354,32,247.114,32,256c0,1.783,0.026,3.561,0.067,5.333 C34.901,382.581,134.071,480,256,480c105.255,0,193.537-72.602,217.542-170.454c1.337-5.451,2.474-10.979,3.404-16.579 C478.943,280.939,480,268.594,480,256C480,132.288,379.712,32,256,32z M462.585,280.352c-7.265-7.807-13.064-16.09-15.702-20.429 c-0.871-1.47-21.682-35.994-52.828-35.994c-27.937,0-42.269,26.269-51.751,43.65c-1.415,2.593-2.75,5.041-3.978,7.118 c-11.566,19.587-27.693,30.608-43.105,29.541c-13.586-0.959-25.174-11.403-32.628-29.41c-9.331-22.54-29.551-46.812-53.689-50.229 c-11.428-1.619-28.553,0.866-45.325,21.876c-3.293,4.124-6.964,9.612-11.215,15.967c-10.572,15.804-26.549,39.686-38.653,41.663 c-21.02,3.438-35.021-12.596-35.583-13.249l-0.487-0.58l-0.587-0.479c-0.208-0.17-15.041-12.417-29.047-33.334 c0-0.155-0.006-0.31-0.006-0.464c0-28.087,5.497-55.325,16.339-80.958c10.476-24.767,25.476-47.013,44.583-66.12 s41.354-34.107,66.12-44.583C200.675,53.497,227.913,48,256,48s55.325,5.497,80.958,16.339 c24.767,10.476,47.013,25.476,66.12,44.583s34.107,41.354,44.583,66.12C458.503,200.675,464,227.913,464,256 C464,264.197,463.518,272.318,462.585,280.352z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,32C141.174,32,46.544,118.404,33.54,229.739C32.534,238.354,32,247.114,32,256c0,1.783,0.026,3.561,0.067,5.333 C34.901,382.581,134.071,480,256,480c105.255,0,193.537-72.602,217.542-170.454c1.337-5.451,2.474-10.979,3.404-16.579 C478.943,280.939,480,268.594,480,256C480,132.288,379.712,32,256,32z M462.585,280.352c-7.265-7.807-13.064-16.09-15.702-20.429 c-0.871-1.47-21.682-35.994-52.828-35.994c-27.937,0-42.269,26.269-51.751,43.65c-1.415,2.593-2.75,5.041-3.978,7.118 c-11.566,19.587-27.693,30.608-43.105,29.541c-13.586-0.959-25.174-11.403-32.628-29.41c-9.331-22.54-29.551-46.812-53.689-50.229 c-11.428-1.619-28.553,0.866-45.325,21.876c-3.293,4.124-6.964,9.612-11.215,15.967c-10.572,15.804-26.549,39.686-38.653,41.663 c-21.02,3.438-35.021-12.596-35.583-13.249l-0.487-0.58l-0.587-0.479c-0.208-0.17-15.041-12.417-29.047-33.334 c0-0.155-0.006-0.31-0.006-0.464c0-28.087,5.497-55.325,16.339-80.958c10.476-24.767,25.476-47.013,44.583-66.12 s41.354-34.107,66.12-44.583C200.675,53.497,227.913,48,256,48s55.325,5.497,80.958,16.339 c24.767,10.476,47.013,25.476,66.12,44.583s34.107,41.354,44.583,66.12C458.503,200.675,464,227.913,464,256 C464,264.197,463.518,272.318,462.585,280.352z' })
			);
		}
	}]);

	return IosAnalytics;
}(_react2.default.Component);

exports.default = IosAnalytics;
;IosAnalytics.defaultProps = { bare: false };