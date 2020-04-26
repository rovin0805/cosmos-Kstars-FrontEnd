import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import TalkerList from './TalkerList';

class DataConvey extends Component {

    state={
        boards: [
            {
                number: '예시',
            },
         
        ],
    }

    handleData(brdno)  {
        console.log("handleGetData에 값이 들어왔나요? ", brdno)
             this.setState({
                 boards: this.state.boards.concat({number: brdno})
             });
     }

render(){
    const {boards}=this.state;
    return(
        <div>
            <TalkerList onData={this.handleData}/>
             {
                        boards.map(row =>
                            (
                            <div>
                            <Typography style={{ marginTop: 25, marginLeft: 20 }} >{row.brdno}</Typography>
                                </div>
                                )
                        )
                    }
        </div>
        )
    }
}

export default DataConvey