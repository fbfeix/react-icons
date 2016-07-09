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

var IosMedkitOutline = function (_React$Component) {
	_inherits(IosMedkitOutline, _React$Component);

	function IosMedkitOutline() {
		_classCallCheck(this, IosMedkitOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosMedkitOutline).apply(this, arguments));
	}

	_createClass(IosMedkitOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M272,208v48v16h16h48v32h-48h-16v16v48h-32v-48v-16h-16h-48v-32h48h16v-16v-48H272 M288,192h-64v64h-64v64h64v64h64v-64 h64v-64h-64V192L288,192z' })
						),
						_react2.default.createElement('path', { d: 'M336,128V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v32H48v320h416V128H336z M192,98.1 c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V128H192V98.1z M448,432H64V144h384V432z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M272,208v48v16h16h48v32h-48h-16v16v48h-32v-48v-16h-16h-48v-32h48h16v-16v-48H272 M288,192h-64v64h-64v64h64v64h64v-64 h64v-64h-64V192L288,192z' })
					),
					_react2.default.createElement('path', { d: 'M336,128V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v32H48v320h416V128H336z M192,98.1 c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V128H192V98.1z M448,432H64V144h384V432z' })
				)
			);
		}
	}]);

	return IosMedkitOutline;
}(_react2.default.Component);

exports.default = IosMedkitOutline;
;IosMedkitOutline.defaultProps = { bare: false };