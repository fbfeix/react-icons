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

var SocialDesignernewsOutline = function (_React$Component) {
	_inherits(SocialDesignernewsOutline, _React$Component);

	function SocialDesignernewsOutline() {
		_classCallCheck(this, SocialDesignernewsOutline);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialDesignernewsOutline).apply(this, arguments));
	}

	_createClass(SocialDesignernewsOutline, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('polygon', { points: '290.9,145.9 226.5,96 291.1,198.8 \t' }),
						_react2.default.createElement(
							'g',
							null,
							_react2.default.createElement('path', { d: 'M32.5,260' }),
							_react2.default.createElement('path', { d: 'M329,96v80.3V260h-35.9l-63.2-98l1.7,98H191V152.9l-37.1-29.1c1,1.2,2.1,2.4,3,3.6c10,13.8,15,30.7,15,50.5 c0,48.9-30.5,82-76.8,82H32l200.1,156H480V214.7L329,96z M464,400H237.7L78.6,276h16.5c13.5,0,26.2-2.7,37.7-7.4 c11.5-4.7,21.4-11.8,29.8-20.7c4.8-5.1,9.4-11,12.4-17.1v28.7V276h16.2h40.4H248l-0.3-16.5l-0.7-41.9l32.6,50.7l4.7,7.6h8.8h36.8 H345v-16.5v-83.1v-47l0.2,0.3L464,222.4V400z' })
						),
						_react2.default.createElement('path', { d: 'M90.6,150.4c11,0,23.7,3.2,23.7,28.8c0,6.9-1,16.3-6,21.8c-3.6,3.9-9.6,6-17.7,6H87v-57h3 M90.7,134H71v89h19.5 c26,0,39.9-15.6,39.9-43.9C130.4,150.3,116.1,134,90.7,134L90.7,134z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('polygon', { points: '290.9,145.9 226.5,96 291.1,198.8 \t' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M32.5,260' }),
						_react2.default.createElement('path', { d: 'M329,96v80.3V260h-35.9l-63.2-98l1.7,98H191V152.9l-37.1-29.1c1,1.2,2.1,2.4,3,3.6c10,13.8,15,30.7,15,50.5 c0,48.9-30.5,82-76.8,82H32l200.1,156H480V214.7L329,96z M464,400H237.7L78.6,276h16.5c13.5,0,26.2-2.7,37.7-7.4 c11.5-4.7,21.4-11.8,29.8-20.7c4.8-5.1,9.4-11,12.4-17.1v28.7V276h16.2h40.4H248l-0.3-16.5l-0.7-41.9l32.6,50.7l4.7,7.6h8.8h36.8 H345v-16.5v-83.1v-47l0.2,0.3L464,222.4V400z' })
					),
					_react2.default.createElement('path', { d: 'M90.6,150.4c11,0,23.7,3.2,23.7,28.8c0,6.9-1,16.3-6,21.8c-3.6,3.9-9.6,6-17.7,6H87v-57h3 M90.7,134H71v89h19.5 c26,0,39.9-15.6,39.9-43.9C130.4,150.3,116.1,134,90.7,134L90.7,134z' })
				)
			);
		}
	}]);

	return SocialDesignernewsOutline;
}(_react2.default.Component);

exports.default = SocialDesignernewsOutline;
;SocialDesignernewsOutline.defaultProps = { bare: false };