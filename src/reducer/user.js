// user Reducer



export const initialState = {
  isLoggedIn: false,  // 로그인 상태
  userInfo: null,     // 로그인 유저의 정보

  logInLoading: false,
  logInFailure: false,
  logInSuccess: false,

  signInLoading: false,

  signInFailure: false,
  signInSuccess: false,


}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_IN_ACTION = 'LOG_IN_ACTION';
export const LOG_OUT_ACTION = 'LOG_OUT_ACTION';



export const logInAction = (data) => (
  {
    type: LOG_IN_ACTION,
    data,
  }
)

export const logOutAction = () => (
  {
    type: LOG_OUT_ACTION,
  }
)




const user = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
      };
    case LOG_IN_ACTION:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: {     // 유저의 정보는 로그아웃 시 null로 만들기 때문에, 복사해올 것이 없다.
          username: action.data,
        },
      };
    case LOG_OUT_ACTION:
      return {
        ...state,
        userInfo: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default user;