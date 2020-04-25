export default (state = 'localhost', action) => {
    switch(action.type){
        case 'ip_master':
            return action.payload
        default:
            return state
    }
}