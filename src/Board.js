import React, {Component} from 'react';
import Square from './Square';
import './Board.css';

export default class Board extends Component {
	getSquareValue(i){
		return this.props.players ? this.props.players[this.props.squares[i]] : null
	}

	render(){
		return (
			<div className="board">
				<Square value={this.getSquareValue(0)} onClick={this.props.squareClickHandler} index={0} />
				<Square value={this.getSquareValue(1)} onClick={this.props.squareClickHandler} index={1} />
				<Square value={this.getSquareValue(2)} onClick={this.props.squareClickHandler} index={2} />
				<Square value={this.getSquareValue(3)} onClick={this.props.squareClickHandler} index={3} />
				<Square value={this.getSquareValue(4)} onClick={this.props.squareClickHandler} index={4} />
				<Square value={this.getSquareValue(5)} onClick={this.props.squareClickHandler} index={5} />
				<Square value={this.getSquareValue(6)} onClick={this.props.squareClickHandler} index={6} />
				<Square value={this.getSquareValue(7)} onClick={this.props.squareClickHandler} index={7} />
				<Square value={this.getSquareValue(8)} onClick={this.props.squareClickHandler} index={8} />
			</div>
		)
	}
}