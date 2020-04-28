export default (state = '/cmd_vel', action) => {
    switch(action.type){
        case 'topic_vel':
            return action.payload
        default:
            return state
    }
}