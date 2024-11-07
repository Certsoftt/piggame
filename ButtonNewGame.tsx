import React from 'react'
import { Button } from '@mui/material'

const ButtonNewGame = () => {
  return (
    <React.Fragment>
        <Button variant="text" color="error" className="btn-new">
            <i className="ion-ios-plus-outline"></i>
            New game
        </Button>
    </React.Fragment>
  )
}

export default ButtonNewGame