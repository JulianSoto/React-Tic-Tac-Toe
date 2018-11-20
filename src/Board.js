import React, {Component} from 'react';
import Square from './Square';
import './Board.css';

export default class Board extends Component {
	render(){
		return (
			<div className="board">
				<Square value={this.props.players[this.props.squares[0]]} onClick={this.props.squareClickHandler} index={0} />
				<Square value={this.props.players[this.props.squares[1]]} onClick={this.props.squareClickHandler} index={1} />
				<Square value={this.props.players[this.props.squares[2]]} onClick={this.props.squareClickHandler} index={2} />
				<Square value={this.props.players[this.props.squares[3]]} onClick={this.props.squareClickHandler} index={3} />
				<Square value={this.props.players[this.props.squares[4]]} onClick={this.props.squareClickHandler} index={4} />
				<Square value={this.props.players[this.props.squares[5]]} onClick={this.props.squareClickHandler} index={5} />
				<Square value={this.props.players[this.props.squares[6]]} onClick={this.props.squareClickHandler} index={6} />
				<Square value={this.props.players[this.props.squares[7]]} onClick={this.props.squareClickHandler} index={7} />
				<Square value={this.props.players[this.props.squares[8]]} onClick={this.props.squareClickHandler} index={8} />
			</div>
		)
	}
}