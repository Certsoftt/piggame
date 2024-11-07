import React from 'react'
import {useDiceValue } from '../ButtonRollDice'
import { useRoundScoreValue } from '../ButtonHold'

let [updatedScore1, updatedScore2] = [0,0]
const PlayerPanel = () => {
  const DiceValue = useDiceValue()
  const playerRoundScore = useRoundScoreValue()

  const SwitchPlayer = (player:string)=>{
    DiceValue.setNumber(
      {
        rollvalue: 0,
        activePlayer: player,
        ImgValue: 0
      }
    )
    playerRoundScore.setHold(
      {
        isHoldClicked: false,
        value: 0,
        player:player
      }
    )
  }
  
  if(playerRoundScore.hold.isHoldClicked && playerRoundScore.hold.player === "player1"){
      updatedScore1 += playerRoundScore.hold.value
      SwitchPlayer("player2")
  }else if(playerRoundScore.hold.isHoldClicked && playerRoundScore.hold.player === "player2"){
      updatedScore2 += playerRoundScore.hold.value
      SwitchPlayer("player1")
  }
  return (
    <React.Fragment>
        <div className={`player-0-panel ${DiceValue.number?.activePlayer==="player1"&&'active'}`}>
            <div className="player-name" id={`name-0`}>Player 1</div>
            <div className="player-score" id={`score-0`}>{playerRoundScore.hold.player==="player1"?updatedScore1:0}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score" id={`current-0`}>{DiceValue.number?.activePlayer==="player1"?DiceValue.number?.rollvalue:0}</div>
            </div>
        </div>
        <div className={`player-1-panel ${DiceValue.number?.activePlayer==="player2"&&'active'}`}>
            <div className="player-name" id={`name-1`}>Player 2</div>
            <div className="player-score" id={`score-1`}>{playerRoundScore.hold.player==="player2"?updatedScore2:0}</div>
            <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score" id={`current-1`}>{DiceValue.number?.activePlayer==="player2"?DiceValue.number?.rollvalue:0}</div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default PlayerPanel