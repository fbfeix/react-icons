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

var AndroidCalendar = function (_React$Component) {
	_inherits(AndroidCalendar, _React$Component);

	function AndroidCalendar() {
		_classCallCheck(this, AndroidCalendar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCalendar).apply(this, arguments));
	}

	_createClass(AndroidCalendar, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M368.005,272h-96v96h96V272z M336.005,64v32h-160V64h-48v32h-24.01c-22.002,0-40,17.998-40,40v272 c0,22.002,17.998,40,40,40h304.01c22.002,0,40-17.998,40-40V136c0-22.002-17.998-40-40-40h-24V64H336.005z M408.005,408h-304.01 V196h304.01V408z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M368.005,272h-96v96h96V272z M336.005,64v32h-160V64h-48v32h-24.01c-22.002,0-40,17.998-40,40v272 c0,22.002,17.998,40,40,40h304.01c22.002,0,40-17.998,40-40V136c0-22.002-17.998-40-40-40h-24V64H336.005z M408.005,408h-304.01 V196h304.01V408z' })
				)
			);
		}
	}]);

	return AndroidCalendar;
}(_react2.default.Component);

exports.default = AndroidCalendar;
;AndroidCalendar.defaultProps = { bare: false };