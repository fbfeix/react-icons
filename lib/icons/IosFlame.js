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

var IosFlame = function (_React$Component) {
	_inherits(IosFlame, _React$Component);

	function IosFlame() {
		_classCallCheck(this, IosFlame);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFlame).apply(this, arguments));
	}

	_createClass(IosFlame, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M223.899,32c25.691,145-96.732,142-95.895,288c0.686,119.51,104.975,160,128.143,160c23.166,0,113.88-26,126.931-160 C393.711,210.816,310.572,96,223.899,32z M256.147,472c0,0-40.701-35.816-40.701-80c0-44.183,40.555-80,40.555-80 s40.332,35.817,40.332,80C296.332,436.184,256.147,472,256.147,472z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M223.899,32c25.691,145-96.732,142-95.895,288c0.686,119.51,104.975,160,128.143,160c23.166,0,113.88-26,126.931-160 C393.711,210.816,310.572,96,223.899,32z M256.147,472c0,0-40.701-35.816-40.701-80c0-44.183,40.555-80,40.555-80 s40.332,35.817,40.332,80C296.332,436.184,256.147,472,256.147,472z' })
				)
			);
		}
	}]);

	return IosFlame;
}(_react2.default.Component);

exports.default = IosFlame;
;IosFlame.defaultProps = { bare: false };