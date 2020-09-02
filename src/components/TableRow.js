import React, { memo } from 'react';

const TableRow = ({ pet, handleRowOnchange }) => {
  return (
    <div className='table-row'>
      <textarea
        className='table-input'
        rows='1'
        onChange={handleRowOnchange}
        name={`input-${pet.id}`}
        defaultValue={pet.value}
      />
    </div>
  );
};

export default memo(TableRow);
