export const ADD_CITY = 'SELECTED_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

export default function (state = [], action) {
  switch (action.type) {
  case ADD_CITY:
    return [
      ...state,
      action.payload.value
    ];
  case REMOVE_CITY:
    return state.filter((item) => item.id !== action.payload.id);
  default:
    return state;
  }
}