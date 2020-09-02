// Generates 1 million rows of dummy data
const generateDummyData = () => {
  const dummyData = [];

  for (let i = 0; i < 1000000; i++) {
    const rowNumber = i + 1;
    dummyData.push({ id: rowNumber, value: `My pet number ${rowNumber}` });
  }

  return dummyData;
};

const dummyData = generateDummyData();

// Fetch rows from our dummy data
const fetchPets = (start, amount) => {
  return dummyData.slice(start - 1, start + amount - 1);
};

function throttle(callback, delay) {
  let timeOut = false;

  return function () {
    if (!timeOut) {
      callback.call(this);

      timeOut = true;
      setTimeout(function () {
        timeOut = false;
      }, delay);
    }
  };
}

const resize = (target) => {
  target.style.height = 'auto';
  target.style.height = `${target.scrollHeight}px`;
};

export { fetchPets, throttle, resize };
