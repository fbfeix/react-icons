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

var IosRedoOutline = function (_React$Component) {
	_inherits(IosRedoOutline, _React$Component);

	function IosRedoOutline() {
		_classCallCheck(this, IosRedoOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosRedoOutline).apply(this, arguments));
	}

	_createClass(IosRedoOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M64,400h10.3l19.2-31.2c20.5-32.7,44.9-62.8,75.8-76.6c24.4-10.9,46.7-18.9,86.7-20V352l192-128L256,96v80.3 c-63,2.8-108.1,20.7-143.3,56.2c-52.3,52.7-48.7,119-48.7,135.7C64.1,377.1,64,389.9,64,400z M272,192v-64.7l148.1,96.8L272,320.8 V256c-91,0-144.6,24.6-192.2,105.4C79.8,361.4,71,192,272,192z' })
				)
			);
		}
	}]);

	return IosRedoOutline;
}(_react2.default.Component);

exports.default = IosRedoOutline;
;