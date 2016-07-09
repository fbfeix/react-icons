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

var IosUndoOutline = function (_React$Component) {
	_inherits(IosUndoOutline, _React$Component);

	function IosUndoOutline() {
		_classCallCheck(this, IosUndoOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosUndoOutline).apply(this, arguments));
	}

	_createClass(IosUndoOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M447.9,368.2c0-16.8,3.6-83.1-48.7-135.7c-35.2-35.4-80.3-53.4-143.3-56.2V96L64,224l192,128v-79.8 c40,1.1,62.4,9.1,86.7,20c30.9,13.8,55.3,44,75.8,76.6l19.2,31.2H448C448,389.9,447.9,377.1,447.9,368.2z M432.2,361.4 C384.6,280.6,331,256,240,256v64.8L91.9,224.1L240,127.3V192C441,192,432.2,361.4,432.2,361.4z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M447.9,368.2c0-16.8,3.6-83.1-48.7-135.7c-35.2-35.4-80.3-53.4-143.3-56.2V96L64,224l192,128v-79.8 c40,1.1,62.4,9.1,86.7,20c30.9,13.8,55.3,44,75.8,76.6l19.2,31.2H448C448,389.9,447.9,377.1,447.9,368.2z M432.2,361.4 C384.6,280.6,331,256,240,256v64.8L91.9,224.1L240,127.3V192C441,192,432.2,361.4,432.2,361.4z' })
				)
			);
		}
	}]);

	return IosUndoOutline;
}(_react2.default.Component);

exports.default = IosUndoOutline;
;IosUndoOutline.defaultProps = { bare: false };