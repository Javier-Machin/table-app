import React, { createRef, useEffect, memo } from 'react';
import TableRow from './TableRow';
import { throttle, resize } from '../helpers';
import '../css/Table.css';

const Table = (props) => {
  const { actions, pets } = props;
  const { fetchPets } = actions;
  const { data, lastFetchedPet } = pets;
  const tableRef = createRef();

  // Initial load of data
  useEffect(() => {
    fetchPets(1);
  }, [fetchPets]);

  // Throttle the scroll handler so it only can be called once every 80ms to prevent killing performance
  const handleInfiniteScroll = throttle(() => {
    const { scrollTop, scrollHeight, offsetHeight } = tableRef.current;
    const offset = scrollHeight - scrollTop - offsetHeight;
    const offsetPercentage = 100 - (offset / scrollHeight) * 100;
    if (offsetPercentage >= 90) {
      fetchPets(lastFetchedPet + 1, 50, true);
    }
  }, 180);

  const jumpToRow = (row) => {
    fetchPets(row);
    tableRef.current.scrollTop = 0;
  };

  const handleJumpToRowInput = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target).entries();
    const data = Object.fromEntries(formData);
    const startRow = Number(data['jump-to-row-input']);
    jumpToRow(startRow);
  };

  const handleRowOnchange = ({ target }) => {
    resize(target);
    // Do things with the input value
  };

  return (
    <div className='table-container'>
      <div className='table' ref={tableRef} onScroll={handleInfiniteScroll}>
        {data.map((pet) => (
          <TableRow key={pet.id} pet={pet} handleRowOnchange={handleRowOnchange} />
        ))}
      </div>
      <form onSubmit={handleJumpToRowInput}>
        <input
          type='number'
          min='1'
          max='1000000'
          name='jump-to-row-input'
          className='jump-to-row-input'
          placeholder='Jump to a row'
        />
        <button className='submit-button' type='submit'>
          GO
        </button>
      </form>
    </div>
  );
};

export default memo(Table);
