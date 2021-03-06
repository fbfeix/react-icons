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

var AndroidImage = function (_React$Component) {
	_inherits(AndroidImage, _React$Component);

	function AndroidImage() {
		_classCallCheck(this, AndroidImage);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidImage).apply(this, arguments));
	}

	_createClass(AndroidImage, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_8_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M448,405.333V106.667C448,83.198,428.802,64,405.333,64H106.667C83.198,64,64,83.198,64,106.667v298.666 C64,428.802,83.198,448,106.667,448h298.666C428.802,448,448,428.802,448,405.333z M181.333,288l53.334,64l74.666-96l96,128 H106.667L181.333,288z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_8_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M448,405.333V106.667C448,83.198,428.802,64,405.333,64H106.667C83.198,64,64,83.198,64,106.667v298.666 C64,428.802,83.198,448,106.667,448h298.666C428.802,448,448,428.802,448,405.333z M181.333,288l53.334,64l74.666-96l96,128 H106.667L181.333,288z' })
					)
				)
			);
		}
	}]);

	return AndroidImage;
}(_react2.default.Component);

exports.default = AndroidImage;
;AndroidImage.defaultProps = { bare: false };