const initialdata = {
    gameName: 'Football',
    playerName: 'Son'
}
const gameReducer = (state = initialdata, action) => {
    switch (action.type) {
        case "UPDATE_GAME":
            return {...state,  gameName: action.payload }
            // ... => rest operator
            break;

        case "UPDATE_PLAYER":
            return {...state, playerName:action.player}
            break;

        default:
            return state
    }

}
export default gameReducer