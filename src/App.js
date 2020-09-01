import React, { useState, createRef } from 'react';
import { throttle } from 'lodash';
import './css/App.css';

// Generates 1 million rows of dummy data
const generateDummyData = () => {
  const dummyData = [];

  for (let i = 0; i < 1000000; i++) {
    const rowNumber = i + 1;
    dummyData.push({ id: rowNumber, value: `some text ${rowNumber}` });
  }

  return dummyData;
};

function App() {
  const data = generateDummyData(); // move to store
  const [lastFetchedRow, setLastFetchedRow] = useState(0);
  const [dataToRender, setDataToRender] = useState(data.splice(lastFetchedRow, 30));
  const tableRef = createRef();

  const fetchAdditionalRows = (start, amount) => {
    /**
    Normally this would be a request to the back end with typical pagination parameters
    In the challenge we get a few more rows from our dummy data
    **/
    setDataToRender([...dataToRender, ...data.splice(start, amount)]);
  };

  // Throttle the scroll handler so it only can be called once every 100ms to prevent killing performance
  const handleInfiniteScroll = throttle(() => {
    const { scrollTop, scrollHeight, offsetHeight } = tableRef.current;
    const offset = scrollHeight - scrollTop - offsetHeight;

    if (offset <= 120) {
      fetchAdditionalRows(lastFetchedRow, 30);
      setLastFetchedRow(lastFetchedRow + 30);
    }
  }, 100);

  const resize = (target) => {
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight}px`;
  };

  const handleRowOnchange = ({ target }) => {
    resize(target);
    // do anything with the input value
  };

  return (
    <div
      className='App'
      style={{
        margin: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <div
        className='table'
        ref={tableRef}
        onScroll={handleInfiniteScroll}
        style={{
          border: '2px solid black',
          borderRadius: '5px',
          maxHeight: '400px',
          display: 'inline-flex',
          flexDirection: 'column',
          overflow: 'scroll',
          overflowX: 'hidden',
          padding: '1rem',
          marginRight: '1rem',
        }}
      >
        {dataToRender.map((entry) => (
          <div key={entry.id} className='table-row'>
            <textarea
              rows='1'
              style={{
                height: '30px',
                fontSize: '20px',
                width: '300px',
                resize: 'none',
                overflow: 'hidden',
                paddingTop: '5px',
              }}
              onChange={handleRowOnchange}
              name={`input-${entry.id}`}
              defaultValue={entry.value}
            />
          </div>
        ))}
      </div>
      <input name='jump-to-row-input' placeholder='Jump to a row number' />
    </div>
  );
}

export default App;
