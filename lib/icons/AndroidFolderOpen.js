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

var AndroidFolderOpen = function (_React$Component) {
	_inherits(AndroidFolderOpen, _React$Component);

	function AndroidFolderOpen() {
		_classCallCheck(this, AndroidFolderOpen);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidFolderOpen).apply(this, arguments));
	}

	_createClass(AndroidFolderOpen, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M437.334,144H256.006l-42.668-48H74.666C51.197,96,32,115.198,32,138.667v234.666C32,396.802,51.197,416,74.666,416h362.668 C460.803,416,480,396.802,480,373.333V186.667C480,163.198,460.803,144,437.334,144z M448,373.333 c0,5.782-4.885,10.667-10.666,10.667H74.666C68.884,384,64,379.115,64,373.333V176h373.334c5.781,0,10.666,4.885,10.666,10.667 V373.333z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M437.334,144H256.006l-42.668-48H74.666C51.197,96,32,115.198,32,138.667v234.666C32,396.802,51.197,416,74.666,416h362.668 C460.803,416,480,396.802,480,373.333V186.667C480,163.198,460.803,144,437.334,144z M448,373.333 c0,5.782-4.885,10.667-10.666,10.667H74.666C68.884,384,64,379.115,64,373.333V176h373.334c5.781,0,10.666,4.885,10.666,10.667 V373.333z' })
			);
		}
	}]);

	return AndroidFolderOpen;
}(_react2.default.Component);

exports.default = AndroidFolderOpen;
;AndroidFolderOpen.defaultProps = { bare: false };