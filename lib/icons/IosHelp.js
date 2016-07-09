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

var IosHelp = function (_React$Component) {
	_inherits(IosHelp, _React$Component);

	function IosHelp() {
		_classCallCheck(this, IosHelp);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosHelp).apply(this, arguments));
	}

	_createClass(IosHelp, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256c0,114.9,93.1,208,208,208c114.9,0,208-93.1,208-208C464,141.1,370.9,48,256,48z M260.3,366c-9.4,0-17-7.5-17-16.9c0-9.3,7.6-16.8,17-16.8c9.4,0,17,7.5,17,16.8C277.3,358.5,269.7,366,260.3,366z M294.1,250.7 c-22.8,22.5-22.2,27.4-23.3,53.3h-19c1.1-28.5,7.5-43.7,30.1-64.5c11-10.3,19.4-22.7,19.4-38.1c0-23.6-19.4-39.9-42.6-39.9 c-32.4,0-48.5,16.4-47.9,46.4H192c0.3-42,24.4-62.1,67.6-62.1c33,0,60.4,20.4,60.4,54.6C320,222.3,309.3,236.6,294.1,250.7z' })
				)
			);
		}
	}]);

	return IosHelp;
}(_react2.default.Component);

exports.default = IosHelp;
;