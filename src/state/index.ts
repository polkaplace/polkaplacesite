import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { updateVersion } from '../state/global/actions'

// Get reducers
import application from '../state/application/reducer'
import user from '../state/user/reducer'
import notifications from '../state/notifications/reducer'
import polygonpunks from '../state/polygonpunks/reducer'

type MergedState = {
  user: {
    [key: string]: any
  }
}

let middleware = [];
let loadedState = undefined;

var PERSISTED_KEYS: string[] = ['user', 'application', 'polygonpunks']
loadedState = load({ states: PERSISTED_KEYS }) as MergedState
middleware.push(save({ states: PERSISTED_KEYS }));

const store = configureStore({
  reducer: {
    application,
    user,
    notifications,
    polygonpunks
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
  
  preloadedState: loadedState,
  devTools: true
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
