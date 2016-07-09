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

var Archive = function (_React$Component) {
	_inherits(Archive, _React$Component);

	function Archive() {
		_classCallCheck(this, Archive);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Archive).apply(this, arguments));
	}

	_createClass(Archive, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '256,307.7 384,192 304,192 304,96 207.6,96 207.6,192 128,192 \t' }),
						_react2.default.createElement('path', { d: 'M465.4,297.2l-71.4-55h-42l62,61.8h-50.6c-2.3,0-4.3,1.2-5.4,2.9l-18.4,45.5H172.1l-18.4-45.5c-1-1.8-3.1-2.9-5.4-2.9H97.8 l62.2-61.8h-42.2l-71.4,55c-10.6,6.2-15.8,19-14.1,31.6l8.7,66.9c2.3,13.1,9.7,20.3,28.1,20.3h373.8c19.1,0,25.8-7.6,28.1-20.3 l8.7-66.9C481.4,315.9,476,303.4,465.4,297.2z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '256,307.7 384,192 304,192 304,96 207.6,96 207.6,192 128,192 \t' }),
					_react2.default.createElement('path', { d: 'M465.4,297.2l-71.4-55h-42l62,61.8h-50.6c-2.3,0-4.3,1.2-5.4,2.9l-18.4,45.5H172.1l-18.4-45.5c-1-1.8-3.1-2.9-5.4-2.9H97.8 l62.2-61.8h-42.2l-71.4,55c-10.6,6.2-15.8,19-14.1,31.6l8.7,66.9c2.3,13.1,9.7,20.3,28.1,20.3h373.8c19.1,0,25.8-7.6,28.1-20.3 l8.7-66.9C481.4,315.9,476,303.4,465.4,297.2z' })
				)
			);
		}
	}]);

	return Archive;
}(_react2.default.Component);

exports.default = Archive;
;Archive.defaultProps = { bare: false };