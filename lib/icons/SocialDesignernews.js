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

var SocialDesignernews = function (_React$Component) {
	_inherits(SocialDesignernews, _React$Component);

	function SocialDesignernews() {
		_classCallCheck(this, SocialDesignernews);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialDesignernews).apply(this, arguments));
	}

	_createClass(SocialDesignernews, [{
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
							_react2.default.createElement('polygon', { points: '290.4,145 227,96 290.6,198.2 \t\t' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M329,96v79.6V259h-36.4l-63.2-98.6l1.7,98.6H191V152l-37.3-29.3c1,1.2,2,2.4,2.9,3.7c10,13.9,15,30.5,15,50.5 c0,49.2-30.6,82.1-76.9,82.1H32v0.4L231.6,416H480V214.1L329,96z' })
						),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M129.9,178.1c0-29-14.2-45.1-39.7-45.1H71v89h19C116,222,129.9,206.6,129.9,178.1z' })
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
						_react2.default.createElement('polygon', { points: '290.4,145 227,96 290.6,198.2 \t\t' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M329,96v79.6V259h-36.4l-63.2-98.6l1.7,98.6H191V152l-37.3-29.3c1,1.2,2,2.4,2.9,3.7c10,13.9,15,30.5,15,50.5 c0,49.2-30.6,82.1-76.9,82.1H32v0.4L231.6,416H480V214.1L329,96z' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M129.9,178.1c0-29-14.2-45.1-39.7-45.1H71v89h19C116,222,129.9,206.6,129.9,178.1z' })
					)
				)
			);
		}
	}]);

	return SocialDesignernews;
}(_react2.default.Component);

exports.default = SocialDesignernews;
;SocialDesignernews.defaultProps = { bare: false };