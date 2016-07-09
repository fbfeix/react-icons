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

var Asterisk = function (_React$Component) {
	_inherits(Asterisk, _React$Component);

	function Asterisk() {
		_classCallCheck(this, Asterisk);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Asterisk).apply(this, arguments));
	}

	_createClass(Asterisk, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '480,224 293.172,231.487 401.688,64 342.441,32 256,208 169.824,32 110.328,64 218.828,231.487 32,224 32,288  217.537,277.934 113.65,448 169.619,480 256,304 342.381,480 398.33,448 294.463,277.934 480,288 ' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('polygon', { points: '480,224 293.172,231.487 401.688,64 342.441,32 256,208 169.824,32 110.328,64 218.828,231.487 32,224 32,288  217.537,277.934 113.65,448 169.619,480 256,304 342.381,480 398.33,448 294.463,277.934 480,288 ' })
			);
		}
	}]);

	return Asterisk;
}(_react2.default.Component);

exports.default = Asterisk;
;Asterisk.defaultProps = { bare: false };