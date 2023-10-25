import { createSlice } from "@reduxjs/toolkit";
import { login } from "../thunks/authThunk";
import jwt_decode from "jwt-decode";

const initialState = {
  username: "",
  role: "",
  email: "",
  firstname: "",
  lastname: "",
  accesstoken: null,
  expiration: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.isError = false;
      state.error = null;
    },
    logout: (state) => {
      state.username = "";
      state.role = "";
      state.email = "";
      state.firstname = "";
      state.lastname = "";
      state.accesstoken = null;
      state.expiration = null;

      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = false;
      state.error = null;

      console.log(state);
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isLoggedIn = true;

      //JWT Info
      const decoded = jwt_decode(action.payload.accessToken);
      state.username = decoded.unique_name;
      state.role =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      state.email = decoded.email;
      state.firstname = decoded.given_name;
      state.lastname = decoded.family_name;
      state.accesstoken = action.payload.accessToken;
      state.expiration = decoded.exp;
      console.log(state);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
      console.log(state);
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;
