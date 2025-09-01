import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        loading: true,
        currentPage: 1,
        perPage: 6,
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        removePost: (state, action) => {
            const index = state.items.findIndex(post => post.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(fetchPosts.pending, (state) => {
            //     state.loading = "loading";
            // })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;

            })
    }
});

export const { setPage, removePost } = postsSlice.actions;

export default postsSlice.reducer;
