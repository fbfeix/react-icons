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

var RadioWaves = function (_React$Component) {
	_inherits(RadioWaves, _React$Component);

	function RadioWaves() {
		_classCallCheck(this, RadioWaves);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioWaves).apply(this, arguments));
	}

	_createClass(RadioWaves, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { cx: '256', cy: '256', r: '64' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M144,256c0-36.9,18.553-69.208,46.314-87.034l-23.141-24.512c-6.26,4.608-12.18,9.833-17.684,15.663 C125.314,185.729,112,219.781,112,256c0,36.219,13.314,70.271,37.49,95.883c5.504,5.829,11.424,11.055,17.684,15.662 l23.141-24.511C162.553,325.208,144,292.9,144,256z' }),
							_react2.default.createElement('path', { d: 'M368,256c0,36.9-18.553,69.208-46.314,87.034l23.141,24.511c6.26-4.607,12.18-9.833,17.684-15.662 C386.686,326.271,400,292.219,400,256c0-36.219-13.314-70.271-37.49-95.882c-5.504-5.83-11.424-11.055-17.684-15.663 l-23.141,24.512C349.447,186.792,368,219.1,368,256z' }),
							_react2.default.createElement('path', { d: 'M64,256c0-55.578,25.251-104.907,64.263-135.817L105.433,96c-5.999,5-11.739,10.396-17.197,16.178 c-17.622,18.669-31.462,40.417-41.134,64.641C37.081,201.917,32,228.556,32,256c0,27.443,5.081,54.084,15.102,79.181 c9.672,24.226,23.512,45.973,41.134,64.642c5.458,5.781,11.198,11.177,17.197,16.178l22.829-24.183 C89.251,360.907,64,311.578,64,256z' }),
							_react2.default.createElement('path', { d: 'M448,256c0,55.578-25.251,104.907-64.262,135.817l22.828,23.848c6-5.001,11.74-10.062,17.198-15.843 c17.622-18.669,31.462-40.416,41.134-64.642C474.918,310.084,480,283.443,480,256c0-27.444-5.082-54.083-15.102-79.181 c-9.672-24.225-23.512-45.972-41.134-64.641C418.307,106.396,412.566,101,406.566,96l-22.829,24.183 C422.749,151.093,448,200.422,448,256z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('circle', { cx: '256', cy: '256', r: '64' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M144,256c0-36.9,18.553-69.208,46.314-87.034l-23.141-24.512c-6.26,4.608-12.18,9.833-17.684,15.663 C125.314,185.729,112,219.781,112,256c0,36.219,13.314,70.271,37.49,95.883c5.504,5.829,11.424,11.055,17.684,15.662 l23.141-24.511C162.553,325.208,144,292.9,144,256z' }),
						_react2.default.createElement('path', { d: 'M368,256c0,36.9-18.553,69.208-46.314,87.034l23.141,24.511c6.26-4.607,12.18-9.833,17.684-15.662 C386.686,326.271,400,292.219,400,256c0-36.219-13.314-70.271-37.49-95.882c-5.504-5.83-11.424-11.055-17.684-15.663 l-23.141,24.512C349.447,186.792,368,219.1,368,256z' }),
						_react2.default.createElement('path', { d: 'M64,256c0-55.578,25.251-104.907,64.263-135.817L105.433,96c-5.999,5-11.739,10.396-17.197,16.178 c-17.622,18.669-31.462,40.417-41.134,64.641C37.081,201.917,32,228.556,32,256c0,27.443,5.081,54.084,15.102,79.181 c9.672,24.226,23.512,45.973,41.134,64.642c5.458,5.781,11.198,11.177,17.197,16.178l22.829-24.183 C89.251,360.907,64,311.578,64,256z' }),
						_react2.default.createElement('path', { d: 'M448,256c0,55.578-25.251,104.907-64.262,135.817l22.828,23.848c6-5.001,11.74-10.062,17.198-15.843 c17.622-18.669,31.462-40.416,41.134-64.642C474.918,310.084,480,283.443,480,256c0-27.444-5.082-54.083-15.102-79.181 c-9.672-24.225-23.512-45.972-41.134-64.641C418.307,106.396,412.566,101,406.566,96l-22.829,24.183 C422.749,151.093,448,200.422,448,256z' })
					)
				)
			);
		}
	}]);

	return RadioWaves;
}(_react2.default.Component);

exports.default = RadioWaves;
;RadioWaves.defaultProps = { bare: false };