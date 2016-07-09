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

var IosMusicalNotes = function (_React$Component) {
	_inherits(IosMusicalNotes, _React$Component);

	function IosMusicalNotes() {
		_classCallCheck(this, IosMusicalNotes);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosMusicalNotes).apply(this, arguments));
	}

	_createClass(IosMusicalNotes, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M416,319.9V78l-224,34.6v237.2c-9,0-20.9,0.4-43.5,1.3c-42.6,1.6-52.5,21.8-52.5,41.3c0,24.9,13.5,43.5,62.6,41.4 c52.8-2.3,50.3-49,50.3-82.5V189.8l191-32v160.6c-9,0-19.9,0.4-42.6,1.3c-42.6,1.6-52.5,21.8-52.5,41.3c0,24.9,13,43.5,62.2,41.4 C420,400.1,416,353.4,416,319.9z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M416,319.9V78l-224,34.6v237.2c-9,0-20.9,0.4-43.5,1.3c-42.6,1.6-52.5,21.8-52.5,41.3c0,24.9,13.5,43.5,62.6,41.4 c52.8-2.3,50.3-49,50.3-82.5V189.8l191-32v160.6c-9,0-19.9,0.4-42.6,1.3c-42.6,1.6-52.5,21.8-52.5,41.3c0,24.9,13,43.5,62.2,41.4 C420,400.1,416,353.4,416,319.9z' })
			);
		}
	}]);

	return IosMusicalNotes;
}(_react2.default.Component);

exports.default = IosMusicalNotes;
;IosMusicalNotes.defaultProps = { bare: false };