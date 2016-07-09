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

var Nuclear = function (_React$Component) {
	_inherits(Nuclear, _React$Component);

	function Nuclear() {
		_classCallCheck(this, Nuclear);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Nuclear).apply(this, arguments));
	}

	_createClass(Nuclear, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { cx: '256', cy: '272', r: '48' }),
						_react2.default.createElement('circle', { cx: '256', cy: '272', r: '48' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M480,272H320c0,23.9-13.1,44.7-32.6,55.7L365.6,464C433.1,425.4,480,355.3,480,272z' }),
						_react2.default.createElement('path', { d: 'M256,208c11.7,0,22.7,3.2,32.1,8.7l80.6-138.3C335.6,59.1,297.1,48,256,48c-41.2,0-79.9,11.2-113.1,30.6l79.8,138.8 C232.4,211.4,243.8,208,256,208z' }),
						_react2.default.createElement('path', { d: 'M192,272H32c0,83.3,46.9,153.4,114.4,192l78.2-136.3C205.1,316.7,192,295.9,192,272z' })
					)
				)
			);
		}
	}]);

	return Nuclear;
}(_react2.default.Component);

exports.default = Nuclear;
;