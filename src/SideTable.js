//side table
import React, {Component} from 'react';
import {HUMAN_VS_HUMAN, HUMAN_VS_COMPUTER} from './globalConstants.js';
import Status from './StatusMessage.js';

import './SideTable.css';

export default class SideTable extends Component {
	constructor(props){
		super(props);
	}

	render(){
		if (this.props.gameMode === null){
			return (
				<div className="side-table">
					<button
						className="game-mode-option"
						onClick={() => this.props.gameModeSelectionHandler(HUMAN_VS_HUMAN)}
					>
						Human vs human
					</button>
					<button
						className="game-mode-option"
						onClick={() => this.props.gameModeSelectionHandler(HUMAN_VS_COMPUTER)}
					>
						Human vs computer
					</button>
					<span className="status">Choose a game mode</span>
				</div>
			)
		}

		if (!this.props.players){
			return (
				<div className="side-table">
					<button onClick={() => this.props.resetGameState()} className="home">Home</button>
					<button onClick={() => this.props.selectX()}>X</button>
					<button onClick={() => this.props.selectO()}>O</button>
					<span className="status">Select X or O</span>
				</div>
			)
		}

		return (
			<div className="side-table">
				<button onClick={() => this.props.resetGameState()} className="home">Home</button>
				{
					(this.props.winner !== null || this.props.isDraw) ? 
					<button onClick={this.props.playAgain} class="play-again">Play again</button> : null
				}
				<Status
					className="status"
					winner={this.props.winner}
					players={this.props.players}
					isDraw={this.props.isDraw}
					gameMode={this.props.gameMode}
					turn={this.props.turn}
				/>
				<span className="scoreboard">
					{`${this.props.scoreboard[0]} - ${this.props.scoreboard[1]}`}
				</span>
			</div>
		)
	}
}