import React, { Component } from 'react';
import AddForm from './AddForm';
import Grid from '@material-ui/core/Grid';

class index extends Component {
    state = {
        maxNo: 2,

        ID:[
            {
                no: 1,
                IDCode:"CHI",
                IDCorpus:"아동",
            
            },
        ],


    }

    handleSaveData = (data) => {
        this.setState({
            maxNo: this.state.maxNo+1,
            ID: this.state.ID.concat({ no: this.state.maxNo, ...data }),
        });
        console.log(this.state.ID);
    }


    render() {
        const {ID} = this.state;

        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    >

                    {/* 구성원정보 추가 폼 */}
                    <Grid
                        container
                        direction="row"
                        alignments="stretch"                      
                        style={{marginRight:10, width: 200,}}
                    >
                        <AddForm onSaveData={this.handleSaveData}/>
                    </Grid>

                    {/* 구성원 리스트 테이블 */}
                    <Grid
                        style={{marginRight:10,}}
                    >
                        {"테이블 구현"}
                    </Grid>
                        
                </Grid>
            </div>
        );
    }
}

export default index;