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

var AndroidDesktop = function (_React$Component) {
	_inherits(AndroidDesktop, _React$Component);

	function AndroidDesktop() {
		_classCallCheck(this, AndroidDesktop);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidDesktop).apply(this, arguments));
	}

	_createClass(AndroidDesktop, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_28_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M437.333,32H74.667C51.198,32,32,51.197,32,74.666v282.667C32,380.802,51.198,400,74.667,400h138.666l-42.666,48v32 h170.666v-32l-42.666-48h138.666C460.802,400,480,380.802,480,357.333V74.666C480,51.197,460.802,32,437.333,32z M437.333,320 H74.667V74.666h362.666V320z' })
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_28_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M437.333,32H74.667C51.198,32,32,51.197,32,74.666v282.667C32,380.802,51.198,400,74.667,400h138.666l-42.666,48v32 h170.666v-32l-42.666-48h138.666C460.802,400,480,380.802,480,357.333V74.666C480,51.197,460.802,32,437.333,32z M437.333,320 H74.667V74.666h362.666V320z' })
					)
				)
			);
		}
	}]);

	return AndroidDesktop;
}(_react2.default.Component);

exports.default = AndroidDesktop;
;AndroidDesktop.defaultProps = { bare: false };