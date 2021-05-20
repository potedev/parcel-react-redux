import { combineReducers } from 'redux'

const initialState = {
    values: null,
    loading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_FETCH':
            return { ...state, loading: true }
        case 'USER_SET':
            return { ...state, loading: false, values: action.payload }
        case 'USER_RESET':
            return initialState
        default:
            return state
    }
}

const authReducuer = combineReducers({
    user: userReducer
})

export default authReducuer
