import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

class Index extends Component {
    render() {
        return (
            <div>
                <Router />
            </div>
        );
    }
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}