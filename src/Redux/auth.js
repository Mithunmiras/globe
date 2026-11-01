import { createSlice } from "@reduxjs/toolkit";

const loadAuthData = () => {
  const stored = localStorage.getItem("authData");
  return stored ? JSON.parse(stored) : { userType: "", mobileNo: "" };
};

const initialState = {
  isAuthenticated: false,
  user: null,
  notificationCount: 0,
  ...loadAuthData(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
    notificationCount: (state, action) => {
      state.notificationCount = action.payload;
    },
  },
});

export const { login, logout, setUserProfile, notificationCount } =
  authSlice.actions;
export default authSlice.reducer;
