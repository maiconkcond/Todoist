import React, { Component } from 'react';

import ListItem from './ListItem';

import '../css/List.css';

class List extends Component {
  
	renderListItens() {
		return this.props.tarefas.map(item => 
				<ListItem key={item.id} item={item} />);
	}


  render() {
    return (
      <ul className="list">
         {this.renderListItens()}
      </ul>
    );
  }
}

export default List;