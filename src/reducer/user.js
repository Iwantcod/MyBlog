// user Reducer



export const initialState = {
  userName: null,

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

export const logInRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        logInLoading: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};