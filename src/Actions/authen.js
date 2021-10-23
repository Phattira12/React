export function AUTHEN(member_code) {
  return { type: "AUTHEN", member_code };
}

export function UAUTHEN() {
  return { type: "UAUTHEN" };
}

export function USERINFO() {
  return { type: "USERINFO" };
}

export function CHANGE_LANGUAGE(language) {
  return { type: "CHANGE_LANGUAGE", language };
}

export function SELECT_LANGUAGE() {
  return { type: "SELECT_LANGUAGE" };
}
