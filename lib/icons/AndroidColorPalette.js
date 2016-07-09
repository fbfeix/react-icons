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

var AndroidColorPalette = function (_React$Component) {
	_inherits(AndroidColorPalette, _React$Component);

	function AndroidColorPalette() {
		_classCallCheck(this, AndroidColorPalette);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidColorPalette).apply(this, arguments));
	}

	_createClass(AndroidColorPalette, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_12_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M256,64C150.401,64,64,150.401,64,256c0,105.604,86.401,192,192,192c18.136,0,32-13.864,32-32 c0-8.531-3.198-16-8.531-21.333c-5.333-5.334-8.531-12.803-8.531-21.334c0-18.135,13.864-32,32-32h38.396 c58.667,0,106.667-48,106.667-106.666C448,140.802,361.604,64,256,64z M138.667,256c-18.136,0-32-13.864-32-32s13.864-32,32-32 c18.135,0,32,13.864,32,32S156.802,256,138.667,256z M202.667,170.667c-18.136,0-32-13.865-32-32c0-18.136,13.864-32,32-32 c18.135,0,32,13.864,32,32C234.667,156.802,220.802,170.667,202.667,170.667z M309.333,170.667c-18.135,0-32-13.865-32-32 c0-18.136,13.865-32,32-32c18.136,0,32,13.864,32,32C341.333,156.802,327.469,170.667,309.333,170.667z M373.333,256 c-18.135,0-32-13.864-32-32s13.865-32,32-32c18.136,0,32,13.864,32,32S391.469,256,373.333,256z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_12_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,64C150.401,64,64,150.401,64,256c0,105.604,86.401,192,192,192c18.136,0,32-13.864,32-32 c0-8.531-3.198-16-8.531-21.333c-5.333-5.334-8.531-12.803-8.531-21.334c0-18.135,13.864-32,32-32h38.396 c58.667,0,106.667-48,106.667-106.666C448,140.802,361.604,64,256,64z M138.667,256c-18.136,0-32-13.864-32-32s13.864-32,32-32 c18.135,0,32,13.864,32,32S156.802,256,138.667,256z M202.667,170.667c-18.136,0-32-13.865-32-32c0-18.136,13.864-32,32-32 c18.135,0,32,13.864,32,32C234.667,156.802,220.802,170.667,202.667,170.667z M309.333,170.667c-18.135,0-32-13.865-32-32 c0-18.136,13.865-32,32-32c18.136,0,32,13.864,32,32C341.333,156.802,327.469,170.667,309.333,170.667z M373.333,256 c-18.135,0-32-13.864-32-32s13.865-32,32-32c18.136,0,32,13.864,32,32S391.469,256,373.333,256z' })
					)
				)
			);
		}
	}]);

	return AndroidColorPalette;
}(_react2.default.Component);

exports.default = AndroidColorPalette;
;AndroidColorPalette.defaultProps = { bare: false };