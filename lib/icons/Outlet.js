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

var Outlet = function (_React$Component) {
	_inherits(Outlet, _React$Component);

	function Outlet() {
		_classCallCheck(this, Outlet);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Outlet).apply(this, arguments));
	}

	_createClass(Outlet, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M369.541,32H142.359C81.521,32,32,82.574,32,144.604v222.79C32,429.426,81.521,480,142.359,480h227.182 C430.479,480,480,429.426,480,367.395v-222.79C480,82.574,430.479,32,369.541,32z M175,250.954v0.67 c0,10.882-9.09,20.376-19.875,20.376h-23.27C121.073,272,112,262.506,112,251.624v-0.67V149.512v-1.351 c1-10.768,9.193-20.161,19.855-20.161h23.27c10.886,0,19.875,9.847,19.875,20.831V250.954z M297,395.74v2.68 c0,11.439-8.872,17.58-20.1,17.58H256h-20.898C223.872,416,215,407.859,215,396.42v-0.68v-28.637 c0-23.33,18.118-42.287,40.999-42.287c22.883,0,41.001,18.957,41.001,42.287V395.74z M400,250.954v0.67 c0,10.882-9.071,20.376-19.855,20.376h-24.27C345.093,272,336,262.506,336,251.624v-0.67V149.512v-1.351 c1-10.768,9.215-20.161,19.875-20.161h24.27c10.784,0,19.855,9.847,19.855,20.831V250.954z' })
				)
			);
		}
	}]);

	return Outlet;
}(_react2.default.Component);

exports.default = Outlet;
;