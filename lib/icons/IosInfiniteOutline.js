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

var IosInfiniteOutline = function (_React$Component) {
	_inherits(IosInfiniteOutline, _React$Component);

	function IosInfiniteOutline() {
		_classCallCheck(this, IosInfiniteOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosInfiniteOutline).apply(this, arguments));
	}

	_createClass(IosInfiniteOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M451.229,188.098C432.682,169.967,407.95,160,381.585,160c-26.363,0-51.095,9.967-69.642,28.098l-42.229,41.187 l13.649,13.447l42.229-41.306c14.933-14.529,34.764-22.573,55.878-22.573c21.113,0,40.946,8.044,55.878,22.573 c30.797,30.139,30.797,79.13,0,109.148c-14.932,14.529-34.765,22.573-55.878,22.573c-21.114,0-40.945-8.044-55.878-22.573 L200.071,188.098C181.406,169.967,156.675,160,130.427,160c-26.363,0-51.095,9.967-69.643,28.098 C41.615,206.809,32.021,231.441,32,256c-0.021,24.611,9.573,49.149,28.784,67.902C79.332,342.032,104.063,352,130.427,352 c26.365,0,51.095-9.968,69.645-28.098l42.111-41.186l-13.647-13.329l-42.229,41.187c-14.932,14.529-34.764,22.573-55.879,22.573 c-21.113,0-40.944-8.044-55.876-22.573c-30.799-30.14-30.799-79.13,0-109.148c14.932-14.529,34.763-22.573,55.876-22.573 c21.115,0,40.947,8.044,55.879,22.573l125.52,122.477C330.49,342.032,355.222,352,381.47,352c26.363,0,51.095-9.968,69.643-28.098 C470.361,305.23,479.985,280.6,480,256C480.015,231.399,470.42,206.83,451.229,188.098z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M451.229,188.098C432.682,169.967,407.95,160,381.585,160c-26.363,0-51.095,9.967-69.642,28.098l-42.229,41.187 l13.649,13.447l42.229-41.306c14.933-14.529,34.764-22.573,55.878-22.573c21.113,0,40.946,8.044,55.878,22.573 c30.797,30.139,30.797,79.13,0,109.148c-14.932,14.529-34.765,22.573-55.878,22.573c-21.114,0-40.945-8.044-55.878-22.573 L200.071,188.098C181.406,169.967,156.675,160,130.427,160c-26.363,0-51.095,9.967-69.643,28.098 C41.615,206.809,32.021,231.441,32,256c-0.021,24.611,9.573,49.149,28.784,67.902C79.332,342.032,104.063,352,130.427,352 c26.365,0,51.095-9.968,69.645-28.098l42.111-41.186l-13.647-13.329l-42.229,41.187c-14.932,14.529-34.764,22.573-55.879,22.573 c-21.113,0-40.944-8.044-55.876-22.573c-30.799-30.14-30.799-79.13,0-109.148c14.932-14.529,34.763-22.573,55.876-22.573 c21.115,0,40.947,8.044,55.879,22.573l125.52,122.477C330.49,342.032,355.222,352,381.47,352c26.363,0,51.095-9.968,69.643-28.098 C470.361,305.23,479.985,280.6,480,256C480.015,231.399,470.42,206.83,451.229,188.098z' })
				)
			);
		}
	}]);

	return IosInfiniteOutline;
}(_react2.default.Component);

exports.default = IosInfiniteOutline;
;IosInfiniteOutline.defaultProps = { bare: false };