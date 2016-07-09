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

var Scissors = function (_React$Component) {
	_inherits(Scissors, _React$Component);

	function Scissors() {
		_classCallCheck(this, Scissors);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Scissors).apply(this, arguments));
	}

	_createClass(Scissors, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M405.178,115.667c13.314-32.667,17.309-64-5.326-83.667L255.726,224l-16.976,23c0,0-27.627,40.011-37.28,58.667 s-19.306,39.333-27.294,54c-7.01,12.871-10.438,15.221-14.322,11.548c-0.506-0.591-1.026-1.168-1.553-1.736 c-0.037-0.047-0.073-0.09-0.11-0.138c-1.143-1.472-2.75-3.002-4.635-4.467C144.195,356.795,132.548,352,119.92,352 C89.037,352,64,380.653,64,416s25.037,64,55.92,64c25.282,0,46.635-19.205,53.553-45.561l-0.004,0.043 c0,0,13.355-41.482,32.661-71.482c19.306-30,49.596-43,49.596-43l31.954-32C287.68,288,391.863,148.334,405.178,115.667z M119.92,448c-15.418,0-27.918-14.353-27.918-32s12.5-32,27.918-32c15.419,0,27.918,14.353,27.918,32S135.339,448,119.92,448z M256,288c-8.836,0-16-7.163-16-16c0-8.836,7.164-16,16-16c8.837,0,16,7.164,16,16C272,280.837,264.837,288,256,288z' }),
						_react2.default.createElement('path', { d: 'M207.28,265.255c9.18-14.114,17.671-26.43,18.304-27.346l0.143-0.208l0.15-0.203l16.976-23l0.038-0.052l0.039-0.052 l2.941-3.918L111.896,32c-22.634,19.667-18.64,51-5.326,83.667C116.523,140.087,177.249,224.29,207.28,265.255z' }),
						_react2.default.createElement('path', { d: 'M391.828,352c-12.628,0-24.275,4.795-33.637,12.874c-1.885,1.465-3.492,2.995-4.635,4.467 c-0.037,0.048-0.072,0.091-0.109,0.138c-0.526,0.568-1.047,1.146-1.553,1.736c-3.884,3.673-7.312,1.323-14.322-11.548 c-7.988-14.667-17.641-35.344-27.294-54c-1.77-3.421-4.146-7.561-6.843-12.038c-1.272,1.712-2.264,3.043-2.932,3.938l-0.688,0.924 l-0.813,0.815l-28.688,28.729c10.433,6.855,24.565,18.276,35.306,34.965c19.305,30,32.66,71.482,32.66,71.482l-0.004-0.043 C345.193,460.795,366.546,480,391.828,480C422.711,480,448,451.347,448,416S422.711,352,391.828,352z M391.828,448 c-15.42,0-27.918-14.353-27.918-32s12.498-32,27.918-32c15.418,0,27.918,14.353,27.918,32S407.246,448,391.828,448z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M405.178,115.667c13.314-32.667,17.309-64-5.326-83.667L255.726,224l-16.976,23c0,0-27.627,40.011-37.28,58.667 s-19.306,39.333-27.294,54c-7.01,12.871-10.438,15.221-14.322,11.548c-0.506-0.591-1.026-1.168-1.553-1.736 c-0.037-0.047-0.073-0.09-0.11-0.138c-1.143-1.472-2.75-3.002-4.635-4.467C144.195,356.795,132.548,352,119.92,352 C89.037,352,64,380.653,64,416s25.037,64,55.92,64c25.282,0,46.635-19.205,53.553-45.561l-0.004,0.043 c0,0,13.355-41.482,32.661-71.482c19.306-30,49.596-43,49.596-43l31.954-32C287.68,288,391.863,148.334,405.178,115.667z M119.92,448c-15.418,0-27.918-14.353-27.918-32s12.5-32,27.918-32c15.419,0,27.918,14.353,27.918,32S135.339,448,119.92,448z M256,288c-8.836,0-16-7.163-16-16c0-8.836,7.164-16,16-16c8.837,0,16,7.164,16,16C272,280.837,264.837,288,256,288z' }),
					_react2.default.createElement('path', { d: 'M207.28,265.255c9.18-14.114,17.671-26.43,18.304-27.346l0.143-0.208l0.15-0.203l16.976-23l0.038-0.052l0.039-0.052 l2.941-3.918L111.896,32c-22.634,19.667-18.64,51-5.326,83.667C116.523,140.087,177.249,224.29,207.28,265.255z' }),
					_react2.default.createElement('path', { d: 'M391.828,352c-12.628,0-24.275,4.795-33.637,12.874c-1.885,1.465-3.492,2.995-4.635,4.467 c-0.037,0.048-0.072,0.091-0.109,0.138c-0.526,0.568-1.047,1.146-1.553,1.736c-3.884,3.673-7.312,1.323-14.322-11.548 c-7.988-14.667-17.641-35.344-27.294-54c-1.77-3.421-4.146-7.561-6.843-12.038c-1.272,1.712-2.264,3.043-2.932,3.938l-0.688,0.924 l-0.813,0.815l-28.688,28.729c10.433,6.855,24.565,18.276,35.306,34.965c19.305,30,32.66,71.482,32.66,71.482l-0.004-0.043 C345.193,460.795,366.546,480,391.828,480C422.711,480,448,451.347,448,416S422.711,352,391.828,352z M391.828,448 c-15.42,0-27.918-14.353-27.918-32s12.498-32,27.918-32c15.418,0,27.918,14.353,27.918,32S407.246,448,391.828,448z' })
				)
			);
		}
	}]);

	return Scissors;
}(_react2.default.Component);

exports.default = Scissors;
;Scissors.defaultProps = { bare: false };