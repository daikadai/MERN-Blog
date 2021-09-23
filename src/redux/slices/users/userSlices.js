import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../../utils/baseURL";

//register action
export const registerUserAction = createAsyncThunk(
  'users/register',
  async(user, {rejectWithValue, getState, dispatch }) => {
    try {
      //http call
      const config = {
        headers: {
          'Content-Type':'application/json'
        }
      }
      const { data } = await axios.post(`${baseUrl}/users/register`, user, config)
      return data
    } catch (error) {
      if(!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

export const loginUserAction = createAsyncThunk(
  'users/login',
  async(userData, {rejectWithValue, getState, dispatch }) => {
    try {
      //http call
      const config = {
        headers: {
          'Content-Type':'application/json'
        }
      }
      const { data } = await axios.post(`${baseUrl}/users/login`, userData, config)
      return data
    } catch (error) {
      if(!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
)

//slices
const usersSlices = createSlice({
  name: 'users',
  initialState: {
    userAuth: 'login'
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true
      state.appErr = undefined
      state.serverErr = undefined
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false
      state.registered = action.payload
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    }),

  }
})

export default usersSlices.reducer