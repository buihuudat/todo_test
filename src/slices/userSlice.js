import { createSlice } from "@reduxjs/toolkit";
import { getTaskAction, getUsersAction, markAction } from "../actions";

const initialState = {
  users: [],
  taskOfUser: undefined,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAction.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getTaskAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTaskAction.fulfilled, (state, action) => {
        state.taskOfUser = action.payload;
        state.loading = false;
      })
      .addCase(markAction.fulfilled, (state, action) => {
        const index = state.taskOfUser.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.taskOfUser[index] = {
            ...state.taskOfUser[index],
            completed: true,
          };
        }
        state.isMark = false;
      });
  },
});

export default userSlice.reducer;
