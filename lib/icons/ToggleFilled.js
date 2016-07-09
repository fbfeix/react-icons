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

var ToggleFilled = function (_React$Component) {
	_inherits(ToggleFilled, _React$Component);

	function ToggleFilled() {
		_classCallCheck(this, ToggleFilled);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ToggleFilled).apply(this, arguments));
	}

	_createClass(ToggleFilled, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M352,208c-26.467,0-48,21.533-48,48c0,26.467,21.533,48,48,48s48-21.533,48-48C400,229.533,378.467,208,352,208z' }),
					_react2.default.createElement('path', { d: 'M352,128H160c-70.692,0-128,57.308-128,128s57.308,128,128,128h192c70.692,0,128-57.308,128-128S422.692,128,352,128z M352,336c-44.183,0-80-35.817-80-80s35.817-80,80-80s80,35.817,80,80S396.183,336,352,336z' })
				)
			);
		}
	}]);

	return ToggleFilled;
}(_react2.default.Component);

exports.default = ToggleFilled;
;