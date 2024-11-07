import React, { useContext, useState } from 'react'
import { useDiceValue } from './ButtonRollDice'
import {Button} from '@mui/material'

type ButtonHoldProps = {
  children: React.ReactNode
}
type HoldContext = {
  isHoldClicked: boolean
  value: number,
  player: string
}
type valueProps = {
  hold:HoldContext,
  setHold: React.Dispatch<React.SetStateAction<HoldContext>>
}
const ButtonHoldContext = React.createContext({} as valueProps)
const ButtonHold = ({children}:ButtonHoldProps) => {
  const [hold, setHold] = useState({} as HoldContext)
  // let accumulatedScore: number = 0
  const Dice = useDiceValue()
  const updateScore = ()=>{
    // accumulatedScore += Dice.rollvalue
    if(Dice.number){
      setHold(
        {
          isHoldClicked: true,
          value: Dice.number.rollvalue,
          player: Dice.number.activePlayer
        }
      )
    }
    
  }
  return (
    <React.Fragment>
        <Button variant="outlined" className="btn-hold" onClick={updateScore}>
            <i className="ion-ios-download-outline"></i>
            Hold
        </Button>
        <ButtonHoldContext.Provider value={{hold, setHold}}>
          {children}
        </ButtonHoldContext.Provider>
    </React.Fragment>
  )
}

export default ButtonHold

export const useRoundScoreValue = ()=>{
  return useContext(ButtonHoldContext)
}