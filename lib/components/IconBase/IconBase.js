"use strict";

var React = require('react');

module.exports.IconBase = React.createClass({
    displayName: "IconBase",

    propTypes: {
        children: React.PropTypes.element.isRequired
    },

    render: function render() {
        return React.createElement(
            "span",
            { className: "icon" },
            React.createElement(
                "svg",
                null,
                this.props.children
            )
        );
    }
});