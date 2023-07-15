const initState = {
  list: [],
  filteredList:[],

}

export const reducer = (state = initState, action = {}) => {
switch (action.type) {
  case "SET_PHOTOS":
    return {
      ...state,
      list: action.payload,
    };
  case "SEARCH":
    console.log("in reducer photo", action.inputsearch);
    return {
      ...state,
      filteredList: state.list.filter((photo) => photo.photos.src.medium.photos.url.toLowerCase().includes(action.inputsearch.toLowerCase())),
    };
  
  default:
    return state;
}
};
