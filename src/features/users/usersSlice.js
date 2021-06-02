import {createSlice} from '@reduxjs/toolkit'

const initialState = [
  {id: '0', name: '齋藤飛鳥'},
  {id: '1', name: '山下美月'},
  {id: '2', name: '遠藤さくら'},
]

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default userSlice.reducer;