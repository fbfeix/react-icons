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

var AndroidDownload = function (_React$Component) {
	_inherits(AndroidDownload, _React$Component);

	function AndroidDownload() {
		_classCallCheck(this, AndroidDownload);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidDownload).apply(this, arguments));
	}

	_createClass(AndroidDownload, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M403.002,217.001C388.998,148.002,328.998,96,256,96c-57.998,0-107.998,32.998-132.998,81.001 C63.002,183.002,16,233.998,16,296c0,65.996,53.999,120,120,120h260c55,0,100-45,100-100 C496,263.002,455.004,219.999,403.002,217.001z M224,268v-76h64v76h68L256,368L156,268H224z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M403.002,217.001C388.998,148.002,328.998,96,256,96c-57.998,0-107.998,32.998-132.998,81.001 C63.002,183.002,16,233.998,16,296c0,65.996,53.999,120,120,120h260c55,0,100-45,100-100 C496,263.002,455.004,219.999,403.002,217.001z M224,268v-76h64v76h68L256,368L156,268H224z' })
			);
		}
	}]);

	return AndroidDownload;
}(_react2.default.Component);

exports.default = AndroidDownload;
;AndroidDownload.defaultProps = { bare: false };