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

var AndroidPlaystore = function (_React$Component) {
	_inherits(AndroidPlaystore, _React$Component);

	function AndroidPlaystore() {
		_classCallCheck(this, AndroidPlaystore);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidPlaystore).apply(this, arguments));
	}

	_createClass(AndroidPlaystore, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M464,152H360c0-57-46.562-103.859-104-103.859C198.562,48.141,152,95,152,152H48C66.688,368,61,464,61,464h389.999 C450.998,464,445.311,366,464,152z M256,74.105c43.008,0,77.999,34.895,77.999,77.895H178C178,109,212.991,74.105,256,74.105z M204,397.64V228.867l142.999,84.387L204,397.64z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M464,152H360c0-57-46.562-103.859-104-103.859C198.562,48.141,152,95,152,152H48C66.688,368,61,464,61,464h389.999 C450.998,464,445.311,366,464,152z M256,74.105c43.008,0,77.999,34.895,77.999,77.895H178C178,109,212.991,74.105,256,74.105z M204,397.64V228.867l142.999,84.387L204,397.64z' })
				)
			);
		}
	}]);

	return AndroidPlaystore;
}(_react2.default.Component);

exports.default = AndroidPlaystore;
;AndroidPlaystore.defaultProps = { bare: false };