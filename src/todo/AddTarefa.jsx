import React, { Component } from 'react';
import TarefaInput from './TarefaInput';


class AddTarefa extends Component{
		constructor(){ 
			super();
			this.state = {
				tarefas: [{}]
			}
		}

		addInput(){
			this.state.tarefas.push({});
			this.setState({
				tarefas: this.state.tarefas
				})
		}

		getDescricoes(){
			var descricoes = [];

			for(var ind in this.refs){
				var descricaoTarefa = this.refs[ind].state.descricao;
				descricoes.push(descricaoTarefa)
			}

			descricoes = descricoes.filter(value => value);
			return descricoes;
		}


		renderTarefas(){

			return this.state.tarefas.map((tarefa,i) => {
				return <TarefaInput key={i}
							 addInput={this.addInput.bind(this)}
							ref={`tarefa${i}`} />
			})
		}
	render(){		
		return(
				<div>
					<h4>Tarefas</h4>
					{ this.renderTarefas() }
				</div>
			);
	}
}

export default AddTarefa;