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

var CodeWorking = function (_React$Component) {
	_inherits(CodeWorking, _React$Component);

	function CodeWorking() {
		_classCallCheck(this, CodeWorking);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CodeWorking).apply(this, arguments));
	}

	_createClass(CodeWorking, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { cx: '184.166', cy: '256.166', r: '24' }),
						_react2.default.createElement('circle', { cx: '256.166', cy: '256.166', r: '24' }),
						_react2.default.createElement('circle', { cx: '328.166', cy: '256.166', r: '24' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M168,392c-6.143,0-12.285-2.344-16.971-7.029l-112-112c-9.373-9.373-9.373-24.569,0-33.941l112-112 c9.373-9.372,24.568-9.372,33.941,0c9.371,9.372,9.371,24.568,0,33.941L89.941,256l95.029,95.029 c9.371,9.372,9.371,24.568,0,33.941C180.283,389.656,174.143,392,168,392z' }),
						_react2.default.createElement('path', { d: 'M344,392c6.143,0,12.285-2.344,16.971-7.029l112-112c9.373-9.373,9.373-24.569,0-33.941l-112-112 c-9.373-9.372-24.568-9.372-33.941,0c-9.371,9.372-9.371,24.568,0,33.941L422.059,256l-95.029,95.029 c-9.371,9.372-9.371,24.568,0,33.941C331.717,389.656,337.857,392,344,392z' })
					)
				)
			);
		}
	}]);

	return CodeWorking;
}(_react2.default.Component);

exports.default = CodeWorking;
;