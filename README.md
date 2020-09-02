# Dealing with a table with 1 million rows

Live version: https://javier-machin.github.io/table-app/

Initially I will go through the version I implemented.  
This approach felt like something I was able to do with my current knowledge within a realistic time span for a challenge of this kind.

After that I'll give my thoughts on some improvements that could be done to this approach and also how an optimal solution would look like.

#
To make it easier to reason with, we are going to pretend it is a pets table.
##
After generating 1 millions rows of dummy data,  
I start by populating the redux store with only 50 rows of data.  
This initial load is triggered by an useEffect hook, we call the redux action from there.

```
  useEffect(() => {
    fetchPets(1);
  }, [fetchPets]);
```
The action:
```
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
```

##

The rows themselves are textareas, that way we support values of different lengths and they can be edited.

In order to meet the auto expand / shrink requirement while keeping the 300px width, we set the width in CSS  
and watch the height with a small JavaScript helper function.

```
const resize = (target) => {
  target.style.height = 'auto';
  target.style.height = `${target.scrollHeight}px`;
};
```

This resize function is called from the onChange handler of the textarea.  
The way it works is, we set the height to auto, making it shrink if the current content fits in a smaller input after the last change.  
Setting the height to the scrollHeight makes the input as tall as it needs in order to fit the current content.

##

In order to be able to navigate the table by scrolling without killing our machine in the process, I implemented infinite scrolling.

```
const handleInfiniteScroll = throttle(() => {
    const { scrollTop, scrollHeight, offsetHeight } = tableRef.current;
    const offset = scrollHeight - scrollTop - offsetHeight;
    const offsetPercentage = 100 - (offset / scrollHeight) * 100;
    if (offsetPercentage >= 85) {
      fetchPets(lastFetchedPet + 1, 50, true);
    }
  }, 100);
```

This handler is hooked to the onScroll event of the table.  
It checks how far down the scroll we are.  
Once we reach 85 or more, it will call the action to fetch additional rows of data,  
this time with the third optional parameter `preserveStore` set to true, which will dispatch the action that keeps the current rows in the store (and in the DOM).  

This function is wrapped in a throttle helper function to prevent calling the handler more than once every 100ms, it improves performance quite a bit.  
The throttle itself is a very simple JS function, normally I would use the one provided by lodash but wanted to keep third party libraries to a minimum.  

```
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
```

##

For the ability to move instantly to any point of the table, I added a numeric input field.    
It triggers the fetch of 50 rows starting on the specified one. We can make use of the infinite scroll from there.

```
  const jumpToRow = (row) => {
    fetchPets(row);
    tableRef.current.scrollTop = 0;
  };
```

# 

One of the many ways this small app could be improved would by checking how many rows of data we have in the store, and after a certain number as we fetch additional rows via the infinite scroller we remove from the other end, to keep the total number under control.

# About the general structure

It's a very simple react app with a highly organized redux implementation that might seem overkill for a small app but would work fine as it scales.  
It follows the current official documentation guidelines and I have used it before with great success.

# How the optimal implementation to solve this problem would look like (from my point of view and my current information)

I suspect that the way the third party libraries solve this problem is by calculating the height of the table as it already had the 1 million elements, but without actually adding them to the DOM.  
That will provide a scroll bar that matches the total number of elements.  

Then it probably uses some kind of handler that gets triggered on scroll similar to the one I used for the infinite scroll (or they might actually debounce it and only call it once the user stops moving).  
There they measure the scroll distance, and calculate which part of the table would line up with that position, then fetch and render only the elements that the user would expect around that area.  
I would also expect some CSS trickery to center the 20 or so rows to the position currently in view.  

I didn't go this route because it would need quite a bit of research on my end, that would defeat the idea of this challenge, and even with that I'm not sure if the performance would be good enough to come up with something usable for a 1 million rows table, therefore I went with the implementation explained above.  

Thanks for reading me.
