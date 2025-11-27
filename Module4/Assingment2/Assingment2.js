'use strict';
console.log('script starts');

async function searchShow(query) {
  console.log('fetching data for', query);
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    console.log(data); // display JSON in console
    document.getElementById('target').textContent = JSON.stringify(data[0]?.show?.name || 'No result');
  } catch (error) {
    console.log(error.message);
    document.getElementById('target').textContent = 'Error fetching data';
  } finally {
    console.log('fetch complete');
  }
}

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('query').value;
  if (query) searchShow(query);
});

/*
Develop the app further.
Add JavaScript that gets the value entered to the form
and sends a request with fetch to:
https://api.tvmaze.com/search/shows?q=${value_from_input}.
Print the search result to the console.
 */