import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk to get data using api here
export const fetchCourses = createAsyncThunk(
  "course/fetchCourses",
  async () => {
    const response = await fetch("https://blooming-springs-47114.herokuapp.com/courses").then((res) =>
      res.json()
    );
    return response;
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    allCourses: [],
    status: "idle",
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.allCourses = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchCourses.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default courseSlice.reducer;
