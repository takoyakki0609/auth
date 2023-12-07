import { createSlice } from "@reduxjs/toolkit";

const accessToken = localStorage.getItem("accessToken");

const initialState = {
  // 토큰이 있으면 로그인 아니면 로그아웃상태
  isLoggedIn: accessToken ? true : false,
  profile: {
    id: undefined,
    nickname: undefined,
    avatar: undefined,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { id, nickname, avatar, accessToken } = action.payload;

      localStorage.setItem("accessToken", accessToken);
      state.profile = {
        id,
        nickname,
        avatar,
      };
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      localStorage.removeItem("accessToken");
      state.isLoggedIn = false;
      state.profile = {
        id: undefined,
        nickname: undefined,
        avatar: undefined,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActionCreators = authSlice.actions;
