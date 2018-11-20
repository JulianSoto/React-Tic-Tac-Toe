import React, {Component} from 'react';
import Square from './Square';

export default class Board extends Component {
	render(){
		return (
			<div>
				<div>
					<Square value={this.props.squares[0]} />
					<Square value={this.props.squares[1]} />
					<Square value={this.props.squares[2]} />
				</div>
				<div>
					<Square value={this.props.squares[3]} />
					<Square value={this.props.squares[4]} />
					<Square value={this.props.squares[5]} />
				</div>
				<div>
					<Square value={this.props.squares[6]} />
					<Square value={this.props.squares[7]} />
					<Square value={this.props.squares[8]} />
				</div>
			</div>
		)
	}
}