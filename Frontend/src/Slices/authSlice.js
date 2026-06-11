import { createSlice } from "@reduxjs/toolkit";
// Initial authentication state
const initialState = {
  loading: false,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  // Store JWT token in Redux and localStorage
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
      if (value.payload) {
        localStorage.setItem("token", value.payload);
      } else {
        localStorage.removeItem("token");
      }
    },
     // Store logged-in user details
    setUser(state, value) {
      state.user = value.payload;
      if (value.payload) {
        localStorage.setItem("user", JSON.stringify(value.payload));
      } else {
        localStorage.removeItem("user");
      }
    },
    // Update loading state during API calls
    setLoading(state, value) {
      state.loading = value.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setToken, setUser, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;