/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {white, darkWhite} from 'material-ui/styles/colors';

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

export default class GoogleAutoComplete extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource: ["dfefffdfew", "fefefefwef", "fefewgvwdfwewe"]
        }
    }

    handleUpdateInput(input){
        //TODO:
    }

    render(){
        const {hintText} = this.props;
        return(
            <div>
                <div style={searchBoxStyles}>
                    <AutoComplete
                        hintText={hintText || "Type here.."}
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput.bind(this)}
                        fullWidth={true}
                    />
                </div>
                <div style={searchButtonStyles}>
                    <IconButton primary={true} >
                        <SearchIcon style={iconStyles} color={white} hoverColor={darkWhite}/>
                    </IconButton>
                </div>
                <div style={clearFix}></div>
            </div>
        )
    }

}