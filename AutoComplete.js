/**
 * Created by jyothi on 8/1/17.
 */
import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const styles = {
    container: {
        width: 'auto',
        height: 'auto',
        position: 'relative',
        display: 'inline-block',
        top: '-25px'
    }
};

export default class GoogleAutoComplete extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource: ["dfefffdfew", "fefefefwef", "fefewgvwdfwewe"]
        }
    }

    render(){
        return(
            <AutoComplete
                hintText="Search YouTube.."
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                fullWidth={true}
            />
        )
    }

}