import React from 'react'
import dice1 from './images/dice-1.png'
import dice2 from './images/dice-2.png'
import dice3 from './images/dice-3.png'
import dice4 from './images/dice-4.png'
import dice5 from './images/dice-5.png'
import dice6 from './images/dice-6.png'
import { useDiceValue } from './ButtonRollDice'

const Dice = () => {
  const DiceValue = useDiceValue()
  let dice: string = ""
  if(DiceValue.number?.ImgValue === 1){
    dice = dice1
  }else if(DiceValue.number?.ImgValue === 2){
    dice = dice2
  }else if(DiceValue.number?.ImgValue === 3){
    dice = dice3
  }else if(DiceValue.number?.ImgValue === 4){
    dice = dice4
  }else if(DiceValue.number?.ImgValue === 5){
    dice = dice5
  }else if(DiceValue.number?.ImgValue === 6){
    dice = dice6
  }else if(DiceValue.number?.ImgValue === 0){
    dice = ""
  }
  return (
    <React.Fragment>
        {dice && <img src={dice} alt="Dice" className="dice"/>}
    </React.Fragment>
  )
}

export default Dice