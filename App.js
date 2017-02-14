/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import AutoComplete from './AutoComplete';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {blueA100, blue500} from 'material-ui/styles/colors';

const searchBoxStyles = {
    width: "80%",
    float: 'left'
};

const searchButtonStyles = {
    width: "20%",
    float: 'left',
    lineHeight: '24px',
    padding: '10px 0'
};

const clearFix = {
    clear: "both"
};

const iconStyles = {
    marginRight: 24,
    height: '48px',
    background: 'white'
};

class App extends React.Component{

    render(){
        return(
        <MuiThemeProvider>
            {<AppBar title={
                <div>
                    <div style={searchBoxStyles}>
                        <AutoComplete/>
                    </div>
                    <div style={searchButtonStyles}>
                        <IconButton primary={true} >
                            <SearchIcon style={iconStyles} color={blue500} hoverColor={blueA100}/>
                        </IconButton>
                    </div>
                    <div style={clearFix}></div>
                </div>
            } />}
        </MuiThemeProvider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));