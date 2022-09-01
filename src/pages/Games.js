import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Games = () => {
    const [game, setGame] = useState('')
    const [player, setPlayer] =useState('')
    const game_name = useSelector(store => store.game.gameName)
    const playerName = useSelector(store => store.game.playerName) 
    const dispatch = useDispatch()
    const updateGame = () => {
        dispatch({type:'UPDATE_GAME',payload:game})
    }
    const updatePlayer =()=>{
        dispatch({type:'UPDATE_PLAYER', player: player})
    }

    return (
        <>
            Name of the game: {game_name}
            <br />
            Name of the player: {playerName}
            <br />

            <label htmlFor='gamename'>Game:</label>
            <input type={'text'} id='gamename' onChange={e => setGame(e.target.value)} />
            <button onClick={updateGame}>Update Game</button><br/>

            <label htmlFor='playername'>Player</label>
            <input type={'text'} id='playername' onChange={e =>setPlayer(e.target.value)}/>
            <button onClick={updatePlayer}>Update Player</button>

        </>
    )
}

export default Games