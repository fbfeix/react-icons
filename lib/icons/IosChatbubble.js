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

var IosChatbubble = function (_React$Component) {
	_inherits(IosChatbubble, _React$Component);

	function IosChatbubble() {
		_classCallCheck(this, IosChatbubble);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosChatbubble).apply(this, arguments));
	}

	_createClass(IosChatbubble, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,96C149.9,96,64,165.1,64,250.3c0,30.7,11.2,59.3,30.4,83.3c0.9,0.9,2.9,3.8,3.6,4.9c0,0-1-1.6-1.1-1.9c0,0,0,0,0,0l0,0 c0,0,0,0,0,0c2.3,3.3,3.6,7.1,3.6,11.2c0,1.4-17.9,58-17.9,58l0,0c-1.3,4.4,2.1,8.9,7.6,10c0.8,0.2,1.6,0.2,2.4,0.2 c1.3,0,2.5-0.2,3.7-0.5l1.6-0.6l50.6-22c0.9-0.4,9-3.5,10-3.9c0,0,0.6-0.2,0.6-0.2c0,0-0.1,0-0.6,0.2c3.4-1.2,7.2-1.8,11.2-1.8 c3.6,0,7.1,0.5,10.3,1.5c0.1,0,0.2,0,0.2,0.1c0.5,0.2,1,0.3,1.5,0.5c23.1,7.9,48.4,10.3,75.1,10.3c106,0,191-64.1,191-149.3 C448,165.1,362,96,256,96L256,96z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M256,96C149.9,96,64,165.1,64,250.3c0,30.7,11.2,59.3,30.4,83.3c0.9,0.9,2.9,3.8,3.6,4.9c0,0-1-1.6-1.1-1.9c0,0,0,0,0,0l0,0 c0,0,0,0,0,0c2.3,3.3,3.6,7.1,3.6,11.2c0,1.4-17.9,58-17.9,58l0,0c-1.3,4.4,2.1,8.9,7.6,10c0.8,0.2,1.6,0.2,2.4,0.2 c1.3,0,2.5-0.2,3.7-0.5l1.6-0.6l50.6-22c0.9-0.4,9-3.5,10-3.9c0,0,0.6-0.2,0.6-0.2c0,0-0.1,0-0.6,0.2c3.4-1.2,7.2-1.8,11.2-1.8 c3.6,0,7.1,0.5,10.3,1.5c0.1,0,0.2,0,0.2,0.1c0.5,0.2,1,0.3,1.5,0.5c23.1,7.9,48.4,10.3,75.1,10.3c106,0,191-64.1,191-149.3 C448,165.1,362,96,256,96L256,96z' })
			);
		}
	}]);

	return IosChatbubble;
}(_react2.default.Component);

exports.default = IosChatbubble;
;IosChatbubble.defaultProps = { bare: false };