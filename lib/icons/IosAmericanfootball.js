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

var IosAmericanfootball = function (_React$Component) {
	_inherits(IosAmericanfootball, _React$Component);

	function IosAmericanfootball() {
		_classCallCheck(this, IosAmericanfootball);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosAmericanfootball).apply(this, arguments));
	}

	_createClass(IosAmericanfootball, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M378.605,133.395C305.902,60.691,189.381,47.998,116.85,48c-38.926,0.001-65.191,3.658-65.191,3.658 s-29.984,215.227,81.736,326.947C206.099,451.309,322.617,464,395.148,464c38.927,0,65.193-3.658,65.193-3.658 S490.327,245.116,378.605,133.395z M68.124,194.728L194.707,68.146c6.123,0.861,12.164,1.825,18.112,2.899L71.025,212.838 C69.955,206.901,68.987,200.862,68.124,194.728z M267.312,335.195l28.688-28.688l-22.627-22.628l-28.688,28.688l-11.313-11.312 l28.688-28.688l-22.627-22.627l-28.688,28.688l-11.313-11.312l28.688-28.688l-22.628-22.628l-28.688,28.688l-11.313-11.312 l28.689-28.689l-22.628-22.627l-28.688,28.688l-11.314-11.313l67.884-67.883l11.313,11.314l-28.688,28.688l22.628,22.627 l28.688-28.688l11.313,11.313l-28.688,28.688l22.628,22.628l28.688-28.688l11.314,11.313l-28.688,28.688l22.627,22.627 l28.688-28.688l11.313,11.312l-28.688,28.688l22.628,22.628l28.688-28.688l11.312,11.313l-28.688,28.688l22.627,22.627 l28.688-28.688l11.314,11.312l-67.883,67.884l-11.313-11.313l28.688-28.688l-22.628-22.628l-28.688,28.688L267.312,335.195z M317.259,443.891c-6.121-0.863-12.159-1.83-18.104-2.906L440.979,299.16c1.071,5.938,2.038,11.977,2.901,18.111L317.259,443.891z ' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M378.605,133.395C305.902,60.691,189.381,47.998,116.85,48c-38.926,0.001-65.191,3.658-65.191,3.658 s-29.984,215.227,81.736,326.947C206.099,451.309,322.617,464,395.148,464c38.927,0,65.193-3.658,65.193-3.658 S490.327,245.116,378.605,133.395z M68.124,194.728L194.707,68.146c6.123,0.861,12.164,1.825,18.112,2.899L71.025,212.838 C69.955,206.901,68.987,200.862,68.124,194.728z M267.312,335.195l28.688-28.688l-22.627-22.628l-28.688,28.688l-11.313-11.312 l28.688-28.688l-22.627-22.627l-28.688,28.688l-11.313-11.312l28.688-28.688l-22.628-22.628l-28.688,28.688l-11.313-11.312 l28.689-28.689l-22.628-22.627l-28.688,28.688l-11.314-11.313l67.884-67.883l11.313,11.314l-28.688,28.688l22.628,22.627 l28.688-28.688l11.313,11.313l-28.688,28.688l22.628,22.628l28.688-28.688l11.314,11.313l-28.688,28.688l22.627,22.627 l28.688-28.688l11.313,11.312l-28.688,28.688l22.628,22.628l28.688-28.688l11.312,11.313l-28.688,28.688l22.627,22.627 l28.688-28.688l11.314,11.312l-67.883,67.884l-11.313-11.313l28.688-28.688l-22.628-22.628l-28.688,28.688L267.312,335.195z M317.259,443.891c-6.121-0.863-12.159-1.83-18.104-2.906L440.979,299.16c1.071,5.938,2.038,11.977,2.901,18.111L317.259,443.891z ' })
					)
				)
			);
		}
	}]);

	return IosAmericanfootball;
}(_react2.default.Component);

exports.default = IosAmericanfootball;
;IosAmericanfootball.defaultProps = { bare: false };