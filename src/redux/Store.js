import { configureStore } from "@reduxjs/toolkit";
import  postSlicer  from "./addUser";

export const store = configureStore({
    reducer : {
        posts : postSlicer
    }
})