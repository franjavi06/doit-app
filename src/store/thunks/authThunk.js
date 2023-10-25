import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@env";

export const login = createAsyncThunk("user/login", async (user) => {
  //console.log(`${API_URL}/authentication/login`);
  const loginInfo = await axios.post(`${API_URL}/authentication/login`, user);
  return loginInfo.data;
});
