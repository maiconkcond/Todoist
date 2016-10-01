import React, { Component } from 'react';


import TextField from 'material-ui/TextField';


class TarefaInput extends Component{

	constructor(){
			super();
			this.state = {
				usado: false,
				descricao: null
			}
		}


		handleKeyDown(){
			this.setState({
				usado: true
			});
			this.props.addInput();
		}

		handleChange(evento){
			this.setState({
				descricao: evento.target
			})
		}

	render(){

		var evento = null;

		if(!this.state.usado){
			evento = this.handleKeyDown.bind(this);
		}


		return(
				<div>
					<TextField 
						onKeyDown={evento}
						onChange={this.handleChange.bind(this)}
						hintText="Adicionar tarefa ..."/>
				</div>
			);
	}
}

export default TarefaInput;