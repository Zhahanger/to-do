import React, { Component } from 'react';
import './addItem.css';

class AddItem extends Component{
    render(){
        return(
            <div className="addItem">
                <input type="text" className="main-input" placeholder="//some task"/>
                <button onClick={this.props.addTask}>add</button>
            </div>
        )
    }
}
export default AddItem;