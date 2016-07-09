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

var AndroidBus = function (_React$Component) {
	_inherits(AndroidBus, _React$Component);

	function AndroidBus() {
		_classCallCheck(this, AndroidBus);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidBus).apply(this, arguments));
	}

	_createClass(AndroidBus, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_14_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M80,352c0,19.198,13.864,24.531,26.667,36.271v38.396c0,11.729,9.599,21.334,21.333,21.334h21.333 c11.734,0,21.334-9.604,21.334-21.334v-21.333h170.666v21.333c0,11.729,9.604,21.334,21.334,21.334H384 c11.729,0,21.333-9.604,21.333-21.334v-38.396C418.136,376.531,432,370.136,432,352V148.334C432,73.667,349.864,64,256,64 S80,73.667,80,148.334V352z M160,367.989c-18.136,0-32-13.864-32-32c0-18.135,13.864-32,32-32s32,13.865,32,32 C192,354.125,178.136,367.989,160,367.989z M352,367.989c-18.136,0-32-13.864-32-32c0-18.135,13.864-32,32-32s32,13.865,32,32 C384,354.125,370.136,367.989,352,367.989z M384,245.333H128V138.667h256V245.333z' })
							)
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_14_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M80,352c0,19.198,13.864,24.531,26.667,36.271v38.396c0,11.729,9.599,21.334,21.333,21.334h21.333 c11.734,0,21.334-9.604,21.334-21.334v-21.333h170.666v21.333c0,11.729,9.604,21.334,21.334,21.334H384 c11.729,0,21.333-9.604,21.333-21.334v-38.396C418.136,376.531,432,370.136,432,352V148.334C432,73.667,349.864,64,256,64 S80,73.667,80,148.334V352z M160,367.989c-18.136,0-32-13.864-32-32c0-18.135,13.864-32,32-32s32,13.865,32,32 C192,354.125,178.136,367.989,160,367.989z M352,367.989c-18.136,0-32-13.864-32-32c0-18.135,13.864-32,32-32s32,13.865,32,32 C384,354.125,370.136,367.989,352,367.989z M384,245.333H128V138.667h256V245.333z' })
						)
					)
				)
			);
		}
	}]);

	return AndroidBus;
}(_react2.default.Component);

exports.default = AndroidBus;
;AndroidBus.defaultProps = { bare: false };