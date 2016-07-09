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

var Calculator = function (_React$Component) {
	_inherits(Calculator, _React$Component);

	function Calculator() {
		_classCallCheck(this, Calculator);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Calculator).apply(this, arguments));
	}

	_createClass(Calculator, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M400,32H112c-8.8,0-16,7.2-16,16v416c0,8.8,7.2,16,16,16h288c8.8,0,16-7.2,16-16V48C416,39.2,408.8,32,400,32z M144,208h32 v32h-32V208z M144,272h32v32h-32V272z M144,336h32v32h-32V336z M240,432h-96v-32h96V432z M240,368h-32v-32h32V368z M240,304h-32v-32 h32V304z M240,240h-32v-32h32V240z M304,432h-32v-32h32V432z M304,368h-32v-32h32V368z M304,304h-32v-32h32V304z M304,240h-32v-32 h32V240z M368,432h-32v-96h32V432z M368,304h-32v-32h32V304z M368,240h-32v-32h32V240z M368,160H144V80h224V160z' })
			);
		}
	}]);

	return Calculator;
}(_react2.default.Component);

exports.default = Calculator;
;