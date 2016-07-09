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

var IosLoopStrong = function (_React$Component) {
	_inherits(IosLoopStrong, _React$Component);

	function IosLoopStrong() {
		_classCallCheck(this, IosLoopStrong);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosLoopStrong).apply(this, arguments));
	}

	_createClass(IosLoopStrong, [{
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
							_react2.default.createElement('path', { d: 'M256,48c-75.033,0-144.531,40.658-181.373,106.107l-1.963,3.485l20.915,11.771l1.962-3.485 C128.138,107.973,189.621,72,256,72c101.458,0,184,82.542,184,184c0,12.509-1.262,25.007-3.749,37.147l-0.803,3.918l23.511,4.819 l0.804-3.919C462.574,284.244,464,270.125,464,256C464,141.309,370.691,48,256,48z' }),
							_react2.default.createElement('path', { d: 'M416.459,346.119C383.862,404.027,322.379,440,256,440c-101.458,0-184-82.542-184-184c0-12.512,1.262-25.011,3.75-37.15 l0.803-3.918l-23.511-4.819l-0.804,3.918C49.426,227.75,48,241.87,48,256c0,114.691,93.309,208,208,208 c75.033,0,144.531-40.658,181.373-106.109l1.963-3.485l-20.915-11.771L416.459,346.119z' })
						),
						_react2.default.createElement('polygon', { points: '384,256 448,320 512,256 \t' }),
						_react2.default.createElement('polygon', { points: '0,256 64,192 128,256 \t' })
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
						_react2.default.createElement('path', { d: 'M256,48c-75.033,0-144.531,40.658-181.373,106.107l-1.963,3.485l20.915,11.771l1.962-3.485 C128.138,107.973,189.621,72,256,72c101.458,0,184,82.542,184,184c0,12.509-1.262,25.007-3.749,37.147l-0.803,3.918l23.511,4.819 l0.804-3.919C462.574,284.244,464,270.125,464,256C464,141.309,370.691,48,256,48z' }),
						_react2.default.createElement('path', { d: 'M416.459,346.119C383.862,404.027,322.379,440,256,440c-101.458,0-184-82.542-184-184c0-12.512,1.262-25.011,3.75-37.15 l0.803-3.918l-23.511-4.819l-0.804,3.918C49.426,227.75,48,241.87,48,256c0,114.691,93.309,208,208,208 c75.033,0,144.531-40.658,181.373-106.109l1.963-3.485l-20.915-11.771L416.459,346.119z' })
					),
					_react2.default.createElement('polygon', { points: '384,256 448,320 512,256 \t' }),
					_react2.default.createElement('polygon', { points: '0,256 64,192 128,256 \t' })
				)
			);
		}
	}]);

	return IosLoopStrong;
}(_react2.default.Component);

exports.default = IosLoopStrong;
;IosLoopStrong.defaultProps = { bare: false };