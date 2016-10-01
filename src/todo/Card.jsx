import React, { Component } from 'react';

import List from './List';
import '../css/Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h2> { this.props.info.titulo } </h2>

        <List tarefas={ this.props.info.itens } />
      </div>
    );
  }
}

export default Card;