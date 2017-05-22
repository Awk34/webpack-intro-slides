import React from 'react';
import ReactDOM from 'react-dom';
import join from 'lodash-es/join';

import './app.scss';

class Example extends React.Component {
    render() {
        return (
            <div className="border">
                {join(['Hello','webpack'], ' ')}
            </div>
        );
    }
}

ReactDOM.render(
    <Example />,
    document.getElementById('root')
);

function component() {
    let element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = join(['Hello','webpack'], ' ');

    return element;
}

document.body.appendChild(component());
