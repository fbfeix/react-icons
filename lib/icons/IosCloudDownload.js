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

var IosCloudDownload = function (_React$Component) {
	_inherits(IosCloudDownload, _React$Component);

	function IosCloudDownload() {
		_classCallCheck(this, IosCloudDownload);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCloudDownload).apply(this, arguments));
	}

	_createClass(IosCloudDownload, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '248,435 193.3,381.2 181.6,392.6 256.1,466 330.6,392.6 318.8,381.2 264,435 264,328 248,328 \t' }),
						_react2.default.createElement('path', { d: 'M399.2,164.4c0-1.2,0.2-2.3,0.2-3.5C399.4,97.4,346.5,46,282.6,46c-46.1,0-85.8,26.8-104.4,65.4c-8.1-4-17.1-6.3-26.8-6.3 c-29.6,0-54.1,23.3-58.9,51.3c-35.2,12-60.6,43.4-60.6,82.4c0,49.1,40.1,89.2,89.6,89.2H192h21h35V193h16v135h134 c45,0,81.9-37.2,81.9-82.1C479.9,201,444.5,164.5,399.2,164.4z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '248,435 193.3,381.2 181.6,392.6 256.1,466 330.6,392.6 318.8,381.2 264,435 264,328 248,328 \t' }),
					_react2.default.createElement('path', { d: 'M399.2,164.4c0-1.2,0.2-2.3,0.2-3.5C399.4,97.4,346.5,46,282.6,46c-46.1,0-85.8,26.8-104.4,65.4c-8.1-4-17.1-6.3-26.8-6.3 c-29.6,0-54.1,23.3-58.9,51.3c-35.2,12-60.6,43.4-60.6,82.4c0,49.1,40.1,89.2,89.6,89.2H192h21h35V193h16v135h134 c45,0,81.9-37.2,81.9-82.1C479.9,201,444.5,164.5,399.2,164.4z' })
				)
			);
		}
	}]);

	return IosCloudDownload;
}(_react2.default.Component);

exports.default = IosCloudDownload;
;IosCloudDownload.defaultProps = { bare: false };