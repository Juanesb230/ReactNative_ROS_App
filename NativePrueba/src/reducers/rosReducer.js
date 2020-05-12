export default (state = [], action) => {
    switch(action.type){
        case 'ros_node':
            return action.payload
        default:
            return state
    }
}