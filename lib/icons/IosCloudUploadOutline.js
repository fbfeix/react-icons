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

var IosCloudUploadOutline = function (_React$Component) {
	_inherits(IosCloudUploadOutline, _React$Component);

	function IosCloudUploadOutline() {
		_classCallCheck(this, IosCloudUploadOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCloudUploadOutline).apply(this, arguments));
	}

	_createClass(IosCloudUploadOutline, [{
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
							_react2.default.createElement('polygon', { points: '193.3,260.4 181.7,248.8 256.2,174.5 330.7,248.8 319,260.4 264.4,205.8 264.4,447.6 247.9,447.6 247.9,205.8 \t\t ' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M399.3,183.6c0-1.2,0.2-2.4,0.2-3.6c0-64.3-52.8-116.4-116.8-116.4c-46.1,0-85.8,27.1-104.4,66.3 c-8.1-4.1-17.1-6.4-26.8-6.4c-29.6,0-54.1,23.6-58.9,52C57.4,187.6,32,222.2,32,261.8c0,49.7,40.1,90.2,89.6,90.2H213v-16h-90.6 c-40.9,0-74.2-33.5-74.2-74.6c0-31.8,20.2-61.2,50.2-71.6l8.4-2.9l1.5-8.8c3.6-21.6,22.1-39.3,43.9-39.3c6.9,0,13.7,1.6,19.9,4.8 l13.5,6.8l6.5-13.7c16.6-34.9,52.1-57.4,90.4-57.4c55.3,0,100.9,43.3,100.9,98.9c0,13.3-0.2,20.3-0.2,20.3l15.2,0.1 C435,199.1,464,232,464,268.9c0,36.8-29.8,66.9-66.5,67.1l-3.2,0H297v16h101h0c45,0,82-37.3,82-82.8 C480,223.7,444.5,183.7,399.3,183.6z' })
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
						_react2.default.createElement('polygon', { points: '193.3,260.4 181.7,248.8 256.2,174.5 330.7,248.8 319,260.4 264.4,205.8 264.4,447.6 247.9,447.6 247.9,205.8 \t\t ' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M399.3,183.6c0-1.2,0.2-2.4,0.2-3.6c0-64.3-52.8-116.4-116.8-116.4c-46.1,0-85.8,27.1-104.4,66.3 c-8.1-4.1-17.1-6.4-26.8-6.4c-29.6,0-54.1,23.6-58.9,52C57.4,187.6,32,222.2,32,261.8c0,49.7,40.1,90.2,89.6,90.2H213v-16h-90.6 c-40.9,0-74.2-33.5-74.2-74.6c0-31.8,20.2-61.2,50.2-71.6l8.4-2.9l1.5-8.8c3.6-21.6,22.1-39.3,43.9-39.3c6.9,0,13.7,1.6,19.9,4.8 l13.5,6.8l6.5-13.7c16.6-34.9,52.1-57.4,90.4-57.4c55.3,0,100.9,43.3,100.9,98.9c0,13.3-0.2,20.3-0.2,20.3l15.2,0.1 C435,199.1,464,232,464,268.9c0,36.8-29.8,66.9-66.5,67.1l-3.2,0H297v16h101h0c45,0,82-37.3,82-82.8 C480,223.7,444.5,183.7,399.3,183.6z' })
					)
				)
			);
		}
	}]);

	return IosCloudUploadOutline;
}(_react2.default.Component);

exports.default = IosCloudUploadOutline;
;IosCloudUploadOutline.defaultProps = { bare: false };