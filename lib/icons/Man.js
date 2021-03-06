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

var Man = function (_React$Component) {
	_inherits(Man, _React$Component);

	function Man() {
		_classCallCheck(this, Man);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Man).apply(this, arguments));
	}

	_createClass(Man, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,106.6c20.6,0.1,37.3-16.6,37.3-37.3c0-20.6-16.7-37.3-37.3-37.3c-20.6,0-37.3,16.7-37.3,37.3 C218.7,89.9,235.4,106.6,256,106.6z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M293.4,115H256h-37.4c-28.2,0-46.6,24.8-46.6,48.4V277c0,22,31,22,31,0V172h6v285.6c0,30.4,42,29.4,43,0V293h7h1v164.7 c1.7,31.2,43,28.2,43-0.1V172h5v105c0,22,32,22,32,0V163.4C340,139.9,321.5,115,293.4,115z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,106.6c20.6,0.1,37.3-16.6,37.3-37.3c0-20.6-16.7-37.3-37.3-37.3c-20.6,0-37.3,16.7-37.3,37.3 C218.7,89.9,235.4,106.6,256,106.6z' }),
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M293.4,115H256h-37.4c-28.2,0-46.6,24.8-46.6,48.4V277c0,22,31,22,31,0V172h6v285.6c0,30.4,42,29.4,43,0V293h7h1v164.7 c1.7,31.2,43,28.2,43-0.1V172h5v105c0,22,32,22,32,0V163.4C340,139.9,321.5,115,293.4,115z' })
				)
			);
		}
	}]);

	return Man;
}(_react2.default.Component);

exports.default = Man;
;Man.defaultProps = { bare: false };