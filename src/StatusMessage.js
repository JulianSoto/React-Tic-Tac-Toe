import React from 'react';

export default function Status(props){
	if (props.winner !== null){
		return <span>{`${ props.players[props.winner] } wins`}</span>
	} else if (props.isDraw){
		return <span>{`It's a draw`}</span>;
	}  if (props.gameMode === null){
		return <span>{`Choose a game mode`}</span>;
	} else {
		return <span>{`${ props.players[props.turn] } plays`}</span>
	}
}