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

var IosBook = function (_React$Component) {
	_inherits(IosBook, _React$Component);

	function IosBook() {
		_classCallCheck(this, IosBook);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosBook).apply(this, arguments));
	}

	_createClass(IosBook, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M164.466,64C109.266,64,64,89.98,64,143v1v8.994V417v9h6.215h10.959h4.967c12.86-26.334,44.238-42,78.325-42 c40.224,0,73.877,27.528,81.616,64H248V95.346C230.76,73.951,198.981,64,164.466,64z' }),
					_react2.default.createElement('path', { d: 'M347.621,64c-34.332,0-66.713,9.851-83.621,31.011V448h1.797c7.739-36.472,41.495-64,81.722-64 c34.085,0,61.149,11.666,78.429,42h4.967h10.959H448v-17V148v-4v-1C448,89.98,402.823,64,347.621,64z' })
				)
			);
		}
	}]);

	return IosBook;
}(_react2.default.Component);

exports.default = IosBook;
;