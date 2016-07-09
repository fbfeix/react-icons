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

var AndroidCall = function (_React$Component) {
	_inherits(AndroidCall, _React$Component);

	function AndroidCall() {
		_classCallCheck(this, AndroidCall);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCall).apply(this, arguments));
	}

	_createClass(AndroidCall, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M426.666,330.667c-26.666,0-52.271-4.271-75.729-11.729c-7.469-2.136-16-1.073-21.332,5.333l-46.939,46.928 c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333,7.462-13.864,5.332-21.333 c-8.537-24.531-12.802-50.136-12.802-76.803C181.333,73.604,171.734,64,160,64H85.333C73.599,64,64,73.604,64,85.333 C64,285.864,226.136,448,426.666,448c11.73,0,21.334-9.604,21.334-21.333V352C448,340.271,438.396,330.667,426.666,330.667z' })
			);
		}
	}]);

	return AndroidCall;
}(_react2.default.Component);

exports.default = AndroidCall;
;