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

var Leaf = function (_React$Component) {
	_inherits(Leaf, _React$Component);

	function Leaf() {
		_classCallCheck(this, Leaf);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Leaf).apply(this, arguments));
	}

	_createClass(Leaf, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M456.7,378.7c-52.5-8-56.5-15.7-56.5-15.7c10.8-64.9-22.7-147.1-77.4-191.6c-72.8-59.2-183.5-16.2-269.7-106.2 c-20.1-21-8.4,235.5,99.5,332.7c78.9,71,171.8,49.2,197.3,37.6c23.1-10.6,39.3-29.9,39.3-29.9c42.1,13,62.9,12.2,62.9,12.2 C466.9,419.6,474.4,381.4,456.7,378.7z M360.6,383.1c-138.2-40.9-242.1-184.5-242.1-184.5s91.2,107.7,252,160.2 C370.7,366.9,365.9,378.5,360.6,383.1z' })
				)
			);
		}
	}]);

	return Leaf;
}(_react2.default.Component);

exports.default = Leaf;
;