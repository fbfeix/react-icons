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

var Knife = function (_React$Component) {
	_inherits(Knife, _React$Component);

	function Knife() {
		_classCallCheck(this, Knife);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Knife).apply(this, arguments));
	}

	_createClass(Knife, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M285.7,32c-3.3,0-6,1.4-8,3.8C259,58.7,224,116.1,224,250.1c0,39.2,33,39.2,32,69.4c0,0.1,0,0.3,0,0.4 c-2,47.1-14.9,111.1-16,130.3c-0.4,15.2,9.7,29.8,24.1,29.8c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c14.4,0,23.5-14.4,23.5-29.6V38.3 C288,33.3,287.5,32,285.7,32z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M285.7,32c-3.3,0-6,1.4-8,3.8C259,58.7,224,116.1,224,250.1c0,39.2,33,39.2,32,69.4c0,0.1,0,0.3,0,0.4 c-2,47.1-14.9,111.1-16,130.3c-0.4,15.2,9.7,29.8,24.1,29.8c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.2,0c14.4,0,23.5-14.4,23.5-29.6V38.3 C288,33.3,287.5,32,285.7,32z' })
			);
		}
	}]);

	return Knife;
}(_react2.default.Component);

exports.default = Knife;
;Knife.defaultProps = { bare: false };