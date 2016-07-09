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

var Male = function (_React$Component) {
	_inherits(Male, _React$Component);

	function Male() {
		_classCallCheck(this, Male);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Male).apply(this, arguments));
	}

	_createClass(Male, [{
		key: 'render',
		value: function render() {
			if (this.props.bare) {
				return _react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('path', { d: 'M480,192V32H320l63,63l-68.7,68.7C284.8,141.3,247.9,128,208,128c-97.2,0-176,78.8-176,176s78.8,176,176,176 s176-78.8,176-176c0-39.9-13.3-76.8-35.7-106.3L417,129L480,192z M298.5,394.5C274.3,418.7,242.2,432,208,432s-66.3-13.3-90.5-37.5 C93.3,370.3,80,338.2,80,304s13.3-66.3,37.5-90.5c24.2-24.2,56.3-37.5,90.5-37.5s66.3,13.3,90.5,37.5S336,269.8,336,304 S322.7,370.3,298.5,394.5z' })
				);
			}return _react2.default.createElement(
				_IconBase2.default,
				null,
				_react2.default.createElement('path', { d: 'M480,192V32H320l63,63l-68.7,68.7C284.8,141.3,247.9,128,208,128c-97.2,0-176,78.8-176,176s78.8,176,176,176 s176-78.8,176-176c0-39.9-13.3-76.8-35.7-106.3L417,129L480,192z M298.5,394.5C274.3,418.7,242.2,432,208,432s-66.3-13.3-90.5-37.5 C93.3,370.3,80,338.2,80,304s13.3-66.3,37.5-90.5c24.2-24.2,56.3-37.5,90.5-37.5s66.3,13.3,90.5,37.5S336,269.8,336,304 S322.7,370.3,298.5,394.5z' })
			);
		}
	}]);

	return Male;
}(_react2.default.Component);

exports.default = Male;
;Male.defaultProps = { bare: false };