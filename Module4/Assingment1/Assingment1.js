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
Make an app that retrieves information about a TV series you enter
and displays it in the console.
API to use: TVMaze API
First, make a valid HTML page with a search form. Example form:
<form action="https://api.tvmaze.com/search/shows">
<input id="query" name="q" type="text">
<input type="submit" value="Search">
</form>
Test the form. The result should be a page full of JSON formatted data.
 */