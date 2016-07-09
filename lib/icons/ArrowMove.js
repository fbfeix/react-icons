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

var ArrowMove = function (_React$Component) {
	_inherits(ArrowMove, _React$Component);

	function ArrowMove() {
		_classCallCheck(this, ArrowMove);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrowMove).apply(this, arguments));
	}

	_createClass(ArrowMove, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '480,256 384,160 384,236 276,236 276,128 352,128 256,32 160,128 236,128 236,236 128,236 128,160 32,256 128,352  128,276 236,276 236,384 160,384 256,480 352,384 275.8,384 275.4,275.5 384,275.8 384,352 ' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('polygon', { points: '480,256 384,160 384,236 276,236 276,128 352,128 256,32 160,128 236,128 236,236 128,236 128,160 32,256 128,352  128,276 236,276 236,384 160,384 256,480 352,384 275.8,384 275.4,275.5 384,275.8 384,352 ' })
			);
		}
	}]);

	return ArrowMove;
}(_react2.default.Component);

exports.default = ArrowMove;
;ArrowMove.defaultProps = { bare: false };