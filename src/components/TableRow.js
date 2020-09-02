import React from 'react';

const TableRow = ({ pet, handleRowOnchange }) => {
  return (
    <div className='table-row'>
      <textarea
        rows='1'
        onChange={handleRowOnchange}
        name={`input-${pet.id}`}
        defaultValue={pet.value}
      />
    </div>
  );
};

export default TableRow;
