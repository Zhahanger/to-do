import React,{Component} from 'react';

const style = {
    margin:'5px',
    display:'inline-block'
}

class Tasks extends Component{

    render(){
        return(
            <>
                <div className="task" style={{display:"flex",justifyContent:"space-between"}}>
                    <p style={style}>{
                    this.props.name.length > 50 ? this.props.name.split(" ")[0] +" " +  this.props.name.split(" ")[1] + " " + this.props.name.split(" ")[2] + "..." : this.props.name 
                }</p>
                    <span className="buttons">
                        <button onClick={this.props.onSuccess}>success</button>
                        <button onClick={this.props.onDelete} >delete</button>
                    </span>
                </div>
                <hr width="100%"/>
            </>
        )
    }
}
export default Tasks; 