import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IAuthState from './types/IAuthState';
import ILoginPayload from './types/ILoginPayload';

const initialState: IAuthState = {
  isLogin: false,
  name: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILoginPayload>) => {
      state.isLogin = true;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state.isLogin = false;
      state.name = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
