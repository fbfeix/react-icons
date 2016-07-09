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

var ReplyAll = function (_React$Component) {
	_inherits(ReplyAll, _React$Component);

	function ReplyAll() {
		_classCallCheck(this, ReplyAll);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ReplyAll).apply(this, arguments));
	}

	_createClass(ReplyAll, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M304.5,192v-80L152.7,255.8L304.5,390v-91.9c68,0,107.9,8.9,159.1,101.9C463.6,400,457.5,192,304.5,192z' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('polygon', { points: '47.5,256 191.5,382.5 191.5,324 109.3,256 191.5,177.4 191.5,120.4 \t\t' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M304.5,192v-80L152.7,255.8L304.5,390v-91.9c68,0,107.9,8.9,159.1,101.9C463.6,400,457.5,192,304.5,192z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '47.5,256 191.5,382.5 191.5,324 109.3,256 191.5,177.4 191.5,120.4 \t\t' })
					)
				)
			);
		}
	}]);

	return ReplyAll;
}(_react2.default.Component);

exports.default = ReplyAll;
;ReplyAll.defaultProps = { bare: false };