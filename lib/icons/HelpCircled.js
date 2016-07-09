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

var HelpCircled = function (_React$Component) {
	_inherits(HelpCircled, _React$Component);

	function HelpCircled() {
		_classCallCheck(this, HelpCircled);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(HelpCircled).apply(this, arguments));
	}

	_createClass(HelpCircled, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224c123.7,0,224-100.3,224-224S379.7,32,256,32z M276.2,358.7 c-0.5,17.8-13.7,28.8-30.8,28.3c-16.4-0.5-29.3-12.2-28.8-30.1c0.5-17.8,14.1-29.1,30.5-28.6C264.3,328.8,276.8,340.9,276.2,358.7z M324.9,231.4c-4.2,5.9-13.6,13.5-25.4,22.7l-13.1,9c-6.4,4.9-10.4,10.7-12.5,17.3c-1.1,3.5-1.9,12.6-2.1,18.7 c-0.1,1.2-0.8,3.9-4.5,3.9c-3.7,0-35,0-39.1,0c-4.1,0-4.6-2.4-4.5-3.6c0.6-16.6,3-30.3,9.9-41.3c9.3-14.8,35.5-30.4,35.5-30.4 c4-3,7.1-6.2,9.5-9.7c4.4-6,8-12.7,8-19.9c0-8.3-2-16.2-7.3-22.8c-6.2-7.7-12.9-11.4-25.8-11.4c-12.7,0-20.1,6.4-25.4,14.8 c-5.3,8.4-4.4,18.3-4.4,27.3H175c0-34,8.9-55.7,27.7-68.5c12.7-8.7,28.9-12.5,47.8-12.5c24.8,0,44.5,4.6,61.9,17.8 c16.1,12.2,24.6,29.4,24.6,52.6C337,209.7,332,221.7,324.9,231.4z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224c123.7,0,224-100.3,224-224S379.7,32,256,32z M276.2,358.7 c-0.5,17.8-13.7,28.8-30.8,28.3c-16.4-0.5-29.3-12.2-28.8-30.1c0.5-17.8,14.1-29.1,30.5-28.6C264.3,328.8,276.8,340.9,276.2,358.7z M324.9,231.4c-4.2,5.9-13.6,13.5-25.4,22.7l-13.1,9c-6.4,4.9-10.4,10.7-12.5,17.3c-1.1,3.5-1.9,12.6-2.1,18.7 c-0.1,1.2-0.8,3.9-4.5,3.9c-3.7,0-35,0-39.1,0c-4.1,0-4.6-2.4-4.5-3.6c0.6-16.6,3-30.3,9.9-41.3c9.3-14.8,35.5-30.4,35.5-30.4 c4-3,7.1-6.2,9.5-9.7c4.4-6,8-12.7,8-19.9c0-8.3-2-16.2-7.3-22.8c-6.2-7.7-12.9-11.4-25.8-11.4c-12.7,0-20.1,6.4-25.4,14.8 c-5.3,8.4-4.4,18.3-4.4,27.3H175c0-34,8.9-55.7,27.7-68.5c12.7-8.7,28.9-12.5,47.8-12.5c24.8,0,44.5,4.6,61.9,17.8 c16.1,12.2,24.6,29.4,24.6,52.6C337,209.7,332,221.7,324.9,231.4z' })
				)
			);
		}
	}]);

	return HelpCircled;
}(_react2.default.Component);

exports.default = HelpCircled;
;HelpCircled.defaultProps = { bare: false };