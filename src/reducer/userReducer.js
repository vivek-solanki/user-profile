const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "USERS_LIST":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };

    case "USERS_API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SINGLE_USER":
      return {
        ...state,
        isSingleLoading: false,
        singleUser: action.payload,
      };
    case "SINGLE_USER_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default UserReducer;
