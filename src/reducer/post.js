// post Reducer


export const initialState = {

  postList: [
    {
      id: 1,
      postUser: "Andy",
      postText: "Dummy Post 1",
      img: "https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=3018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      postUser: "Tony",
      postText: "Dummy Post 2",
      img: "https://images.unsplash.com/photo-1714924969684-b9d76c6030b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ],
  postLoading: false,
  postFailure: false,
  postSuccess: false,

  commentLoading: false,
  commentFailure: false,
  commentSuccess: false,
}

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';


export const postRequestAction = (data) => {
  return {
    type: POST_REQUEST,
    data,
  }
}

export const postSuccessAction = () => {
  return {
    type: POST_SUCCESS,
  }
}


export default (state = initialState, action) => {
  switch(action.type) {
    case POST_REQUEST:
      return {
        ...state,
        postList: [
          ...state,
          {
            id: 3,
            postUser: "Jake",
            postText: action.data,
            img: null,
          },
        ],
      }
    default:
      return state;
  }
};