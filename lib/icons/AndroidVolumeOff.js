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

var AndroidVolumeOff = function (_React$Component) {
	_inherits(AndroidVolumeOff, _React$Component);

	function AndroidVolumeOff() {
		_classCallCheck(this, AndroidVolumeOff);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidVolumeOff).apply(this, arguments));
	}

	_createClass(AndroidVolumeOff, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M405.5,256c0,22.717-4.883,44.362-13.603,63.855l31.88,31.88C439.283,323.33,448,290.653,448,256 c0-93.256-64-172.254-149-192v44.978C361,127.632,405.5,186.882,405.5,256z' }),
					_react2.default.createElement('polygon', { points: '256,80.458 204.979,132.938 256,183.957 \t' }),
					_react2.default.createElement('path', { d: 'M420.842,396.885L91.116,67.157l-24,24l90.499,90.413l-8.28,10.43H64v128h85.334L256,431.543V280l94.915,94.686 C335.795,387.443,318,397.213,299,403.022V448c31-7.172,58.996-22.163,82.315-42.809l39.61,39.693l24-24.043l-24.002-24.039 L420.842,396.885z' }),
					_react2.default.createElement('path', { d: 'M352.188,256c0-38.399-21.188-72.407-53.188-88.863v59.82l50.801,50.801C351.355,270.739,352.188,263.454,352.188,256z' })
				)
			);
		}
	}]);

	return AndroidVolumeOff;
}(_react2.default.Component);

exports.default = AndroidVolumeOff;
;