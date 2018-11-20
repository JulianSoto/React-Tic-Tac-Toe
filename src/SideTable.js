//side table
import React, {Component} from 'react';
import {HUMAN_VS_HUMAN, HUMAN_VS_COMPUTER} from './globalConstants.js';
import Status from './StatusMessage.js';

export default class SideTable extends Component {
	constructor(props){
		super(props);
	}

	render(){
		if (this.props.gameMode === null){
			return (
				<div>
					<button
						onClick={() => this.props.gameModeSelectionHandler(HUMAN_VS_HUMAN)}
					>
						Human vs human
					</button>
					<button
						onClick={() => this.props.gameModeSelectionHandler(HUMAN_VS_COMPUTER)}
					>
						Human vs computer
					</button>
					<span>Choose a game mode</span>
				</div>
			)
		}

		if (!this.props.players){
			return (
				<div>
					<button onClick={() => this.props.resetGameState()}>Home</button>
					<button onClick={() => this.props.selectX()}>X</button>
					<button onClick={() => this.props.selectO()}>O</button>
					<span>Select X or O</span>
				</div>
			)
		}

		return (
			<div>
				<button onClick={() => this.props.resetGameState()}>Home</button>
				<button>Reset</button>
				<Status
					winner={this.props.winner}
					players={this.props.players}
					isDraw={this.props.isDraw}
					gameMode={this.props.gameMode}
					turn={this.props.turn}
				/>
				<span>
					{`${this.props.scoreboard[0]} - ${this.props.scoreboard[1]}`}
				</span>
			</div>
		)
	}
}