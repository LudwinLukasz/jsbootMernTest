import { ADD_POST, EDIT_POST, ADD_POSTS, DELETE_POST } from './PostActions';
import { TOGGLE_ADD_POST, TOGGLE_EDIT_POST } from '../App/AppActions';
// Initial State
//const initialState = { data: [] };
const initialState = {
  data: [],
  showAddPost: false,
  showEditPost: false,
};
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case EDIT_POST :
      return {
        data: state.data.map(post => post.cuid === action.cuid ? Object.assign({}, post, action.post) : post),
      };
    case TOGGLE_EDIT_POST:
      return {
        ...state,
        showEditPost: !state.showEditPost,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
export const getShowEditPost = state => state.app.showEditPost;
// Export Reducer
export default PostReducer;
