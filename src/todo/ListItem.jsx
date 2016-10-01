import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox"/>
          {this.props.item.descricao}
        </label>

      </li>
    );
  }
}

export default ListItem;