import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    EmployeeList: [],
    count: 0,
  },
  reducers: {
    sendForms(state, action) {
      state.EmployeeList.push(action.payload);
      state.count = state.count + 1;
    },
  },
});

export const { sendForms } = EmployeeSlice.actions;
export const selectEmployee = (state) => state.Employee.EmployeeList;
export const selectCount = (state) => state.Employee.count;
