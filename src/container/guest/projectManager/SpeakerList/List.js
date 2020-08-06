import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class List extends Component {
     

    render() {
        return (
            <tr > 
                <td>{this.props.row.no}</td>
                <td>{this.props.row.IDCode}</td>
                <td>{this.props.row.IDCorpus}</td>
            </tr>        

        );
    }
}

export default List;