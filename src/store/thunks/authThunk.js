import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@env";
import * as SecureStore from "expo-secure-store";

export const login = createAsyncThunk("user/login", async (user) => {
  //console.log(`${API_URL}/authentication/login`);
  const loginInfo = await axios.post(`${API_URL}/authentication/login`, user);
  if (loginInfo.data.accessToken) {
    //Store the tokens to SecureStore for future use. User wont have to login again unless they log out or refresh token expires.
    await SecureStore.setItemAsync("accesstoken", loginInfo.data.accessToken);
    await SecureStore.setItemAsync("refreshtoken", loginInfo.data.refreshToken);
  }
  return loginInfo.data;
});

export const logout = createAsyncThunk("user/logout", async () => {
  await SecureStore.deleteItemAsync("accesstoken");
  await SecureStore.deleteItemAsync("refreshtoken");
});

export const autologin = createAsyncThunk("user/autologin", async () => {
  const accessToken = await SecureStore.getItemAsync("accesstoken");
  const refreshToken = await SecureStore.getItemAsync("refreshtoken");
  return {
    accessToken,
    refreshToken,
  };
});
