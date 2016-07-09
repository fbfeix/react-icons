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

var AndroidArchive = function (_React$Component) {
	_inherits(AndroidArchive, _React$Component);

	function AndroidArchive() {
		_classCallCheck(this, AndroidArchive);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidArchive).apply(this, arguments));
	}

	_createClass(AndroidArchive, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M453.594,100.001l-32.353-39.299C415.469,52.627,405.083,48,394.664,48H117.335c-10.416,0-20.801,4.627-26.576,12.702 l-32.351,39.299C51.468,106.923,48,117.335,48,128.886v288.89C48,443.2,68.8,464,94.225,464h323.553 C443.202,464,464,443.2,464,417.775v-288.89C464,117.335,460.537,106.923,453.594,100.001z M256,383.109L128.89,256h80.89v-46.224 h92.443V256h80.89L256,383.109z M96.534,94.221l18.486-23.111h277.331l21.965,23.111H96.534z' })
				)
			);
		}
	}]);

	return AndroidArchive;
}(_react2.default.Component);

exports.default = AndroidArchive;
;