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

var SocialEuro = function (_React$Component) {
	_inherits(SocialEuro, _React$Component);

	function SocialEuro() {
		_classCallCheck(this, SocialEuro);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialEuro).apply(this, arguments));
	}

	_createClass(SocialEuro, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M234,272v-48h131.094l7.149-48H234v-1.83c0-35.92,14.975-58.086,79.25-58.086c26.264,0,55.867,2.498,93.189,8.742 L416,59.866C377.988,51.123,345.306,48,310.057,48C195.326,48,146,89.225,146,165.43V176H96v48h50v48H96v48h50v26.57 C146,422.774,195.297,464,310.027,464c35.25,0,67.848-3.123,105.859-11.866l-9.619-64.96c-37.322,6.244-66.781,8.742-93.045,8.742 c-64.276,0-79.223-18.739-79.223-63.086V320h116.795l7.148-48H234z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M234,272v-48h131.094l7.149-48H234v-1.83c0-35.92,14.975-58.086,79.25-58.086c26.264,0,55.867,2.498,93.189,8.742 L416,59.866C377.988,51.123,345.306,48,310.057,48C195.326,48,146,89.225,146,165.43V176H96v48h50v48H96v48h50v26.57 C146,422.774,195.297,464,310.027,464c35.25,0,67.848-3.123,105.859-11.866l-9.619-64.96c-37.322,6.244-66.781,8.742-93.045,8.742 c-64.276,0-79.223-18.739-79.223-63.086V320h116.795l7.148-48H234z' })
				)
			);
		}
	}]);

	return SocialEuro;
}(_react2.default.Component);

exports.default = SocialEuro;
;SocialEuro.defaultProps = { bare: false };