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

var Merge = function (_React$Component) {
	_inherits(Merge, _React$Component);

	function Merge() {
		_classCallCheck(this, Merge);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Merge).apply(this, arguments));
	}

	_createClass(Merge, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M384,224c-23.637,0-44.307,12.89-55.391,32H319c-42.464,0-79.99-17.904-111.535-53.214 c-20.356-22.787-33.493-48.869-37.856-58.218C183.301,132.822,192,115.413,192,96c0-35.29-28.71-64-64-64S64,60.71,64,96 c0,23.637,12.89,44.307,32,55.391v209.219C76.89,371.693,64,392.363,64,416c0,35.29,28.71,64,64,64s64-28.71,64-64 c0-23.637-12.89-44.307-32-55.391V245.692C203.553,294.307,258.468,320,319,320h9.609c11.084,19.11,31.754,32,55.391,32 c35.29,0,64-28.71,64-64S419.29,224,384,224z M128,64c17.673,0,32,14.327,32,32s-14.327,32-32,32s-32-14.327-32-32 S110.327,64,128,64z M128,448c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S145.673,448,128,448z M384,320 c-17.673,0-32-14.327-32-32s14.327-32,32-32s32,14.327,32,32S401.673,320,384,320z' })
			);
		}
	}]);

	return Merge;
}(_react2.default.Component);

exports.default = Merge;
;