/**
 * Created by jyothi on 8/1/17.
 */
import React, {Component, PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {white, darkWhite} from 'material-ui/styles/colors';
import $ from 'jquery';

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
            input: "",
            dataSource: [] //contains data for search
        };
        this.defaultAPI = "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&hjson=t&cp=1&format=5&alt=json&callback=?"
        this.api = '';
        this.updateAPI(this.props); //updates API
    }

    /**
     * need to update API if sent dynamically
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        this.updateAPI(nextProps);
    }

    /**
     * Updates api with apiKey and client, if needed api also
     * @param props
     */
    updateAPI(props){ //updates the api
        const {api, apiKey, client} = props;
        this.api = api || `${this.defaultAPI}&client=${client || "youtube"}&key=${apiKey}`;
    }

    /**
     * On entering each letter updates the data source with entered key word
     * @param input
     */
    handleUpdateInput(input){
        this.setState({input: input});
        const url = `${this.api}&q=${input}`;
        let _this = this;
        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function(data, textStatus, request) {
                _this.setState({
                    dataSource: data[1].map(item => item[0])
                });
            }
        });
    }

    handleSelectInput(inputText, index){
        console.log("Input Selected", inputText, index);
        //TODO:
    }

    render(){
        const {hintText} = this.props;
        const {input} = this.state;
        return(
            <div>
                <div style={searchBoxStyles}>
                    <AutoComplete
                        hintText={hintText || "Type here.."}
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput.bind(this)}
                        fullWidth={true}
                        onNewRequest={this.handleSelectInput.bind(this)}
                    />
                </div>
                <div style={searchButtonStyles}>
                    <IconButton primary={true} onClick={() => this.handleSelectInput.bind(this, input)} >
                        <SearchIcon style={iconStyles} color={white} hoverColor={darkWhite}/>
                    </IconButton>
                </div>
                <div style={clearFix}></div>
            </div>
        )
    }

}