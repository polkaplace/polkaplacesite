import { createReducer } from '@reduxjs/toolkit'
import { updateVersion } from '../../state/global/actions'


const currentTimestamp = () => new Date().getTime()

export interface UserState {
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number
  timestamp: number
}

/*
function pairKey(token0Address: string, token1Address: string) {
  return `${token0Address};${token1Address}`
}
*/

export const initialState: UserState = {
  timestamp: currentTimestamp(),
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateVersion, state => {

      state.lastUpdateVersionTimestamp = currentTimestamp()
    })
)
