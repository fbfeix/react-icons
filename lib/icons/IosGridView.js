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

var IosGridView = function (_React$Component) {
	_inherits(IosGridView, _React$Component);

	function IosGridView() {
		_classCallCheck(this, IosGridView);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosGridView).apply(this, arguments));
	}

	_createClass(IosGridView, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('rect', { x: '192', y: '192', width: '128', height: '128' }),
						_react2.default.createElement('path', { d: 'M64,64v384h384V64H64z M416,192h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16 v80h80V192z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '192', y: '192', width: '128', height: '128' }),
					_react2.default.createElement('path', { d: 'M64,64v384h384V64H64z M416,192h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16 v80h80V192z' })
				)
			);
		}
	}]);

	return IosGridView;
}(_react2.default.Component);

exports.default = IosGridView;
;IosGridView.defaultProps = { bare: false };