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

var AndroidOpen = function (_React$Component) {
	_inherits(AndroidOpen, _React$Component);

	function AndroidOpen() {
		_classCallCheck(this, AndroidOpen);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidOpen).apply(this, arguments));
	}

	_createClass(AndroidOpen, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M405.34,405.332H106.66V106.668H240V64H106.66C83.191,64,64,83.197,64,106.668v298.664C64,428.803,83.191,448,106.66,448 h298.68c23.469,0,42.66-19.197,42.66-42.668V272h-42.66V405.332z M288,64v42.668h87.474L159.999,322.133l29.866,29.866 l215.476-215.47V224H448V64H288z' })
			);
		}
	}]);

	return AndroidOpen;
}(_react2.default.Component);

exports.default = AndroidOpen;
;