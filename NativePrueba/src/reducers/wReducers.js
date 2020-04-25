export default (state = '0.2', action) => {
    switch(action.type){
        case 'wref':
            return action.payload
        default:
            return state
    }
}