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

var SocialMarkdown = function (_React$Component) {
	_inherits(SocialMarkdown, _React$Component);

	function SocialMarkdown() {
		_classCallCheck(this, SocialMarkdown);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialMarkdown).apply(this, arguments));
	}

	_createClass(SocialMarkdown, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ transform: 'translate(96 48)' },
						_react2.default.createElement(
							'g',
							{ id: 'icon-markdown' },
							_react2.default.createElement('path', { fill: '#231F20', d: 'M351.659,48H-31.659C-49.496,48-64,62.484-64,80.308v255.349C-64,353.493-49.496,368-31.659,368h383.318 C369.496,368,384,353.493,384,335.656V80.308C384,62.484,369.496,48,351.659,48z M188.023,304h-56.048v-96l-42.04,53.878 L47.913,208v96H-8.131V112h56.044l42.022,67.98l42.04-67.98h56.048V304L188.023,304z M271.68,304l-69.635-96h42v-96h56.043v96 h42.027l-70.453,96H271.68z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ transform: 'translate(96 48)' },
					_react2.default.createElement(
						'g',
						{ id: 'icon-markdown' },
						_react2.default.createElement('path', { fill: '#231F20', d: 'M351.659,48H-31.659C-49.496,48-64,62.484-64,80.308v255.349C-64,353.493-49.496,368-31.659,368h383.318 C369.496,368,384,353.493,384,335.656V80.308C384,62.484,369.496,48,351.659,48z M188.023,304h-56.048v-96l-42.04,53.878 L47.913,208v96H-8.131V112h56.044l42.022,67.98l42.04-67.98h56.048V304L188.023,304z M271.68,304l-69.635-96h42v-96h56.043v96 h42.027l-70.453,96H271.68z' })
					)
				)
			);
		}
	}]);

	return SocialMarkdown;
}(_react2.default.Component);

exports.default = SocialMarkdown;
;SocialMarkdown.defaultProps = { bare: false };