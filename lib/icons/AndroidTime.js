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

var AndroidTime = function (_React$Component) {
	_inherits(AndroidTime, _React$Component);

	function AndroidTime() {
		_classCallCheck(this, AndroidTime);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidTime).apply(this, arguments));
	}

	_createClass(AndroidTime, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_1_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { 'fill-opacity': '0.9', d: 'M256,43C137.789,43,43,138.851,43,256s94.789,213,213,213s213-95.851,213-213S373.149,43,256,43z M256,426.4c-93.718,0-170.4-76.683-170.4-170.4S162.282,85.6,256,85.6S426.4,162.282,426.4,256S349.718,426.4,256,426.4z' })
						),
						_react2.default.createElement('polygon', { 'fill-opacity': '0.9', points: '266.65,149.5 234.7,149.5 234.7,277.3 346.525,344.393 362.5,317.768 266.65,261.324 \t\t' })
					)
				)
			);
		}
	}]);

	return AndroidTime;
}(_react2.default.Component);

exports.default = AndroidTime;
;