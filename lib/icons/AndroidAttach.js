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

var AndroidAttach = function (_React$Component) {
	_inherits(AndroidAttach, _React$Component);

	function AndroidAttach() {
		_classCallCheck(this, AndroidAttach);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidAttach).apply(this, arguments));
	}

	_createClass(AndroidAttach, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_3_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M341.334,128v234.666C341.334,409.604,302.938,448,256,448c-46.937,0-85.333-38.396-85.333-85.334V117.334 C170.667,87.469,194.135,64,224,64c29.864,0,53.333,23.469,53.333,53.334v245.333c0,11.729-9.605,21.333-21.334,21.333 c-11.729,0-21.333-9.604-21.333-21.333V160h-32v202.667C202.667,392.531,226.135,416,256,416 c29.865,0,53.334-23.469,53.334-53.333V117.334C309.334,70.401,270.938,32,224,32c-46.938,0-85.334,38.401-85.334,85.334v245.332 C138.667,427.729,190.938,480,256,480c65.062,0,117.334-52.271,117.334-117.334V128H341.334z' })
					)
				)
			);
		}
	}]);

	return AndroidAttach;
}(_react2.default.Component);

exports.default = AndroidAttach;
;