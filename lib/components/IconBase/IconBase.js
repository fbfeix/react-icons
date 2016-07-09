'use strict';

var React = require('react');

module.exports.IconBase = React.createClass({
    displayName: 'IconBase',

    propTypes: {
        src: React.PropTypes.String,
        children: React.PropTypes.element.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return {
            src: ''
        };
    },

    render: function render() {
        return React.createElement(
            'span',
            { className: 'icon' },
            React.createElement(
                'svg',
                null,
                this.props.children
            )
        );
    }
});