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

var Grid = function (_React$Component) {
	_inherits(Grid, _React$Component);

	function Grid() {
		_classCallCheck(this, Grid);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).apply(this, arguments));
	}

	_createClass(Grid, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M160,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z' }),
							_react2.default.createElement('path', { d: 'M288,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z' }),
							_react2.default.createElement('path', { d: 'M416,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M160,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z' }),
							_react2.default.createElement('path', { d: 'M288,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z' }),
							_react2.default.createElement('path', { d: 'M416,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M160,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z' }),
							_react2.default.createElement('path', { d: 'M288,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z' }),
							_react2.default.createElement('path', { d: 'M416,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M160,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z' }),
						_react2.default.createElement('path', { d: 'M288,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z' }),
						_react2.default.createElement('path', { d: 'M416,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M160,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z' }),
						_react2.default.createElement('path', { d: 'M288,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z' }),
						_react2.default.createElement('path', { d: 'M416,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M160,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z' }),
						_react2.default.createElement('path', { d: 'M288,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z' }),
						_react2.default.createElement('path', { d: 'M416,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z' })
					)
				)
			);
		}
	}]);

	return Grid;
}(_react2.default.Component);

exports.default = Grid;
;Grid.defaultProps = { bare: false };