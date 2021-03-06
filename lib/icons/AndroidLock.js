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

var AndroidLock = function (_React$Component) {
	_inherits(AndroidLock, _React$Component);

	function AndroidLock() {
		_classCallCheck(this, AndroidLock);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidLock).apply(this, arguments));
	}

	_createClass(AndroidLock, [{
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
							_react2.default.createElement('path', { d: 'M376,186h-20v-40c0-55-45-100-100-100S156,91,156,146v40h-20c-22.002,0-40,17.998-40,40v200c0,22.002,17.998,40,40,40h240 c22.002,0,40-17.998,40-40V226C416,203.998,398.002,186,376,186z M256,368c-22.002,0-40-17.998-40-40s17.998-40,40-40 s40,17.998,40,40S278.002,368,256,368z M318.002,186H193.998v-40c0-34.004,28.003-62.002,62.002-62.002 c34.004,0,62.002,27.998,62.002,62.002V186z' })
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
						_react2.default.createElement('path', { d: 'M376,186h-20v-40c0-55-45-100-100-100S156,91,156,146v40h-20c-22.002,0-40,17.998-40,40v200c0,22.002,17.998,40,40,40h240 c22.002,0,40-17.998,40-40V226C416,203.998,398.002,186,376,186z M256,368c-22.002,0-40-17.998-40-40s17.998-40,40-40 s40,17.998,40,40S278.002,368,256,368z M318.002,186H193.998v-40c0-34.004,28.003-62.002,62.002-62.002 c34.004,0,62.002,27.998,62.002,62.002V186z' })
					)
				)
			);
		}
	}]);

	return AndroidLock;
}(_react2.default.Component);

exports.default = AndroidLock;
;AndroidLock.defaultProps = { bare: false };