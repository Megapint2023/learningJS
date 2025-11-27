'use strict';
console.log('script starts');

async function searchShow(query) {
  console.log('fetching data for', query);
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    console.log(data);

    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) return;
    resultsDiv.innerHTML = '';

    data.forEach(tvShow => {
      const article = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.textContent = tvShow.show.name;
      article.appendChild(h2);

      const a = document.createElement('a');
      a.href = tvShow.show.url;
      a.target = '_blank';
      article.appendChild(a);

      const img = document.createElement('img');
      img.src = tvShow.show.image ? tvShow.show.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
      img.alt = tvShow.show.name;
      article.appendChild(img);

      const div = document.createElement('div');
      div.innerHTML = tvShow.show.summary || 'No summary';
      article.appendChild(div);

      resultsDiv.appendChild(article);
    });

    // document.getElementById('target').textContent = JSON.stringify(data[0]?.show?.name || 'No result');
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
Develop the app even further. Optional chaining is not the best way to handle missing image.
Use ternary operator or if/else to add a default image if TV-show is missing image property.
Use https://placehold.co/210x295?text=Not%20Found as the default image.
*/