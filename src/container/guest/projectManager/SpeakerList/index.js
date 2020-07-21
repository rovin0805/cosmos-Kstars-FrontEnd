import React, { Component } from 'react';
import Detail from './Detail';
import List from './List';
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
                        <table border="1">
                            <tbody>
                            <tr align="center">
                                <td width="20">no</td>
                                <td width="50">코드</td>
                                <td width="50">역할</td>
                            </tr>
                            {
                                ID.map(row =>
                                    (<List key={row.no} row={row}/>)
                                )
                            }
                            </tbody>
                        </table>
                        
                    </Grid>

                    <Grid
                        style={{marginRight:10,}}
                    >
                        <Detail/>
                    </Grid>
                        
                        
                </Grid>
            </div>
        );
    }
}

export default index;