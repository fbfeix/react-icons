import React from 'react';

export default class IconBase extends React.Component {
    render() {
        return <span className="icon-panel">
            <svg  className="icon" version="1.1" x="0px" y="0px"
	 viewBox="0 0 512 512" enable-background="new 0 0 512 512">
            {this.props.children}
            </svg>
        </span>;
    }
};
