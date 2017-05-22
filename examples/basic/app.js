import join from 'lodash-es/join';

import './app.scss';

function component() {
    let element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = join(['Hello','webpack'], ' ');

    return element;
}

document.body.appendChild(component());
