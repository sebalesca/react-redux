import { actions } from '../actions';
/** NOTA OJO CON ACTION Y ACTIONS */
const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        /* me traigo el estado y luego le agrego a  mi lista el nuevo elemento */
        ...state, /* el ternario es para no agregar repetidos */
        mylist: state.mylist.some((items) => items.id === action.payload.id) ? [...state.mylist] : [...state.mylist, action.payload],
      };
    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload), /* solo payload porque llega id solamente*/
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload, /*aca le asigno el usuario al estado actual */
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
