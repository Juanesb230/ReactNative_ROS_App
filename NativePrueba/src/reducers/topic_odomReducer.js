export default (state = '/odom', action) => {
    switch(action.type){
        case 'topic_odom':
            return action.payload
        default:
            return state
    }
}