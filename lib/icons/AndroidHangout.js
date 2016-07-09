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

var AndroidHangout = function (_React$Component) {
	_inherits(AndroidHangout, _React$Component);

	function AndroidHangout() {
		_classCallCheck(this, AndroidHangout);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidHangout).apply(this, arguments));
	}

	_createClass(AndroidHangout, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48c-97.321,0-176,77.114-176,172.487c0,95.38,78.679,172.487,176,172.487V464c100.425-47.689,176-152.195,176-243.513 C432,125.114,353.321,48,256,48z M246,230.633L224.943,271H193.88l20.712-40H184v-61h62V230.633z M328,230.633L307.768,271h-31.063 l20.704-40H266v-61h62V230.633z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,48c-97.321,0-176,77.114-176,172.487c0,95.38,78.679,172.487,176,172.487V464c100.425-47.689,176-152.195,176-243.513 C432,125.114,353.321,48,256,48z M246,230.633L224.943,271H193.88l20.712-40H184v-61h62V230.633z M328,230.633L307.768,271h-31.063 l20.704-40H266v-61h62V230.633z' })
			);
		}
	}]);

	return AndroidHangout;
}(_react2.default.Component);

exports.default = AndroidHangout;
;AndroidHangout.defaultProps = { bare: false };