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

var DocumentText = function (_React$Component) {
	_inherits(DocumentText, _React$Component);

	function DocumentText() {
		_classCallCheck(this, DocumentText);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(DocumentText).apply(this, arguments));
	}

	_createClass(DocumentText, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M398.6,169.2c-0.9-2.2-2-4.3-3.5-6.1l-83.8-91.7c-1.9-2.1-4.2-3.6-6.7-4.9c-2.9-1.5-6.1-2.1-9.5-2.1H135.2 c-12.4,0-22.7,10.6-22.7,23.9v335.2c0,13.4,10.3,24.9,22.7,24.9h243.1c12.4,0,22.2-11.5,22.2-24.9V179.4 C400.5,175.8,400,172.3,398.6,169.2z M160.5,178.6c0-1.5,1.8-2.1,3.4-2.1h70.8c1.6,0,2.8,0.6,2.8,2.1v10.8c0,1.4-1.1,3.1-2.8,3.1 h-70.8c-1.6,0-3.4-1.7-3.4-3.1V178.6z M160.5,306.6c0-1.5,1.8-2.1,3.4-2.1h122.2c1.6,0,2.4,0.6,2.4,2.1v10.8c0,1.4-0.7,3.1-2.4,3.1 H163.9c-1.6,0-3.4-1.7-3.4-3.1V306.6z M320.5,381.4c0,1.4-0.7,3.1-2.4,3.1H163.9c-1.6,0-3.4-1.7-3.4-3.1v-10.8 c0-1.5,1.8-2.1,3.4-2.1h154.2c1.6,0,2.4,0.6,2.4,2.1V381.4z M352.5,253.4c0,1.4-0.7,3.1-2.4,3.1H163.9c-1.6,0-3.4-1.7-3.4-3.1 v-10.8c0-1.5,1.8-2.1,3.4-2.1h186.2c1.6,0,2.4,0.6,2.4,2.1V253.4z M305.6,177.5c-5.6,0-11.1-5.2-11.1-11.3v-66l71.2,77.3H305.6z' })
				)
			);
		}
	}]);

	return DocumentText;
}(_react2.default.Component);

exports.default = DocumentText;
;