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

var AndroidPersonAdd = function (_React$Component) {
	_inherits(AndroidPersonAdd, _React$Component);

	function AndroidPersonAdd() {
		_classCallCheck(this, AndroidPersonAdd);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidPersonAdd).apply(this, arguments));
	}

	_createClass(AndroidPersonAdd, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M304,256c52.805,0,96-43.201,96-96s-43.195-96-96-96s-96,43.201-96,96S251.195,256,304,256z M304,304 c-63.598,0-192,32.402-192,96v48h384v-48C496,336.402,367.598,304,304,304z' })
						),
						_react2.default.createElement(
							'g',
							{ id: 'Icon_16_' },
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M112,224v-64H80v64H16v32h64v64h32v-64h64v-32H112z' })
							)
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M304,256c52.805,0,96-43.201,96-96s-43.195-96-96-96s-96,43.201-96,96S251.195,256,304,256z M304,304 c-63.598,0-192,32.402-192,96v48h384v-48C496,336.402,367.598,304,304,304z' })
					),
					_react2.default.createElement(
						'g',
						{ id: 'Icon_16_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M112,224v-64H80v64H16v32h64v64h32v-64h64v-32H112z' })
						)
					)
				)
			);
		}
	}]);

	return AndroidPersonAdd;
}(_react2.default.Component);

exports.default = AndroidPersonAdd;
;AndroidPersonAdd.defaultProps = { bare: false };