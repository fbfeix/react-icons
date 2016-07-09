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

var LoadD = function (_React$Component) {
	_inherits(LoadD, _React$Component);

	function LoadD() {
		_classCallCheck(this, LoadD);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadD).apply(this, arguments));
	}

	_createClass(LoadD, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M432,240h-80c-8.8,0-16,7.2-16,16s7.2,16,16,16h80c8.8,0,16-7.2,16-16S440.8,240,432,240z' }),
						_react2.default.createElement('path', { d: 'M176,256c0-8.8-7.2-16-16-16H80c-8.8,0-16,7.2-16,16s7.2,16,16,16h80C168.8,272,176,264.8,176,256z' }),
						_react2.default.createElement('path', { d: 'M256,336c-8.8,0-16,7.2-16,16v80c0,8.8,7.2,16,16,16s16-7.2,16-16v-80C272,343.2,264.8,336,256,336z' }),
						_react2.default.createElement('path', { d: 'M256,64c-8.8,0-16,7.2-16,16v80c0,8.8,7.2,16,16,16s16-7.2,16-16V80C272,71.2,264.8,64,256,64z' }),
						_react2.default.createElement('path', { d: 'M325.3,216c4.4,7.7,14.2,10.3,21.9,5.9l69.3-40c7.7-4.4,10.3-14.2,5.9-21.9s-14.2-10.3-21.9-5.9l-69.3,40 C323.5,198.6,320.9,208.3,325.3,216z' }),
						_react2.default.createElement('path', { d: 'M186.7,296c-4.4-7.7-14.2-10.3-21.9-5.9l-69.3,40c-7.7,4.4-10.3,14.2-5.9,21.9s14.2,10.3,21.9,5.9l69.3-40 C188.5,313.4,191.1,303.7,186.7,296z' }),
						_react2.default.createElement('path', { d: 'M317.9,331.1c-4.4-7.7-14.2-10.3-21.9-5.9s-10.3,14.2-5.9,21.9l40,69.3c4.4,7.7,14.2,10.3,21.9,5.9 c7.7-4.4,10.3-14.2,5.9-21.9L317.9,331.1z' }),
						_react2.default.createElement('path', { d: 'M181.9,95.6c-4.4-7.7-14.2-10.3-21.9-5.9c-7.7,4.4-10.3,14.2-5.9,21.9l40,69.3c4.4,7.7,14.2,10.3,21.9,5.9 s10.3-14.2,5.9-21.9L181.9,95.6z' }),
						_react2.default.createElement('path', { d: 'M296,186.7c7.7,4.4,17.4,1.8,21.9-5.9l40-69.3c4.4-7.7,1.8-17.4-5.9-21.9c-7.7-4.4-17.4-1.8-21.9,5.9l-40,69.3 C285.7,172.5,288.3,182.3,296,186.7z' }),
						_react2.default.createElement('path', { d: 'M216,325.3c-7.7-4.4-17.4-1.8-21.9,5.9l-40,69.3c-4.4,7.7-1.8,17.4,5.9,21.9c7.7,4.4,17.4,1.8,21.9-5.9l40-69.3 C226.3,339.5,223.7,329.7,216,325.3z' }),
						_react2.default.createElement('path', { d: 'M416.4,330.1l-69.3-40c-7.7-4.4-17.4-1.8-21.9,5.9c-4.4,7.7-1.8,17.4,5.9,21.9l69.3,40c7.7,4.4,17.4,1.8,21.9-5.9 C426.7,344.3,424.1,334.6,416.4,330.1z' }),
						_react2.default.createElement('path', { d: 'M95.6,181.9l69.3,40c7.7,4.4,17.4,1.8,21.9-5.9s1.8-17.4-5.9-21.9l-69.3-40c-7.7-4.4-17.4-1.8-21.9,5.9 C85.3,167.7,87.9,177.4,95.6,181.9z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M432,240h-80c-8.8,0-16,7.2-16,16s7.2,16,16,16h80c8.8,0,16-7.2,16-16S440.8,240,432,240z' }),
					_react2.default.createElement('path', { d: 'M176,256c0-8.8-7.2-16-16-16H80c-8.8,0-16,7.2-16,16s7.2,16,16,16h80C168.8,272,176,264.8,176,256z' }),
					_react2.default.createElement('path', { d: 'M256,336c-8.8,0-16,7.2-16,16v80c0,8.8,7.2,16,16,16s16-7.2,16-16v-80C272,343.2,264.8,336,256,336z' }),
					_react2.default.createElement('path', { d: 'M256,64c-8.8,0-16,7.2-16,16v80c0,8.8,7.2,16,16,16s16-7.2,16-16V80C272,71.2,264.8,64,256,64z' }),
					_react2.default.createElement('path', { d: 'M325.3,216c4.4,7.7,14.2,10.3,21.9,5.9l69.3-40c7.7-4.4,10.3-14.2,5.9-21.9s-14.2-10.3-21.9-5.9l-69.3,40 C323.5,198.6,320.9,208.3,325.3,216z' }),
					_react2.default.createElement('path', { d: 'M186.7,296c-4.4-7.7-14.2-10.3-21.9-5.9l-69.3,40c-7.7,4.4-10.3,14.2-5.9,21.9s14.2,10.3,21.9,5.9l69.3-40 C188.5,313.4,191.1,303.7,186.7,296z' }),
					_react2.default.createElement('path', { d: 'M317.9,331.1c-4.4-7.7-14.2-10.3-21.9-5.9s-10.3,14.2-5.9,21.9l40,69.3c4.4,7.7,14.2,10.3,21.9,5.9 c7.7-4.4,10.3-14.2,5.9-21.9L317.9,331.1z' }),
					_react2.default.createElement('path', { d: 'M181.9,95.6c-4.4-7.7-14.2-10.3-21.9-5.9c-7.7,4.4-10.3,14.2-5.9,21.9l40,69.3c4.4,7.7,14.2,10.3,21.9,5.9 s10.3-14.2,5.9-21.9L181.9,95.6z' }),
					_react2.default.createElement('path', { d: 'M296,186.7c7.7,4.4,17.4,1.8,21.9-5.9l40-69.3c4.4-7.7,1.8-17.4-5.9-21.9c-7.7-4.4-17.4-1.8-21.9,5.9l-40,69.3 C285.7,172.5,288.3,182.3,296,186.7z' }),
					_react2.default.createElement('path', { d: 'M216,325.3c-7.7-4.4-17.4-1.8-21.9,5.9l-40,69.3c-4.4,7.7-1.8,17.4,5.9,21.9c7.7,4.4,17.4,1.8,21.9-5.9l40-69.3 C226.3,339.5,223.7,329.7,216,325.3z' }),
					_react2.default.createElement('path', { d: 'M416.4,330.1l-69.3-40c-7.7-4.4-17.4-1.8-21.9,5.9c-4.4,7.7-1.8,17.4,5.9,21.9l69.3,40c7.7,4.4,17.4,1.8,21.9-5.9 C426.7,344.3,424.1,334.6,416.4,330.1z' }),
					_react2.default.createElement('path', { d: 'M95.6,181.9l69.3,40c7.7,4.4,17.4,1.8,21.9-5.9s1.8-17.4-5.9-21.9l-69.3-40c-7.7-4.4-17.4-1.8-21.9,5.9 C85.3,167.7,87.9,177.4,95.6,181.9z' })
				)
			);
		}
	}]);

	return LoadD;
}(_react2.default.Component);

exports.default = LoadD;
;LoadD.defaultProps = { bare: false };