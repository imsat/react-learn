import memoize from "lodash/memoize";
import map from "lodash/map";
import uniq from "lodash/uniq";
import jsonPlaceholder from "../apis/jsonPlaceHolder";


export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = uniq(map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};


export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};



// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = memoize((id, dispatch) => {
//   const response = jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data,
//   });
// });
