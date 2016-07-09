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

var Edit = function (_React$Component) {
	_inherits(Edit, _React$Component);

	function Edit() {
		_classCallCheck(this, Edit);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Edit).apply(this, arguments));
	}

	_createClass(Edit, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('rect', { x: '178.846', y: '92.087', transform: 'matrix(-0.7071 -0.7071 0.7071 -0.7071 224.3476 631.1498)', width: '128.085', height: '354.049' }),
					_react2.default.createElement('path', { d: 'M471.723,88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304,1.85l-45.202,45.203l90.569,90.568l45.202-45.202 C482.616,119.952,483.445,100.116,471.723,88.393z' }),
					_react2.default.createElement('polygon', { points: '64.021,363.252 32,480 148.737,447.979 \t' })
				)
			);
		}
	}]);

	return Edit;
}(_react2.default.Component);

exports.default = Edit;
;