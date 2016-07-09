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

var IosHomeOutline = function (_React$Component) {
	_inherits(IosHomeOutline, _React$Component);

	function IosHomeOutline() {
		_classCallCheck(this, IosHomeOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosHomeOutline).apply(this, arguments));
	}

	_createClass(IosHomeOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,112L96,240v208h112V320h96v128h112V240L256,112z M400,432h-80V304H192v128h-80V247.69l144-115.2l144,115.2V432z' }),
						_react2.default.createElement('path', { d: 'M256,64l-96,76.8V96H96v95.999l-32,25.499l11.51,11.384L256,84.49l180.49,144.393L448,217.498L256,64z M144,153.599 l-32,25.6V112h32V153.599z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,112L96,240v208h112V320h96v128h112V240L256,112z M400,432h-80V304H192v128h-80V247.69l144-115.2l144,115.2V432z' }),
					_react2.default.createElement('path', { d: 'M256,64l-96,76.8V96H96v95.999l-32,25.499l11.51,11.384L256,84.49l180.49,144.393L448,217.498L256,64z M144,153.599 l-32,25.6V112h32V153.599z' })
				)
			);
		}
	}]);

	return IosHomeOutline;
}(_react2.default.Component);

exports.default = IosHomeOutline;
;IosHomeOutline.defaultProps = { bare: false };