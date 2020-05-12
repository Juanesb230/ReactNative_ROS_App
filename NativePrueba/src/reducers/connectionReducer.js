export default (state = false, action) => {
    switch(action.type){
        case 'ros_connection':
            return action.payload
        default:
            return state
    }
}