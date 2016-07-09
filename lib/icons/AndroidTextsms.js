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

var AndroidTextsms = function (_React$Component) {
	_inherits(AndroidTextsms, _React$Component);

	function AndroidTextsms() {
		_classCallCheck(this, AndroidTextsms);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidTextsms).apply(this, arguments));
	}

	_createClass(AndroidTextsms, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M408,64H96c-22.002,0-32,17.998-32,40v344l64-64h280c22.002,0,40-17.998,40-40V104C448,81.998,430.002,64,408,64z M198.4,242H160v-40h38.4V242z M275.2,242h-38.4v-40h38.4V242z M352,242h-38.4v-40H352V242z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M408,64H96c-22.002,0-32,17.998-32,40v344l64-64h280c22.002,0,40-17.998,40-40V104C448,81.998,430.002,64,408,64z M198.4,242H160v-40h38.4V242z M275.2,242h-38.4v-40h38.4V242z M352,242h-38.4v-40H352V242z' })
				)
			);
		}
	}]);

	return AndroidTextsms;
}(_react2.default.Component);

exports.default = AndroidTextsms;
;AndroidTextsms.defaultProps = { bare: false };