/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AutoComplete from './AutoComplete';

const apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';

class App extends React.Component{

    render(){
        return(
            <MuiThemeProvider>
                <AppBar title={<AutoComplete apiKey={apiKey}/>} />
            </MuiThemeProvider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));