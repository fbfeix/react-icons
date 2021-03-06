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

var Link = function (_React$Component) {
	_inherits(Link, _React$Component);

	function Link() {
		_classCallCheck(this, Link);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).apply(this, arguments));
	}

	_createClass(Link, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256.5,208H256v0C256.2,208,256.3,208,256.5,208z' }),
						_react2.default.createElement('path', { d: 'M368.5,160H320c0,0,26,17,31.6,48H368h0.5c17.6,0,31.5,13.9,31.5,31.5v32c0,17.6-13.9,32.5-31.5,32.5h-112 c-17.6,0-32.5-14.9-32.5-32.5V240h-48v31.5c0,11.5,2.5,22.5,6.9,32.5c12.6,28.2,40.9,48,73.6,48h112c44.2,0,79.5-36.3,79.5-80.5 v-32C448,195.3,412.7,160,368.5,160z' }),
						_react2.default.createElement('path', { d: 'M329.6,208c-12.1-28.3-40.1-48-73.1-48h-112c-44.2,0-80.5,35.3-80.5,79.5v32c0,44.2,36.3,80.5,80.5,80.5H192 c0,0-25.8-17-32.1-48h-15.4c-17.6,0-32.5-14.9-32.5-32.5v-32c0-17.6,14.9-31.5,32.5-31.5H256h0.5c17.6,0,31.5,13.9,31.5,31.5v32 c0,0.2,0,0.3,0,0.5h48c0-0.2,0-0.3,0-0.5v-32C336,228.3,333.7,217.6,329.6,208z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256.5,208H256v0C256.2,208,256.3,208,256.5,208z' }),
					_react2.default.createElement('path', { d: 'M368.5,160H320c0,0,26,17,31.6,48H368h0.5c17.6,0,31.5,13.9,31.5,31.5v32c0,17.6-13.9,32.5-31.5,32.5h-112 c-17.6,0-32.5-14.9-32.5-32.5V240h-48v31.5c0,11.5,2.5,22.5,6.9,32.5c12.6,28.2,40.9,48,73.6,48h112c44.2,0,79.5-36.3,79.5-80.5 v-32C448,195.3,412.7,160,368.5,160z' }),
					_react2.default.createElement('path', { d: 'M329.6,208c-12.1-28.3-40.1-48-73.1-48h-112c-44.2,0-80.5,35.3-80.5,79.5v32c0,44.2,36.3,80.5,80.5,80.5H192 c0,0-25.8-17-32.1-48h-15.4c-17.6,0-32.5-14.9-32.5-32.5v-32c0-17.6,14.9-31.5,32.5-31.5H256h0.5c17.6,0,31.5,13.9,31.5,31.5v32 c0,0.2,0,0.3,0,0.5h48c0-0.2,0-0.3,0-0.5v-32C336,228.3,333.7,217.6,329.6,208z' })
				)
			);
		}
	}]);

	return Link;
}(_react2.default.Component);

exports.default = Link;
;Link.defaultProps = { bare: false };