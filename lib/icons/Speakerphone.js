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

var Speakerphone = function (_React$Component) {
	_inherits(Speakerphone, _React$Component);

	function Speakerphone() {
		_classCallCheck(this, Speakerphone);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Speakerphone).apply(this, arguments));
	}

	_createClass(Speakerphone, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M70.9,181.5c0-41,25-76.5,60.6-91.5h-7.7c-41.1,0-75.1,32.8-81.1,75.2c-6,1-10.7,7.9-10.7,16.1c0,8.6,5.1,15.4,11.6,15.9 c7.2,36.4,35.1,65.8,69.7,68.8c0,0,0.1,0,0.1,0c1.4,0,2.8,0.6,4.2,0.9c1.1,0.2,2.2,0.4,3.3,0.7C91,250.5,70.9,218.4,70.9,181.5z' }),
						_react2.default.createElement('path', { d: 'M465.1,91c-1.1-2.9-2.3-5.6-3.5-8.3c-6.5-14.4-14.4-26-23.4-34.6C427,37.6,414.1,32,400.8,32c-8.3,0-16.4,2.2-24.1,6.4 c0,0,0,0-0.1,0c-1.2,0.7-2.4,1.3-3.6,2c-49,29-104.1,46.2-162.6,49.4c-6.5,0.4-13,0.2-19.5,0.2h-42.3c-34,15-59,50.5-59,91.5 c0,36.8,19.2,69.1,47.8,86.1c13,10.9,41.7,11.7,40,23.9c-1.9,13.2-5.5,21.9-7.8,30.7c-1.3,4.8-23.6,72.9-25.3,144.7 c0,2,0,3.7,0.2,6.6c0.2,2.9,2.2,6.4,8.5,6.4h76.8c6.6,0,9.7-3.3,9.3-9.3c-0.2-1.9-0.6-4.3-0.8-6.5c-2.4-23.1-4.6-49.8-3.3-81.6 c1.3-34,5.2-51.9,7-61.3c2.1-10.4,7.6-22.4,12.1-30.3c30.8,0.9,92.9,19.3,115.1,28.9c0,0,7.2,3.4,10.1,5.2c7,3.4,14.2,5.1,21.6,5.1 c0.9,0,1.8,0,2.7-0.1c12.3-0.7,24.2-9.7,34.7-19.5c9.1-8.5,16.9-20.2,23.4-34.6c1.2-2.8,2.4-5.6,3.5-8.6 c9.6-25,14.8-55.9,14.8-88.1C480,147,474.8,116,465.1,91z M442,267.5c-7.8,18.5-18.2,33.3-29.5,33.3c-11.3,0-21.6-14.7-29.4-33.3 c-9.1-21.6-14.9-53.1-14.9-88.1c0-35.2,5.8-66.8,15-88.4c7.8-18.4,18.1-29.5,29.3-29.5c11.3,0,21.5,11.2,29.4,29.5 c9.2,21.6,15,53.2,15,88.4C456.9,214.4,451.1,245.9,442,267.5z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M70.9,181.5c0-41,25-76.5,60.6-91.5h-7.7c-41.1,0-75.1,32.8-81.1,75.2c-6,1-10.7,7.9-10.7,16.1c0,8.6,5.1,15.4,11.6,15.9 c7.2,36.4,35.1,65.8,69.7,68.8c0,0,0.1,0,0.1,0c1.4,0,2.8,0.6,4.2,0.9c1.1,0.2,2.2,0.4,3.3,0.7C91,250.5,70.9,218.4,70.9,181.5z' }),
					_react2.default.createElement('path', { d: 'M465.1,91c-1.1-2.9-2.3-5.6-3.5-8.3c-6.5-14.4-14.4-26-23.4-34.6C427,37.6,414.1,32,400.8,32c-8.3,0-16.4,2.2-24.1,6.4 c0,0,0,0-0.1,0c-1.2,0.7-2.4,1.3-3.6,2c-49,29-104.1,46.2-162.6,49.4c-6.5,0.4-13,0.2-19.5,0.2h-42.3c-34,15-59,50.5-59,91.5 c0,36.8,19.2,69.1,47.8,86.1c13,10.9,41.7,11.7,40,23.9c-1.9,13.2-5.5,21.9-7.8,30.7c-1.3,4.8-23.6,72.9-25.3,144.7 c0,2,0,3.7,0.2,6.6c0.2,2.9,2.2,6.4,8.5,6.4h76.8c6.6,0,9.7-3.3,9.3-9.3c-0.2-1.9-0.6-4.3-0.8-6.5c-2.4-23.1-4.6-49.8-3.3-81.6 c1.3-34,5.2-51.9,7-61.3c2.1-10.4,7.6-22.4,12.1-30.3c30.8,0.9,92.9,19.3,115.1,28.9c0,0,7.2,3.4,10.1,5.2c7,3.4,14.2,5.1,21.6,5.1 c0.9,0,1.8,0,2.7-0.1c12.3-0.7,24.2-9.7,34.7-19.5c9.1-8.5,16.9-20.2,23.4-34.6c1.2-2.8,2.4-5.6,3.5-8.6 c9.6-25,14.8-55.9,14.8-88.1C480,147,474.8,116,465.1,91z M442,267.5c-7.8,18.5-18.2,33.3-29.5,33.3c-11.3,0-21.6-14.7-29.4-33.3 c-9.1-21.6-14.9-53.1-14.9-88.1c0-35.2,5.8-66.8,15-88.4c7.8-18.4,18.1-29.5,29.3-29.5c11.3,0,21.5,11.2,29.4,29.5 c9.2,21.6,15,53.2,15,88.4C456.9,214.4,451.1,245.9,442,267.5z' })
				)
			);
		}
	}]);

	return Speakerphone;
}(_react2.default.Component);

exports.default = Speakerphone;
;Speakerphone.defaultProps = { bare: false };