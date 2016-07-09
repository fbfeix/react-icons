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

var IosBriefcaseOutline = function (_React$Component) {
	_inherits(IosBriefcaseOutline, _React$Component);

	function IosBriefcaseOutline() {
		_classCallCheck(this, IosBriefcaseOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBriefcaseOutline).apply(this, arguments));
	}

	_createClass(IosBriefcaseOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M416,128v-16h-32v16h-48V98.1V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v2.1V128h-48v-16H96v16H48v320 h416V128H416z M192,127.5V98.1c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1v29.4v0.5H192V127.5z M448,432H64V208h384 V432z M448,192H64v-48h32v16h32v-16h256v16h32v-16h32V192z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M416,128v-16h-32v16h-48V98.1V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v2.1V128h-48v-16H96v16H48v320 h416V128H416z M192,127.5V98.1c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1v29.4v0.5H192V127.5z M448,432H64V208h384 V432z M448,192H64v-48h32v16h32v-16h256v16h32v-16h32V192z' })
				)
			);
		}
	}]);

	return IosBriefcaseOutline;
}(_react2.default.Component);

exports.default = IosBriefcaseOutline;
;IosBriefcaseOutline.defaultProps = { bare: false };