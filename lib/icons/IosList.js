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

var IosList = function (_React$Component) {
	_inherits(IosList, _React$Component);

	function IosList() {
		_classCallCheck(this, IosList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosList).apply(this, arguments));
	}

	_createClass(IosList, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M64,64v384h384V64H64z M144,368c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,368,144,368z M144,272 c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,272,144,272z M144,176c-8.836,0-16-7.164-16-16s7.164-16,16-16 s16,7.164,16,16S152.836,176,144,176z M384,360H192v-16h192V360z M384,264H192v-16h192V264z M384,168H192v-16h192V168z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M64,64v384h384V64H64z M144,368c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,368,144,368z M144,272 c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S152.836,272,144,272z M144,176c-8.836,0-16-7.164-16-16s7.164-16,16-16 s16,7.164,16,16S152.836,176,144,176z M384,360H192v-16h192V360z M384,264H192v-16h192V264z M384,168H192v-16h192V168z' })
				)
			);
		}
	}]);

	return IosList;
}(_react2.default.Component);

exports.default = IosList;
;IosList.defaultProps = { bare: false };