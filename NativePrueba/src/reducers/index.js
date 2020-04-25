import {combineReducers} from 'redux'
import ipReducer from './ipReducer'
import portReducer from './portReducer'
import vReducer from './vReducer'
import wReducer from './wReducers'

const rootReducer = combineReducers({
    ipID: ipReducer,
    portID: portReducer,
    vrefID: vReducer,
    wrefID: wReducer,
})

export default rootReducer