import React, { Component } from 'react';

class AddForm extends Component {
    

    handleChange = (e) => { 
        this.setState({ [e.target.name]: e.target.value });
    } 

    handleSubmit = (e) => { 
        e.preventDefault(); 
        this.props.onSaveData(this.state); 
        this.setState({}); 
    }

    render() {
        const {handleChange} = this;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="코드" name="IdCode" onChange={handleChange}/>
                    <input placeholder="역할" name="IdCorpus" onChange={handleChange}/>
                    <button type="submit">추가</button>
                </form>
            </div>
        );
    }
}

export default AddForm;