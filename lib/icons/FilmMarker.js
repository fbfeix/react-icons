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

var FilmMarker = function (_React$Component) {
	_inherits(FilmMarker, _React$Component);

	function FilmMarker() {
		_classCallCheck(this, FilmMarker);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FilmMarker).apply(this, arguments));
	}

	_createClass(FilmMarker, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M448.4,208h-344l341.2-68c8.5-1.6,14-9.7,12.4-18.1l-8.9-45.4c-1.6-8.4-9.8-13.8-18.3-12.2L60.7,137.9 c-8.5,1.6-14,9.7-12.4,18l8.9,45.4c0.6,2.8,2.1,5.2,3.9,7.2c-7.4,1.2-13.1,7.2-13.1,14.9v209.2c0,8.5,7,15.4,15.6,15.4h384.8 c8.6,0,15.6-6.9,15.6-15.4V223.4C464,214.9,457,208,448.4,208z M305,402.4l-50.7-36.3l-50.7,36.3l19.5-58.4l-50.8-36H235l19.2-58.4 l19.3,58.4h62.7l-50.8,36L305,402.4z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M448.4,208h-344l341.2-68c8.5-1.6,14-9.7,12.4-18.1l-8.9-45.4c-1.6-8.4-9.8-13.8-18.3-12.2L60.7,137.9 c-8.5,1.6-14,9.7-12.4,18l8.9,45.4c0.6,2.8,2.1,5.2,3.9,7.2c-7.4,1.2-13.1,7.2-13.1,14.9v209.2c0,8.5,7,15.4,15.6,15.4h384.8 c8.6,0,15.6-6.9,15.6-15.4V223.4C464,214.9,457,208,448.4,208z M305,402.4l-50.7-36.3l-50.7,36.3l19.5-58.4l-50.8-36H235l19.2-58.4 l19.3,58.4h62.7l-50.8,36L305,402.4z' })
			);
		}
	}]);

	return FilmMarker;
}(_react2.default.Component);

exports.default = FilmMarker;
;FilmMarker.defaultProps = { bare: false };