import { configureStore } from "@reduxjs/toolkit";
import { EmployeeSlice } from "../utils/EmployeeSlice";
export default configureStore({
  reducer: {
    
    Employee: EmployeeSlice.reducer,
    
  },
});
