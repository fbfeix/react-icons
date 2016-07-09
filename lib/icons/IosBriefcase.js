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

var IosBriefcase = function (_React$Component) {
	_inherits(IosBriefcase, _React$Component);

	function IosBriefcase() {
		_classCallCheck(this, IosBriefcase);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBriefcase).apply(this, arguments));
	}

	_createClass(IosBriefcase, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '96', y: '112', width: '32', height: '16' }),
						_react2.default.createElement('rect', { x: '48', y: '208', width: '416', height: '240' }),
						_react2.default.createElement('rect', { x: '384', y: '112', width: '32', height: '16' }),
						_react2.default.createElement('path', { d: 'M416,128v32h-32v-32h-48V98.1V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v2.1V128h-48v32H96v-32H48v64 h416v-64H416z M320,127.5v0.5H192v-0.5V98.1c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V127.5z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '96', y: '112', width: '32', height: '16' }),
					_react2.default.createElement('rect', { x: '48', y: '208', width: '416', height: '240' }),
					_react2.default.createElement('rect', { x: '384', y: '112', width: '32', height: '16' }),
					_react2.default.createElement('path', { d: 'M416,128v32h-32v-32h-48V98.1V96c-0.5-18.2-13.6-32-32.2-32h-99.1C186.1,64,176,77.7,176,96v2.1V128h-48v32H96v-32H48v64 h416v-64H416z M320,127.5v0.5H192v-0.5V98.1c0-10.2,2.9-18.1,13.7-18.1h97.1c10.4,0,17.2,7.7,17.2,18.1V127.5z' })
				)
			);
		}
	}]);

	return IosBriefcase;
}(_react2.default.Component);

exports.default = IosBriefcase;
;IosBriefcase.defaultProps = { bare: false };