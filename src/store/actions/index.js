import { ROWS_PER_FETCH, FETCH_PETS, FETCH_ADDITIONAL_PETS } from '../../constants';
import { fetchPets as fetchPetsData } from '../../helpers';

export const fetchPets = (start, amount = ROWS_PER_FETCH, preserveStore = false) => {
  const data = fetchPetsData(start, amount);

  const pets = {
    data,
    lastFetchedPet: start + ROWS_PER_FETCH,
  };

  return {
    type: preserveStore ? FETCH_ADDITIONAL_PETS : FETCH_PETS,
    pets,
  };
};
