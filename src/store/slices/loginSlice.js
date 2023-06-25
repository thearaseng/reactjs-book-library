import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    emailOrId: '',
    password: '',
  },
  reducers: {
    changeEmailOrId(state, action) {
      state.emailOrId = action.payload;
    },
    changePassword(state, action) {
      state.password = action.payload;
    },
  }
});

export const { changeEmailOrId, changePassword } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
