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

var SocialPinterest = function (_React$Component) {
	_inherits(SocialPinterest, _React$Component);

	function SocialPinterest() {
		_classCallCheck(this, SocialPinterest);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SocialPinterest).apply(this, arguments));
	}

	_createClass(SocialPinterest, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256c0,91.7,55.2,170.5,134.1,205.2c-0.6-15.6-0.1-34.4,3.9-51.4 c4.3-18.2,28.8-122.1,28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2,19.2-58,43.2-58c20.4,0,30.2,15.3,30.2,33.6 c0,20.5-13.1,51.1-19.8,79.5c-5.6,23.8,11.9,43.1,35.4,43.1c42.4,0,71-54.5,71-119.1c0-49.1-33.1-85.8-93.2-85.8 c-67.9,0-110.3,50.7-110.3,107.3c0,19.5,5.8,33.3,14.8,43.9c4.1,4.9,4.7,6.9,3.2,12.5c-1.1,4.1-3.5,14-4.6,18 c-1.5,5.7-6.1,7.7-11.2,5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6,53.7-139.9,160.1-139.9c85.5,0,141.8,61.9,141.8,128.3 c0,87.9-48.9,153.5-120.9,153.5c-24.2,0-46.9-13.1-54.7-27.9c0,0-13,51.6-15.8,61.6c-4.7,17.3-14,34.5-22.5,48 c20.1,5.9,41.4,9.2,63.5,9.2c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M256,32C132.3,32,32,132.3,32,256c0,91.7,55.2,170.5,134.1,205.2c-0.6-15.6-0.1-34.4,3.9-51.4 c4.3-18.2,28.8-122.1,28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2,19.2-58,43.2-58c20.4,0,30.2,15.3,30.2,33.6 c0,20.5-13.1,51.1-19.8,79.5c-5.6,23.8,11.9,43.1,35.4,43.1c42.4,0,71-54.5,71-119.1c0-49.1-33.1-85.8-93.2-85.8 c-67.9,0-110.3,50.7-110.3,107.3c0,19.5,5.8,33.3,14.8,43.9c4.1,4.9,4.7,6.9,3.2,12.5c-1.1,4.1-3.5,14-4.6,18 c-1.5,5.7-6.1,7.7-11.2,5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6,53.7-139.9,160.1-139.9c85.5,0,141.8,61.9,141.8,128.3 c0,87.9-48.9,153.5-120.9,153.5c-24.2,0-46.9-13.1-54.7-27.9c0,0-13,51.6-15.8,61.6c-4.7,17.3-14,34.5-22.5,48 c20.1,5.9,41.4,9.2,63.5,9.2c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z' })
				)
			);
		}
	}]);

	return SocialPinterest;
}(_react2.default.Component);

exports.default = SocialPinterest;
;SocialPinterest.defaultProps = { bare: false };