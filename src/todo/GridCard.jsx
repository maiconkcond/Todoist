import React, { Component } from 'react';

import Card from './Card';

import SearchField from '../components/SearchField';

import AddTodo from './AddTodo';

class GridCard extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      search: ''
   
    };
  }

  handleSearch(value){
    this.setState({
      search: value.toLowerCase()
    })
  }


  novoTodo(infos){
    this.state.todos.push(infos);

    this.setState({
      todos: this.state.todos
    })
  }


  componentDidMount() {
    fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista')
      .then(response => response.json())
      .then(response => this.setState({
        todos: response

      }))
  }


  renderCards() {

      var listaTodo = this.state.todos;
    return listaTodo.filter((todo) => {return todo.titulo.toLowerCase().indexOf(this.state.search) > -1
    })

    .map(todo => <Card key={todo.id}  info={todo} />)

  }


  render() {
    return (
      <div>
        <SearchField placeholder="Pesquisar tarefa..." handleSearch={this.handleSearch.bind(this)} />

        { this.renderCards() }


        <AddTodo novoTodo={this.novoTodo.bind(this)} />
      </div>
    );
  }
}

export default GridCard;