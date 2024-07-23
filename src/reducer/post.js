// post Reducer


export const initialState = {

  postList: [],
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
export const DELETE_REQUEST = 'DELETE_REQUEST';
export const UPDATE_REQUEST = 'UPDATE_REQUEST';


export const postAction = (data) => {
  return {
    type: POST_REQUEST,
    data,
  }
}

export const removeAction = (data) => {
  return {
    type: DELETE_REQUEST,
    data,
  }
}

export const updateAction = (data) => {
  return {
    type: UPDATE_REQUEST,
    data,
  }
}


const post = (state = initialState, action) => {
  switch(action.type) {
    case POST_REQUEST:
      return {
        ...state,
        postList: [
          {
            id: Math.floor(Date.now() / 1000),
            postUser: action.data[2],
            postText: action.data[0],
            img: action.data[1]
          },
          ...state.postList,      // 복사할 타겟을 상세하기 적어줘야 한다.(배열이나 객체를 복사하는 경우에 해당.)
        ],
      }
    case DELETE_REQUEST:
      return {
        ...state,
        postList: [
          ...state.postList.filter((v) => v.id !== action.data),
        ],
      }
    case UPDATE_REQUEST:
      return {
        ...state,
        postList: [
          ...state.postList.filter((v) => {
            if(v.id === action.data) {
              
            }
          })
        ]
      }
    default:
      return state;
  }
};

export default post;