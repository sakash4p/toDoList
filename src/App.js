import React, { Component } from 'react';
import './App.css';
import List from './components/List.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoListItems : [],
      newItem : '',
      editItem: ''
    }
   this.deleteListItem =   this.deleteListItem.bind(this);
   this.addItem = this.addItem.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.editChange = this.editChange.bind(this);
  }
  addItem = ()=>{
    if(this.state.newItem){
    this.setState(prevState => ({
      todoListItems: prevState.todoListItems.concat({key : Math.random(), val: prevState.newItem}),
      newItem : ''
    }));
  }
  }
  handleChange = (val)=>{
    this.setState(prevState => ({
      newItem : val
    }));  
  }
  editChange = (val)=>{
    this.setState(prevState => ({
      editItem : val
    }));  
  }
  deleteListItem = (key)=>{
    const todoListItemsNew = this.state.todoListItems.filter(o => o.key !== key);
    this.setState({
      todoListItems : todoListItemsNew
    })  
  }
  editListItem = (key)=>{
    if(this.state.editItem){
      const index = this.state.todoListItems.findIndex(o => o.key === key);
      const todoListItemsNew = this.state.todoListItems.slice();    
      todoListItemsNew[index]['val'] = this.state.editItem;
      this.setState(prevState => ({
        todoListItem : todoListItemsNew,
        editItem : ''
      }));  
    }
  }
  render() {
    
    return (
      <div className="App">
        <div ><input type="text" value={this.state.newItem} onChange={(e)=>this.handleChange(e.target.value)}/></div>
        <button onClick={this.addItem}>add</button>
        <hr/>
      To do List
      <List  editHandle = {this.editListItem}  deleteHandle = {this.deleteListItem}>{this.state.todoListItems}</List>
      
      <div ><input type="text" value={this.state.editItem} onChange={(e)=>this.editChange(e.target.value)}/></div>
      </div>
    );
  }
}

export default App;
