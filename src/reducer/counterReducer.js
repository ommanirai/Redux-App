const initialData = {
    count: 100
}

const counterReducer = (state = initialData, action) => {
    switch (action.type) {
        case "INCREASE_COUNT":
            return { count: ++state.count }
        case "DECREASE_COUNT":
            return {count: --state.count}
        case "RESET":
            return {count: 100}
        default:

            return state
    }

}
export default counterReducer
