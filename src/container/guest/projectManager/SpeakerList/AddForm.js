import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class AddForm extends Component {
    

    handleChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value });
    } 

    handleSubmit = (e) => { 
        e.preventDefault(); 
        this.props.onSaveData(this.state); 
        this.setState({}); 
    }

    // state = {
    //     ID: this.props,
    // }

    // //form state 관리 
    // handleValueChange = (e) => {
    //     const nextState = {};
    //     nextState[e.target.name] = e.target.value;
    //     this.setState(nextState);
    // }

    // //add map
    // handleSpeakerList = () => {
    //     //props-> index로 데이터를 올려

    // }

    render() {
        // const {ID} = this.state;
        const {handleChange} = this;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input placeholder="코드" name="IdCode" onChange={handleChange}/>
                <input placeholder="역할" name="IdCorpus" onChange={handleChange}/>
                <button type="submit">추가</button>
            </form>

                {/* <form onSubmit={handleSpeakerList}>
                <Grid direction="column">
                    <TextField 
                        required 
                        label="코드" 
                        name="IDCode"
                        value={ID.IDCode}
                        onChange={handleValueChange}
                        /><br/>
                    <TextField 
                        required 
                        label="역할" 
                        name="IDCorpus"
                        value={ID.IDCorpus}
                        onChange={handleValueChange}
                        />
                </Grid>
                <Grid>
                    <Button type="submit" variant="outlined">추가</Button>
                </Grid>
                </form> */}
            </div>
        );
    }
}

export default AddForm;