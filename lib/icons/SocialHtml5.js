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

var SocialHtml5 = function (_React$Component) {
	_inherits(SocialHtml5, _React$Component);

	function SocialHtml5() {
		_classCallCheck(this, SocialHtml5);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialHtml5).apply(this, arguments));
	}

	_createClass(SocialHtml5, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M64,32l34.936,403.213L255.769,480l157.245-44.854L448,32H64z M371.997,164h-184l3.991,51h176.008l-13.505,151.386 l-98.5,28.094l-98.682-27.976L150.545,289h48.254l3.423,39.287l53.769,14.781l53.422-14.915L314.987,264H147.986l-12.571-149.589 l240.789,0.016L371.997,164z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M64,32l34.936,403.213L255.769,480l157.245-44.854L448,32H64z M371.997,164h-184l3.991,51h176.008l-13.505,151.386 l-98.5,28.094l-98.682-27.976L150.545,289h48.254l3.423,39.287l53.769,14.781l53.422-14.915L314.987,264H147.986l-12.571-149.589 l240.789,0.016L371.997,164z' })
			);
		}
	}]);

	return SocialHtml5;
}(_react2.default.Component);

exports.default = SocialHtml5;
;SocialHtml5.defaultProps = { bare: false };