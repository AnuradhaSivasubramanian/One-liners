export default function (state = {}, action) {
  switch (action.type) {
    case "FETCH_ONELINER":
      return { ...state, guest: action.guest };
    case "POST_ONELINER":
      return { ...state, guest: action.guest };
    case "VOTE_ONELINER":
      return { ...state, guest: action.guest };
    default:
      return state;
  }
}
