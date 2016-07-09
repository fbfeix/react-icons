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

var IosHelpOutline = function (_React$Component) {
	_inherits(IosHelpOutline, _React$Component);

	function IosHelpOutline() {
		_classCallCheck(this, IosHelpOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosHelpOutline).apply(this, arguments));
	}

	_createClass(IosHelpOutline, [{
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
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,446.7c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
							)
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M259.6,146c-43.2,0-67.3,20.3-67.6,62.2h18.8c-0.6-30.4,15.5-46.5,47.9-46.5c23.2,0,42.6,16.2,42.6,39.8 c0,15.3-8.3,27.7-19.4,38.1c-22.6,20.8-29,36-30.1,64.5h19c1.1-25.8,0.5-30.7,23.3-53.3c15.2-14.2,25.9-28.3,25.9-50.2 C320,166.4,292.6,146,259.6,146z' }),
							_react2.default.createElement('path', { d: 'M260.3,332.3c-9.4,0-17,7.5-17,16.8c0,9.3,7.6,16.9,17,16.9c9.4,0,17-7.5,17-16.9C277.3,339.8,269.7,332.3,260.3,332.3z' })
						)
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
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M256,446.7c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
						)
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M259.6,146c-43.2,0-67.3,20.3-67.6,62.2h18.8c-0.6-30.4,15.5-46.5,47.9-46.5c23.2,0,42.6,16.2,42.6,39.8 c0,15.3-8.3,27.7-19.4,38.1c-22.6,20.8-29,36-30.1,64.5h19c1.1-25.8,0.5-30.7,23.3-53.3c15.2-14.2,25.9-28.3,25.9-50.2 C320,166.4,292.6,146,259.6,146z' }),
						_react2.default.createElement('path', { d: 'M260.3,332.3c-9.4,0-17,7.5-17,16.8c0,9.3,7.6,16.9,17,16.9c9.4,0,17-7.5,17-16.9C277.3,339.8,269.7,332.3,260.3,332.3z' })
					)
				)
			);
		}
	}]);

	return IosHelpOutline;
}(_react2.default.Component);

exports.default = IosHelpOutline;
;IosHelpOutline.defaultProps = { bare: false };