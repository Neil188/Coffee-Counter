import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

import './stylesheets/ui.scss';
import './stylesheets/index.scss';

render(
    <Routes />,
    document.getElementById('react-container')
)