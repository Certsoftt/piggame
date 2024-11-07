import React from 'react';
import './Style.css'
import PlayerPanel from './component/game/PlayersPanel/PlayerPanel';
import ButtonNewGame from './component/game/ButtonNewGame';
import ButtonRollDice from './component/game/ButtonRollDice';
import ButtonHold from './component/game/ButtonHold';
import Dice from './component/game/Dice';

function App() {
  return (
    <div className="wrapper clearfix">
      <ButtonRollDice>
        <ButtonNewGame/>
        <ButtonHold>
          <PlayerPanel/>
        </ButtonHold>
        <Dice/>
      </ButtonRollDice>
    </div>
  );
}

export default App;
