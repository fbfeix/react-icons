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

var Flag = function (_React$Component) {
	_inherits(Flag, _React$Component);

	function Flag() {
		_classCallCheck(this, Flag);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Flag).apply(this, arguments));
	}

	_createClass(Flag, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M426.4,182.5c-35.8,5.9-94.2,7.5-133-66.1c-41.6-79.1-108.8-81.5-148.1-74.3c-19.1,3.5-33.4,19.5-33.4,35v196.6 c11.3,4.3,23.4-0.2,26.5-0.8c0.8-0.2,1.5-0.3,2.4-0.5c25-5.5,51.4-8.1,116.8,23.3c82,39.3,153.8-33.1,181.6-83.5 c2-3.5,8.7-20.2,8.7-36.2C438.2,180,426.4,182.5,426.4,182.5z' }),
						_react2.default.createElement('path', { d: 'M88,32H72c-4.4,0-8,3.6-8,8v432c0,4.4,3.6,8,8,8h16c4.4,0,8-3.6,8-8V40C96,35.6,92.4,32,88,32z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M426.4,182.5c-35.8,5.9-94.2,7.5-133-66.1c-41.6-79.1-108.8-81.5-148.1-74.3c-19.1,3.5-33.4,19.5-33.4,35v196.6 c11.3,4.3,23.4-0.2,26.5-0.8c0.8-0.2,1.5-0.3,2.4-0.5c25-5.5,51.4-8.1,116.8,23.3c82,39.3,153.8-33.1,181.6-83.5 c2-3.5,8.7-20.2,8.7-36.2C438.2,180,426.4,182.5,426.4,182.5z' }),
					_react2.default.createElement('path', { d: 'M88,32H72c-4.4,0-8,3.6-8,8v432c0,4.4,3.6,8,8,8h16c4.4,0,8-3.6,8-8V40C96,35.6,92.4,32,88,32z' })
				)
			);
		}
	}]);

	return Flag;
}(_react2.default.Component);

exports.default = Flag;
;Flag.defaultProps = { bare: false };