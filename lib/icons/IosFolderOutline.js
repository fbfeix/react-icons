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

var IosFolderOutline = function (_React$Component) {
	_inherits(IosFolderOutline, _React$Component);

	function IosFolderOutline() {
		_classCallCheck(this, IosFolderOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFolderOutline).apply(this, arguments));
	}

	_createClass(IosFolderOutline, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M457,96H215c-2.791,0-4.271-0.585-6.094-2.408l-22.501-22.501l-0.168-0.162C181.365,66.333,177.361,64,169,64H57 c-13.785,0-25,10.317-25,23v336c0,13.317,11.683,25,25,25h400c12.683,0,23-11.215,23-25V119C480,105.673,470.327,96,457,96z M57,80 h112c3.497,0,3.737,0.189,6.175,2.488l22.417,22.418c4.84,4.84,10.372,7.094,17.408,7.094h242c4.448,0,7,2.552,7,7v42.376 c-2.504-0.888-5.195-1.376-8-1.376H56c-2.805,0-5.496,0.488-8,1.376V87C48,82.677,52.672,80,57,80z M464,423c0,4.328-2.677,9-7,9H57 c-4.458,0-9-4.542-9-9V184c0-4.411,3.589-8,8-8h400c4.411,0,8,3.589,8,8V423z' })
			);
		}
	}]);

	return IosFolderOutline;
}(_react2.default.Component);

exports.default = IosFolderOutline;
;