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

var IosRefreshEmpty = function (_React$Component) {
	_inherits(IosRefreshEmpty, _React$Component);

	function IosRefreshEmpty() {
		_classCallCheck(this, IosRefreshEmpty);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosRefreshEmpty).apply(this, arguments));
	}

	_createClass(IosRefreshEmpty, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,384.1c-70.7,0-128-57.3-128-128.1c0-70.8,57.3-128.1,128-128.1V84l96,64l-96,55.7v-55.8 c-59.6,0-108.1,48.5-108.1,108.1c0,59.6,48.5,108.1,108.1,108.1S364.1,316,364.1,256H384C384,327,326.7,384.1,256,384.1z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,384.1c-70.7,0-128-57.3-128-128.1c0-70.8,57.3-128.1,128-128.1V84l96,64l-96,55.7v-55.8 c-59.6,0-108.1,48.5-108.1,108.1c0,59.6,48.5,108.1,108.1,108.1S364.1,316,364.1,256H384C384,327,326.7,384.1,256,384.1z' })
				)
			);
		}
	}]);

	return IosRefreshEmpty;
}(_react2.default.Component);

exports.default = IosRefreshEmpty;
;IosRefreshEmpty.defaultProps = { bare: false };