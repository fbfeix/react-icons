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

var HelpBuoy = function (_React$Component) {
	_inherits(HelpBuoy, _React$Component);

	function HelpBuoy() {
		_classCallCheck(this, HelpBuoy);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(HelpBuoy).apply(this, arguments));
	}

	_createClass(HelpBuoy, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M434.3,184.5l-61.5,18.9 c-6.3-14-15.1-26.8-26.3-38c-11.2-11.2-24-20-38-26.3l18.9-61.5c23.8,9.5,45.6,23.9,64.3,42.5C410.4,138.9,424.8,160.7,434.3,184.5z M256,352c-53,0-96-43-96-96c0-53,43-96,96-96s96,43,96,96C352,309,309,352,256,352z M120.2,120.2c18.7-18.7,40.5-33,64.3-42.5 l18.9,61.5c-14,6.3-26.8,15.1-38,26.3c-11.2,11.2-20,24-26.3,38l-61.5-18.9C87.2,160.7,101.6,138.9,120.2,120.2z M77.7,327.5 l61.5-18.9c6.3,14,15.1,26.8,26.3,38s24,20,38,26.3l-18.9,61.5c-23.8-9.5-45.6-23.9-64.3-42.5C101.6,373.1,87.2,351.3,77.7,327.5z M391.8,391.8c-18.7,18.7-40.5,33-64.3,42.5l-18.9-61.5c14-6.3,26.8-15.1,38-26.3s20-24,26.3-38l61.5,18.9 C424.8,351.3,410.4,373.1,391.8,391.8z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256s100.3,224,224,224s224-100.3,224-224S379.7,32,256,32z M434.3,184.5l-61.5,18.9 c-6.3-14-15.1-26.8-26.3-38c-11.2-11.2-24-20-38-26.3l18.9-61.5c23.8,9.5,45.6,23.9,64.3,42.5C410.4,138.9,424.8,160.7,434.3,184.5z M256,352c-53,0-96-43-96-96c0-53,43-96,96-96s96,43,96,96C352,309,309,352,256,352z M120.2,120.2c18.7-18.7,40.5-33,64.3-42.5 l18.9,61.5c-14,6.3-26.8,15.1-38,26.3c-11.2,11.2-20,24-26.3,38l-61.5-18.9C87.2,160.7,101.6,138.9,120.2,120.2z M77.7,327.5 l61.5-18.9c6.3,14,15.1,26.8,26.3,38s24,20,38,26.3l-18.9,61.5c-23.8-9.5-45.6-23.9-64.3-42.5C101.6,373.1,87.2,351.3,77.7,327.5z M391.8,391.8c-18.7,18.7-40.5,33-64.3,42.5l-18.9-61.5c14-6.3,26.8-15.1,38-26.3s20-24,26.3-38l61.5,18.9 C424.8,351.3,410.4,373.1,391.8,391.8z' })
			);
		}
	}]);

	return HelpBuoy;
}(_react2.default.Component);

exports.default = HelpBuoy;
;HelpBuoy.defaultProps = { bare: false };