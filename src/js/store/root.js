import { combineReducers } from 'redux'
import mainReducer from './main'
import authReducuer from './auth'

const rootReducer = combineReducers({
    app:mainReducer,
    auth:authReducuer
})

export default rootReducer
