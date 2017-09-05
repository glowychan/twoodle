import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SketchApp from './SketchApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SketchApp />, document.getElementById('root'));
registerServiceWorker();