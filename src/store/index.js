import { configureStore } from '@reduxjs/toolkit';
import { userReducer, changeUser } from './slices/usersSlice';
import { loginReducer, changeEmailOrId, changePassword } from './slices/loginSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
  },
});

export { 
  store,
  changeUser,
  changeEmailOrId,
  changePassword,
}
