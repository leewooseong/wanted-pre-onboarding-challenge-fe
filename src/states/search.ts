import { createSlice } from '@reduxjs/toolkit'

export interface ISearchSlice {
  keyword: string
  callCount: number
}

const INITIAL_STATE: ISearchSlice = {
  keyword: '',
  callCount: 0,
}

const searchSlice = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload
    },
    incrementCallCount: (state, action) => {
      state.callCount += 1
      // eslint-disable-next-line no-console
      console.log(`'${action.payload}'호출, callCount:${state.callCount}`)
    },
  },
})

export const { setKeyword, incrementCallCount } = searchSlice.actions

export default searchSlice.reducer

export const getKeyword = (state: string) => state.search
