import { createAsyncThunk } from "@reduxjs/toolkit";
import rootApi from "../api/api";

export const getUsersAction = createAsyncThunk("user/gets", async () => {
  try {
    const users = await rootApi.getUsers();
    return users;
  } catch (error) {
    throw error;
  }
});

export const getTaskAction = createAsyncThunk(
  "user/task/get",
  async (userId) => {
    try {
      const task = await rootApi.getTasks(userId);
      return task;
    } catch (error) {
      throw error;
    }
  }
);

export const markAction = createAsyncThunk("user/task/mark", async (taskId) => {
  try {
    const res = await rootApi.markDone(taskId);
    // {completed: true, id: 21}
    return res;
  } catch (error) {
    throw error;
  }
});
