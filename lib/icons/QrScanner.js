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

var QrScanner = function (_React$Component) {
	_inherits(QrScanner, _React$Component);

	function QrScanner() {
		_classCallCheck(this, QrScanner);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(QrScanner).apply(this, arguments));
	}

	_createClass(QrScanner, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M96,124.171c0-6.938,5.232-12.171,12.171-12.171H176V64h-66.829C75.717,64,48,90.717,48,124.171V192h48V124.171z' }),
					_react2.default.createElement('path', { d: 'M403.579,64H336v48h67.219c6.938,0,12.781,5.232,12.781,12.171V192h48v-67.829C464,90.717,437.033,64,403.579,64z' }),
					_react2.default.createElement('path', { d: 'M416,386.829c0,6.938-5.232,12.171-12.171,12.171H336v49h67.829C437.283,448,464,420.283,464,386.829V320h-48V386.829z' }),
					_react2.default.createElement('path', { d: 'M108.171,399C101.232,399,96,393.768,96,386.829V320H48v66.829C48,420.283,75.717,448,109.171,448H176v-49H108.171z' })
				)
			);
		}
	}]);

	return QrScanner;
}(_react2.default.Component);

exports.default = QrScanner;
;