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

var IosCloudOutline = function (_React$Component) {
	_inherits(IosCloudOutline, _React$Component);

	function IosCloudOutline() {
		_classCallCheck(this, IosCloudOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCloudOutline).apply(this, arguments));
	}

	_createClass(IosCloudOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M399.3,232.8c0-1.2,0.2-2.4,0.2-3.6c0-64.3-52.8-117.2-116.8-117.2c-46.1,0-85.8,27.9-104.4,67c-8.1-4.1-17.1-6.4-26.8-6.4 c-29.6,0-54.1,23.7-58.9,52C57.4,236.8,32,268.8,32,308.4c0,49.8,40.1,91.6,89.6,91.6H398c45,0,82-38.9,82-84.3 C480,270.1,444.6,232.9,399.3,232.8z M397.5,383.6l-3.2,0.4H122.4c-40.9,0-74.2-34.9-74.2-76.1c0-31.9,20.2-58.4,50.2-68.8l8.4-3 l1.5-8.8c3.6-21.6,22.1-39.3,43.9-39.3c6.9,0,13.7,1.6,19.9,4.8l13.5,6.8l6.5-13.7c16.6-34.9,52.1-58.2,90.4-58.2 c55.3,0,100.9,44.1,100.9,99.7c0,13.3-0.2,20.3-0.2,20.3l15.2,0.1c36.7,0.5,65.6,30.5,65.6,67.4C464,352.1,434.2,383.4,397.5,383.6z ' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M399.3,232.8c0-1.2,0.2-2.4,0.2-3.6c0-64.3-52.8-117.2-116.8-117.2c-46.1,0-85.8,27.9-104.4,67c-8.1-4.1-17.1-6.4-26.8-6.4 c-29.6,0-54.1,23.7-58.9,52C57.4,236.8,32,268.8,32,308.4c0,49.8,40.1,91.6,89.6,91.6H398c45,0,82-38.9,82-84.3 C480,270.1,444.6,232.9,399.3,232.8z M397.5,383.6l-3.2,0.4H122.4c-40.9,0-74.2-34.9-74.2-76.1c0-31.9,20.2-58.4,50.2-68.8l8.4-3 l1.5-8.8c3.6-21.6,22.1-39.3,43.9-39.3c6.9,0,13.7,1.6,19.9,4.8l13.5,6.8l6.5-13.7c16.6-34.9,52.1-58.2,90.4-58.2 c55.3,0,100.9,44.1,100.9,99.7c0,13.3-0.2,20.3-0.2,20.3l15.2,0.1c36.7,0.5,65.6,30.5,65.6,67.4C464,352.1,434.2,383.4,397.5,383.6z ' })
			);
		}
	}]);

	return IosCloudOutline;
}(_react2.default.Component);

exports.default = IosCloudOutline;
;IosCloudOutline.defaultProps = { bare: false };