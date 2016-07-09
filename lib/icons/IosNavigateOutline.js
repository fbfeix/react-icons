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

var IosNavigateOutline = function (_React$Component) {
	_inherits(IosNavigateOutline, _React$Component);

	function IosNavigateOutline() {
		_classCallCheck(this, IosNavigateOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosNavigateOutline).apply(this, arguments));
	}

	_createClass(IosNavigateOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,64.5c51.1,0,99.2,19.9,135.4,56.1s56.1,84.2,56.1,135.4s-19.9,99.2-56.1,135.4s-84.2,56.1-135.4,56.1 s-99.2-19.9-135.4-56.1C84.5,355.2,64.5,307.1,64.5,256s19.9-99.2,56.1-135.4C156.8,84.5,204.9,64.5,256,64.5 M256,48 C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48L256,48z' }),
						_react2.default.createElement('polygon', { points: '352,160 128.3,256 256,256 256,384 \t' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,64.5c51.1,0,99.2,19.9,135.4,56.1s56.1,84.2,56.1,135.4s-19.9,99.2-56.1,135.4s-84.2,56.1-135.4,56.1 s-99.2-19.9-135.4-56.1C84.5,355.2,64.5,307.1,64.5,256s19.9-99.2,56.1-135.4C156.8,84.5,204.9,64.5,256,64.5 M256,48 C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48L256,48z' }),
					_react2.default.createElement('polygon', { points: '352,160 128.3,256 256,256 256,384 \t' })
				)
			);
		}
	}]);

	return IosNavigateOutline;
}(_react2.default.Component);

exports.default = IosNavigateOutline;
;IosNavigateOutline.defaultProps = { bare: false };