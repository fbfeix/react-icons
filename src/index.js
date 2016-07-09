var React = require('react');
import ReactDOM from 'react-dom';

import AndroidCall from 'icons/AndroidCall';
/*
module.exports.IconBase = React.createClass({
    propTypes: {
        src: React.PropTypes.String,
        children: React.PropTypes.element.isRequired
    },

    getDefaultProps: function() {
        return {
            src: ''
        };
    },

    render: function() {
        return <span className="icon">
            <svg>
            {this.props.children}
            </svg>
        </span>;
    }
})

*/

ReactDOM.render(<svg className="icon" version="1.1" x="0px" y="0px"
	 viewBox="0 0 512 512" enable-background="new 0 0 512 512"><AndroidCall bare="true"/></svg>, document.getElementById('app'));