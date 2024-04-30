// post Reducer


export const initialState = {

  postData: [],
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


export default (state = initialState, action) => {
  switch(action.type) {
    case POST_REQUEST: {
      return {
        ...state,
        postLoading: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};