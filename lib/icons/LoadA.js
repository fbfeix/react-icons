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

var LoadA = function (_React$Component) {
	_inherits(LoadA, _React$Component);

	function LoadA() {
		_classCallCheck(this, LoadA);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(LoadA).apply(this, arguments));
	}

	_createClass(LoadA, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('circle', { cx: '256', cy: '96', r: '64' }),
					_react2.default.createElement('circle', { cx: '96', cy: '256', r: '48' }),
					_react2.default.createElement('circle', { cx: '368', cy: '144', r: '8' }),
					_react2.default.createElement('path', { d: 'M180.1,107.6c-19.9-20.1-52.2-20.1-72.1,0c-19.9,20.1-19.9,52.7,0,72.8c19.9,20.1,52.2,20.1,72.1,0 C200,160.3,200,127.7,180.1,107.6z' }),
					_react2.default.createElement('circle', { cx: '416', cy: '256', r: '16' }),
					_react2.default.createElement('circle', { cx: '369', cy: '369', r: '24' }),
					_react2.default.createElement('circle', { cx: '256', cy: '416', r: '32' }),
					_react2.default.createElement('circle', { cx: '144', cy: '368', r: '40' })
				)
			);
		}
	}]);

	return LoadA;
}(_react2.default.Component);

exports.default = LoadA;
;