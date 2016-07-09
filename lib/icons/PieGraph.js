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

var PieGraph = function (_React$Component) {
	_inherits(PieGraph, _React$Component);

	function PieGraph() {
		_classCallCheck(this, PieGraph);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PieGraph).apply(this, arguments));
	}

	_createClass(PieGraph, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M32.6,256h32H256V64.6v-32c-5-0.4-10.6-0.6-16-0.6C125.1,32,32,125.1,32,240C32,245.4,32.2,251,32.6,256z' }),
						_react2.default.createElement('path', { d: 'M109.8,402.2C147.9,449.6,206.4,480,272,480c114.9,0,208-93.1,208-208c0-65.6-30.4-124.1-77.8-162.2 C370.5,84.3,331,67.9,288,64.6V288H64.6C67.9,331,84.3,370.5,109.8,402.2z' })
					)
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M32.6,256h32H256V64.6v-32c-5-0.4-10.6-0.6-16-0.6C125.1,32,32,125.1,32,240C32,245.4,32.2,251,32.6,256z' }),
					_react2.default.createElement('path', { d: 'M109.8,402.2C147.9,449.6,206.4,480,272,480c114.9,0,208-93.1,208-208c0-65.6-30.4-124.1-77.8-162.2 C370.5,84.3,331,67.9,288,64.6V288H64.6C67.9,331,84.3,370.5,109.8,402.2z' })
				)
			);
		}
	}]);

	return PieGraph;
}(_react2.default.Component);

exports.default = PieGraph;
;PieGraph.defaultProps = { bare: false };