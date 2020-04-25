export default (state = '9090', action) => {
    switch(action.type){
        case 'port_master':
            return action.payload
        default:
            return state
    }
}