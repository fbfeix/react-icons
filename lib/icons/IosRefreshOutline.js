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

var IosRefreshOutline = function (_React$Component) {
	_inherits(IosRefreshOutline, _React$Component);

	function IosRefreshOutline() {
		_classCallCheck(this, IosRefreshOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosRefreshOutline).apply(this, arguments));
	}

	_createClass(IosRefreshOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M364.1,256c0,60-48.5,108.2-108.1,108.2S147.9,315.7,147.9,256c0-59.6,48.5-108.1,108.1-108.1v55.8l96-55.7l-96-64v44 c-70.7,0-128,57.4-128,128.1c0,70.8,57.3,128.1,128,128.1c70.7,0,128-57.1,128-128.1H364.1z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7 c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M364.1,256c0,60-48.5,108.2-108.1,108.2S147.9,315.7,147.9,256c0-59.6,48.5-108.1,108.1-108.1v55.8l96-55.7l-96-64v44 c-70.7,0-128,57.4-128,128.1c0,70.8,57.3,128.1,128,128.1c70.7,0,128-57.1,128-128.1H364.1z' }),
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7 c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
					)
				)
			);
		}
	}]);

	return IosRefreshOutline;
}(_react2.default.Component);

exports.default = IosRefreshOutline;
;IosRefreshOutline.defaultProps = { bare: false };