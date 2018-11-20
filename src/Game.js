import React, { Component } from 'react';
import './Game.css';
import SideTable from './SideTable.js';
import Board from './Board';

import isDraw from './isGameDraw.js';
import winner from './winner.js';
import vectorToMatrix from './vectorToMatrix.js';

const initialState = {
	turn: 0, 		//turn's value represents player's index
	players: null, 	//computer's index is always 1
	winner: null,
	isDraw: false,
	gameMode: null,
	squares: Array(9).fill(null),
	scoreboard: [0, 0],
	gameover: false
};

class Game extends Component {
	constructor(props){
		super(props);
		this.state = initialState;
		this.setGameMode = this.setGameMode.bind(this);
		this.resetGameState = this.resetGameState.bind(this);
		this.selectX = this.selectX.bind(this);
		this.selectO = this.selectO.bind(this);
		this.squareClickHandler = this.squareClickHandler.bind(this);
		this.turnPlayers = this.turnPlayers.bind(this);
		this.playAgain = this.playAgain.bind(this);
	}

	setGameMode(mode){
		this.setState({
			gameMode: mode
		});
	}

	resetGameState(){
		this.setState(initialState)
	}

	selectX(){
		this.setState({players: ['X', 'O']});
	}

	selectO(){
		this.setState({players: ['O', 'X']});
	}

	squareClickHandler(i){
		if (this.state.squares[i] === null && !this.state.gameover) {
			let squares = [...this.state.squares];
			squares[i] = this.state.turn;
			this.setState({squares: squares}, () => {
				let win = winner(vectorToMatrix(this.state.squares));
				if(win !== null){
					let scoreboard = [...this.state.scoreboard]; 
					scoreboard[win] = scoreboard[win]+1;
					this.setState({winner: win, scoreboard: scoreboard, gameover: true});
				} else if(isDraw(this.state.squares)){
					this.setState({isDraw: true, gameover: true});
				}
			});
			this.turnPlayers();
		}
	}

	turnPlayers(){
		if (this.state.turn === 0){
			this.setState({turn: 1});
		} else {
			this.setState({turn: 0});
		}
	}

	playAgain(){
		this.setState({
			squares: initialState.squares,
			winner: initialState.winner,
			isDraw: initialState.isDraw,
			gameover: initialState.gameover
		});
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
					selectX={this.selectX}
					selectO={this.selectO}
					playAgain={this.playAgain}
				/>
				{
					this.state.players ?
						<Board 
							className="board"
							squares={this.state.squares}
							players={this.state.players}
							squareClickHandler={this.squareClickHandler}
						/>
					: null
				}
			</div>
		);
	}
}

export default Game;
