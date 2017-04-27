import { combineReducers } from 'redux'
import grid from './modules/main/reducers/grid';

const appReducers = combineReducers({
    grid
})

export default appReducers;