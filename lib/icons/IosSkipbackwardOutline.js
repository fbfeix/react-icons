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

var IosSkipbackwardOutline = function (_React$Component) {
	_inherits(IosSkipbackwardOutline, _React$Component);

	function IosSkipbackwardOutline() {
		_classCallCheck(this, IosSkipbackwardOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosSkipbackwardOutline).apply(this, arguments));
	}

	_createClass(IosSkipbackwardOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M96,96v320h79V274.2L416,416V96L175,237.8V96H96z M175.6,256l7.6-4.4L400,124v0v264L183.1,260.4L175.6,256z M112,112h47 v125.8v28v8.5V400h-47V112z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M96,96v320h79V274.2L416,416V96L175,237.8V96H96z M175.6,256l7.6-4.4L400,124v0v264L183.1,260.4L175.6,256z M112,112h47 v125.8v28v8.5V400h-47V112z' })
			);
		}
	}]);

	return IosSkipbackwardOutline;
}(_react2.default.Component);

exports.default = IosSkipbackwardOutline;
;IosSkipbackwardOutline.defaultProps = { bare: false };