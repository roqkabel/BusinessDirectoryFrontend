import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { combineReducers } from "redux";
import notifications from "./reducers/notification.reducer";


let rootReducer = combineReducers({
  auth: authReducer,
  notify: notifications
})


 const store = configureStore({
    reducer: rootReducer,
  })


export default store
