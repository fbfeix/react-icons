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

var AndroidRadioButtonOn = function (_React$Component) {
	_inherits(AndroidRadioButtonOn, _React$Component);

	function AndroidRadioButtonOn() {
		_classCallCheck(this, AndroidRadioButtonOn);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidRadioButtonOn).apply(this, arguments));
	}

	_createClass(AndroidRadioButtonOn, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_21_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M256,152c-57.2,0-104,46.8-104,104s46.8,104,104,104s104-46.8,104-104S313.2,152,256,152z M256,48 C141.601,48,48,141.601,48,256s93.601,208,208,208s208-93.601,208-208S370.399,48,256,48z M256,422.4 c-91.518,0-166.4-74.883-166.4-166.4S164.482,89.6,256,89.6S422.4,164.482,422.4,256S347.518,422.4,256,422.4z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_21_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,152c-57.2,0-104,46.8-104,104s46.8,104,104,104s104-46.8,104-104S313.2,152,256,152z M256,48 C141.601,48,48,141.601,48,256s93.601,208,208,208s208-93.601,208-208S370.399,48,256,48z M256,422.4 c-91.518,0-166.4-74.883-166.4-166.4S164.482,89.6,256,89.6S422.4,164.482,422.4,256S347.518,422.4,256,422.4z' })
					)
				)
			);
		}
	}]);

	return AndroidRadioButtonOn;
}(_react2.default.Component);

exports.default = AndroidRadioButtonOn;
;AndroidRadioButtonOn.defaultProps = { bare: false };