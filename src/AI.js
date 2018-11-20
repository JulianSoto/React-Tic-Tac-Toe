import winner from './winner.js';

export default function IA(gameState){
	let higher = null;
	if (!isDraw(gameState) && winner(gameState) === null){
		for (let i = 0; i < gameState.length; i++){
			for (let j = 0; j < gameState[i].length; j++){
				if (gameState[i][j] === null){
					let minimax = min(gameState, i, j);
					if (!higher || minimax > higher.value){
						higher = {
							i: i,
							j: j,
							value: minimax
						};
					}
				}
			}
		}

		//gameState[higher.i][higher.j] = 1;
		return {
			i: higher.i,
			j: higher.j
		};
	}
	return null;
}

function max(gameState, x, y){
  let higher = -1000;

  gameState[x][y] = 0;
  let win = winner(gameState);
  if (win !== null){
	higher = -1;
  } else if (isDraw(gameState)){
	higher = 0;
  } else {
	for (let i = 0; i < gameState.length; i++){
	  for (let j = 0; j < gameState[i].length; j++){
		if (gameState[i][j] === null){
		  let minimax = min(gameState, i, j);
		  if (minimax > higher) higher = minimax;
		}
	  }
	}
  }
  gameState[x][y] = null;

  return higher;
}

function min(gameState, x, y){
  let lower = 1000;

  gameState[x][y] = 1;
  let win = winner(gameState);
  if (win !== null){
	lower = 1;
  } else if (isDraw(gameState)){
	lower = 0;
  } else {
	for (let i = 0; i < gameState.length; i++){
	  for (let j = 0; j < gameState[i].length; j++){
		if (gameState[i][j] === null){
		  let minimax = max(gameState, i, j);
		  if (minimax < lower) lower = minimax;
		}
	  }
	}
  }
  gameState[x][y] = null;

  return lower;
}

function isDraw(gameState) {
	if (
		gameState[0].indexOf(null) === -1
		&& gameState[1].indexOf(null) === -1
		&& gameState[2].indexOf(null) === -1
	) return true;
	return false;
}