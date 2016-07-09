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

var IosPaperOutline = function (_React$Component) {
	_inherits(IosPaperOutline, _React$Component);

	function IosPaperOutline() {
		_classCallCheck(this, IosPaperOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosPaperOutline).apply(this, arguments));
	}

	_createClass(IosPaperOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M112,64v16v320h16V80h304v337.143c0,8.205-6.652,14.857-14.857,14.857H94.857C86.652,432,80,425.348,80,417.143V128h16v-16 H64v305.143C64,434.157,77.843,448,94.857,448h322.285C434.157,448,448,434.157,448,417.143V64H112z' }),
					_react2.default.createElement('rect', { x: '160', y: '112', width: '128', height: '16' }),
					_react2.default.createElement('rect', { x: '160', y: '192', width: '240', height: '16' }),
					_react2.default.createElement('rect', { x: '160', y: '272', width: '192', height: '16' }),
					_react2.default.createElement('rect', { x: '160', y: '352', width: '240', height: '16' })
				)
			);
		}
	}]);

	return IosPaperOutline;
}(_react2.default.Component);

exports.default = IosPaperOutline;
;