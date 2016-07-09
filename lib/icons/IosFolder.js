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

var IosFolder = function (_React$Component) {
	_inherits(IosFolder, _React$Component);

	function IosFolder() {
		_classCallCheck(this, IosFolder);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosFolder).apply(this, arguments));
	}

	_createClass(IosFolder, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M472,176H40c-4.411,0-8,3.589-8,8v239c0,13.317,11.683,25,25,25h400c12.683,0,23-11.215,23-25V184 C480,179.589,476.411,176,472,176z' }),
					_react2.default.createElement('path', { d: 'M457,96H215c-2.791,0-4.271-0.585-6.094-2.408l-22.501-22.501l-0.168-0.162C181.365,66.333,177.361,64,169,64H57 c-13.785,0-25,10.317-25,23v74.376c2.504-0.888,5.195-1.376,8-1.376h432c2.805,0,5.496,0.488,8,1.376V119 C480,105.673,470.327,96,457,96z' })
				)
			);
		}
	}]);

	return IosFolder;
}(_react2.default.Component);

exports.default = IosFolder;
;