import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './authReducer'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import thunkMiddlware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddlware))

window.store = store

export default store