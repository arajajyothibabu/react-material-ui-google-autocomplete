/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AutoComplete from './AutoComplete';


const apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';


const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

/**
 * Injecting TouchTapEventPlugin for mobile support of click.. events
 */
injectTapEventPlugin();

class App extends React.Component{

    render(){
        return(
            <MuiThemeProvider>
                <AppBar title={<AutoComplete apiKey={apiKey}/>}
                        iconElementRight={<Logged />}
                />
            </MuiThemeProvider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));