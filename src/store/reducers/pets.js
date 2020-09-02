import { FETCH_PETS, FETCH_ADDITIONAL_PETS } from '../../constants';

const initialState = {
  data: [],
  lastFetchedPet: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case FETCH_PETS:
      return { ...action.pets };
    case FETCH_ADDITIONAL_PETS:
      return {
        data: [...state.data, ...action.pets.data],
        lastFetchedPet: action.pets.lastFetchedPet,
      };
    default:
      return state;
  }
}
