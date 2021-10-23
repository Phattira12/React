var initialState = {
  member_code: localStorage.getItem("member_code"),
};

export default function Authentication(state = initialState, action) {
  switch (action.type) {
    case "AUTHEN":
      localStorage.setItem("member_code", action.member_code);
      return {
        ...state,
        member_code: localStorage.getItem("member_code"),
      };
    case "UAUTHEN":
      localStorage.removeItem("member_code");
      return {
        ...state,
        member_code: localStorage.getItem("member_code"),
      };
    case "USERINFO":
      return {
        ...state,
        member_code: localStorage.getItem("member_code"),
      };
    default:
      return {
        ...state,
        member_code: localStorage.getItem("member_code"),
      };
  }
}
