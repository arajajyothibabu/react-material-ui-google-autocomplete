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
    }

    render(){
        return(
            <AutoComplete
                hintText="Type anything"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                floatingLabelText="Full width"
                fullWidth={true}
            />
        )
    }

}