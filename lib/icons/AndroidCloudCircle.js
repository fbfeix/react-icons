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

var AndroidCloudCircle = function (_React$Component) {
	_inherits(AndroidCloudCircle, _React$Component);

	function AndroidCloudCircle() {
		_classCallCheck(this, AndroidCloudCircle);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(AndroidCloudCircle).apply(this, arguments));
	}

	_createClass(AndroidCloudCircle, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						{ id: 'Icon_32_' },
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement(
								'g',
								null,
								_react2.default.createElement('path', { d: 'M256,48C141.6,48,48,141.6,48,256s93.6,208,208,208c114.4,0,208-93.6,208-208S370.4,48,256,48z M349.6,339.2 c0,0-175.759,0-176.799,0c-34.318,0-62.4-28.082-62.4-62.399c0-34.319,28.082-62.4,62.4-62.4c1.041,0,2.082,0,3.117,0 c9.364-36.4,41.601-62.399,80.083-62.399c45.764,0,83.199,37.435,83.199,83.198h10.4c29.118,0,52,22.882,52,52.001 C401.6,316.318,378.718,339.2,349.6,339.2z' })
							)
						)
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					{ id: 'Icon_32_' },
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M256,48C141.6,48,48,141.6,48,256s93.6,208,208,208c114.4,0,208-93.6,208-208S370.4,48,256,48z M349.6,339.2 c0,0-175.759,0-176.799,0c-34.318,0-62.4-28.082-62.4-62.399c0-34.319,28.082-62.4,62.4-62.4c1.041,0,2.082,0,3.117,0 c9.364-36.4,41.601-62.399,80.083-62.399c45.764,0,83.199,37.435,83.199,83.198h10.4c29.118,0,52,22.882,52,52.001 C401.6,316.318,378.718,339.2,349.6,339.2z' })
						)
					)
				)
			);
		}
	}]);

	return AndroidCloudCircle;
}(_react2.default.Component);

exports.default = AndroidCloudCircle;
;AndroidCloudCircle.defaultProps = { bare: false };