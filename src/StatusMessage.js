import React from 'react';

export default function Status(props){
	if (props.winner !== null){
		return <span className="status">{`${ props.players[props.winner] } wins`}</span>
	} else if (props.isDraw){
		return <span className="status">{`It's a draw`}</span>;
	}  if (props.gameMode === null){
		return <span className="status">{`Choose a game mode`}</span>;
	} else {
		return <span className="status">{`${ props.players[props.turn] } plays`}</span>
	}
}