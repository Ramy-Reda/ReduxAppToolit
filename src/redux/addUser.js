import { createSlice } from '@reduxjs/toolkit';

export const postSlicer = createSlice({
    name : "posts",
    initialState : {
        items : []
    },
    reducers : {
        addPosts : (state, action) => {
            state.items.push(action.payload)
        },
        Delete : (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload.id)
        },
        update : (state, action) => {
            state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                    item.discription = action.payload.discription
                }
            })
        }
    }
})

export const {addPosts, Delete, update} = postSlicer.actions;
export default postSlicer.reducer;