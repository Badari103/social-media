import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    mode:"dark",
    user:null,
    token : null,
    posts:[]
};

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setMode : (state) =>{
            state.mode = state.mode==="light" ? "dark" : "light";
        },
        setLogin : (state,action) =>{
            state.user = action.payload.user;
            state.token= action.payload.token;
        },
        setLogout : (state) =>{
            state.user = null;
            state.token=  null;
        },
        setFriends : (state,action) =>{
            if (state.user){
            state.user.frirnds= action.payload.frirnds;
            } else{
                console.error("user friends non-exist :(");
            }
        },
        setPosts : (state,action) =>{
            state.user.posts = action.payload.post;
        },
        setPost : (state,action) =>{
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post;
                return post;
              });
              state.posts = updatedPosts;
        },
    }
})


export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;