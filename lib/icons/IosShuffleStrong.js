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

var IosShuffleStrong = function (_React$Component) {
	_inherits(IosShuffleStrong, _React$Component);

	function IosShuffleStrong() {
		_classCallCheck(this, IosShuffleStrong);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(IosShuffleStrong).apply(this, arguments));
	}

	_createClass(IosShuffleStrong, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M365.419,152h13.81l-50.738,41.584l20.308,24.572L448,136l-99.136-84l-20.368,24.978L379.679,120h-14.26 c-103.727,0-146.494,79.62-180.857,143.727c-1.362,2.542-2.715,4.99-4.06,7.488l-0.059,0.095c-1.591,2.953-3.176,6.114-4.76,9.038 c-35.562,65.63-66.893,83.214-111.684,83.641V396c37.625,0,57.563-9.451,72.236-18.178c24.935-14.831,47.042-44.559,67.583-82.467 c1.541-2.844,3.083-5.752,4.632-8.626l0.225-0.438c1.459-2.711,2.922-5.273,4.39-8.014C246.369,216.113,280.808,152,365.419,152z' }),
						_react2.default.createElement('path', { d: 'M348.798,293.844l-20.308,24.572L379.229,360h-13.81c-70.728,0-106.396-44.801-135.649-95.812l-17.648,32.618 C243.556,346.626,287.116,392,365.419,392h14.26l-51.183,43.022L348.864,460L448,376L348.798,293.844z' }),
						_react2.default.createElement('path', { d: 'M175.684,231.652c1.584,2.924,3.169,6.085,4.76,9.038l0.059,0.095c1.218,2.262,2.442,4.49,3.675,6.777 c5.82-10.73,11.98-21.748,18.695-32.649c-20.273-37.079-42.083-66.132-66.636-80.735C121.563,125.451,101.625,116,64,116v32.011 C108.791,148.438,140.122,166.022,175.684,231.652z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M365.419,152h13.81l-50.738,41.584l20.308,24.572L448,136l-99.136-84l-20.368,24.978L379.679,120h-14.26 c-103.727,0-146.494,79.62-180.857,143.727c-1.362,2.542-2.715,4.99-4.06,7.488l-0.059,0.095c-1.591,2.953-3.176,6.114-4.76,9.038 c-35.562,65.63-66.893,83.214-111.684,83.641V396c37.625,0,57.563-9.451,72.236-18.178c24.935-14.831,47.042-44.559,67.583-82.467 c1.541-2.844,3.083-5.752,4.632-8.626l0.225-0.438c1.459-2.711,2.922-5.273,4.39-8.014C246.369,216.113,280.808,152,365.419,152z' }),
					_react2.default.createElement('path', { d: 'M348.798,293.844l-20.308,24.572L379.229,360h-13.81c-70.728,0-106.396-44.801-135.649-95.812l-17.648,32.618 C243.556,346.626,287.116,392,365.419,392h14.26l-51.183,43.022L348.864,460L448,376L348.798,293.844z' }),
					_react2.default.createElement('path', { d: 'M175.684,231.652c1.584,2.924,3.169,6.085,4.76,9.038l0.059,0.095c1.218,2.262,2.442,4.49,3.675,6.777 c5.82-10.73,11.98-21.748,18.695-32.649c-20.273-37.079-42.083-66.132-66.636-80.735C121.563,125.451,101.625,116,64,116v32.011 C108.791,148.438,140.122,166.022,175.684,231.652z' })
				)
			);
		}
	}]);

	return IosShuffleStrong;
}(_react2.default.Component);

exports.default = IosShuffleStrong;
;IosShuffleStrong.defaultProps = { bare: false };