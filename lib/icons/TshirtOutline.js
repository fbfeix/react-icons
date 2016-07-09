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

var TshirtOutline = function (_React$Component) {
	_inherits(TshirtOutline, _React$Component);

	function TshirtOutline() {
		_classCallCheck(this, TshirtOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TshirtOutline).apply(this, arguments));
	}

	_createClass(TshirtOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M178.249,85.534c18.761,22.976,43.909,34.009,77.445,34.572l0.269-0.106h0.269c22.638,0,41.169-4.861,56.653-15.091 c7.801-5.154,14.721-11.47,21.029-19.382l104.461,31.367L426.59,149.41l-38.743-4.685l-37.912-4.589l2.114,38.133L366.176,433 H145.824l14.127-254.729l2.106-37.981l-37.782,4.428l-38.854,4.553l-11.767-32.358L178.249,85.534 M320,48 c-13.988,27.227-30.771,40.223-63.769,40.223C223.723,87.676,205.722,75,192,48L32,96l32,88l64-7.5L112,465h288l-16-288.5l64,7.75 L480,96L320,48L320,48z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M178.249,85.534c18.761,22.976,43.909,34.009,77.445,34.572l0.269-0.106h0.269c22.638,0,41.169-4.861,56.653-15.091 c7.801-5.154,14.721-11.47,21.029-19.382l104.461,31.367L426.59,149.41l-38.743-4.685l-37.912-4.589l2.114,38.133L366.176,433 H145.824l14.127-254.729l2.106-37.981l-37.782,4.428l-38.854,4.553l-11.767-32.358L178.249,85.534 M320,48 c-13.988,27.227-30.771,40.223-63.769,40.223C223.723,87.676,205.722,75,192,48L32,96l32,88l64-7.5L112,465h288l-16-288.5l64,7.75 L480,96L320,48L320,48z' })
			);
		}
	}]);

	return TshirtOutline;
}(_react2.default.Component);

exports.default = TshirtOutline;
;TshirtOutline.defaultProps = { bare: false };