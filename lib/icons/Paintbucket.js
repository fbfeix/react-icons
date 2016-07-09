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

var Paintbucket = function (_React$Component) {
	_inherits(Paintbucket, _React$Component);

	function Paintbucket() {
		_classCallCheck(this, Paintbucket);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Paintbucket).apply(this, arguments));
	}

	_createClass(Paintbucket, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M128,64l39.667,72.102L16,288l197.604,192l163.328-160l58.33-12.307L160,32L128,64z M325.131,288H104.857L215,177.863 L325.131,288z' }),
						_react2.default.createElement('path', { d: 'M435.262,307.693c0,0-60.734,66.179-60.732,99.207c0,33.028,27.192,59.803,60.731,59.801 c33.548,0.002,60.74-26.772,60.739-59.801C496.001,373.872,435.262,307.693,435.262,307.693z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M128,64l39.667,72.102L16,288l197.604,192l163.328-160l58.33-12.307L160,32L128,64z M325.131,288H104.857L215,177.863 L325.131,288z' }),
					_react2.default.createElement('path', { d: 'M435.262,307.693c0,0-60.734,66.179-60.732,99.207c0,33.028,27.192,59.803,60.731,59.801 c33.548,0.002,60.74-26.772,60.739-59.801C496.001,373.872,435.262,307.693,435.262,307.693z' })
				)
			);
		}
	}]);

	return Paintbucket;
}(_react2.default.Component);

exports.default = Paintbucket;
;Paintbucket.defaultProps = { bare: false };