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

var IosCircleFilled = function (_React$Component) {
	_inherits(IosCircleFilled, _React$Component);

	function IosCircleFilled() {
		_classCallCheck(this, IosCircleFilled);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosCircleFilled).apply(this, arguments));
	}

	_createClass(IosCircleFilled, [{
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
							_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7 c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
						)
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M256,96c-88.4,0-160,71.6-160,160c0,88.4,71.6,160,160,160c88.4,0,160-71.6,160-160C416,167.6,344.4,96,256,96z' })
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
						_react2.default.createElement('path', { d: 'M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7 c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7 C446.7,361.1,361.1,446.7,256,446.7z' })
					)
				),
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,96c-88.4,0-160,71.6-160,160c0,88.4,71.6,160,160,160c88.4,0,160-71.6,160-160C416,167.6,344.4,96,256,96z' })
					)
				)
			);
		}
	}]);

	return IosCircleFilled;
}(_react2.default.Component);

exports.default = IosCircleFilled;
;IosCircleFilled.defaultProps = { bare: false };