import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthResponse, User } from "@/lib/types/auth";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

type RefreshTokenPayload = {
  accessToken: string;
  refreshToken: string;
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setAuth: (state, action: PayloadAction<AuthResponse>) => {
      state.user = action.payload.user;

      state.accessToken = action.payload.accessToken;

      state.refreshToken = action.payload.refreshToken;

      state.isAuthenticated = true;
    },

    updateAccessToken: (state, action: PayloadAction<RefreshTokenPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;

      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;

      state.accessToken = null;

      state.refreshToken = null;

      state.isAuthenticated = false;
    },
  },
});

export const { setAuth, updateAccessToken, logout } = authSlice.actions;

export default authSlice.reducer;
