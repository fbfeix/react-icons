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

var AndroidWalk = function (_React$Component) {
	_inherits(AndroidWalk, _React$Component);

	function AndroidWalk() {
		_classCallCheck(this, AndroidWalk);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidWalk).apply(this, arguments));
	}

	_createClass(AndroidWalk, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M288,112c22.223,0,39.997-17.776,39.997-40c0-22.225-17.774-40-39.997-40s-40.003,17.775-40.003,40 C247.997,94.224,265.777,112,288,112z' }),
						_react2.default.createElement('path', { d: 'M288,232h104v-40h-72l-44.802-69.333c-7.698-11.667-18.136-18.136-30.933-18.136c-3.198,0-8.828,0.531-12.799,1.747 L120,144v112h40v-80l40.531-16L120,480h40l56.698-164.271L267,384v96h38V352l-57.031-96l19.745-61.864L288,232z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M288,112c22.223,0,39.997-17.776,39.997-40c0-22.225-17.774-40-39.997-40s-40.003,17.775-40.003,40 C247.997,94.224,265.777,112,288,112z' }),
					_react2.default.createElement('path', { d: 'M288,232h104v-40h-72l-44.802-69.333c-7.698-11.667-18.136-18.136-30.933-18.136c-3.198,0-8.828,0.531-12.799,1.747 L120,144v112h40v-80l40.531-16L120,480h40l56.698-164.271L267,384v96h38V352l-57.031-96l19.745-61.864L288,232z' })
				)
			);
		}
	}]);

	return AndroidWalk;
}(_react2.default.Component);

exports.default = AndroidWalk;
;AndroidWalk.defaultProps = { bare: false };