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

var IosAlbumsOutline = function (_React$Component) {
	_inherits(IosAlbumsOutline, _React$Component);

	function IosAlbumsOutline() {
		_classCallCheck(this, IosAlbumsOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosAlbumsOutline).apply(this, arguments));
	}

	_createClass(IosAlbumsOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M464,144v288H48V144H464 M480,128H32v320h448V128L480,128z' }),
						_react2.default.createElement('rect', { x: '72', y: '96', width: '368', height: '16' }),
						_react2.default.createElement('rect', { x: '104', y: '64', width: '304', height: '16' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M464,144v288H48V144H464 M480,128H32v320h448V128L480,128z' }),
					_react2.default.createElement('rect', { x: '72', y: '96', width: '368', height: '16' }),
					_react2.default.createElement('rect', { x: '104', y: '64', width: '304', height: '16' })
				)
			);
		}
	}]);

	return IosAlbumsOutline;
}(_react2.default.Component);

exports.default = IosAlbumsOutline;
;IosAlbumsOutline.defaultProps = { bare: false };