//side table
import React, {Component} from 'react';

export default class SideTable extends Component {
	constructor(props){
		super(props);
	}

	render(){
		if (this.props.gameMode === null){
			return (
				<div>
					<button>Human vs human</button>
					<button>Human vs computer</button>
					<span>Choose a game mode</span>
				</div>
			)
		}

		if (!this.props.players){
			return (
				<div>
					<button>Home</button>
					<button>X</button>
					<button>O</button>
					<span>Select X or O</span>
				</div>
			)
		}
		
		let message;

		if (this.props.winner !== null){
			message = `${ this.props.players[this.props.winner] } wins`
		} else if (this.props.isDraw){
			message = `It's a draw`;
		}  if (this.props.gameMode === null){
			message = `Choose a game mode`;
		} else {
			message = `${ this.props.players[this.props.turn] } plays`
		}

		return (
			<div>
				<button>Home</button>
				<button>Reset</button>
				<span>{message}</span>
				<span>
					{`${this.props.scoreboard[0]} - ${this.props.scoreboard[1]}`}
				</span>
			</div>
		)
	}
}