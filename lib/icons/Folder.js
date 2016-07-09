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

var Folder = function (_React$Component) {
	_inherits(Folder, _React$Component);

	function Folder() {
		_classCallCheck(this, Folder);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Folder).apply(this, arguments));
	}

	_createClass(Folder, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M430.1,192H81.9c-17.7,0-18.6,9.2-17.6,20.5l13,183c0.9,11.2,3.5,20.5,21.1,20.5h316.2c18,0,20.1-9.2,21.1-20.5l12.1-185.3 C448.7,199,447.8,192,430.1,192z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M426.2,143.3c-0.5-12.4-4.5-15.3-15.1-15.3c0,0-121.4,0-143.2,0c-21.8,0-24.4,0.3-40.9-17.4C213.3,95.8,218.7,96,190.4,96 c-22.6,0-75.3,0-75.3,0c-17.4,0-23.6-1.5-25.2,16.6c-1.5,16.7-5,57.2-5.5,63.4h343.4L426.2,143.3z' })
					)
				)
			);
		}
	}]);

	return Folder;
}(_react2.default.Component);

exports.default = Folder;
;