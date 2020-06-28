import React, { Component } from 'react';

class List extends Component{
render(){
    const deleteEvnt = this.props.deleteHandle;
    const editEvnt = this.props.editHandle;
    return (<ul>
        {
            this.props.children.map(function(x, i){
                return <li key={x.key}>                
                <label>{x.val}</label>
                <button onClick={()=>editEvnt(x.key)}>edit</button>
                <button onClick={()=>deleteEvnt(x.key)}>delete</button>    
                hello            
                </li>
            })
        }
</ul>);
}
}
export default List;