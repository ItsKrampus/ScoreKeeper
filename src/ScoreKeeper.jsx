import { useState } from "react";
export default function ScoreKeeper({ numPlayers, target }) {
  const [scores, updateScore] = useState(Array(numPlayers).fill(0))
  const [winner, setWinner] = useState(false);

  const addOne=(index)=>{
    updateScore((oldScores)=>{
      if(winner) return oldScores
      const newScores=[...oldScores]
      newScores[index]+=1;
      if(newScores[index]===target){
        setWinner(true)
      }
      return newScores
    })
  }
  const removeOne=(index)=>{
    updateScore((oldScores)=>{
      const newScores=[...oldScores]
      newScores[index]-=1;  
      return newScores
    })
  }

  const reset=()=>{
    updateScore((oldScores=>{
      const newScores=[...oldScores]
      newScores.fill(0)
      setWinner(false)
      return newScores
    }))
  }

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
      {scores.map((score, index) => {
        return(
        <li key={index}>
          Player {index + 1} :{score}
          {score===target && <span> Winner!</span>}
          <button onClick={()=>addOne(index)} disabled={winner || score===target }    >+1</button>
          <button onClick={()=>removeOne(index)} disabled={winner || score===0}>-1</button>
        </li>
        )
        })}
        <button onClick={reset}>Reset Scores</button>
      </ul>
    </div>
  );
}
