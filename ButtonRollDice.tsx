import React, {useState,createContext, useContext} from 'react'
import { Button } from '@mui/material'

type ButtonRollDiceProps = {
    children: React.ReactNode
}
type ContextProps = {
    rollvalue: number
    activePlayer: string
    ImgValue: number
}
type DiceValueProps = {
    number:ContextProps | null
    setNumber: React.Dispatch<React.SetStateAction<ContextProps | null>>
}
let newValue: number = 0
const DiceProvider = createContext({} as DiceValueProps)
const ButtonRollDice = ({children}:ButtonRollDiceProps) => {
    let val:number
    const [number, setNumber] = useState<ContextProps | null>(null)
    const generateDice = ()=>{
        val = Math.floor(Math.random() * 6) + 1
        if(val !== 1){
            newValue += val
            if(!number){
                setNumber(
                    {
                        rollvalue: newValue,
                        activePlayer: "player1",
                        ImgValue: val
                    }
                )
            }else if(number){
                if(number.activePlayer === "player1"){
                    setNumber(
                        {
                            ...number,rollvalue: newValue,ImgValue: val
                        }
                    )
                }else{
                    setNumber(
                        {
                            ...number,rollvalue: newValue, ImgValue: val
                        }
                    )
                }
            }
        }else{
            newValue = 0
            if(number?.activePlayer === "player1"){
                setNumber(
                    {
                        rollvalue: newValue,
                        activePlayer: "player2",
                        ImgValue: val
                    }
                )
            }else{
                setNumber(
                    {
                        ...number,rollvalue: newValue,
                        activePlayer: "player1",
                        ImgValue: val
                    }
                )
            }
        }
        // console.log(val, newValue)
    }
  return (
    <React.Fragment>
        <Button variant="contained" color="error" className="btn-roll" onClick={generateDice}>
            <i className="ion-ios-loop"></i>
            Roll dice
        </Button>
        <DiceProvider.Provider value={{number, setNumber}}>
            {children}
        </DiceProvider.Provider>
    </React.Fragment>
  )
}

export default ButtonRollDice

export const useDiceValue = ()=>{
    return useContext(DiceProvider)
}