import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import AddTarefa from './AddTarefa';
import TarefaInput from './TarefaInput';

class AddTodo extends Component {

		constructor(){ 
			super();
			this.state = {
				dialogOpen: false
			}
		}

		handleOpen(){
			this.setState({dialogOpen: true})
		}

		handleClose(){
			this.setState({dialogOpen: false})
		}

		cadastrar(){
			console.log(this.refs);
			var dadosToDo = {
				titulo: this.refs.titulo.getValue(),
				tarefas: this.refs.tarefas.getDescricoes()
			}

			fetch('https://private-00cf6-reacttodo.apiary-mock.com/lista',{method: 'POST'})

			.then(response => response.json())
			.then(response => {
				this.props.novoTodo(response);
				this.handleClose();	
			})
			
		}

		render(){
			const estiloBotao = {
				position: 'fixed',
				bottom: '5%',
				right: '5%'                                                     
			};

			const dialogActions = [
				<FlatButton label="Cancelar" onClick={this.handleClose.bind(this)} />,
				<RaisedButton label="Cadastrar" primary={true} onClick={this.cadastrar.bind(this)} />
			];
				return (
					<div>
						<FloatingActionButton onClick={this.handleOpen.bind(this)} style={estiloBotao}>
							<ContentAdd />
						</FloatingActionButton>
					 

					 <Dialog
         				 title="Cadastras To Do"
				          actions={dialogActions}
				          open={this.state.dialogOpen}
				        >

					 	<form>
					 		<TextField ref="titulo" name="titulo" floatingLabelText="Título"/>

					 		<AddTarefa ref="tarefas" />
					 	</form>

					</Dialog>
					</div>
				);
		}
	
}

export default AddTodo;