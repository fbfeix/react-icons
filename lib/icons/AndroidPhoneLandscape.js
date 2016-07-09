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

var AndroidPhoneLandscape = function (_React$Component) {
	_inherits(AndroidPhoneLandscape, _React$Component);

	function AndroidPhoneLandscape() {
		_classCallCheck(this, AndroidPhoneLandscape);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidPhoneLandscape).apply(this, arguments));
	}

	_createClass(AndroidPhoneLandscape, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_6_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M480,358.856V153.143C480,130.512,461.674,112,439.272,112H72.728C50.326,112,32,130.512,32,153.143v205.713 C32,381.488,50.326,400,72.728,400h366.545C461.674,400,480,381.488,480,358.856z M112,364V148h288v216H112z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_6_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M480,358.856V153.143C480,130.512,461.674,112,439.272,112H72.728C50.326,112,32,130.512,32,153.143v205.713 C32,381.488,50.326,400,72.728,400h366.545C461.674,400,480,381.488,480,358.856z M112,364V148h288v216H112z' })
					)
				)
			);
		}
	}]);

	return AndroidPhoneLandscape;
}(_react2.default.Component);

exports.default = AndroidPhoneLandscape;
;AndroidPhoneLandscape.defaultProps = { bare: false };