import { createSlice } from "@reduxjs/toolkit";
import { login, logout, autologin } from "../thunks/authThunk";
import jwt_decode from "jwt-decode";

const initialState = {
  username: "",
  role: "",
  email: "",
  firstname: "",
  lastname: "",
  accesstoken: null,
  refreshtoken: null,
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

      const decoded = jwt_decode(action.payload.accessToken);
      state.username = decoded.unique_name;
      state.role =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      state.email = decoded.email;
      state.firstname = decoded.given_name;
      state.lastname = decoded.family_name;
      state.accesstoken = action.payload.accessToken;
      state.refreshtoken = action.payload.refreshToken;
      state.expiration = decoded.exp;
      console.log(state);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
      console.log(state);
    });

    // Logout
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = false;
      state.error = null;

      state.username = "";
      state.role = "";
      state.email = "";
      state.firstname = "";
      state.lastname = "";
      state.accesstoken = null;
      state.refreshtoken = null;
      state.expiration = null;

      console.log(state);
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
      console.log(state);
    });

    // Autologin
    builder.addCase(autologin.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(autologin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      if (action.payload.accessToken) {
        state.isLoggedIn = true;
        const decoded = jwt_decode(action.payload.accessToken);
        state.username = decoded.unique_name;
        state.role =
          decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
        state.email = decoded.email;
        state.firstname = decoded.given_name;
        state.lastname = decoded.family_name;
        state.accesstoken = action.payload.accessToken;
        state.refreshtoken = action.payload.refreshToken;
        state.expiration = decoded.exp;
      }

      console.log(state);
    });
    builder.addCase(autologin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
      console.log(state);
    });
  },
});

// Action creators are generated for each case reducer function
export const { clearError } = authSlice.actions;

export default authSlice.reducer;
