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

var IosFilmOutline = function (_React$Component) {
	_inherits(IosFilmOutline, _React$Component);

	function IosFilmOutline() {
		_classCallCheck(this, IosFilmOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFilmOutline).apply(this, arguments));
	}

	_createClass(IosFilmOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M56,88v336h400V88H56z M128,408H72v-48h56V408z M128,344H72v-48h56V344z M128,280H72v-48h56V280z M128,216H72v-48h56V216z M128,152H72v-48h56V152z M368,408H144V264h224V408z M368,248H144V104h224V248z M440,408h-56v-48h56V408z M440,344h-56v-48h56V344z M440,280h-56v-48h56V280z M440,216h-56v-48h56V216z M440,152h-56v-48h56V152z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M56,88v336h400V88H56z M128,408H72v-48h56V408z M128,344H72v-48h56V344z M128,280H72v-48h56V280z M128,216H72v-48h56V216z M128,152H72v-48h56V152z M368,408H144V264h224V408z M368,248H144V104h224V248z M440,408h-56v-48h56V408z M440,344h-56v-48h56V344z M440,280h-56v-48h56V280z M440,216h-56v-48h56V216z M440,152h-56v-48h56V152z' })
			);
		}
	}]);

	return IosFilmOutline;
}(_react2.default.Component);

exports.default = IosFilmOutline;
;IosFilmOutline.defaultProps = { bare: false };