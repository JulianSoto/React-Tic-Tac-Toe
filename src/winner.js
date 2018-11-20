export default function winner(state){
  for (let i = 0; i < state.length; i++){
    if (state[i][0] !== null && state[i][0] === state[i][1] && state[i][0] === state[i][2]){
      return state[i][0];
    }
  }
  
  for (let i = 0; i < state[0].length; i++){
    if (state[0][i] !== null && state[0][i] === state[1][i] && state[0][i] === state[2][i]){
      return state[0][i];
    }
  }
  
  if (state[0][0] !== null && state[0][0] === state[1][1] && state[0][0] === state[2][2]){
    return state[0][0];
  }
  
  if (state[0][2] !== null && state[0][2] === state[1][1] && state[0][2] === state[2][0]){
    return state[0][2];
  }
  
  return null;
}