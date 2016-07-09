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

var IosFilingOutline = function (_React$Component) {
	_inherits(IosFilingOutline, _React$Component);

	function IosFilingOutline() {
		_classCallCheck(this, IosFilingOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFilingOutline).apply(this, arguments));
	}

	_createClass(IosFilingOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M368.5,128h-225L80,224v160h176h176V224L368.5,128z M413.4,224H368v-68L413.4,224z M160,144h192v80h-48 c0,26.5-21.5,48-48,48s-48-21.5-48-48h-48V144z M144,156v68H98.6L144,156z M416,368H256H96V240h98c7.1,27.6,32.2,48,62,48 s54.9-20.4,62-48h98V368z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M368.5,128h-225L80,224v160h176h176V224L368.5,128z M413.4,224H368v-68L413.4,224z M160,144h192v80h-48 c0,26.5-21.5,48-48,48s-48-21.5-48-48h-48V144z M144,156v68H98.6L144,156z M416,368H256H96V240h98c7.1,27.6,32.2,48,62,48 s54.9-20.4,62-48h98V368z' })
			);
		}
	}]);

	return IosFilingOutline;
}(_react2.default.Component);

exports.default = IosFilingOutline;
;IosFilingOutline.defaultProps = { bare: false };