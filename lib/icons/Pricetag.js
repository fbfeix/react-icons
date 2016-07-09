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

var Pricetag = function (_React$Component) {
	_inherits(Pricetag, _React$Component);

	function Pricetag() {
		_classCallCheck(this, Pricetag);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Pricetag).apply(this, arguments));
	}

	_createClass(Pricetag, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M471,261.4L471,261.4C471,261.4,471,261.4,471,261.4L260.9,49.8c0,0,0,0,0,0l-1.5-1.5c0,0-0.4,0-0.4,0 c-8.3-7.9-17.9-12-29.9-12.3v0l-99.7-3.7l-4.4-0.2c-11.2,0.2-22.2,4.5-30.7,13.1L45.1,94.3c-9,9-13.1,20.9-13.1,32.7c0,0,0,0,0,0.1 l0.3,4.2l6.7,97.3c0,0.1,0,0.2,0,0.2v1.9c0,0,0,0,0,0c1,8.7,4.5,17.3,10.4,24.4l5.5,5.4l206.3,208.8l3.1,3.1 c11.9,10.5,30,10,41.3-1.4l165.4-166.6C482.8,292.6,483,273.3,471,261.4z M144,192c-26.5,0-48-21.5-48-48s21.5-48,48-48 s48,21.5,48,48S170.5,192,144,192z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M471,261.4L471,261.4C471,261.4,471,261.4,471,261.4L260.9,49.8c0,0,0,0,0,0l-1.5-1.5c0,0-0.4,0-0.4,0 c-8.3-7.9-17.9-12-29.9-12.3v0l-99.7-3.7l-4.4-0.2c-11.2,0.2-22.2,4.5-30.7,13.1L45.1,94.3c-9,9-13.1,20.9-13.1,32.7c0,0,0,0,0,0.1 l0.3,4.2l6.7,97.3c0,0.1,0,0.2,0,0.2v1.9c0,0,0,0,0,0c1,8.7,4.5,17.3,10.4,24.4l5.5,5.4l206.3,208.8l3.1,3.1 c11.9,10.5,30,10,41.3-1.4l165.4-166.6C482.8,292.6,483,273.3,471,261.4z M144,192c-26.5,0-48-21.5-48-48s21.5-48,48-48 s48,21.5,48,48S170.5,192,144,192z' })
				)
			);
		}
	}]);

	return Pricetag;
}(_react2.default.Component);

exports.default = Pricetag;
;Pricetag.defaultProps = { bare: false };