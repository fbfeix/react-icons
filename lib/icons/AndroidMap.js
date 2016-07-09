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

var AndroidMap = function (_React$Component) {
	_inherits(AndroidMap, _React$Component);

	function AndroidMap() {
		_classCallCheck(this, AndroidMap);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidMap).apply(this, arguments));
	}

	_createClass(AndroidMap, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_34_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M437.333,64c-2.176,0-4.396,1.369-9.176,3.207S320,108.802,320,108.802L192,64L71.469,104.531 C67.197,105.604,64,109.864,64,115.197v322.136C64,443.729,68.271,448,74.666,448c1.828,0,6.505-2.33,9.087-3.319 S192,403.197,192,403.197L320,448l120.531-40.531c4.271-1.073,7.469-5.334,7.469-10.667V74.666C448,68.271,443.729,64,437.333,64 z M320,405.333l-128-44.802V106.666l128,44.803V405.333z' })
							)
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_34_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M437.333,64c-2.176,0-4.396,1.369-9.176,3.207S320,108.802,320,108.802L192,64L71.469,104.531 C67.197,105.604,64,109.864,64,115.197v322.136C64,443.729,68.271,448,74.666,448c1.828,0,6.505-2.33,9.087-3.319 S192,403.197,192,403.197L320,448l120.531-40.531c4.271-1.073,7.469-5.334,7.469-10.667V74.666C448,68.271,443.729,64,437.333,64 z M320,405.333l-128-44.802V106.666l128,44.803V405.333z' })
						)
					)
				)
			);
		}
	}]);

	return AndroidMap;
}(_react2.default.Component);

exports.default = AndroidMap;
;AndroidMap.defaultProps = { bare: false };