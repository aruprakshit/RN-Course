import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: Date.now().toString(),
            name: action.placeName,
            image: {
              uri: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000934/Beagle-On-White-08.jpg'
            }
          }
        ]
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => (
          place.key !== state.selectedPlace.key
        )),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => action.placeKey === place.key)
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default: 
      return state; 
  }
};

export default reducer;
