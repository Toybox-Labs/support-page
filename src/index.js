import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
window.location = "https://maketoys.zendesk.com/hc/en-us"
WebFont.load({
  google: {
    families: ['Poppins:700,300,600', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
