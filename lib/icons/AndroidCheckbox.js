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

var AndroidCheckbox = function (_React$Component) {
	_inherits(AndroidCheckbox, _React$Component);

	function AndroidCheckbox() {
		_classCallCheck(this, AndroidCheckbox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCheckbox).apply(this, arguments));
	}

	_createClass(AndroidCheckbox, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_22_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M405.333,64H106.667C83.198,64,64,83.198,64,106.667v298.666C64,428.802,83.198,448,106.667,448h298.666 C428.802,448,448,428.802,448,405.333V106.667C448,83.198,428.802,64,405.333,64z M213.333,362.667L106.667,256l29.864-29.864 l76.802,76.802l162.136-162.136l29.864,29.865L213.333,362.667z' })
					)
				)
			);
		}
	}]);

	return AndroidCheckbox;
}(_react2.default.Component);

exports.default = AndroidCheckbox;
;