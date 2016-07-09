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

var IosReload = function (_React$Component) {
	_inherits(IosReload, _React$Component);

	function IosReload() {
		_classCallCheck(this, IosReload);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosReload).apply(this, arguments));
	}

	_createClass(IosReload, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'PL_x5F_Reset_1_' },
					_react2.default.createElement('path', { d: 'M256,64c105.9,0,191.7,85.7,191.9,191.5l55-52.5l9,9.1L441.6,280L375,212.1l9-9.1l51.1,52.4 C434.8,156.9,354.6,76.8,256,76.8c-98.8,0-179.2,80.4-179.2,179.2c0,98.8,80.4,179.2,179.2,179.2c78.6,0,145.5-51,169.5-121.6 l12.4,3.5C412.3,393.2,340.6,448,256,448c-106,0-192-86-192-192S150,64,256,64z' })
				)
			);
		}
	}]);

	return IosReload;
}(_react2.default.Component);

exports.default = IosReload;
;