const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        /* me traigo el estado y luego le agrego a  mi lista el nuevo elemento */
        ...state, /* el ternario es para no agregar repetidos */
        mylist: state.mylist.some((items) => items.id === action.payload.id) ? [...state.mylist] : [...state.mylist, action.payload],
      };

    default:
      return state;
  }
};
export default reducer;
