import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    changeUser(state, action) {
      const { emailOrId, password } = action.payload;
      return {emailOrId, password}
    }
  }
});

export const { changeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;