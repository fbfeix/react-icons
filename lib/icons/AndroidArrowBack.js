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

var AndroidArrowBack = function (_React$Component) {
	_inherits(AndroidArrowBack, _React$Component);

	function AndroidArrowBack() {
		_classCallCheck(this, AndroidArrowBack);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidArrowBack).apply(this, arguments));
	}

	_createClass(AndroidArrowBack, [{
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
							_react2.default.createElement('path', { d: 'M427,234.625H167.296l119.702-119.702L256,85L85,256l171,171l29.922-29.924L167.296,277.375H427V234.625z' })
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
						_react2.default.createElement('path', { d: 'M427,234.625H167.296l119.702-119.702L256,85L85,256l171,171l29.922-29.924L167.296,277.375H427V234.625z' })
					)
				)
			);
		}
	}]);

	return AndroidArrowBack;
}(_react2.default.Component);

exports.default = AndroidArrowBack;
;AndroidArrowBack.defaultProps = { bare: false };