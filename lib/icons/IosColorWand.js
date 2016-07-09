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

var IosColorWand = function (_React$Component) {
	_inherits(IosColorWand, _React$Component);

	function IosColorWand() {
		_classCallCheck(this, IosColorWand);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosColorWand).apply(this, arguments));
	}

	_createClass(IosColorWand, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '198.011,159.22 163.968,193.337 420.064,450 454,415.883 \t' }),
						_react2.default.createElement('rect', { x: '182', y: '62', width: '32', height: '64' }),
						_react2.default.createElement('rect', { x: '182', y: '266', width: '32', height: '64' }),
						_react2.default.createElement('rect', { x: '274', y: '178', width: '64', height: '32' }),
						_react2.default.createElement('polygon', { points: '303.941,112.143 281.314,89.465 236.06,134.82 258.687,157.498 \t' }),
						_react2.default.createElement('polygon', { points: '92.06,112.143 137.314,157.498 159.941,134.82 114.687,89.465 \t' }),
						_react2.default.createElement('polygon', { points: '92.06,279.141 114.687,301.816 159.941,256.462 137.314,233.784 \t' }),
						_react2.default.createElement('rect', { x: '58', y: '178', width: '64', height: '32' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '198.011,159.22 163.968,193.337 420.064,450 454,415.883 \t' }),
					_react2.default.createElement('rect', { x: '182', y: '62', width: '32', height: '64' }),
					_react2.default.createElement('rect', { x: '182', y: '266', width: '32', height: '64' }),
					_react2.default.createElement('rect', { x: '274', y: '178', width: '64', height: '32' }),
					_react2.default.createElement('polygon', { points: '303.941,112.143 281.314,89.465 236.06,134.82 258.687,157.498 \t' }),
					_react2.default.createElement('polygon', { points: '92.06,112.143 137.314,157.498 159.941,134.82 114.687,89.465 \t' }),
					_react2.default.createElement('polygon', { points: '92.06,279.141 114.687,301.816 159.941,256.462 137.314,233.784 \t' }),
					_react2.default.createElement('rect', { x: '58', y: '178', width: '64', height: '32' })
				)
			);
		}
	}]);

	return IosColorWand;
}(_react2.default.Component);

exports.default = IosColorWand;
;IosColorWand.defaultProps = { bare: false };