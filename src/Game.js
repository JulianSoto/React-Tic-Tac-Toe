import React, { Component } from 'react';
import './Game.css';
import SideTable from './SideTable.js';

import Board from './Board';

const initialState = {
	turn: 0, 		//turn's value represents player's index
	players: null, 	//computer's index is always 1
	winner: null,
	isDraw: false,
	gameMode: null,
	squares: Array(9).fill(null),
	scoreboard: [0, 0]
};

class Game extends Component {
	constructor(props){
		super(props);
		this.state = initialState;
		this.setGameMode = this.setGameMode.bind(this);
		this.resetGameState = this.resetGameState.bind(this);
	}

	setGameMode(mode){
		this.setState({
			gameMode: mode
		});
	}

	resetGameState(){
		this.setState(initialState)
	}

	render() {
		return (
			<div>
				<SideTable
					className="side-table"
					winner={this.state.winner}
					isDraw={this.state.isDraw}
					turn={this.state.turn}
					players={this.state.players}
					scoreboard={this.state.scoreboard}
					gameMode={this.state.gameMode}
					gameModeSelectionHandler={this.setGameMode}
					resetGameState={this.resetGameState}
				/>
				{
					this.state.players ?
						<Board 
							className="board"
							squares={this.state.squares}
						/>
					: null
				}
			</div>
		);
	}
}

export default Game;
