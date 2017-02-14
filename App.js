/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AutoComplete from './AutoComplete';

class App extends React.Component{

    render(){
        return(
            <MuiThemeProvider>
                <AppBar title={<AutoComplete/>} />
            </MuiThemeProvider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));