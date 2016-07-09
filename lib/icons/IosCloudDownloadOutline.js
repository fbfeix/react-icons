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

var IosCloudDownloadOutline = function (_React$Component) {
	_inherits(IosCloudDownloadOutline, _React$Component);

	function IosCloudDownloadOutline() {
		_classCallCheck(this, IosCloudDownloadOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCloudDownloadOutline).apply(this, arguments));
	}

	_createClass(IosCloudDownloadOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('polygon', { points: '193.2,381.2 181.6,392.6 256.1,466 330.6,392.6 319,381.2 264.3,435 264.3,192.9 247.9,192.9 247.9,435 \t\t' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M399.2,164.4c0-1.2,0.2-2.3,0.2-3.5C399.4,97.4,346.5,46,282.6,46c-46.1,0-85.8,26.8-104.4,65.4c-8.1-4-17.1-6.3-26.8-6.3 c-29.6,0-54.1,23.3-58.9,51.3c-35.2,12-60.6,43.4-60.6,82.4c0,49.1,40.1,89.2,89.6,89.2H213v-16h-90.7 c-40.9,0-74.2-33.2-74.2-73.7c0-31.4,20.2-57.5,50.2-67.7l8.4-2.8l1.5-8.7c3.6-21.3,22.1-38.8,43.9-38.8c6.9,0,13.7,1.6,19.9,4.7 l13.5,6.7l6.5-13.6c16.6-34.4,52.1-56.6,90.4-56.6c55.3,0,100.9,42.8,100.9,97.6c0,13.1-0.2,20.1-0.2,20.1l15.2,0.1 c36.7,0.5,65.6,30,65.6,66.4c0,36.3-29.8,66.1-66.5,66.3l-3.2,0.1H297v16h101h0c45,0,81.9-37.2,81.9-82.1 C479.9,201,444.5,164.5,399.2,164.4z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '193.2,381.2 181.6,392.6 256.1,466 330.6,392.6 319,381.2 264.3,435 264.3,192.9 247.9,192.9 247.9,435 \t\t' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M399.2,164.4c0-1.2,0.2-2.3,0.2-3.5C399.4,97.4,346.5,46,282.6,46c-46.1,0-85.8,26.8-104.4,65.4c-8.1-4-17.1-6.3-26.8-6.3 c-29.6,0-54.1,23.3-58.9,51.3c-35.2,12-60.6,43.4-60.6,82.4c0,49.1,40.1,89.2,89.6,89.2H213v-16h-90.7 c-40.9,0-74.2-33.2-74.2-73.7c0-31.4,20.2-57.5,50.2-67.7l8.4-2.8l1.5-8.7c3.6-21.3,22.1-38.8,43.9-38.8c6.9,0,13.7,1.6,19.9,4.7 l13.5,6.7l6.5-13.6c16.6-34.4,52.1-56.6,90.4-56.6c55.3,0,100.9,42.8,100.9,97.6c0,13.1-0.2,20.1-0.2,20.1l15.2,0.1 c36.7,0.5,65.6,30,65.6,66.4c0,36.3-29.8,66.1-66.5,66.3l-3.2,0.1H297v16h101h0c45,0,81.9-37.2,81.9-82.1 C479.9,201,444.5,164.5,399.2,164.4z' })
					)
				)
			);
		}
	}]);

	return IosCloudDownloadOutline;
}(_react2.default.Component);

exports.default = IosCloudDownloadOutline;
;IosCloudDownloadOutline.defaultProps = { bare: false };