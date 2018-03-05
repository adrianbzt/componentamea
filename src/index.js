import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ComponentaMea from './ComponentaMea';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ComponentaMea test="World"/>, document.getElementById('root'));
registerServiceWorker();
